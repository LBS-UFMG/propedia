const BASE_URL = $("#base_url").val();

const DATATABLE_CHANGES = {
    "sInfo": "Showing _START_ to _END_ of _TOTAL_ complex",
    "sInfoEmpty": "Showing 0 to 0 of 0 complex",
    "sInfoFiltered": "(Filtering _MAX_ complex)",
    "sLengthMenu": "Show _MENU_ complex per page",    
    "sSearch": "Text search:",
    /*"sEmptyTable": "Nenhum registro encontrado",
    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
    "sInfoFiltered": "(Filtrados de _MAX_ registros)",
    "sInfoPostFix": "",
    "sInfoThousands": ".",
    "sLengthMenu": "_MENU_ resultados por página",
    "sLoadingRecords": "Carregando...",
    "sProcessing": "Processando...",
    "sZeroRecords": "Nenhum registro encontrado",
    "sSearch": "Pesquisar",
    "oPaginate": {
        "sNext": "Próximo",
        "sPrevious": "Anterior",
        "sFirst": "Primeiro",
        "sLast": "Último"
    },
    "oAria": {
        "sSortAscending": ": Ordenar colunas de forma ascendente",
        "sSortDescending": ": Ordenar colunas de forma descendente"
    }*/
}
const DATATABLE_CHANGES_CLUSTER = {
    "sInfo": "Complex reference has _END_ alignments of _MAX_ (cluster size)",
    "sInfoFiltered": ""
}

const DATATABLE_CHANGES_PROBIS = {
    "sInfo": "Showing _END_ alignments of _MAX_",
    "sInfoFiltered": ""
}

//ALL CHECK FOR DOWNLOAD
$("#seq\\.all").change(function() {
    $("#seq\\.receptor").prop("checked", $(this).is(':checked'))
    $("#seq\\.peptide").prop("checked", $(this).is(':checked'))
    $("#seq\\.interface").prop("checked", $(this).is(':checked'))
})

$("#str\\.all").change(function() {
    $("#str\\.complex").prop("checked", $(this).is(':checked'))
    $("#str\\.receptor").prop("checked", $(this).is(':checked'))
    $("#str\\.peptide").prop("checked", $(this).is(':checked'))
    $("#str\\.interface").prop("checked", $(this).is(':checked'))
})

// UPLOAD PDB FILE
function upload_pdb(btn, id_input_pdb) {

    var input_pdb = $(id_input_pdb);

    var pdb_file = btn[0].files[0]
    var formData = new FormData();

    // FOR FEEDBACK MESSAGE
    var feedback_div = $("#feedback_upload");

    formData.append('import_file', pdb_file);

    $.ajax({
        url: BASE_URL + "search/ajax_import_pdb",
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        type: 'POST',
        beforeSend: function() {

            feedback_div.removeClass("alert-info");
            feedback_div.removeClass("alert-success");
            feedback_div.removeClass("alert-danger");

            var size = "30";
            var url = BASE_URL + "public/img/loading.svg";
            var loading_img = "<img src='" + url + "' height='" + size + "' width='" + size + "'>";                
            
            // ALTER FEEDBACK MESSAGE            
            feedback_div.addClass("alert-info");
            feedback_div.show();
            feedback_div.html("Uploading PDB file... This may take a while " + loading_img);
        },
        success: function(response) {
            if (response["status"]) {
                input_pdb.val(response["path"]);                
                num_proteins_chains = load_3Dmol(response["web_path"]);
                console.log(num_proteins_chains)
                if (num_proteins_chains == 0) {
                    feedback_div.addClass("alert-danger");
                    feedback_div.html("No protein chain found!");
                } else {
                    feedback_div.addClass("alert-success");
                    feedback_div.html(num_proteins_chains.toString() + " protein chain(s) found!");
                    $("#fields").show();
                    $("#run_probis_btn").show();
                }                
            } else {
                // ALTER FEEDBACK MESSAGE                
                feedback_div.addClass("alert-danger");
                feedback_div.html(response["error"]["text"]);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            feedback_div.addClass("alert-danger");
            feedback_div.html("ERROR - Unknow error occurs!");
            console.log(jqXHR, textStatus, errorThrown)
        }
    });
}

// SEARCH FROM PDB
function search_pdb(id_input_pdb, pdb_id, loading_sample=false) {

    var input_pdb = $(id_input_pdb);

    // FOR FEEDBACK MESSAGE
    var feedback_div = $("#feedback_upload");

    // CHECK IF PDB FILE AREADY EXISTS IN 
    $.ajax({
        type: 'GET',
        url: "https://files.rcsb.org/download/"+pdb_id+".pdb",
        beforeSend: function() {
            feedback_div.removeClass("alert-info");
            feedback_div.removeClass("alert-success");
            feedback_div.removeClass("alert-danger");

            var size = "30";
            var url = BASE_URL + "public/img/loading.svg";
            var loading_img = "<img src='" + url + "' height='" + size + "' width='" + size + "'>";                
            
            // ALTER FEEDBACK MESSAGE            
            feedback_div.addClass("alert-info");
            feedback_div.show();
            feedback_div.html("Searching from PDB... This may take a while " + loading_img);
        },
        success: function(pdb_content){
            $.ajax({
                type: 'POST',
                url: BASE_URL + "index.php/search/ajax_create_pdb",
                dataType: 'json',
                data: {pdb_id: pdb_id, pdb_content: pdb_content},
                success: function(response) {
                    if (response["status"]) {
                        input_pdb.val(response["path"]);                
                        num_proteins_chains = load_3Dmol(response["web_path"]);
                        if (num_proteins_chains == 0) {
                            feedback_div.addClass("alert-danger");
                            feedback_div.html("No protein chain found!");
                        } else {
                            feedback_div.addClass("alert-success");
                            feedback_div.html(num_proteins_chains.toString() + " protein chain(s) found!");
                            $("#fields").show();
                            $("#run_probis_btn").show();
                        }
                        if (loading_sample) {
                            $("#selected_chain").val("A");
                            $("#residues_list").val("114,116,117,118,119,126,136,137,138,139,140,141,142,143,144,145,146,147,161,162,163,164,165,166,167,168,170,171,172,173,174,181,186,187,189,25,26,27,28,39,40,41,413,416,42,44,445,45,46,49,54");
                            highlight_residues();
                        }
                    } else {
                        // ALTER FEEDBACK MESSAGE                
                        feedback_div.addClass("alert-danger");                        
                        feedback_div.html(response["error"]["text"]);
                    }
                }
            })
        },         
        error: function(jqXHR, textStatus, errorThrown) {
            feedback_div.addClass("alert-danger");            
            feedback_div.html("ERROR - PDB id not found!");
            console.log(jqXHR, textStatus, errorThrown)
        }
    });

    /*$.ajax({
        url: BASE_URL + "search/ajax_import_pdb",
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        type: 'POST',
        beforeSend: function() {

            feedback_div.removeClass("alert-success");
            feedback_div.removeClass("alert-danger");            
            feedback_div.hide();

            var size = "40";
            var url = BASE_URL + "public/img/loading.svg";
            var loading_img = "<img src='" + url + "' height='" + size + "' width='" + size + "'>";                
            
            // ALTER FEEDBACK MESSAGE            
            feedback_div.addClass("alert-success");
            feedback_div.show();
            feedback_div.html("Uploading PDB file... This may take a while " + loading_img);
        },
        success: function(response) {
            if (response["status"]) {
                input_pdb.val(response["path"]);                
                load_3Dmol(response["web_path"]);
                feedback_div.hide()
                $("#fields").show();
                $("#3DmolViewer").show();
                $("#run_probis_btn").show();
            } else {
                // ALTER FEEDBACK MESSAGE                
                feedback_div.addClass("alert-danger");
                feedback_div.show();
                feedback_div.html(response["error"]["text"]);                
            }
        },
        error: function() {
            feedback_div.addClass("alert-danger");
            feedback_div.show();
            feedback_div.html("ERROR - Unknow error occurs!");
            console.log(jqXHR, textStatus, errorThrown)
        }
    });*/
}

// FOR ADD_FILES IN ZIP REQUEST
function add_file_zip(zip_file, chunk_files, total) {

    var chunk = chunk_files.shift();    

    $.ajax({
        "method": "POST",        
        "url": BASE_URL + "index.php/explore/ajax_add_zip/", 
        "data": {
            "zip_file": zip_file,
            "add_files": chunk,
        },
        success: function(response) {

            part = total - chunk_files.length;
            perc = (part / total * 100);
            //console.log(part, perc, chunk_files.length)

            // UPDATE PROGRESS BAR
            var progress_bar_value = $("#progress_bar_value");
            progress_bar_value.width(perc.toFixed(0) + "%");
            progress_bar_value.html(perc.toFixed(0) + "%");
        },
        complete: function() {

            if(chunk_files.length != 0) {
                
                if (abort_zip == 0) {
                    add_file_zip(zip_file, chunk_files, total);
                } else {
                    abort_zip = 0;
                }

            } else {
                // FINISH PROGRESS BAR
                var progress_bar_value = $("#progress_bar_value");
                progress_bar_value.width("100%");
                progress_bar_value.html("100%");

                var progress_bar_div = $("#feedback_download");

                var url_download = BASE_URL + zip_file;
                var a_elem = '<a id="download_zip" href="' + BASE_URL + zip_file +'">Click here to download</a>';
                var feedback_div = $("#feedback_download");
                feedback_div.html("Done!<br>")
                feedback_div.append(a_elem);
                //$("#download_zip")[0].click();

                return;
            }
        }
    });
}

var abort_zip = 0;
$("#feedback_download").hide();
$("#progress_bar_div").hide();

$("#modal_download_selected").on("hide.bs.modal", function () {
    console.log("abc");
    abort_zip = 1;
    $("#feedback_download").hide();
    $("#progress_bar_div").hide();
});

$("#btn_advanced_search").click(function(){

    $("#form_download_selected").submit()

});

$("#btn_download_modal").click(function(e) {

    if ($("#txt_complex_list").val()) {
        
        var serialize = $("#form_download_selected").serialize();        

        $.ajax({
            "method": "POST",
            "dataType": "json",
            "url": BASE_URL + "index.php/explore/ajax_create_download_file/", 
            "data": serialize,
            beforeSend: function() {
                var size = "40";
                var url = BASE_URL + "public/img/loading.svg";
                var loading_img = "<img src='" + url + "' height='" + size + "' width='" + size + "'>";                
                
                // ALTER FEEDBACK MESSAGE
                var feedback_div = $("#feedback_download");
                feedback_div.addClass("text-success");
                feedback_div.show()
                feedback_div.html("Preparing download file... This may take a while. " + loading_img);

                // PREPARE PROGRESS BAR
                var progress_bar_div = $("#progress_bar_div");
                progress_bar_div.show();
            },
            success: function(response) {

                var zip_file = response.zip_file;
                var files = response.files;                

                // SPLIT ARRAY OF FILES IN 100 CHUNKS
                var chunk_files = []
                var i, j, chunk_size = 100;
                for (i=0,j=files.length; i<j; i+=chunk_size) {
                    chunk_files.push(files.slice(i, i+chunk_size));
                }
                var total = chunk_files.length;

                add_file_zip(zip_file, chunk_files, total);
            },            
        });
    }
 
    return false;

})

//codigo herdado do betagdb
var atomcallback = function(atom, viewer) {
    if (atom.clickLabel === undefined
            || !atom.clickLabel instanceof $3Dmol.Label) {
        atom.clickLabel = viewer.addLabel(atom.resn + " " + atom.resi + " " + atom.chain +  " ("+ atom.elem + ")", {
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

var view_3d_mol = null;

function load_3Dmol(pdb_filepath) {

    // GLOBAL VAR
    var all_chains = [];
    var protein_chains = [];
    view_3d_mol = $3Dmol.createViewer("3DmolViewer", {
        defaultcolors : $3Dmol.rasmolElementColors
    });

    view_3d_mol.clear();

    view_3d_mol.setBackgroundColor(0xeeeeee);
    
    $.ajax({
        url: pdb_filepath,
        type : "get",
        async: false,
        success : function(data) {
            model = view_3d_mol.addModel(data, 'pdb', {keepH:true});
        
            /* colore por estrutura secundaria */
            var m = view_3d_mol.getModel();

            var feedback_div = $("#feedback_upload");
            
            var aminoacids = Object.keys($3Dmol.residues.amino);

            var atoms = m.selectedAtoms({});
            
            for (var i in atoms) {                
                var atom = atoms[i];

                // ADD CHAIN TO ALL CHAINS
                if (!all_chains.includes(atom.chain)) {
                    all_chains.push(atom.chain);
                } 

                // ADD CHAIN TO PROTEIN CHAIN IF IS A PROTEIN CHAIN
                if (!protein_chains.includes(atom.chain) && aminoacids.includes(atom.resn)) {
                    protein_chains.push(atom.chain);
                }

                atom.clickable = true;
                atom.callback = atomcallback;
            }

            // CREATE CHAIN COMBOBOX
            var chains_combobox = $("#selected_chain")
            chains_combobox.empty();

            feedback_div.removeClass("alert-success");
            feedback_div.removeClass("alert-danger");            

            // NO PROTEINS CHAINS FOUND
            if (protein_chains.length != 0) {
                for (var i in all_chains) {                    
                    
                    var c = all_chains[i]; 
                    
                    if (!protein_chains.includes(c)) {
                        delete m.selectedAtoms({chain: c});
                    } else {
                        var option = "<option value=" + c + ">" + c + "</option>";
                        chains_combobox.append(option);
                        view_3d_mol.setStyle({}, {cartoon:{color:'white'}});
                    }
                }                        
            }

            view_3d_mol.render();
            view_3d_mol.zoomTo();
        }    
    });
    
    return protein_chains.length;

}

function highlight_residues() {

    var chain = $("#selected_chain").val();
    
    // GET RESIDEUS FROM CHAIN
    var residues_chain = [];

    atoms = view_3d_mol.getModel().selectedAtoms({chain: chain})
    for (var i in atoms) {
        var atom = atoms[i];
        // CHECK CHAINS
        if (!residues_chain.includes(atom.resi)) {
            residues_chain.push(atom.resi);
        }        
    }       

    var residues_list = [];

    $.each($("#residues_list").val().split(","), function(i, v) {
        var val = +v.trim();
        if (Number.isInteger(val) && 
            residues_chain.includes(val) &&
            !residues_list.includes(val)) {
            residues_list.push(val);
        }
    });    

    $("#residues_list").val(residues_list.join(","));

    if (residues_list.length > 0 && view_3d_mol) {        

        var select = {chain: chain, resi: residues_list};

        // RESET
        view_3d_mol.setStyle({},{cartoon:{}});
        view_3d_mol.removeAllSurfaces()

        //view_3d_mol.addSurface("VDW", {opacity:1.0}, {resi:residues_list});
        view_3d_mol.addSurface(
            $3Dmol.SurfaceType.VDW, 
            {opacity:0.85, volscheme: new $3Dmol.Gradient.RWB(-10,10)},
            select);
        /*view_3d_mol.addSurface(
            $3Dmol.SurfaceType.SAS, 
            {map:{prop:'partialCharge',scheme:new $3Dmol.Gradient.RWB(-.05,.05)}, opacity:0.87},
            select);*/
        view_3d_mol.setStyle(select,{stick:{}});
            
        view_3d_mol.render();
        view_3d_mol.zoomTo(select)
        view_3d_mol.center(select, 10, true);

    }

}

$("#highlight_residues").click(highlight_residues);


/*$("#btn_download_selected").click(function(){
    var datatable_id = $("#datatable_id").val();    
    var dt = $("#" + datatable_id).DataTable();
    var complex_list = dt.column(0).data().toArray().join(", ");    
    $("#txt_complex_list").val(complex_list);
})*/

$('[data-toggle="tooltip"]').tooltip(); 

// IMPORT PDB
$("#btn_pdb_file").change(function() {
    upload_pdb($(this), "#input_pdb_file");
});

// SEARCH FROM PDB
$("#btn_pdb_id").click(function() {
    search_pdb("#input_pdb_file", $("#search_pdb_id").val());
});

// PREVENT BLAST AND PROBIS FORM SUBMIT WITH NO PARAMETERS
$("#form_probis_run").submit(function(e) {

    highlight_residues();

    if ($("#residues_list").val() == "" || $("#input_pdb_file").val() == "") {
        $("#feedback_probis").show().delay(5000).fadeOut();
        return false
    }
})

// PREVENT BLAST AND PROBIS FORM SUBMIT WITH NO PARAMETERS
$("#form_blast_run").submit(function(e) {

    if ($("#txt_sequence").val() == "") {
        $("#feedback_blast").show().delay(5000).fadeOut();
        return false
    }
})

// LOADING SAMPLE INPUTS
$("#loading_covid").click(function(){
    $("#search_pdb_id").val("6lu7");
    var loading_sample = true;
    search_pdb("#input_pdb_file", $("#search_pdb_id").val(), loading_sample);
})

// FOR CALL DISTRIBUTION CHART FOR EACH CLUSTER
/*function call_boxplot(cluster_name) {

    ajax = $.ajax({
        "method": "POST",
        "dataType": "json",
        "url": BASE_URL + "cluster/get_cluster_alignments/", 
        "data": {cluster_name: cluster_name},
        beforeSend: function() {
            var size = "40";
            var url = BASE_URL + "public/img/loading.svg";
            var loading_img = "<img src='" + url + "' height='" + size + "' width='" + size + "'>";                
            
            // ALTER LOADING CHART
            var div = $("#div_" + cluster_name);            
            div.html("loading_img");
        },
        success: function(response) {

            console.log("abc");
        },            
    });

}*/

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
