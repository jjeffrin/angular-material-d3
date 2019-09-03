import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-density-chart-one',
  templateUrl: './density-chart-one.component.html',
  styleUrls: ['./density-chart-one.component.css']
})
export class DensityChartOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    // set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 30, left: 50},
width = 300 - margin.left - margin.right,
height = 170 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#density-one")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv", function(data) {
// d3.csv("../../../assets/areaChart.csv", function(data) {

// add the x Axis
var x = d3.scaleLinear()
        .domain([0, 1000])
        .range([0, width]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// add the y Axis
var y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 0.01]);
svg.append("g")
  .call(d3.axisLeft(y));

// Compute kernel density estimation
var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40))
var density =  kde( data.map(function(d){  return d.price; }) )

// Plot the area
svg.append("path")
  .attr("class", "mypath")
  .datum(density)
  .attr("fill", "#69b3a2")
  .attr("opacity", ".8")
  .attr("stroke", "#000")
  .attr("stroke-width", 1)
  .attr("stroke-linejoin", "round")
  .attr("d",  d3.line()
    .curve(d3.curveBasis)
      .x(function(d) { return x(d[0]); })
      .y(function(d) { return y(d[1]); })
  );

});


// Function to compute density
function kernelDensityEstimator(kernel, X) {
return function(V) {
return X.map(function(x) {
  return [x, d3.mean(V, function(v) { return kernel(x - v); })];
});
};
}
function kernelEpanechnikov(k) {
return function(v) {
return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
};
}
  }

}
