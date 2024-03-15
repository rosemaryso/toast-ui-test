1	PREV	CMHI	6	4	1	1	0
2	PREV	HHI	63	49	7	4	3
3	PREV	NTS	8	5	3	0	0
4	PREV	YZJ	23	11	8	1	3
5	PREV	국내기타	29	20	6	2	1
6	PREV	미포	56	55	1	0	0
7	PREV	삼성	19	16	1	2	0
8	PREV	삼호	43	31	4	6	2
9	PREV	해외	37	31	1	4	1
10	CURR	CMHI	7	7	0	0	0
11	CURR	HHI	58	51	3	3	1
12	CURR	NTS	8	8	0	0	0
13	CURR	YZJ	21	19	2	0	0
14	CURR	국내기타	13	8	5	0	0
15	CURR	미포	67	63	4	0	0
16	CURR	삼성	19	12	4	2	1
17	CURR	삼호	44	29	11	2	2
18	CURR	한화	9	7	1	1	0
19	CURR	해외	38	31	5	1	1



-- 야드별 차트(바) 조회
/*    PROCEDURE SELECT07
    (
        &IN_PREV_DATE        IN  VARCHAR2 -- 이전 배포일자(YYYYMM)
      , &IN_CURR_DATE        IN  VARCHAR2 -- 현재 배포일자(YYYYMM)
      , &IN_DATE_GBN         IN  VARCHAR2 -- 납기일 기준(A: 계약납기 / B: 관리납기)
      , OUT_RS              OUT SYS_REFCURSOR
    ) IS
    BEGIN
      
    OPEN OUT_RS FOR*/
    
         WITH TB_YARD AS (
              -- 이전 배포
              SELECT 'PREV' AS TARGET
                   , CASE WHEN A.SHYCD = 'H1' THEN 'HHI' 
                     WHEN A.SHYCD = 'P2' THEN '미포'
                     WHEN A.SHYCD = 'D1' THEN '한화'
                     WHEN A.SHYCD IN ('B1', 'N1', 'C1', 'Z1', 'S2', 'J1') THEN '국내기타'
                     WHEN A.SHYCD IN ('E1', 'DP') AND B.EOBCD = '0002001938' THEN 'NTS'  -- 해외(NTS)
                     WHEN A.SHYCD IN ('E1', 'DP') AND B.EOBCD = '0002000425' THEN 'YZJ'  -- 해외(YZJ)
                     WHEN A.SHYCD IN ('E1', 'DP') AND B.EOBCD = '0002008759' THEN 'CMHI' -- 해외(CMHI)
                     WHEN A.SHYCD IN ('E1', 'DP') THEN '해외' -- 해외(기타)
                     ELSE C.CDNM1 END AS YARD_NAME -- 야드
                   , CASE WHEN A.DELDATE IS NOT NULL AND A.OUTDATE IS NOT NULL 
                          THEN A.OUTDATE - A.DELDATE
                          ELSE 0 END AS DELY_CNT -- 출고일-관리납기일
                   , CASE WHEN B.DELDATE IS NOT NULL AND A.OUTDATE IS NOT NULL 
                          THEN A.OUTDATE - TO_DATE(B.DELDATE, 'YYYYMMDDHH24MISS')
                          ELSE 0 END AS SDELY_CNT -- 출고일-계약납기일
                FROM KH15.KTPA100V A
                LEFT JOIN KH15.KTPA001 B
                       ON ( A.PROJNO = B.PROJNO)
                LEFT JOIN KH15.KTPK050 C
                       ON ( C.ORGFLD = 'SHYCD'
                      AND   A.SHYCD = C.ORGCD )
               WHERE A.VYYMM = &IN_PREV_DATE
                 AND TO_CHAR(A.TESTST, 'YYYY') = SUBSTR(&IN_PREV_DATE, 1, 4)
                 AND A.PROJGB = 'A' -- 대형엔진
                 
               UNION ALL
               
               -- 현재 배포
               SELECT 'CURR' AS TARGET
                   , CASE WHEN A.SHYCD = 'H1' THEN 'HHI' 
                     WHEN A.SHYCD = 'P2' THEN '미포'
                     WHEN A.SHYCD = 'D1' THEN '한화'
                     WHEN A.SHYCD IN ('B1', 'N1', 'C1', 'Z1', 'S2', 'J1') THEN '국내기타'
                     WHEN A.SHYCD IN ('E1', 'DP') AND B.EOBCD = '0002001938' THEN 'NTS'  -- 해외(NTS)
                     WHEN A.SHYCD IN ('E1', 'DP') AND B.EOBCD = '0002000425' THEN 'YZJ'  -- 해외(YZJ)
                     WHEN A.SHYCD IN ('E1', 'DP') AND B.EOBCD = '0002008759' THEN 'CMHI' -- 해외(CMHI)
                     WHEN A.SHYCD IN ('E1', 'DP') THEN '해외' -- 해외(기타)
                     ELSE C.CDNM1 END AS YARD_NAME -- 야드
                   , CASE WHEN A.DELDATE IS NOT NULL AND A.OUTDATE IS NOT NULL 
                          THEN A.OUTDATE - A.DELDATE
                          ELSE 0 END AS DELY_CNT -- 관리납기일-출고일 
                   , CASE WHEN B.DELDATE IS NOT NULL AND A.OUTDATE IS NOT NULL 
                          THEN A.OUTDATE - TO_DATE(B.DELDATE, 'YYYYMMDDHH24MISS')
                          ELSE 0 END AS SDELY_CNT -- 출고일-계약납기일
                FROM KH15.KTPA100V A
                LEFT JOIN KH15.KTPA001 B
                       ON ( A.PROJNO = B.PROJNO)
                LEFT JOIN KH15.KTPK050 C
                       ON ( C.ORGFLD = 'SHYCD'
                      AND   A.SHYCD = C.ORGCD )
               WHERE A.VYYMM = &IN_CURR_DATE
                 AND TO_CHAR(A.TESTST, 'YYYY') = SUBSTR(&IN_CURR_DATE, 1, 4)
                 AND A.PROJGB = 'A' -- 대형엔진
               
         )
         SELECT TARGET
              , YARD_NAME AS CODE -- YARD
              , COUNT(*) AS TOTAL
              , SUM(CASE WHEN DECODE(&IN_DATE_GBN, 'A', SDELY_CNT, 'B', DELY_CNT) <= 10 THEN 1 ELSE 0 END) AS BELOW_10 -- 10일이하
              , SUM(CASE WHEN DECODE(&IN_DATE_GBN, 'A', SDELY_CNT, 'B', DELY_CNT) BETWEEN 11 AND 20 THEN 1 ELSE 0 END) AS OVER_10 -- 10일초과
              , SUM(CASE WHEN DECODE(&IN_DATE_GBN, 'A', SDELY_CNT, 'B', DELY_CNT) BETWEEN 21 AND 30 THEN 1 ELSE 0 END) AS OVER_20 -- 20일초과
              , SUM(CASE WHEN DECODE(&IN_DATE_GBN, 'A', SDELY_CNT, 'B', DELY_CNT) > 30 THEN 1 ELSE 0 END) AS OVER_30 -- 30일초과
           FROM TB_YARD
          GROUP BY TARGET, YARD_NAME
          ORDER BY TARGET DESC
          ;
