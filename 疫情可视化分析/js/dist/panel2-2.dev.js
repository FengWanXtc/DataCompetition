"use strict";

var myChart_Panel2_2 = echarts.init(document.querySelector(".themeriver .chart"));
var panel3_2_h2 = document.querySelector(".themeriver h2");
var panel1_2_h2 = document.querySelector(".raderchart h2");
var d3_panel1_2;

function button_positive() {
  panel3_2_h2.innerHTML = "疫情爆发后民众积极情绪反应";
  myChart_Panel2_2.clear();
  positive();
}

function button_negtive() {
  panel3_2_h2.innerHTML = "疫情爆发后民众消极情绪反应";
  myChart_Panel2_2.clear();
  negtive();
}

function button_raderChart1() {
  panel1_2_h2.innerHTML = "疫情期间三次产业定基环比负增长图";
  d3_panel1_2.remove();
  raderchart1();
}

function button_raderChart2() {
  panel1_2_h2.innerHTML = "疫情期间三次产业同比增长动力图";
  d3_panel1_2.remove();
  raderchart2();
}

function button_themerive() {
  panel3_2_h2.innerHTML = "三大产业上半年指数";
  myChart_Panel2_2.clear();
  themerive();
}

function button_cpi() {
  panel3_2_h2.innerHTML = "近三年居民消费价格指数增长率（i/100）%";
  myChart_Panel2_2.clear();
  cpi();
}

function button_cpiall() {
  panel3_2_h2.innerHTML = "近一年各类居民消费价格指数增长率（i/10）%";
  myChart_Panel2_2.clear();
  cpiall();
}