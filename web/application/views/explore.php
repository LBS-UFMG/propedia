<style>
   .hidden{
      visibility:hidden;
      height: 0;
      padding:0 !important;
   }

   .dataTables_wrapper .dataTables_processing {
      position: absolute;
      padding: 100px;
      margin-top:-500px;
      color: white;
      height: 100vh;
      width: 100%;
      text-align: center;
      font-size: 2em;
      background:#19875455;
   }
</style>
<link rel="stylesheet" href="<?php echo base_url(); ?>public/css/bootstrap-select.min.css">

        
<div class="container-fluid">
   <div id="advanced_search" class="card p-3 small" style="border-left: #ccc 5px solid; background-color:#eee; color: #ccc; margin-bottom: 0">
      <div class="caption"> 
         <div class="row">
            <div class="col-md-12 col-sm-12">
               <label class="control-label label label-default">PDBs/Complex</label>
               <sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Separator: ',' (comma). Complex format:<PDB>_<Peptide chain>_<Protein chain>. E.g.: 1a1m_C_A">?</a></sup>
               <textarea rows="3" id="pdb_complex" type="text" class="form-control filter"  placeholder="1a1m_C_A, 1a1n, ..."><?php if (isset($complex_list)) echo $complex_list; ?></textarea>

            </div>
            <!--<div class="col-md-2 col-sm-12">
               <label class="control-label label label-default">Peptide chains</label>
               <input id="pep.peptide_chain" type="text" class="form-control filter filter-input" placeholder="C, A">
            </div>
            <div class="col-md-2 col-sm-12">
               <label class="control-label label label-default">Protein chains</label>
               <input id="rec.receptor_chain" type="text" class="form-control filter filter-input" placeholder="A, C">
            </div>-->
         </div>
         <div class="row" style="margin-top: 10px">   
            <div class="col-md-6 col-sm-12">
               <label for="id_organism" class="label label-default">Organism:</label>
               <!-- <select id="id_organism" class="form-control selectpicker filter filter-select" style="width: 100%" data-live-search="true" multiple title="-">                -->
                  
               <select id="id_organism" class="form-control" multiple title="-">         

                  <?php foreach ($organisms as $organism): ?>
                     <?="<option value=$organism->id_organism>$organism->organism</option>";?>
                  <?php endforeach; ?>
               </select>
            </div>
         <!--</div>
         <div class="row" style="margin-top: 10px">-->
            <div class="col-md-6 col-sm-12">
               <label for="id_group" class="label label-default">Groups:</label>
               <sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Groups are keywords derived from PDB classifications">?</a></sup>
               <!-- <select id="id_group" class="form-control selectpicker filter" style="width: 100%" data-live-search="true" multiple title="-"> -->
               <select id="id_group" class="form-control" multiple title="-">

                  <?php foreach ($groups as $group): 
                     $selected = $group->selected == 1 ? "selected" : "";
                     echo "<option $selected value=$group->id_group>$group->group</option>";
                  endforeach; ?>
               </select>

            </div>
         </div>
         <div class="row" style="margin-top: 10px">         
            <div class="col-md-4 col-sm-12 text-center" style="padding:0 25px">
               <label class="control-label label label-default" for="peptide_size">Peptide size (aa):</label>
               <input readonly type="text" id="peptide_size" class="filter-slider" style="border:0; font-weight:bold; background-color:#eee; ">
               <div id="peptide_size_slider"></div>
            </div>
            <div class="col-md-4 col-sm-12 text-center" style="padding:0 25px">
               <label class="control-label label label-default" for="receptor_size">Protein size (aa):</label>
               <input readonly type="text" id="receptor_size" class="filter-slider" style="border:0; font-weight:bold; background-color:#eee; ">
               <div id="receptor_size_slider"></div>
            </div>
            <div class="col-md-4 col-sm-12 text-center" style="padding:0 25px">
               <label class="control-label label label-default" for="resolution">Resolution (&#8491;):</label>
               <input readonly type="text" id="resolution" class="filter-slider" style="border:0; font-weight:bold; background-color:#eee; ">            
               <div id="resolution_slider"></div>
            </div>
         </div>
         <br>
         <div class="row">         
            <div class="col-md-4 col-sm-12">
               <input type="checkbox" class="form-check-input filter select.filter" id="is_ccd" default="">
               <label class="form-check-label text-muted" for="is_clustered">Only CCD<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Clusterable Complex Dataset">?</a></sup></label>
            </div>
            <div class="col-md-4 col-sm-12"></div>
            <div class="col-md-4 col-sm-12">
               <input type="checkbox" class="form-check-input filter" id="is_nmr" default="checked" checked>
               <label class="form-check-label text-muted" for="is_nmr">Include NMR</label>  
         </div>
               <!--<input type="checkbox" class="form-check-input filter filter-chbox-1" id="c.multiple_receptors_binding" default="checked">
               <label class="form-check-label text-muted" for="c.multiple_receptors_binding">Allow peptide with multiple protein bound</label>
            </div>
            <div class="row">    
            </div>
            <div class="col-md-6 col-sm-12">
               <input type="checkbox" class="form-check-input filter filter-chbox-1" id="c.is_nmr" default="checked">
               <label class="form-check-label text-muted" for="p.resolution">Include NMR</label>                        
            </div> 
            <div class="col-md-6 col-sm-12">
               <input type="checkbox" class="form-check-input filter filter-chbox-1" id="c.peptide_nonstandard_residue" default="checked">
               <label class="form-check-label text-muted" for="c.peptide_nonstandard_residue">Allow non-standard residues in peptide</label>        
            </div>-->      
<!--<div class="col-md-4 col-sm-12">
<input checked="checked" type="checkbox" class="form-check-input filter filter-chbox-2" id="cl_s.id_cluster_sequence">
<label class="form-check-label text-muted" for="cl_s.id_cluster_sequence">has Sequence Cluster</label>
</div>
<div class="col-md-4 col-sm-12">
<input checked="checked" type="checkbox" class="form-check-input filter filter-chbox-2" id="cl_c.id_cluster_binding">
<label class="form-check-label text-muted" for="cl_c.id_cluster_binding">has Contact Cluster</label>
</div>
<div class="col-md-4 col-sm-12">
<input checked="checked" type="checkbox" class="form-check-input filter filter-chbox-2" id="cl_i.id_cluster_interface">
<label class="form-check-label text-muted" for="cl_i.id_cluster_interface">has Interface Cluster</label>          
<div id="resolution_slider"></div>
</div>-->
</div>
<br>
<div class="row">         

<div class="col-md-2 col-sm-2">
      <button id="clear_filters" type="reset" class="btn btn-default">Clear filter</button>            
   </div>
   <div class="offset-8 col-md-2 col-sm-2">
      <button id="apply_filter" type="button" class="btn btn-primary w-100">Apply filter&nbsp;<i class="fas fa-filter"></i></button>
      <p class="text-success text-end mb-0 pb-0 hidden" id="filter_applied">Filter applied.</p>
   </div>
<!--
<div class="col-md-2 col-sm-2 col-md-offset-6 col-sm-offset-6">
<button type="button" class="btn btn-primary btn-block">Download</button>
</div>-->
</div>
</div>

</div>

<p class="text-center"><button class="btn btn-light border w-100" id="adv_search_button">Advanced search ▲</a></button>
   <script>
      window.onload = function() {

         $("#apply_filter").click(function(){
            $("#filter_applied").removeClass("hidden");
            setTimeout(function(){
               $('#filter_applied').addClass("hidden");
            }, 3000);
         });

         $("#adv_search_button").click(function(){

            var statusBotao = $("#adv_search_button").hasClass("active");

            if(statusBotao == false){
               $('#adv_search_button').addClass("active");
               $('#adv_search_button').text("Advanced search ▲");
               $('#advanced_search').removeClass("hidden");
            }
            else{
               $('#adv_search_button').removeClass("active");
               $('#adv_search_button').text("Advanced search ▼");
               $('#advanced_search').addClass("hidden");

            }
         });
      };
   </script>


   <div class="container-fluid" style="padding-bottom: 50px">
      
      <div class="row">
         <div class="col-md-10 col-sm-12">
            <h2>Explore <a class="btn btn-light" id="dupli">hide duplicates PDB</a></h2>
         </div>
         <!--<div class="col-md-2 col-sm-12">
            <input id="datatable_id" value="dt_complex_explore" hidden></input>            
         </div>-->
      </div>

      <div class="row mb-2">
         <div class="col-md-3 col-sm-12">
            <a id="btn_download_sequence_centroid" class="btn btn-outline-primary w-100" href="#" data-toggle="modal" data-target="#modal_download_selected">Download sequence centroids&nbsp;<i class="fas fa-font"></i></a>
         </div>

         <div class="col-md-3 col-sm-12">
            <a id="btn_download_interface_centroid" class="btn btn-outline-primary w-100" href="#" data-toggle="modal" data-target="#modal_download_selected">Download interface centroids&nbsp;<i class="fas fa-bacon"></i></a>
         </div>

         <div class="col-md-3 col-sm-12">
            <a id="btn_download_binding_centroid" class="btn btn-outline-primary w-100" href="#" data-toggle="modal" data-target="#modal_download_selected">Download binding centroids&nbsp;<i class="fab fa-hubspot"></i></a>
         </div>

         <div class="col-md-3 col-sm-12">
            <a id="btn_download_selected" class="btn btn-outline-primary w-100" href="#" data-toggle="modal" data-target="#modal_download_selected">Download complex&nbsp;<i class="fas fa-download"></i></a>
         </div>

      </div>

      <style>
         .paginate_button{
            margin: 5px;
            border: 1px solid #0d6efd;
            border-radius: 5px;
            padding: 5px 10px;
         }         
         .paginate_button:hover{
            background:#eee;
         }
      </style>
      <div class="row">
         <table id="dt_complex_explore" class="table table-striped table-hover table-sm small">
            <thead>
               <tr class="tableheader">
                  <th class="dt-center">Complex<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="PDB - peptide chain - protein chain">?</a></sup></th>

                  <th class="dt-center">Peptide&nbsp;size<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Peptide length in amino acids">?</a></sup></th>

                  <th class="dt-center">Protein&nbsp;size<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Protein length in amino acids">?</a></sup></th>

                  <th class="dt-center">Resolution&nbsp;(&#8491;)<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="X-Ray resolution">?</a></sup></th>
                  <th>Protein Name</th>
                  <!--<th>Organism</th>-->
                  <th>Classification</th>
                  <th>Clusters</th>
                  <th>Download</th>
               </tr>
            </thead>
            <tbody>
            </tbody>
         </table>
      </div>
   </div>
   <br>
</div>

