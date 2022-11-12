$(function() {
	
	var datatable_type = $("#datatable_type").val();

	// INICIALIZE VALUES
    $("#input_distance").val("0 - 100");

    $('#select_complex_reference').selectpicker('val', $("#id_complex_reference").val());
	
	var ajax_call = "ajax_list_" + datatable_type;
	var datatable_id = "dt_" + datatable_type;
	var datatable;
	var current_complex_reference;


	// SLIDER VARIABLES
	var values;
	// distance_limit_left
	var dll = null;
	// distance_limit_right
	var dlr = null;
	var slider_min;
	var slider_max;

	// CALL CLUSTER EXPLORE DATATABLE
	if (datatable_type == "cluster_explore") {
		var cluster_type = $("#cluster_type").val();
		datatable = $("#" + datatable_id).DataTable({		
			"autoWidth":  false,
			"processing": true,
			"serverSide": true,
			"orderable":  false,
			"ordering":   false,
			"searching":  false,
			"responsive": true,
	        "paging":     false,
	        "info": false,
			"ajax": {
				"url": BASE_URL + "index.php/cluster/" + ajax_call,
				"type": "POST",
				"data": {
	        		"cluster_type": cluster_type,
		    	}
			},		
			"columnDefs": [		
				{ targets: [0], "visible": false },	
				{ targets: [1], "width": "10%", className: "dt-center"},
				{ targets: [2], "width": "2%", className: "dt-center" },
				{ targets: [4], "width": "2%", className: "dt-center" },
				{ targets: [5], "visible": false },
			],
			"initComplete": function(settings, json) {
				var centroids = [];
				$.each(json["data"], function(i, d) {

					// CREATE BOXPLOT CHART
					var cluster_name = d[0];
					// CLUSTER SIZE > 1
					if (d[2] > 1) {
						// d[0] -> CLUSTER NAME (EX. I0)
						call_boxplot(d[0])
					}
					
					centroids.push(d[5].split(",")[0])				
				});
				$("#centroid_list").val(centroids.join(", "))
				$("#download_centroids").show();
	  		},
		});
	} else {
		datatable = $("#" + datatable_id).DataTable({
			"oLanguage": DATATABLE_CHANGES_CLUSTER,
			"dom": '<"top"i>rt<"bottom"flp><"clear">',
			"autoWidth":  false,
			"processing": true,
			"serverSide": true,
			"orderable":  false,
			"ordering":   false,
			"searching":  false,
			"responsive": false,
	        "paging":     false,
			"ajax": {
				"url": BASE_URL + "index.php/cluster/" + ajax_call,
				"type": "POST",
				"data": {
					"id_complex_reference": function () { return $("#select_complex_reference").val(); },
					"cluster_num": $("#cluster_num").val(),
					"cluster_size": $("#cluster_size").val(),
	                "distance_limit_left": function () { return $("#input_distance").val().split(" - ")[0]},
	                "distance_limit_right": function () { return $("#input_distance").val().split(" - ")[1]}
		    	}
			},
			"columnDefs": [
				{ "targets": [0], "visible": false },
				{ "targets": [1], "width": "1%" },
				{ "targets": [2], "width": "1%" },

			],
			/*"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
				if ( aData[3] == 0.00 ) {
					console.log(aData);
					$('td', nRow).css('background-color', centroid_color );
				}
			}*/
		});
	
		datatable.on("xhr", function () {

			refresh = false
			if (current_complex_reference != $("#select_complex_reference").val()) {
				refresh = true;
				current_complex_reference = $("#select_complex_reference").val();
			}

			var json = datatable.ajax.json();
			var number_complex = numberWithCommas(json.complexList.length)
			$("#number_complex").html(number_complex + " complex");						
			$("#txt_complex_list").val(json.complexList.join(", "));

	    	// CREATE BOX PLOT - SEQUENCE
			if (datatable_type == "cluster_sequence") {
	    		// IF FIRST DRAW
	    		if (json.draw == 1 || refresh) {
					var boxplot_data = json.data.map(x => {
		      			return(
		      				{complex: x[0],
		      				 identity: parseFloat(x[6])}
		      			)
		    		});      		    		
		            
		            // CREATE BOX PLOT	            
		            [dll, dlr, values] = create_boxplot(boxplot_data, "identity");
		            
		            // FIX VALUES	            
		            values = [Math.floor(values[0]), Math.floor(values[1])]

		            // SLIDER PROPERTIES
		            $("#distance_slider").slider("option", "min", values[0]);
		            $("#distance_slider").slider("option", "max", values[1]);	            
		            $("#distance_slider").slider("option", "values", values)
		            $("#distance_slider").slider("option", "step", 1);
		            $("#input_distance").val(
		                $("#distance_slider").slider("values",0) + " - " + $("#distance_slider").slider("values",1)
		            );
		        }
	    	
	    	// CREATE BOX PLOT - INTERFACE
	    	} else if (datatable_type == "cluster_interface") {	    	
	    		// IF FIRST DRAW
	    		if (json.draw == 1 || refresh) {
		    		var boxplot_data = json.data.map(x => {    			
		      			return(
		      				{complex: x[0],
		      				 irmsd: parseFloat(x[4])}
		      			)
		    		});    		
		            
		            // CREATE BOX PLOT
		            [dll, dlr, values] = create_boxplot(boxplot_data, "irmsd");
		            
		            // FIX VALUES
		            values = [Math.floor(values[0] * 100) / 100, Math.floor(values[1] * 100) / 100]
		            slider_min

		            // SLIDER PROPERTIES	            
		            $("#distance_slider").slider("option", "min", values[0]);
		            $("#distance_slider").slider("option", "max", values[1] + .001);
		            $("#distance_slider").slider("option", "values", values);	            
		            $("#distance_slider").slider("option", "step", 0.01);
		            $("#input_distance").val(
		                $("#distance_slider").slider("values",0) + " - " + $("#distance_slider").slider("values",1)
		            );
		        }
	    	
	    	// CREATE BOX PLOT - BINDING SITE
	    	} else if (datatable_type == "cluster_binding") {
	    		// IF FIRST DRAW
	    		if (json.draw == 1 || refresh) {
		    		var boxplot_data = json.data.map(x => {
		      			return(
		      				{complex: x[0],
		      				 alignment_score: parseFloat(x[4])}
		      			)
		    		});

		            // CREATE BOX PLOT
		            [dll, dlr, values] = create_boxplot(boxplot_data, "alignment_score");
		            
		            // FIX VALUES
		            values = [Math.floor(values[0] * 100) / 100, Math.floor(values[1] * 100) / 100]

		            // SLIDER PROPERTIES	            
		            $("#distance_slider").slider("option", "min", values[0]);
		            $("#distance_slider").slider("option", "max", values[1] + .001);
		            $("#distance_slider").slider("option", "values", values);	            
		            $("#distance_slider").slider("option", "step", 0.01);
		            $("#input_distance").val(
		                $("#distance_slider").slider("values",0) + " - " + $("#distance_slider").slider("values",1)
		            );
		        }
		    }
		})	

	    //#BUTTONS AND INPUTS
		$("#distance_slider").slider({
			range: true, 		
			values: [0, 100],
	      	slide: function( event, ui ) {
	        	$("#input_distance").val(ui.values[0] + " - " + ui.values[1]);        	
	        	
	        	// DISTANCE LIMIT LEFT
	        	dll.attr("width", x_domain(ui.values[0]));
	        	
	        	// DISTANCE LIMIT RIGHT        	
	        	dlr.attr("x", x_domain(ui.values[1]) + 1);
	        	dlr.attr("width", (width-margin.left) - x_domain(ui.values[1]));
	      	},
	      	stop: function( event, ui ) {
	      		datatable.ajax.reload();
	      	}
	    });    
	}

	$("#select_complex_reference").change(function() {
		console.log($(this).val());
		datatable.ajax.reload();
	});
})

// 3dmol *****************************************************************************************************
function loadPDB(chainAB, pdb){

	$(function() {

		var PDB_DIR = BASE_URL + "public/pdb/structures/complex/"

		// GLOBAL VAR
		viewer = $3Dmol.createViewer("3Dmol"+chainAB, {
			defaultcolors : $3Dmol.rasmolElementColors
		});
		viewer.setBackgroundColor(0xFFFFFF);

		//var pdb = $("[name='"+chainAB+"']").val();
		var parts = pdb.split("-");
		var id_complex = parts[0]+"_"+parts[1]+"_"+parts[2];
		var peptide_chain = parts[1];
		var receptor_chain = parts[2];

		//codigo herdado do betagdb
		var atomcallback = function(atom, viewer) {
			if (atom.clickLabel === undefined
					|| !atom.clickLabel instanceof $3Dmol.Label) {
				atom.clickLabel = viewer.addLabel(atom.resn + " " + atom.resi + " ("+ atom.elem + ")", {
					fontSize : 10,
					position : {
						x : atom.x,
						y : atom.y,
						z : atom.z
					},
					backgroundColor: "black"
				});
				atom.clicked = true;
			}

			//toggle label style
			else {

				if (atom.clicked) {
					var newstyle = atom.clickLabel.getStyle();
					newstyle.backgroundColor = 0x66ccff;

					viewer.setLabelStyle(atom.clickLabel, newstyle);
					atom.clicked = !atom.clicked;
				}
				else {
					viewer.removeLabel(atom.clickLabel);
					delete atom.clickLabel;
					atom.clicked = false;
				}

			}
		};

		$.get(PDB_DIR + id_complex + ".pdb", function(data) {
			
			model = viewer.addModel(data, 'pdb', {keepH:true});
			//viewer.setStyle({chain: receptor_chain}, {cartoon: {color: 'spectrum'}});
			/* colore por estrutura secundaria */
			var m = viewer.getModel();			

			/*m.setColorByFunction({}, function(atom) {
				if(atom.ss == 'h') return "magenta";
				else if(atom.ss == 's') return "orange";
				else return "white";
			});*/

			/* Name of the atoms */
			atoms = m.selectedAtoms({});
			for ( var i in atoms) {
				var atom = atoms[i];
				atom.clickable = true;
				atom.callback = atomcallback;
			}

			viewer.setStyle(
				{},
				{cartoon:{color:'white'}});

			viewer.addSurface(
	        	$3Dmol.SurfaceType.VDW, 
	        	{opacity:0.7, volscheme: new $3Dmol.Gradient.RWB(-10,10)},
	        	{chain: receptor_chain}
		    );
		
			viewer.setStyle({chain: peptide_chain}, {stick: {colorscheme:'yellowCarbon'}});
			/*if(chainAB == 'A'){				
				viewer.setStyle({chain: peptide_chain}, {cartoon: {color:"cyan"}, stick: {colorscheme:'cyanCarbon'}});
			}
			else{
				viewer.setStyle({chain: peptide_chain}, {cartoon: {color:"green"}, stick: {colorscheme:'greenCarbon'}});
			}*/
	      	//viewer.zoomTo();	      		      	
	      	viewer.zoomTo({chain: [peptide_chain]}, 0);
	      	viewer.center({chain: [peptide_chain]}, 0);
	      	viewer.render();
			
			
		})
	})
}

function send_to_download(cluster_num="") {

	// CENTROIDS
	if (cluster_num == "") {
		var centroid_list = $("#centroid_list").val();
		var number_complex = centroid_list.split(",").length;
	    $("#number_complex").html(number_complex + " complex");
	    $("#txt_complex_list").val(centroid_list);
	// COMPLEX OF ONE CLUSTER
	} else {
		var complex_list = $("#download_cluster_" + cluster_num).val();
		var number_complex = complex_list.split(",").length;
	    $("#number_complex").html(number_complex + " complex");
	    $("#txt_complex_list").val(complex_list);
	}
    	
}

function call_boxplot(cluster_name) {

	// ALTER LOADING CHART
    var div = $("#div_" + cluster_name);            
    ajax = $.ajax({
        "method": "POST",
        "dataType": "json",
        "url": BASE_URL + "index.php/cluster/ajax_get_cluster_alignments/", 
        "data": {cluster_name: cluster_name},
        beforeSend: function() {
            var size = "40";
            var url = BASE_URL + "public/img/loading.svg";
            var loading_img = "<img src='" + url + "' height='" + size + "' width='" + size + "'>";                
            
            // ALTER LOADING CHART            
            div.html(loading_img);
        },
        success: function(response) {
        	data = response.alignment_values;
        	svg_id = "#svg_" + cluster_name;
        	create_boxplot(data, "", svg_id);
        	div.html("");
        },            
    });

}