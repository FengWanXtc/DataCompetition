"use strict";

(function () {
  parallel();
})();

function parallel() {
  //var myChart = echarts.init(document.querySelector(".parallel .chart"));
  var dataBJ = [["2019/12/2", 6288.04, 27105.37, 251120.31, 18031.23, 11943.16, 12855.68, 18984.67, 574.19, 31469.86, 120739.95, 19686.86, 5920.13, 4255.70, 2898.33, 13.42, 1470.14, 3233.62, 5208.78, 1215.48], ["2019/12/3", 6261.21, 27180.84, 255837.73, 18080.44, 11962.47, 12917.74, 19023.88, 575.59, 31499.05, 121220.90, 19843.30, 5942.08, 4275.75, 2897.25, 13.54, 1475.67, 3253.65, 5224.69, 1221.34], ["2019/12/4", 6221.27, 27270.94, 256084.97, 18095.13, 11903.95, 12879.80, 19012.75, 568.13, 31449.27, 120604.20, 19797.61, 5947.82, 4311.86, 2892.91, 13.61, 1505.87, 3269.23, 5233.55, 1224.70], ["2019/12/5", 6242.40, 27350.32, 258943.66, 18115.15, 11865.48, 12996.88, 19133.51, 574.97, 31986.36, 121682.41, 19829.46, 5995.94, 4378.79, 2919.27, 13.91, 1516.46, 3301.67, 5278.76, 1235.27], ["2019/12/6", 6271.27, 27382.08, 261157.24, 18100.64, 11896.34, 13098.68, 19278.82, 575.06, 32324.46, 121704.55, 19914.85, 6011.42, 4405.91, 2949.30, 13.98, 1543.18, 3333.82, 5400.49, 1241.48], ["2019/12/9", 6206.64, 27548.01, 261057.78, 18139.78, 12051.10, 13084.81, 19160.07, 574.99, 32774.50, 121424.80, 20275.22, 5989.43, 4380.54, 2959.66, 13.96, 1527.31, 3262.92, 5442.10, 1237.33], ["2019/12/10", 6012.11, 27528.86, 263024.80, 18103.00, 12049.35, 13125.11, 19118.72, 568.82, 33106.73, 124828.10, 20227.12, 6056.07, 4399.47, 2958.22, 14.10, 1507.96, 3282.60, 5552.16, 1249.95], ["2019/12/11", 5927.51, 27563.77, 262163.60, 18101.12, 12036.65, 13123.02, 19194.09, 568.83, 33022.41, 125669.73, 20331.49, 6078.09, 4389.79, 2941.63, 14.00, 1481.11, 3292.25, 5565.05, 1242.89], ["2019/12/12", 5941.08, 27458.57, 261403.04, 18175.45, 11974.90, 13079.90, 19154.73, 567.87, 32916.30, 125299.72, 20215.74, 6032.26, 4373.46, 2933.07, 13.87, 1493.83, 3275.17, 5526.17, 1239.26], ["2019/12/13", 5988.66, 27683.55, 265682.90, 18330.79, 12109.13, 13212.70, 19462.90, 598.87, 33452.42, 128713.31, 20460.47, 6139.40, 4473.50, 2957.63, 14.05, 1496.47, 3324.15, 5549.10, 1259.40], ["2019/12/16", 6006.25, 27923.68, 269205.97, 18529.63, 12210.04, 13385.04, 19687.26, 602.77, 34389.27, 128826.25, 20805.98, 6106.60, 4538.49, 2985.56, 14.34, 1485.72, 3360.69, 5652.99, 1285.52], ["2019/12/17", 6115.48, 28314.20, 272408.31, 18832.96, 12390.01, 13534.49, 19889.19, 620.65, 34716.53, 131065.73, 21186.01, 6136.62, 4607.57, 3022.33, 14.45, 1464.84, 3371.70, 5714.66, 1295.99], ["2019/12/18", 6072.50, 28226.38, 271589.07, 18718.75, 12323.21, 13520.54, 19804.24, 616.10, 35032.11, 131247.19, 21110.87, 6169.50, 4545.28, 3016.48, 14.52, 1474.08, 3320.73, 5768.59, 1287.00], ["2019/12/19", 6064.05, 28297.20, 271529.87, 18828.08, 12444.55, 14208.44, 19949.66, 615.48, 35089.79, 131322.11, 21199.75, 6219.05, 4585.83, 3023.46, 14.60, 1445.70, 3303.27, 5930.12, 1293.56], ["2019/12/20", 6131.72, 28172.18, 269445.13, 18751.78, 12355.59, 14048.32, 19896.22, 622.80, 34432.75, 131363.31, 21591.21, 6239.51, 4524.39, 3020.07, 14.32, 1437.09, 3264.80, 5830.47, 1290.34], ["2019/12/23", 5935.50, 27799.99, 265853.28, 18514.23, 12125.80, 13851.06, 19596.63, 616.55, 33463.26, 129330.37, 21145.86, 6125.61, 4469.41, 2960.13, 13.88, 1395.40, 3249.15, 5656.59, 1258.10], ["2019/12/24", 5912.63, 28130.71, 269711.06, 18554.21, 12241.35, 13957.75, 19695.34, 634.65, 34020.34, 129925.59, 21082.14, 6202.93, 4495.79, 2982.61, 14.31, 1415.16, 3238.74, 5730.01, 1281.08], ["2019/12/25", 5891.90, 28098.33, 270706.98, 18487.33, 12206.33, 13972.76, 19664.43, 641.20, 34455.71, 129496.45, 21006.74, 6215.53, 4506.11, 2978.39, 14.44, 1428.39, 3243.98, 5747.96, 1293.35], ["2019/12/26", 5869.69, 28232.19, 272895.47, 18468.69, 12361.31, 14009.46, 19788.97, 639.92, 34736.20, 131079.91, 21463.76, 6278.76, 4547.07, 2993.05, 14.55, 1429.27, 3238.60, 5812.42, 1319.18], ["2019/12/27", 6021.80, 28474.47, 271816.84, 18523.05, 12333.67, 13862.68, 19814.18, 638.36, 34235.10, 130637.45, 21428.08, 6295.61, 4502.25, 2983.46, 14.32, 1411.57, 3204.30, 5747.19, 1332.96], ["2019/12/30", 6103.20, 28839.53, 274423.73, 18732.85, 12468.78, 14045.56, 20041.19, 645.08, 34542.60, 132601.53, 21759.93, 6316.95, 4499.86, 3002.22, 14.08, 1428.87, 3223.16, 5795.59, 1353.90], ["2019/12/31", 6246.38, 28942.02, 275802.87, 18787.57, 12613.61, 14158.04, 20143.24, 633.40, 34612.29, 132330.72, 21874.22, 6323.77, 4536.53, 3014.33, 14.21, 1450.52, 3291.37, 5813.04, 1375.61], ["2020/1/2", 6410.67, 29243.16, 280205.85, 18939.80, 12916.98, 14395.87, 20266.93, 631.64, 35775.66, 133978.85, 22068.50, 6503.61, 4567.82, 3069.15, 14.61, 1479.50, 3290.53, 6049.93, 1393.43], ["2020/1/3", 6490.32, 29644.11, 279983.14, 18992.25, 12898.72, 14461.86, 20165.68, 630.34, 36059.36, 134125.06, 21933.35, 6571.76, 4523.64, 3092.80, 14.94, 1487.54, 3275.67, 6118.45, 1365.81], ["2020/1/6", 6618.36, 30562.88, 280790.36, 18950.75, 12901.56, 14591.41, 19977.12, 628.83, 36453.15, 133087.60, 21730.23, 6559.33, 4462.59, 3136.24, 14.73, 1458.41, 3251.53, 6260.63, 1385.78], ["2020/1/7", 6900.23, 30177.14, 283652.70, 19052.07, 12948.97, 14780.39, 20122.65, 641.96, 37325.63, 134040.31, 21919.30, 6688.52, 4534.52, 3188.00, 14.87, 1471.20, 3312.42, 6486.35, 1400.41], ["2020/1/8", 6753.08, 30317.96, 281562.53, 18823.92, 12756.87, 14534.35, 19796.40, 630.89, 36513.29, 131629.72, 21526.16, 6592.68, 4474.58, 3136.21, 14.57, 1449.48, 3289.39, 6324.33, 1383.82], ["2020/1/9", 6769.66, 29720.63, 286370.88, 18941.27, 12849.59, 14752.50, 20118.86, 639.95, 37418.89, 132478.00, 21927.58, 6748.45, 4608.77, 3179.03, 14.86, 1506.64, 3441.32, 6379.82, 1383.81], ["2020/1/10", 6616.61, 29410.90, 286377.79, 18815.86, 12778.95, 14805.79, 20079.83, 640.39, 37214.71, 132510.40, 21739.50, 6749.49, 4609.38, 3188.27, 14.78, 1535.31, 3456.16, 6319.25, 1367.41], ["2020/1/13", 6663.37, 29406.76, 291092.20, 18867.05, 12855.23, 14883.59, 20151.68, 649.18, 37665.66, 133310.85, 21895.95, 6697.41, 4686.71, 3230.61, 14.75, 1512.17, 3452.23, 6399.56, 1372.86], ["2020/1/14", 6702.05, 29462.37, 290046.18, 18931.75, 12866.99, 14689.85, 20105.51, 644.31, 37622.14, 133157.50, 21847.69, 6630.59, 4711.55, 3365.62, 14.65, 1505.80, 3414.39, 6435.08, 1371.46], ["2020/1/15", 6590.58, 29073.18, 289938.80, 18766.98, 12695.07, 14828.92, 19900.16, 640.50, 37842.95, 132000.91, 21562.45, 6593.04, 4762.11, 3361.49, 14.44, 1502.88, 3413.56, 6394.94, 1357.05], ["2020/1/16", 6598.27, 28897.68, 289876.76, 18643.50, 12617.91, 14729.55, 23094.83, 634.17, 37891.44, 130876.43, 21503.81, 6581.26, 4783.99, 3352.93, 14.14, 1502.73, 3510.02, 6325.31, 1345.78], ["2020/1/17", 6527.50, 28956.58, 290196.70, 18494.22, 12641.70, 14657.49, 22966.28, 638.14, 38236.66, 130971.83, 21441.10, 6556.35, 4815.79, 3333.92, 14.00, 1488.94, 3531.92, 6310.75, 1340.85], ["2020/1/20", 6579.39, 28932.03, 294129.08, 18564.87, 12732.76, 14785.13, 23384.54, 607.64, 39020.35, 132186.46, 21350.26, 6491.67, 4895.02, 3350.97, 14.17, 1493.91, 3554.57, 6164.21, 1366.20], ["2020/1/21", 6431.36, 28554.77, 290977.67, 18386.04, 12486.20, 14608.61, 23247.71, 583.55, 38185.60, 130131.17, 20900.08, 6297.87, 4875.83, 3300.28, 13.87, 1449.51, 3555.28, 6102.47, 1374.93], ["2020/1/22", 6275.06, 28460.72, 293718.49, 18309.66, 12508.09, 14706.22, 23011.24, 595.79, 38673.60, 130512.66, 21149.42, 6320.48, 4851.41, 3282.96, 13.72, 1432.10, 3504.10, 6097.74, 1364.07], ["2020/1/23", 5981.47, 27786.18, 284466.71, 17895.58, 12114.62, 14235.00, 22389.76, 571.96, 37425.47, 127124.25, 20388.72, 6061.91, 4726.31, 3228.20, 13.27, 1362.92, 3346.29, 5887.21, 1328.43], ["2020/2/3", 5390.27, 25480.50, 261138.11, 16585.68, 10941.29, 13322.22, 20484.63, 516.43, 33948.40, 117891.38, 18446.59, 5458.41, 4474.85, 2925.46, 11.93, 1237.82, 3132.47, 5344.85, 1231.54], ["2020/2/4", 5552.88, 25627.61, 266898.74, 16668.00, 10927.18, 13329.44, 20650.66, 515.58, 35020.86, 119769.98, 18498.60, 5381.88, 4564.11, 2931.86, 11.19, 1337.73, 3270.40, 5448.49, 1234.09], ["2020/2/5", 5677.29, 25842.89, 273733.12, 16840.76, 11038.62, 13627.81, 21385.57, 512.66, 36066.32, 120044.27, 18679.25, 5513.02, 4629.71, 3019.07, 11.54, 1364.06, 3336.94, 5610.11, 1284.66], ["2020/2/6", 5978.18, 26139.00, 280506.36, 17026.74, 11264.08, 14029.04, 21857.65, 519.75, 37953.92, 121405.79, 18875.50, 5661.39, 4819.51, 3162.58, 11.80, 1464.42, 3435.49, 5901.97, 1309.92], ["2020/2/7", 5995.15, 26134.53, 281970.00, 17206.92, 11276.86, 14057.98, 21960.58, 544.55, 39596.21, 120910.48, 18819.00, 5701.05, 4795.06, 3327.53, 11.74, 1424.06, 3466.99, 6019.90, 1310.52], ["2020/2/10", 6390.83, 26420.35, 284796.74, 17279.13, 11478.55, 14239.77, 22051.24, 540.14, 39720.11, 120943.04, 19248.14, 5776.02, 4879.53, 3373.10, 11.88, 1414.76, 3439.38, 6065.53, 1335.05], ["2020/2/11", 6317.85, 26558.46, 285913.60, 17280.32, 11525.47, 14093.05, 22044.66, 546.27, 39101.14, 121762.77, 19417.18, 5802.71, 4830.33, 3270.20, 11.76, 1423.68, 3455.95, 6005.99, 1321.45], ["2020/2/12", 6338.80, 26780.22, 290295.74, 17374.03, 11622.14, 14161.30, 22122.07, 558.77, 40700.28, 122422.34, 19451.79, 5717.58, 4920.80, 3310.28, 11.95, 1421.01, 3481.13, 6127.10, 1331.80], ["2020/2/13", 6339.37, 26792.42, 288998.49, 17241.07, 11573.23, 13988.61, 21796.17, 547.10, 40373.09, 121217.71, 19694.42, 5618.14, 4869.82, 3313.47, 11.76, 1406.70, 3432.99, 5979.53, 1309.26], ["2020/2/14", 6571.96, 26939.46, 289365.17, 17234.26, 11646.82, 13899.94, 21726.12, 553.39, 40224.43, 122296.20, 20219.12, 5836.22, 4933.30, 3303.75, 11.74, 1399.85, 3424.96, 5905.37, 1296.47], ["2020/2/17", 6725.13, 27367.43, 297999.77, 17532.13, 11866.93, 14299.96, 22297.15, 560.39, 41705.98, 125202.87, 20404.05, 5999.65, 5114.14, 3382.67, 12.25, 1436.37, 3534.51, 6101.74, 1334.27], ["2020/2/18", 6727.91, 27295.63, 300897.11, 17573.54, 11833.82, 14413.38, 22416.50, 566.70, 42721.11, 124187.85, 20219.66, 6010.41, 5129.11, 3425.03, 12.52, 1515.44, 3525.79, 6202.55, 1365.83], ["2020/2/19", 6838.20, 27131.96, 299679.45, 17512.74, 11785.30, 14297.84, 22354.07, 583.18, 41713.35, 124433.77, 20267.15, 6028.49, 5051.22, 3428.53, 12.47, 1559.27, 3466.44, 6042.44, 1355.82], ["2020/2/20", 6897.32, 27425.67, 305217.60, 17738.25, 11929.34, 14473.68, 22790.67, 608.88, 42350.48, 127671.45, 20454.09, 6181.54, 5087.44, 3452.37, 12.78, 1568.80, 3573.37, 6179.67, 1373.85], ["2020/2/21", 6916.57, 27568.72, 308971.65, 17755.45, 11919.99, 14545.81, 22678.08, 598.53, 43716.63, 127252.00, 20297.01, 6169.46, 5120.62, 3473.82, 13.06, 1568.87, 3569.35, 6175.63, 1385.30], ["2020/2/24", 7013.76, 27290.66, 312751.35, 17659.17, 11823.69, 14608.51, 22170.95, 578.39, 45003.35, 126121.37, 20012.79, 6118.02, 5165.59, 3479.21, 13.59, 1570.90, 3556.12, 6141.74, 1410.08], ["2020/2/25", 7175.32, 26829.54, 314341.04, 17400.23, 11621.57, 14586.91, 22117.89, 575.89, 44662.11, 125426.91, 19976.49, 6068.18, 5224.34, 3423.87, 13.74, 1566.68, 3555.70, 6021.82, 1414.35], ["2020/2/26", 7078.97, 26753.23, 305583.54, 17421.17, 12210.81, 14499.03, 22023.12, 577.87, 42543.66, 125293.82, 20397.97, 6028.81, 5065.88, 3423.76, 13.20, 1605.30, 3424.83, 5908.83, 1390.09], ["2020/2/27", 7073.82, 26667.12, 305813.95, 17465.52, 12193.34, 14538.22, 22016.42, 591.22, 43178.42, 125580.36, 20175.67, 6020.86, 5074.61, 3546.90, 12.95, 1617.87, 3460.32, 5891.55, 1380.03], ["2020/2/28", 6747.88, 25825.51, 291247.43, 16955.55, 11999.29, 14028.26, 21274.59, 566.40, 40467.85, 121168.97, 19757.11, 5728.08, 4872.00, 3392.30, 11.88, 1647.16, 3349.75, 5613.01, 1298.58], ["2020/3/2", 7007.91, 26501.14, 302081.16, 17372.66, 13024.59, 14463.30, 21840.45, 592.64, 42188.37, 124191.45, 20655.21, 5883.01, 5095.16, 3578.96, 12.46, 1706.04, 3432.97, 5753.93, 1339.97], ["2020/3/3", 7031.70, 26660.22, 305289.28, 17488.72, 13087.94, 14628.70, 21923.10, 589.37, 43153.89, 124617.03, 20671.28, 5952.19, 5231.11, 3644.26, 12.68, 1734.06, 3499.50, 5790.20, 1345.70], ["2020/3/4", 7142.44, 26759.27, 304705.07, 17628.05, 13365.16, 14899.70, 22123.83, 593.25, 42830.84, 125871.20, 21417.64, 6039.47, 5305.67, 3748.10, 13.10, 1725.13, 3543.85, 5836.49, 1343.42], ["2020/3/5", 7530.44, 27159.12, 311153.87, 17942.02, 13369.73, 15190.46, 22473.71, 609.21, 42725.91, 129136.97, 21592.68, 6214.80, 5358.35, 3777.40, 13.25, 1740.82, 3633.53, 5958.26, 1368.40], ["2020/3/6", 7421.04, 27006.45, 309538.80, 17757.07, 13003.95, 15288.12, 22164.64, 598.43, 42158.77, 126608.44, 21063.69, 6170.50, 5343.73, 3364.24, 13.19, 1742.38, 3654.02, 5909.25, 1369.23], ["2020/3/9", 7395.81, 26458.56, 297449.92, 17107.37, 12525.71, 14923.26, 21921.51, 571.87, 39819.51, 123340.59, 20450.95, 5926.40, 5154.26, 3243.28, 12.93, 1652.07, 3577.02, 5650.88, 1340.26], ["2020/3/10", 7337.66, 26481.98, 304918.57, 17309.48, 12887.80, 15151.47, 22117.00, 593.46, 41471.69, 125416.16, 20727.49, 6046.38, 5201.70, 3295.62, 13.19, 1740.30, 3577.07, 5834.25, 1354.74], ["2020/3/11", 7289.40, 26260.71, 300218.84, 17531.45, 12675.86, 15153.69, 22271.09, 602.03, 40451.14, 123390.53, 20594.75, 6025.16, 5092.45, 3294.01, 13.11, 1725.51, 3540.53, 5816.15, 1331.69], ["2020/3/12", 6992.24, 25750.52, 292334.22, 17344.72, 12507.05, 14839.50, 21803.84, 591.20, 39861.48, 122633.79, 20297.14, 5872.52, 4941.82, 3583.87, 12.87, 1691.53, 3433.72, 5665.54, 1292.45], ["2020/3/13", 7033.22, 25387.16, 288688.67, 17075.52, 12348.33, 14565.81, 21430.81, 583.12, 39904.73, 121152.96, 20087.23, 5885.95, 4842.34, 3506.54, 12.60, 1718.02, 3383.96, 5613.78, 1272.14], ["2020/3/16", 6692.59, 25126.37, 274945.22, 16820.93, 12036.78, 14133.22, 20822.02, 559.50, 37678.55, 117055.74, 19541.69, 5577.89, 4541.08, 3380.86, 12.12, 1661.84, 3194.96, 5367.71, 1231.63], ["2020/3/17", 6659.97, 24905.35, 273596.50, 16809.70, 12070.34, 14017.46, 20586.00, 542.52, 38238.68, 116899.11, 19268.65, 5528.07, 4529.19, 3391.05, 12.27, 1686.19, 3151.09, 5396.74, 1223.99], ["2020/3/18", 6711.93, 24530.93, 269427.22, 16631.50, 11847.33, 13800.84, 20347.01, 535.55, 37641.18, 114217.95, 18529.05, 5383.42, 4500.04, 3331.12, 12.08, 1707.20, 3113.58, 5308.48, 1194.72], ["2020/3/19", 6770.59, 24127.23, 269976.64, 16475.45, 11719.48, 13994.06, 20070.31, 538.74, 38476.40, 112848.37, 18081.98, 5346.29, 4472.82, 3329.57, 12.14, 1744.79, 3010.69, 5323.73, 1194.64], ["2020/3/20", 6709.12, 24461.74, 273819.24, 16699.57, 11910.15, 14240.29, 20345.43, 560.62, 38690.16, 114629.01, 18613.06, 5482.23, 4562.60, 3434.30, 12.29, 1806.35, 3059.80, 5464.39, 1217.24], ["2020/3/23", 6518.81, 23954.77, 262071.56, 16487.62, 11521.66, 13747.91, 19727.54, 531.23, 36854.75, 111692.97, 17882.51, 5281.04, 4328.63, 3318.46, 11.84, 1764.06, 2917.79, 5266.12, 1161.57], ["2020/3/24", 6655.88, 24606.50, 267922.53, 16754.44, 11674.04, 14010.38, 20117.26, 541.81, 37604.38, 114361.50, 18298.80, 5374.49, 4465.38, 3388.14, 12.21, 1701.27, 3081.49, 5392.60, 1195.29], ["2020/3/25", 6848.36, 24914.84, 275699.62, 16910.09, 11866.90, 14304.04, 20701.83, 557.86, 38491.71, 116436.03, 19089.94, 5473.26, 4656.26, 3449.16, 12.39, 1754.41, 3186.54, 5515.35, 1219.43], ["2020/3/26", 6880.64, 24724.30, 274480.52, 16742.73, 11626.17, 14364.18, 20528.38, 548.10, 38132.36, 116140.48, 18901.59, 5388.63, 4699.25, 3397.62, 12.29, 1751.08, 3245.18, 5489.89, 1207.29], ["2020/3/27", 6714.04, 24715.44, 274807.21, 16817.26, 11927.00, 14387.22, 20506.21, 543.46, 37479.34, 116455.77, 19091.14, 5375.57, 4680.66, 3379.70, 12.26, 1738.27, 3225.19, 5436.48, 1195.40], ["2020/3/30", 6835.40, 24354.89, 270549.17, 16748.80, 11967.64, 14319.47, 20247.34, 519.72, 35887.90, 115885.71, 18859.10, 5190.99, 4556.31, 3294.94, 11.95, 1662.48, 3125.16, 5213.67, 1166.33], ["2020/3/31", 7249.37, 24311.16, 272861.67, 16813.61, 11846.40, 14460.82, 20508.17, 517.73, 35747.25, 114933.69, 18723.65, 5234.92, 4642.65, 3287.84, 11.95, 1716.00, 3201.96, 5180.23, 1164.76], ["2020/4/1", 7112.69, 24134.30, 271870.39, 16684.81, 11713.42, 14222.58, 20271.34, 512.48, 35731.97, 114727.68, 18788.81, 5235.60, 4603.76, 3262.30, 11.86, 1671.14, 3189.12, 5111.05, 1165.40], ["2020/4/2", 7045.07, 24761.87, 278574.13, 16878.34, 11886.70, 14349.56, 20462.17, 518.21, 37117.81, 115963.42, 18989.30, 5356.69, 4707.84, 3321.08, 12.29, 1637.48, 3253.87, 5201.84, 1193.04], ["2020/4/3", 7139.51, 24472.46, 277547.47, 16800.81, 11743.25, 14403.67, 20433.28, 525.37, 36585.57, 114868.52, 18968.85, 5315.74, 4716.11, 3301.71, 12.20, 1661.72, 3238.53, 5182.73, 1200.13], ["2020/4/7", 7459.81, 24888.21, 286241.28, 17005.93, 11885.60, 14826.70, 20836.37, 538.20, 38031.77, 116484.11, 19215.68, 5481.85, 4867.22, 3402.47, 12.73, 1715.85, 3335.02, 5332.63, 1222.95], ["2020/4/8", 7236.84, 24797.53, 286243.56, 16995.42, 12008.56, 14793.02, 20920.46, 550.92, 38106.25, 115710.61, 19147.60, 5489.17, 4862.63, 3442.76, 12.82, 1672.73, 3335.47, 5321.02, 1221.68], ["2020/4/9", 7274.62, 24820.45, 287751.25, 16993.42, 12013.19, 14937.03, 20937.73, 558.20, 38889.92, 115983.37, 19109.48, 5572.64, 5020.90, 3495.23, 12.84, 1736.19, 3494.79, 5358.79, 1227.85], ["2020/4/10", 7197.28, 24549.64, 282565.22, 16834.63, 11818.49, 14631.76, 20787.71, 552.36, 37489.42, 115650.23, 19034.73, 5483.41, 4920.81, 3434.83, 12.38, 1744.35, 3477.42, 5245.80, 1213.12], ["2020/4/13", 7015.82, 24504.96, 281045.58, 16812.89, 11796.30, 14571.49, 20573.37, 543.19, 36678.00, 115026.26, 18964.52, 5434.08, 4958.11, 3362.63, 12.14, 1790.34, 3453.20, 5154.14, 1208.22], ["2020/4/14", 7071.25, 24826.01, 287162.93, 16958.26, 11905.87, 14804.00, 20810.98, 549.43, 37852.64, 116603.21, 19303.61, 5555.76, 5050.24, 3423.06, 12.35, 1774.13, 3523.15, 5261.87, 1221.86], ["2020/4/15", 6978.38, 24613.54, 286092.40, 16804.31, 11814.38, 14732.64, 20690.86, 541.63, 37597.86, 115940.99, 19053.15, 5486.44, 5043.22, 3316.60, 12.16, 1757.31, 3470.04, 5229.87, 1210.63], ["2020/4/16", 6913.43, 24596.47, 287346.35, 17066.18, 11795.60, 14725.41, 20637.33, 536.74, 38239.23, 116153.92, 19104.65, 5554.68, 5286.29, 3412.86, 12.17, 1788.44, 3515.54, 5277.72, 1204.76], ["2020/4/17", 7007.83, 24781.13, 289066.65, 16982.61, 12048.54, 14629.07, 20872.60, 562.12, 38284.01, 117179.20, 19190.25, 5644.22, 5239.87, 3388.59, 13.38, 1773.29, 3501.05, 5313.86, 1201.92], ["2020/4/20", 7045.36, 24780.30, 292139.37, 16939.58, 12155.49, 14725.51, 20896.63, 559.57, 38679.83, 117182.57, 19161.86, 5735.35, 5472.99, 3513.11, 12.99, 1779.69, 3526.43, 5332.26, 1210.14], ["2020/4/21", 6949.35, 24465.89, 288843.22, 16870.65, 12175.13, 14641.99, 20732.31, 556.73, 39203.15, 116138.00, 18919.76, 5795.21, 5416.76, 3492.73, 12.76, 1810.47, 3470.54, 5281.46, 1193.46], ["2020/4/22", 7177.21, 24316.81, 292729.53, 16971.27, 12130.92, 14843.97, 20852.83, 565.57, 39337.42, 116186.78, 19018.36, 5941.74, 5441.78, 3541.78, 13.29, 1831.85, 3559.28, 5341.00, 1179.72], ["2020/4/23", 7205.80, 24599.18, 292002.59, 16936.16, 12178.61, 14879.73, 21054.19, 561.79, 38674.48, 115540.19, 19004.04, 5965.19, 5415.30, 3525.97, 12.85, 1806.78, 2226.28, 5323.86, 1189.97], ["2020/4/24", 7183.70, 24332.63, 288555.42, 16858.89, 12013.25, 14595.09, 20741.63, 563.05, 37812.20, 114627.30, 18822.58, 5954.78, 5275.78, 3456.40, 12.00, 1790.59, 3538.18, 5261.21, 1142.56], ["2020/4/27", 7220.15, 24171.36, 288639.05, 16904.92, 11981.92, 14677.09, 20625.75, 559.28, 37601.15, 115608.00, 18992.32, 5972.60, 5340.07, 3444.46, 11.88, 1790.20, 3567.82, 5256.99, 1171.95], ["2020/4/28", 7183.34, 23745.11, 287864.72, 16775.52, 11757.03, 14547.88, 20582.45, 554.20, 37048.69, 116140.90, 18895.60, 5938.13, 5306.36, 3414.75, 11.18, 1808.99, 3594.37, 5212.07, 1157.84], ["2020/4/29", 7067.58, 23848.54, 286935.71, 16763.62, 11673.61, 14356.90, 20819.89, 570.15, 37037.75, 117780.93, 19220.42, 5973.59, 5183.32, 3380.34, 11.12, 1797.77, 3595.81, 5304.42, 1145.23], ["2020/4/30", 7071.49, 24179.88, 292000.60, 16923.32, 11910.90, 14451.44, 21118.95, 600.02, 38341.08, 118799.43, 19316.01, 5996.60, 5247.48, 3446.24, 11.37, 1900.88, 3546.72, 5493.38, 1137.03], ["2020/5/6", 7049.17, 24273.30, 298875.94, 16926.24, 12103.84, 14563.92, 20921.24, 582.52, 39369.20, 117997.11, 19284.18, 6062.38, 5282.80, 3516.77, 11.58, 1901.55, 3595.74, 5520.44, 1184.97], ["2020/5/7", 7117.54, 24163.31, 298821.27, 16865.91, 12007.09, 14706.89, 20740.94, 583.25, 39285.09, 117404.06, 19132.88, 6074.87, 5291.45, 3510.60, 11.43, 1888.68, 3634.36, 5517.26, 1187.38], ["2020/5/8", 7111.68, 24368.51, 302060.76, 16935.80, 12033.98, 14809.50, 20834.68, 580.46, 39899.24, 118474.63, 19326.45, 6144.11, 5358.82, 3596.19, 11.53, 1931.44, 3683.45, 5607.25, 1198.90], ["2020/5/11", 6946.31, 24320.19, 301376.30, 16944.03, 12087.00, 14701.23, 20909.15, 571.66, 39765.08, 118699.78, 19219.08, 6101.80, 5340.08, 3600.27, 11.50, 1937.38, 3610.73, 5591.57, 1186.80], ["2020/5/12", 6928.99, 24276.20, 303671.51, 16930.01, 11956.61, 14756.52, 20753.34, 569.02, 39694.80, 118067.18, 19021.07, 6156.46, 5445.13, 3605.30, 11.37, 1986.34, 3694.20, 5622.20, 1178.42], ["2020/5/13", 6914.90, 24266.24, 305679.11, 16959.47, 11961.45, 14910.75, 20826.68, 577.10, 39981.62, 118048.64, 19064.82, 6207.54, 5534.15, 3616.02, 11.37, 2051.57, 3810.57, 5616.74, 1176.60], ["2020/5/14", 6753.68, 24138.02, 303032.26, 16825.63, 11802.61, 14814.35, 20569.83, 572.19, 39785.52, 116724.62, 18937.94, 6151.42, 5475.48, 3564.74, 11.28, 2084.62, 3775.77, 5595.77, 1159.11], ["2020/5/15", 6807.33, 24250.57, 303500.93, 16845.63, 11782.68, 14784.47, 20589.82, 569.17, 40079.14, 116632.49, 18992.85, 6172.32, 5468.01, 3566.55, 11.28, 2055.91, 3740.10, 5590.82, 1170.02], ["2020/5/18", 7035.15, 24605.43, 303211.89, 16810.78, 11846.75, 14868.87, 20708.70, 569.47, 39348.32, 116490.74, 19093.29, 6124.49, 5519.13, 3552.24, 11.06, 2056.29, 3817.85, 5553.30, 1159.80], ["2020/5/19", 6931.37, 24658.18, 307716.38, 16993.62, 11891.58, 15050.87, 20931.18, 584.38, 40162.10, 117252.80, 19077.47, 6231.51, 5581.77, 3577.84, 11.33, 2086.95, 3834.24, 5650.90, 1165.27], ["2020/5/20", 6810.08, 24572.51, 304896.72, 17006.20, 11791.80, 14845.19, 20710.45, 580.19, 39577.30, 117365.55, 18886.61, 6184.94, 5499.52, 3515.53, 11.16, 2035.25, 3780.15, 5615.89, 1161.35], ["2020/5/21", 6708.33, 24442.18, 302456.20, 16918.13, 11663.09, 14775.34, 20520.79, 583.66, 38693.63, 116702.19, 18853.75, 6184.35, 5498.22, 3483.40, 11.15, 2021.01, 3800.77, 5600.22, 1158.13], ["2020/5/22", 6696.65, 23982.07, 296162.09, 16755.96, 11486.05, 14539.18, 20322.40, 572.47, 37934.46, 114429.33, 18493.72, 6069.80, 5334.07, 3431.40, 11.12, 1968.28, 3717.04, 5512.95, 1144.90], ["2020/5/25", 6789.94, 23878.30, 296298.58, 16848.97, 11398.57, 14617.57, 20392.35, 560.61, 37591.20, 114203.88, 18769.44, 6144.23, 5405.69, 3431.55, 11.10, 1980.70, 3758.08, 5470.72, 1144.58], ["2020/5/26", 6794.86, 24026.22, 302598.15, 16914.13, 11505.09, 14862.10, 20600.38, 568.18, 38569.48, 114747.30, 18960.90, 6421.10, 5588.95, 3482.77, 11.32, 2034.07, 3852.15, 5565.36, 1170.56], ["2020/5/27", 6727.73, 23929.06, 299874.78, 16908.10, 11441.10, 14873.58, 20579.74, 582.15, 37782.26, 114810.93, 19016.13, 6392.23, 5473.76, 3487.39, 11.44, 2021.55, 3803.74, 5566.94, 1172.68], ["2020/5/28", 6649.54, 23996.26, 298809.01, 17131.24, 11429.60, 14803.18, 20658.96, 581.36, 37789.36, 116255.85, 19082.40, 6425.88, 5435.09, 3455.30, 11.44, 2081.36, 3779.97, 5561.70, 1146.38], ["2020/5/29", 6793.74, 23865.90, 301633.88, 17077.03, 11391.20, 15090.97, 20849.60, 587.47, 38287.70, 115317.37, 18900.86, 6632.60, 5597.21, 3461.49, 11.44, 2133.62, 3893.37, 5698.48, 1145.83], ["2020/6/1", 6866.67, 24100.42, 311005.34, 17346.86, 11603.52, 15414.43, 21261.98, 611.11, 39714.71, 117832.65, 18101.36, 6857.34, 5763.32, 3544.45, 11.71, 2160.44, 3998.17, 5923.54, 1164.01], ["2020/6/2", 6980.09, 24149.97, 311074.99, 17456.38, 11683.81, 15469.76, 21477.70, 591.40, 39678.40, 118607.11, 18414.83, 6796.08, 5722.40, 3556.18, 11.79, 2106.89, 3909.60, 5877.14, 1166.82], ["2020/6/3", 6897.98, 24194.14, 311505.46, 17415.72, 11591.26, 15479.98, 21448.77, 589.95, 39575.00, 119119.36, 18322.39, 6912.08, 5823.76, 3553.61, 12.20, 2077.31, 3924.69, 5875.87, 1164.73], ["2020/6/4", 6963.16, 24024.86, 312446.62, 17268.34, 11523.01, 15587.57, 21416.35, 596.80, 39292.81, 118794.85, 18210.63, 6965.88, 5880.32, 3573.36, 11.86, 2086.51, 3998.78, 5912.55, 1168.91], ["2020/6/5", 6782.46, 23982.84, 312937.96, 17266.74, 11469.68, 15447.20, 21772.87, 598.69, 39611.77, 119377.72, 18170.07, 7078.03, 5899.90, 3737.08, 11.71, 2080.04, 4021.42, 5973.49, 1166.32], ["2020/6/8", 6814.96, 24311.23, 314030.85, 17383.60, 11532.70, 15280.20, 22024.41, 628.90, 39315.20, 119877.74, 19604.86, 7047.37, 5815.33, 3707.86, 11.61, 1985.57, 3967.86, 5899.65, 1162.55]];
  var schema = [{
    name: 'date',
    index: 0,
    text: '日期'
  }, {
    name: 'A',
    index: 1,
    text: '农林牧渔业'
  }, {
    name: 'B',
    index: 2,
    text: '采矿业'
  }, {
    name: 'C',
    index: 3,
    text: '制造业'
  }, {
    name: 'D',
    index: 4,
    text: ' 供应业'
  }, {
    name: 'E',
    index: 5,
    text: '建筑业'
  }, {
    name: 'F',
    index: 6,
    text: '批发零售业'
  }, {
    name: 'G',
    index: 7,
    text: '运输业'
  }, {
    name: 'H',
    index: 8,
    text: '住宿餐饮业'
  }, {
    name: 'I',
    index: 9,
    text: 'IT业'
  }, {
    name: 'G',
    index: 10,
    text: '运输业'
  }, {
    name: 'K',
    index: 11,
    text: '房地产业'
  }, {
    name: 'L',
    index: 12,
    text: '租赁商务服务业'
  }, {
    name: 'M',
    index: 13,
    text: '科研技术服务业'
  }, {
    name: 'N',
    index: 14,
    text: '公共设施管理业'
  }, {
    name: 'O',
    index: 15,
    text: '居民服务业'
  }, {
    name: 'P',
    index: 16,
    text: '教育'
  }, {
    name: 'Q',
    index: 17,
    text: '卫生业'
  }, {
    name: 'R',
    index: 18,
    text: '文体娱乐业'
  }, {
    name: 'S',
    index: 19,
    text: '综合'
  }];
  var lineStyle = {
    normal: {
      width: 1,
      opacity: 0.5
    }
  };
  var option = {
    backgroundColor: 'rgba(105, 105, 105, 0.5)',
    legend: {
      bottom: 0,
      data: ['北京'],
      itemGap: 20,
      textStyle: {
        color: '#fff',
        fontSize: 14
      }
    },
    tooltip: {
      padding: 15,
      backgroundColor: '#222',
      borderColor: '#777',
      borderWidth: 1,
      formatter: function formatter(obj) {
        var value = obj[0].value;
        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' + obj[0].seriesName + ' ' + value[0] + '日期：' + value[7] + '</div>' + schema[1].text + '：' + value[1] + '<br>' + schema[2].text + '：' + value[2] + '<br>' + schema[3].text + '：' + value[3] + '<br>' + schema[4].text + '：' + value[4] + '<br>' + schema[5].text + '：' + value[5] + '<br>' + schema[6].text + '：' + value[6] + '<br>' + schema[7].text + '：' + value[7] + '<br>' + schema[8].text + '：' + value[8] + '<br>' + schema[9].text + '：' + value[9] + '<br>' + schema[10].text + '：' + value[10] + '<br>' + schema[11].text + '：' + value[11] + '<br>' + schema[12].text + '：' + value[12] + '<br>' + schema[13].text + '：' + value[13] + '<br>' + schema[14].text + '：' + value[14] + '<br>' + schema[15].text + '：' + value[15] + '<br>' + schema[16].text + '：' + value[16] + '<br>' + schema[17].text + '：' + value[17] + '<br>' + schema[18].text + '：' + value[18] + '<br>' + schema[19].text + '：' + value[19] + '<br>';
      }
    },
    //dataZoom: {
    //      show: true,
    //     orient: 'vertical',
    //     parallelAxisIndex: [0]
    // },
    parallelAxis: [{
      dim: 0,
      name: schema[0].text,
      type: 'category',
      inverse: true,
      nameLocation: 'start',
      data: ['2019/12/2', '2019/12/3', '2019/12/4', '2019/12/5', '2019/12/6', '2019/12/9', '2019/12/10', '2019/12/11', '2019/12/12', '2019/12/13', '2019/12/16', '2019/12/17', '2019/12/18', '2019/12/19', '2019/12/20', '2019/12/23', '2019/12/24', '2019/12/25', '2019/12/26', '2019/12/27', '2019/12/30', '2019/12/31', '2020/1/2', '2020/1/3', '2020/1/6', '2020/1/7', '2020/1/8', '2020/1/9', '2020/1/10', '2020/1/13', '2020/1/14', '2020/1/15', '2020/1/16', '2020/1/17', '2020/1/20', '2020/1/21', '2020/1/22', '2020/1/23', '2020/2/3', '2020/2/4', '2020/2/5', '2020/2/6', '2020/2/7', '2020/2/10', '2020/2/11', '2020/2/12', '2020/2/13', '2020/2/14', '2020/2/17', '2020/2/18', '2020/2/19', '2020/2/20', '2020/2/21', '2020/2/24', '2020/2/25', '2020/2/26', '2020/2/27', '2020/2/28', '2020/3/2', '2020/3/3', '2020/3/4', '2020/3/5', '2020/3/6', '2020/3/9', '2020/3/10', '2020/3/11', '2020/3/12', '2020/3/13', '2020/3/16', '2020/3/17', '2020/3/18', '2020/3/19', '2020/3/20', '2020/3/23', '2020/3/24', '2020/3/25', '2020/3/26', '2020/3/27', '2020/3/30', '2020/3/31', '2020/4/1', '2020/4/2', '2020/4/3', '2020/4/7', '2020/4/8', '2020/4/9', '2020/4/10', '2020/4/13', '2020/4/14', '2020/4/15', '2020/4/16', '2020/4/17', '2020/4/20', '2020/4/21', '2020/4/22', '2020/4/23', '2020/4/24', '2020/4/27', '2020/4/28', '2020/4/29', '2020/4/30', '2020/5/6', '2020/5/7', '2020/5/8', '2020/5/11', '2020/5/12', '2020/5/13', '2020/5/14', '2020/5/15', '2020/5/18', '2020/5/19', '2020/5/20', '2020/5/21', '2020/5/22', '2020/5/25', '2020/5/26', '2020/5/27', '2020/5/28', '2020/5/29', '2020/6/1', '2020/6/2', '2020/6/3', '2020/6/4', '2020/6/5', '2020/6/8']
    }, {
      dim: 1,
      name: schema[1].text
    }, {
      dim: 2,
      name: schema[2].text
    }, {
      dim: 3,
      name: schema[3].text
    }, {
      dim: 4,
      name: schema[4].text
    }, {
      dim: 5,
      name: schema[5].text
    }, {
      dim: 6,
      name: schema[6].text
    }, {
      dim: 7,
      name: schema[7].text
    }, {
      dim: 8,
      name: schema[8].text
    }, {
      dim: 9,
      name: schema[9].text
    }, {
      dim: 10,
      name: schema[10].text
    }, {
      dim: 11,
      name: schema[11].text
    }, {
      dim: 12,
      name: schema[12].text
    }, {
      dim: 13,
      name: schema[13].text
    }, {
      dim: 14,
      name: schema[14].text
    }, {
      dim: 15,
      name: schema[15].text
    }, {
      dim: 16,
      name: schema[16].text
    }, {
      dim: 17,
      name: schema[17].text
    }, {
      dim: 18,
      name: schema[18].text
    }, {
      dim: 19,
      name: schema[19].text
    }],
    visualMap: {
      show: true,
      min: 0,
      max: 150,
      dimension: 40,
      inRange: {
        color: ['#d94e5d', '#eac736', '#50a3ba'].reverse() // colorAlpha: [0, 1]

      }
    },
    parallel: {
      left: '5%',
      right: '5%',
      bottom: 10,
      parallelAxisDefault: {
        type: 'value',
        name: '指数',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
          color: '#fff',
          fontSize: 12
        },
        axisLine: {
          lineStyle: {
            color: '#aaa'
          }
        },
        axisTick: {
          lineStyle: {
            color: '#777'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      }
    },
    series: [{
      name: '行业影响平行坐标图',
      type: 'parallel',
      lineStyle: lineStyle,
      data: dataBJ
    }]
  };
  myChart.setOption(option);
}