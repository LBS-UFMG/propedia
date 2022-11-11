$(function() {

	if ($("#status").val() == "1") {

		// INICIALIZE VALUES
	    $("#input_distance").val("0 - 100");

	    //var centroid_color = "#90EE90";
		// var centroid_color = "#eee";

	    var project_id = $("#project_id").val();

		var dt = $("#dt_probis").DataTable({
			"oLanguage": DATATABLE_CHANGES_PROBIS,
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
				"url": BASE_URL + "index.php/search/ajax_show_result",
				"type": "POST",
				"data": {
					"project_id": project_id,
	        		//"cluster_num": $("#cluster_num").val(),
	                //"cluster_size": $("#cluster_size").val(),
	                "distance_limit_left": function () { return $("#input_distance").val().split(" - ")[0]},
	                "distance_limit_right": function () { return $("#input_distance").val().split(" - ")[1]}
		    	}
			},
			"columnDefs": [
				{ "targets": [0], "visible": false },
				{ "targets": [1], "width": "1%" },			

			],			
		});

		// INITIALIZE VARIABLES
		// values FOR SLIDER
		var values = null;
		// distance_limit_left
		var dll = null;
		// distance_limit_right
		var dlr = null;

		// CREATE BOX PLOT
		dt.on("xhr", function () {
			var json = dt.ajax.json();
			$("#txt_complex_list").val(json.complexList.join(", "));

			// IF FIRST DRAW
			if (json.draw == 1) {
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
	      		dt.ajax.reload();            	            
	      	}
	    });

	}
});

var query_view_3dmol;
var subject_view_3dmol;

// 3D FUNCTIONS
function load_PDB(div_name, pdb_filename="", 
				  query_aligned_res = "",
				  subject_aligned_res = "",
				  rec_chain = null, pep_chain = null) {

	var project_id = $("#project_id").val();

	var view_3dmol = null;
	var pdb_filepath = null;

	if (div_name == "3Dmol_query") {
		pdb_filepath = BASE_URL + "public/probis/projects/" + project_id + "/query.pdb";			
		query_view_3dmol = $3Dmol.createViewer(
			div_name, {defaultcolors : $3Dmol.rasmolElementColors}
		);
		view_3dmol = query_view_3dmol;
	} else {
		pdb_filepath = BASE_URL + "public/pdb/structures/complex/" + pdb_filename + ".pdb";
		subject_view_3dmol = $3Dmol.createViewer(
			div_name, {defaultcolors : $3Dmol.rasmolElementColors}
		);
		view_3dmol = subject_view_3dmol;
	}

	view_3dmol.setBackgroundColor(0xeeeeee);

    $.get(pdb_filepath, function(data) {
                
        model = view_3dmol.addModel(data, 'pdb', {keepH:false});
        	        
        var m = view_3dmol.getModel();

        var chains = [];
        
        atoms = m.selectedAtoms({});
        for ( var i in atoms) {
            var atom = atoms[i];
            atom.clickable = true;
            atom.callback = atomcallback;
        }

		// RESET TO CARTOON WHITE
		query_view_3dmol.removeAllSurfaces()
		query_view_3dmol.setStyle(
			{},
			{cartoon:{opacity: 0.8, color:'white'}});

		var query_res = $("#query_residues_list").val().split(",");
		var query_chain = $("#query_chain").val();
						    				       
		select = {chain: query_chain, resi: query_res}

        if (query_aligned_res == "") {

        	// SELECTED RESIDUES FROM USER AS STICKS WHITE
	        query_view_3dmol.addSurface(
	        	$3Dmol.SurfaceType.VDW, 
	        	{opacity:0.85, volscheme: new $3Dmol.Gradient.RWB(-10,10)},
	        	select
	        );
	    
	       	query_view_3dmol.setProjection("orthographic");

	    } else {

			query_aligned_res = query_aligned_res.split(",");
			var query_chain = $("#query_chain").val();

			select = {chain: query_chain, resi: query_aligned_res}

	       	query_view_3dmol.setStyle(
	        	select,
	        	{stick:{}});

	       	// ALIGNED RESIDEUS	       	
	        query_view_3dmol.addSurface(
	        	$3Dmol.SurfaceType.VDW, 
	        	{opacity:0.85, volscheme: new $3Dmol.Gradient.RWB(-10,10)},
	        	{chain: query_chain, resi: query_aligned_res}
	        );

	    
	       	query_view_3dmol.setProjection("orthographic");

	    }	    

       	query_view_3dmol.render();
    	query_view_3dmol.zoomTo(select)
    	query_view_3dmol.center(select, 10, true);				

	    if (subject_aligned_res != "") {

	       	// ALIGNED RESIDEUS
	       	subject_aligned_res = subject_aligned_res.split(",");

	       	select = {chain: rec_chain, resi: subject_aligned_res}

			// RESET TO CARTOON WHITE
	        subject_view_3dmol.removeAllSurfaces()
	        subject_view_3dmol.setStyle(
	        	{},
	        	{cartoon:{opacity: 0.8, color:'white'}});

	        // SELECTED RESIDUES FROM USER AS STICKS WHITE
	       	subject_view_3dmol.setStyle(
	        	select,
	        	{stick:{}});
	        
	        subject_view_3dmol.addSurface(
	        	$3Dmol.SurfaceType.VDW, 
	        	{opacity:0.85, volscheme: new $3Dmol.Gradient.RWB(-10,10)},
	        	select);
        
	       	subject_view_3dmol.setProjection("orthographic");

	    	if (pep_chain) {
	    		subject_view_3dmol.setStyle({chain: pep_chain},{stick:{colorscheme:'yellowCarbon'}});
	    	}        

	       	subject_view_3dmol.render();
	    	subject_view_3dmol.zoomTo(select)
	    	subject_view_3dmol.center(select, 10, true);

	    }

	    
	})
}

load_PDB("3Dmol_query");