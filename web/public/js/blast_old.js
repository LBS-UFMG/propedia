$(function() {

  function csvJSON(csv){

    var lines=csv.split("\n");
    var result = [];

    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step 
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
        obj[headers[j].trim()] = currentline[j];
      }
  
      if (currentline.length == headers.length) {
        result.push(obj);
      }

    }

    return result; //JavaScript object
    //return JSON.stringify(result); //JSON
  }	

	data = csvJSON($("#bubble_data").val());	

	// set the dimensions and margins of the graph
	var width = 1200
	var height = 300

	// append the svg object to the body of the page
	var svg = d3.select("#bubble")
	  .append("svg")
	    .attr("width", 1200)
	    .attr("height", 300)

	// create dummy data -> just one element per circle
	/*var data = [{ "name": "A", "type": "sequence" }, { "name": "B", "type": "sequence" }, { "name": "C", "type": "sequence" }, { "name": "D", "type": "sequence" }, { "name": "E", "type": "sequence" }, { "name": "F", "type": "sequence" },
	            { "name": "G", "type": "interface" }, { "name": "H", "type": "interface" }, { "name": "I", "type": "interface" }, { "name": "J", "type": "interface" }, { "name": "K", "type": "interface" }, { "name": "L", "type": "interface" },
	            { "name": "M", "type": "binding" }, { "name": "N", "type": "binding" }, { "name": "O", "type": "binding" }]*/

	// A scale that gives a X target position for each group
	var x = d3.scaleOrdinal()
	  .domain(["sequence", "interface", "binding"])
	  .range([200, 600, 1000])

	max_size = d3.max(data, function (d) {console.log(d.total); return +d.total});
	
	console.log(max_size);

	// A scale that gives a X target position for each group
	var size = d3.scaleOrdinal()
	  .domain([1, max_size])
	  .range([1, 100])

	// A color scale
	var color = d3.scaleOrdinal()
	  .domain([1, 2, 3])
	  .range(["#5cb85c", "#d9534f", "#0275d8"])

	console.log(data);

	// Initialize the circle: all located at the center of the svg area
	var node = svg.append("g")
	  .selectAll("circle")
	  .data(data)
	  .enter()
	  .append("circle")
	    .attr("r", function(d){ return size(d.total)})
	    .attr("cx", width / 2)
	    .attr("cy", height / 2)
	    .style("fill", function(d){ return color(d.type)})
	    .style("fill-opacity", 0.8)
	    .attr("stroke", "black")
	    .style("stroke-width", 1)
	    .call(d3.drag() // call specific function when circle is dragged
	         .on("start", dragstarted)
	         .on("drag", dragged)
	         .on("end", dragended));

	// Features of the forces applied to the nodes:
	var simulation = d3.forceSimulation()
	    .force("x", d3.forceX().strength(0.1).x( function(d){ return x(d.type) } ))
	    .force("y", d3.forceY().strength(0.5).y( height/2 ))
	    .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
	    .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
	    .force("collide", d3.forceCollide().strength(.1).radius(32).iterations(1)) // Force that avoids circle overlapping

	// Apply these forces to the nodes and update their positions.
	// Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
	simulation
	    .nodes(data)
	    .on("tick", function(d){
	      node
	          .attr("cx", function(d){ return d.x; })
	          .attr("cy", function(d){ return d.y; })
	    });

	// What happens when a circle is dragged?
	function dragstarted(d) {
	  if (!d3.event.active) simulation.alphaTarget(.03).restart();
	  d.fx = d.x;
	  d.fy = d.y;
	}
	function dragged(d) {
	  d.fx = d3.event.x;
	  d.fy = d3.event.y;
	}
	function dragended(d) {
	  if (!d3.event.active) simulation.alphaTarget(.03);
	  d.fx = null;
	  d.fy = null;
	}

})