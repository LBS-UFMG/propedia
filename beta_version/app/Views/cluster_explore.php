<?= $this->extend('template') ?>
<?= $this->section('conteudo') ?>

<div class="container">
   <br>   
   <div class="container-fluid">      
      <h1><?=ucfirst($cluster_type)?> Clusters</h1>
      <!--<div class="row">
         <div class="col-md-10"></div>
         <div class="col-md-2">
            <a id="download_centroids" onclick='send_to_download()' class="btn btn-success btn-block" href="#" data-toggle="modal" data-target="#modal_download_selected"
            style="display: none;">Download centroids&nbsp;<i class='fas fa-download'></i></a>
         </div>
      </div>-->
      <input id="cluster_type" value="<?=$cluster_type;?>" hidden></input>
      <input id="centroid_list" hidden></input>
      <input id="datatable_type" value="cluster_explore" hidden></input>
      <table id="dt_cluster_explore" class="table table-striped table-bordered">
         <thead>
            <tr class="tableheader">
               <th class="dt-center">Cluster Id</th>
               <th class="dt-center">Cluster Name</th>
               <th class="dt-center">Size</th>
               <th class="dt-center"><?=$alignment_value?></th>
               <th class="dt-center">Download</th>
               <!--<th class="dt-center">Centroid(s)</th>-->
            </tr>
         </thead>
         <tbody>
         </tbody>
      </table>
   </div>
   <br>
</div>

<?= $this->endSection() ?>
