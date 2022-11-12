$(function() {

	var PDB_DIR = BASE_URL + "public/pdb/structures/complex/"

	// GLOBAL VAR
	viewer = $3Dmol.createViewer("3DmolViewerComplex", {
		defaultcolors : $3Dmol.rasmolElementColors
	});
	viewer.setBackgroundColor(0xeeeeee);

	var pdb = $("#pdb").val();
	var peptide_chain = $("#peptide_chain").val();
	var receptor_chain = $("#receptor_chain").val();
	var id_complex = pdb + "_" + peptide_chain + "_" + receptor_chain;

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
		viewer.setStyle({chain: receptor_chain}, {cartoon: {color: 'spectrum'}});
		
		/* colore por estrutura secundaria */
		var m = viewer.getModel();
		viewer.setStyle({},{cartoon:{}}); /* Cartoon */

		viewer.setStyle(
			{},
			{cartoon:{color:'spectrum'}});

		viewer.addSurface(
        	$3Dmol.SurfaceType.VDW, 
        	// {opacity:0.7, volscheme: new $3Dmol.Gradient.RWB(-10,10)},
			{'opacity':0.6,'color':'green'},
        	{chain: receptor_chain}
	    );

		viewer.setStyle({},{cartoon:{color:'white', opacity:0.7}, line:{}},{chain: receptor_chain}); /* lines */


		/* Name of the atoms */
		atoms = m.selectedAtoms({});
		for ( var i in atoms) {
			var atom = atoms[i];
			atom.clickable = true;
			atom.callback = atomcallback;
		}

		viewer.setStyle({chain: peptide_chain}, {stick: {colorscheme:'yellowCarbon'}});
		viewer.addSurface(
        	$3Dmol.SurfaceType.VDW, 
			{'opacity':0.6,'color':'orange'},
        	{chain: peptide_chain}
	    );
      	viewer.zoomTo();      
		viewer.render();
	})

	// PROTPARAM
	/*var receptor_sequence = $("#receptor_sequence").val();
	var peptide_sequence = $("#peptide_sequence").val();*/

	/*var a_peptide_tag = "<a href='#protparam_peptide_table' data-toggle='collapse'>ProtParam Info</a>";
	var size = "80";
	var url = BASE_URL + "public/img/loading.svg";
	var loading_img = "<img src='" + url + "' height='" + size + "' width='" + size + "'>";*/

	/*
	$.ajax({
		"method": "POST",
		"dataType": "json",
		"url": BASE_URL + "complex/ajax_get_protparam/", 
		"data": {"sequence": receptor_sequence},
		//beforeSend : function(){
		//	$("#protparam_peptide_colapse").html("Loading ProtParam..." + loading_img);
		//},
		success: function(response) {
			$("#receptor_molecular_weight").html(response.molecular_weight.toFixed(2));
			$("#receptor_aromaticity").html(response.aromaticity.toFixed(2));
			$("#receptor_instability_index").html(response.instability_index.toFixed(2));
			$("#receptor_isoelectric_point").html(response.isoelectric_point.toFixed(2));			
		}

	})

	$.ajax({
		"method": "POST",
		"dataType": "json",
		"url": BASE_URL + "complex/ajax_get_protparam/", 
		"data": {"sequence": peptide_sequence},
		//beforeSend : function(){
		//	$("#protparam_peptide_colapse").html("Loading ProtParam..." + loading_img);
		//},
		success: function(response) {
			$("#peptide_molecular_weight").html(response.molecular_weight.toFixed(2));
			$("#peptide_aromaticity").html(response.aromaticity.toFixed(2));
			$("#peptide_instability_index").html(response.instability_index.toFixed(2));
			$("#peptide_isoelectric_point").html(response.isoelectric_point.toFixed(2));			
		}

	})*/


}); 
