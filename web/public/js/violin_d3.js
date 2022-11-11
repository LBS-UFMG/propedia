function jsUcfirst(string)  {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const x_domain = d3.scaleLinear();
const margin = {top: 0, right: 10, bottom: 30, left: 10};
const width = 750 - margin.left - margin.right;
const height = 150 - margin.top - margin.bottom;

// a few features for the box
const center = height / 2 
const height_box = 50

function create_violin(data, value_name="", svg_id="#svg_boxplot") {

  var svg = d3.select(svg_id);

  // check if svg aready exists and remove  
  svg.selectAll("*").remove();

  // select the svg object to the body of the page
  svg.attr("width", "100%")
    .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox", "0 0 720 150")
    .attr("preserveAspectRatio", "xMinYMin meet")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")"); 

  // create dummy data
  //var data_values = [1,1,4,4,5,8,8,9,10,10,12,13]
  //data_values = data.map(x => x[value_name]).sort(d3.ascending)

  // Compute summary statistics used for the box:
  var data_sorted 
  if (value_name != "") {
    data_sorted = data.map(x => x[value_name]).sort(d3.ascending)
  } else {
    data_sorted = data.sort(d3.ascending)
  }
  var q1 = d3.quantile(data_sorted, .25)
  var median = d3.quantile(data_sorted, .5)
  var q3 = d3.quantile(data_sorted, .75)
  var interQuantileRange = q3 - q1
  var min = q1 - 1.5 * interQuantileRange
  var max = q3 + 1.5 * interQuantileRange
  var min_value = data_sorted[0]
  var max_value = data_sorted[data_sorted.length-1] + .009


  // Show the X scale
  x_domain.domain([min_value, max_value])
    .range([margin.right, width - margin.left]);

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x_domain))

  // Show the main vertical line
  svg.append("line")
    .attr("y1", center)
    .attr("y2", center)
    .attr("x1", x_domain(Math.max(min, min_value)))
    .attr("x2", x_domain(Math.min(max, max_value)))
    .attr("stroke", "black")

  // Show the box
  svg.append("rect")
    .attr("y", center - height_box/2)
    .attr("x", x_domain(q1) )
    .attr("width", (x_domain(q3)-x_domain(q1)) )
    .attr("height", height_box)
    //.attr("stroke", "black")
    .style("fill", "lightblue")

  // show median, min and max horizontal lines
  svg.selectAll("toto")
  .data([Math.max(min, min_value), median, Math.min(max, max_value)])
  .enter()
  .append("line")
    .attr("y1", center-height_box/2)
    .attr("y2", center+height_box/2)
    .attr("x1", function(d){ return(x_domain(d))} )
    .attr("x2", function(d){ return(x_domain(d))} )
    .attr("stroke", "black")    
    .style("stroke-width", "2px")

  // create a tooltip
  /*var tooltip = d3.select("#boxplot")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("font-size", "16px")
  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
    tooltip
        .html("<span style='color:grey'>" + jsUcfirst(value_name) + ": </span>" + d[value_name]) // + d.Prior_disorder + "<br>" + "HR: " +  d.HR)
        .style("left", (d3.mouse(this)[0]+30) + "px")
        .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }*/

  var jitterWidth = 50
  svg.selectAll("indPoints")
    .data(data_sorted.filter(function(d) {
      // ONLY OUTLIERS
      return d < min || d > max;
    }))
    .enter()
    .append("circle")
      .attr("cx", function(d){ return(x_domain(d))})
      .attr("cy", function(d){ return(center - jitterWidth/2 + Math.random()*jitterWidth )})
      .attr("r", 4)
      .style("fill", "#11111")
      //.attr("stroke", "black")
      .style("opacity", 0.8)
      //.on("mouseover", mouseover)          
      //.on("mouseleave", mouseleave)

  // CREATE DISTANCE LIMITS 
  var dll = svg.append("rect")  
    .attr("x", 0)
    .attr("y", center - height_box/2 - 13)
    .attr("width", 0)
    .attr("height", height_box + 26)
    .style("fill", "gray")
    .style("opacity", 0.2)

  // Show the box
  var dlr = svg.append("rect") 
    .attr("x", 0)
    .attr("y", center - height_box/2 - 13)
    .attr("width", 0)
    .attr("height", height_box + 26)
    .style("fill", "gray")
    .style("opacity", 0.2)  

  return [dll, dlr, [min_value, max_value]]
}
