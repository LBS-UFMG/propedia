$(function() {

	var num_complexes = 17564;
	var length = 10;
	var rand = Array.from({length: length}, () => Math.floor(Math.random() * num_complexes)).toString();

	var dt = $("#dt_complex_home").DataTable({
		"oLanguage": DATATABLE_CHANGES,		
		"processing":   true,
		"serverSide":   true,
		"autoWidth":    false,
		"orderable":    false,
		"lengthChange": false,
        "ordering":     false,
        "info":         false,
        "searching":    false,
        "responsive":   true,
		"ajax": {
			"url": BASE_URL + "explore/ajax_list_complex",
			"type": "POST",
			"data": {"wheres" : ["c.id_complex in (" + rand + ")"]},
		},
		"columnDefs": [
			{targets: "dt-center", className: "dt-center"}
		],		
		// DISABLE PAGINATION
		"fnDrawCallback": function(oSettings) {
			$('.dataTables_paginate').hide();	       
    	}
	});

})

function expandeDiv(){
	$(function() {
		$('#bubble')
			.removeClass('col-lg-6')
			.addClass('col-lg-12');
		$(".svg-container svg").
			css("width","100%");
	});
}

function reduzDiv(){
	$(function() {
		$('#bubble')
			.removeClass('col-lg-12')
			.addClass('col-lg-6');
	});
}

function showDataset(dataset){
	$(function(){
		$("#groups_selected").val("("+dataset+")");
		$("#dataset_filter").submit()
	});
}