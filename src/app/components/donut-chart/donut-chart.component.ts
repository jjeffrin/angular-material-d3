import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    // set the dimensions and margins of the graph
var width = 450,
height = 350,
margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#donut")
.append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = {a: 16, b: 84}

// set the color scale
var color = d3.scaleOrdinal()
.domain(data)
.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

// Compute the position of each group on the pie:
var pie = d3.pie()
.value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
.selectAll('whatever')
.data(data_ready)
.enter()
.append('path')
.attr('d', d3.arc()
.innerRadius(100)         // This is the size of the donut hole
.outerRadius(radius)
)
.attr('fill', function(d){ return(color(d.data.key)) })
.attr("stroke", "black")
.style("stroke-width", "2px")
.style("opacity", 0.7)
  }

}
