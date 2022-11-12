$(function() {

	var wheres = [];

	var dt_complex_explore = $("#dt_complex_explore").DataTable({		
		"oLanguage": DATATABLE_CHANGES,
		"dom": '<"toolbar"><"top"i>rft<"bottom"lp><"clear">',
		"autoWidth":  false,
		"processing": true,
		"serverSide": true,
		"orderable":  false,
		"ordering":   false,
		"searching":  true,
		"responsive": true,
		"deferLoading": 0, // here
		"ajax": {
			"url": BASE_URL + "index.php/explore/ajax_list_complex",
			"type": "POST",
			"data": function (d) {
        		d.wheres = wheres//.join("|");
	    	},
		},
		/*"pageLength": 10,

		// PREVENT AJAX PRE-CALLING
		"deferLoading": 57,*/
		
		"columnDefs": [
			{ targets: "dt-center", className: "dt-center" },
		],
	});		

    dt_complex_explore.on("xhr", function () {
		var json = dt_complex_explore.ajax.json();
		var number_complex = numberWithCommas(json.complexList.length)
    	$("#number_complex").html(number_complex + " complex");
    	$("#txt_complex_list").val(json.complexList.join(", "))
    	$("#txt_sequence_centroid_list").val(json.sequenceCentroids.join(", "))
    	$("#txt_interface_centroid_list").val(json.interfaceCentroids.join(", "))
    	$("#txt_binding_centroid_list").val(json.bindingCentroids.join(", "))

    })

	function reset_sliders() {

		var min_peptide_size = 2;
		var max_peptide_size = 50;
	    // GET PEPTIDE SIZES
		$.ajax({
			url: BASE_URL + "index.php/explore/ajax_sizes_limits",
		    dataType: 'json',		        
		    data: {"element": "peptide"},
		    type: 'POST',
			async: false,
		    success: function(response) {
		    	min_peptide_size = +response["min"];
		    	max_peptide_size = +response["max"];
	        }
        })		

		var step_peptide_size = 1;
		$("#peptide_size_slider").slider({
			range: true, 
			min: min_peptide_size, 
			max: max_peptide_size, 
			values: [ min_peptide_size, max_peptide_size ],
			step: step_peptide_size,
	      	slide: function( event, ui ) {
	        	$("#peptide_size").val(ui.values[0] + " - " + ui.values[1]);
	      	}
	    });
	    $("#peptide_size").val(
	    	$("#peptide_size_slider").slider("values",0) + " - " + $("#peptide_size_slider").slider("values",1)
	    )

		var min_receptor_size = 60;
		var max_receptor_size = 1500;
	    // GET RECEPTOR SIZES
		$.ajax({
			url: BASE_URL + "index.php/explore/ajax_sizes_limits",
		    dataType: 'json',		        
		    data: {"element": "receptor"},
		    type: 'POST',
			async: false,
		    success: function(response) {
		    	min_receptor_size = +response["min"];
		    	max_receptor_size = +response["max"];
	        }
        })		
		var step_receptor_size = 1;


		$("#receptor_size_slider").slider({
			range: true, 
			min: min_receptor_size, 
			max: max_receptor_size, 
			values: [ min_receptor_size, max_receptor_size ],
			step: step_receptor_size,
	      	slide: function( event, ui ) {
	        	$("#receptor_size").val(ui.values[0] + " - " + ui.values[1]);
	      	}
	    });
	    $("#receptor_size").val(
	    	$("#receptor_size_slider").slider("values",0) + " - " + $("#receptor_size_slider").slider("values",1)
	    )

		var min_resolution = 0.1;
		var max_resolution = 2.51;
		var step_resolution = .1;

		$("#resolution_slider").slider({
			range: true, 
			min: min_resolution, 
			max: max_resolution, 
			values: [ min_resolution, max_resolution ],
			step: step_resolution,
	      	slide: function( event, ui ) {
	        	$("#resolution").val(ui.values[0] + " - " + ui.values[1]);
	      	}
	    });
	    $("#resolution").val(
	    	$("#resolution_slider").slider("values",0) + " - " + $("#resolution_slider").slider("values",1)
	    )
        
	}

	function reset_inputs() {
		
		$(".filter").each(function() {
			if ($(this).is(':checkbox')) {
				default_value = $(this).attr('default');
				$(this).prop("checked", !!default_value);
			} else {
				$(this).val('');
		  	}
		})
	}

	function clear_filters() {

		console.log("clear")

		reset_sliders();
		reset_inputs();

		// RESET SELECT
		$(".selectpicker").each(function() {
			$(this).val('default');
			$(this).selectpicker("refresh");
		});
	
        wheres = [];

        dt_complex_explore.search("").draw();
        
	}

	reset_sliders();
	//reset_inputs();

	// BUTTONS ACTIONS
	$("#apply_filter").click(function() {

		wheres = []
		
		// VALUES LIST
		var pdb_complex = $("#pdb_complex").val();
		
		var id_organism_list = $("#id_organism").val();
		
		var id_group_list = $("#id_group").val()
		
		var peptide_size = $("#peptide_size").val()		
		var receptor_size = $("#receptor_size").val()
		var resolution = $("#resolution").val()
		
		var is_clustered = $("#is_ccd")
		var is_nmr = $("#is_nmr")		

		// FOR PDB AND COMPLEX NAME
		if (pdb_complex != "") {
			var values = pdb_complex.replace(/\s/g, "").split(",");
			var pdb_list = [];
			var complex_list = [];			
			// FILTER PDB AND COMPLEX			
			values.forEach(function(v) {
				// ADD PDB
				if (v.length == 4) {
					pdb_list.push(v.toLowerCase());					
				}
				// ADD COMPLEX
				if (v.length == 8) {
					var format_v = v.substring(0,4).toLowerCase()
					format_v += v.substring(4);
					complex_list.push(format_v);
					console.log(format_v)
				}
			});

			// REMOVE DUPLICATES
			pdb_list = [...new Set(pdb_list)];
			complex_list = [...new Set(complex_list)];			

			// SPLIT ARRAY OF FILES IN 1000 CHUNKS
            var chunk_pdb = []
            var i, j, chunk_size = 1000;
            for (i=0,j=pdb_list.length; i<j; i+=chunk_size) {
            	chunk_pdb.push(pdb_list.slice(i, i+chunk_size));
            }
            
            var chunk_complex = []
            var i, j, chunk_size = 1000;
            for (i=0,j=complex_list.length; i<j; i+=chunk_size) {
            	chunk_complex.push(complex_list.slice(i, i+chunk_size));
            }

			complex_name_field = "CONCAT_WS('_', pdb.pdb, p.peptide_chain, r.receptor_chain)";

			var group = [];
			chunk_pdb.forEach(function(pdb_list) {
				group.push("pdb.pdb IN ('" + pdb_list.join("','") + "')");
			})			
			chunk_complex.forEach(function(complex_list) {
				group.push(complex_name_field + " IN ('" + complex_list.join("','") + "')");
			})
			wheres.push(group);
		}

		// ORGANISM
		if (id_organism_list.length != 0) {
			var group = []
			group.push("o_pep.id_organism IN (" + id_organism_list.join(",") + ")");
			group.push("o_rec.id_organism IN (" + id_organism_list.join(",") + ")");
			wheres.push(group);
		}

		// GROUP (CLASSIFICATION)
		if (id_group_list.length != 0) {						
			wheres.push("g.id_group IN (" + id_group_list.join(",") + ")");
		}

		// PEPTIDE SIZE 
		var values = peptide_size.split("-");
		var max = values[0].trim(), min = values[1].trim();
		wheres.push("p.peptide_size BETWEEN " + max + " AND " + min);

		// RECEPTOR SIZE
		var values = receptor_size.split("-");
		var max = values[0].trim(), min = values[1].trim();
		wheres.push("r.receptor_size BETWEEN " + max + " AND " + min);

		// RESOLUTION AND NMR
		var values = resolution.split("-");
		var max = values[0].trim(), min = values[1].trim();
		if (is_nmr.prop("checked")) {
			var group = []
			group.push("c.is_nmr = 1");
			group.push("pdb.resolution BETWEEN " + max + " AND " + min);
			wheres.push(group);
		} else {
			wheres.push("pdb.resolution BETWEEN " + max + " AND " + min);	
		}
		
		if (is_clustered.prop("checked")) {
			wheres.push("c.is_ccd = 1");
		}

		/*$(".filter-input").each(function() {
			if ($(this).val() != "") {
				var values = $(this).val().replace(/\s/g, "").split(",")
				wheres.push([$(this).attr("id")] + " IN ('" + values.join("','") + "')");
			}
		})

		$(".filter-select").each(function() {
			if ($(this).val().length != 0) {
        		wheres.push([$(this).attr("id")] + " IN (" + $(this).val().join(",") + ")");
        	}
		})

		$(".filter-slider").each(function() {
			var values = $(this).val().split("-");
			var max = values[0].trim(), min = values[1].trim();
			wheres.push([$(this).attr("id")] + " BETWEEN " + max + " AND " + min)
		})

		$(".filter-chbox-1").each(function() {
			if (!$(this).prop("indeterminate")) {
				wheres.push([$(this).attr("id")] + " = " + +$(this).prop("checked"));
			} 
		})

		$(".filter-chbox-2").each(function() {
			if (!$(this).prop("indeterminate")) {
				if ($(this).prop("checked")) {
					wheres.push([$(this).attr("id")] + " IS NOT NULL");
				} else {
					wheres.push([$(this).attr("id")] + " IS NULL");
				}
			} 
		})*/

		dt_complex_explore.ajax.reload();

    });
    
    $("#clear_filters").click(function() {
    	clear_filters();
    	$("#apply_filter").click();
    });

    $("#apply_filter").click();

    $("#btn_download_sequence_centroid").click(function() {
    	complex_string = $("#txt_sequence_centroid_list").val()
    	var number_complex = numberWithCommas(complex_string.split(",").length)
    	$("#number_complex").html(number_complex + " complex");
    	$("#txt_complex_list").val(complex_string);
    });

    $("#btn_download_interface_centroid").click(function() {
    	complex_string = $("#txt_interface_centroid_list").val()
    	var number_complex = numberWithCommas(complex_string.split(",").length)
    	$("#number_complex").html(number_complex + " complex");
    	$("#txt_complex_list").val(complex_string);
    });

    $("#btn_download_binding_centroid").click(function() {
    	complex_string = $("#txt_binding_centroid_list").val()
    	var number_complex = numberWithCommas(complex_string.split(",").length)
    	$("#number_complex").html(number_complex + " complex");
    	$("#txt_complex_list").val(complex_string);
    });    


    function removeDuplicateRows($table){
    	$('.expand_row').remove() // corrige bug 

    	$table.find('tr').each(function(index, row){

		        var $row = $(row);
		        var $colunas1 = $row.find('td');

		        $row.nextAll('tr').each(function(index, next){

		            var $next = $(next);
		            var $colunas2 = $next.find('td'); 

		            if($colunas1[4].innerHTML == $colunas2[4].innerHTML){
		            	
		            	$row.addClass('info');
		            	$row.append("<a class='expand_row' title='Show all rows' style='border:#333 solid 1px; color:#333;margin-left:1px; padding:0 4px 3px 4px' onclick='showAllRow()'>+</a>");
			            $next.addClass('hidden');
			        }
		             
		        })
		    });

	}

	
	$('#dupli').click(function(){
		removeDuplicateRows($('#dt_complex_explore'));
	});
	
})

function showAllRow(){
		var $table = $('#dt_complex_explore');
		$table.find('tr').each(function(index, row){
			var $row = $(row);
			$row.removeClass('hidden');
			$('.expand_row').remove()
			$row.removeClass('info');
		});
}

