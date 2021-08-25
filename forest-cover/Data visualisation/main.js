//Authored by Alyssa Portsmouth (supported by Karen Scott)

// set the dimensions and margins of the graph
var width = 500
    height = 500
    margin = 250



var radius = Math.min(width, height) - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Data-set contained in Forest-Cover-2017.js, included in html file before this one.  Data set name --> data

const sorted = Object.values(data).sort((a, b) => a.Hectares - b.Hectares);

var pieTitle = svg.append("text")
  .style("text-anchor", "middle")
  .attr("x", parseInt(width/40 - 10))
  .attr("y", height -710 )
  .style("font-family", "sans-serif")
  .style("font-weight", "bold")
  .text("REGIONS WITH THE HIGHEST FOREST COVER BY HECTARES")

function funct(){
  var data2 = {}
  var obj = Object.values(sorted)
  for (var i = 0; i<10; i++){ // changed to only work with top 10 regions
    data2[obj[i].Region] = obj[i].Hectares
  }
  return data2
}

sortPie = funct()

var labelLim = 7000 //250000 need to show all values if only 10 items

// set the color scale - 10 colours
var color = d3.scaleOrdinal()
  .domain(["a", "b", "c", "d", "e", "f", "g", "h","i","j"])
  .range(["#00FF00","#03F719","#09E71D","#0FD721","#14C824","#1CAB29","#1F9D2B","#22902C","#25842D","#29692A"]);

  // Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(sortPie))

// The arc generator
var arc = d3.arc()
  .innerRadius(radius * 0.5)         // This is the size of the donut hole
  .outerRadius(radius * 0.8)

// Another arc that won't be drawn. Just for labels positioning
var outerArc = d3.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9)

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('allSlices')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "white")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

// label the pie chart
svg
  .selectAll('allLabels')
  .data(data_ready)
  .enter()
  .append('text')
    .attr('transform', function(d) {
        var _d = arc.centroid(d);
        _d[0] *= 1;	//multiply by a constant factor
        _d[1] *= 1;	//multiply by a constant factor
        return "translate(" + _d + ")";
    })
    .style("text-anchor", "middle")
    .style("font", "1.2rem times")
      
    .text(function(d) { 
      if(d.data.value<labelLim){return ''} else{return d.data.key }
    })
