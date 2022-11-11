<?= $this->extend('template') ?>
<?= $this->section('conteudo') ?>

<div class="container-fluid" style="padding: 50px">

	<div id="download">
		<h2 style="margin-bottom: 15px"><strong>Sequence search results (BLAST)</strong></h2>
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <h5><strong>Query sequence</strong></h5>
                <h5 style="width: 600px; display: inline-block; word-wrap:break-word;"><?php echo $sequence; ?></h5>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <a id="btn_download_selected" class="btn btn-info btn-block" href="#" data-toggle="modal" data-target="#modal_download_selected">
                            Download complex&nbsp;<i class="fas fa-download"></i>
                        </a>
                    </div>
                    <br><br>
                    <div class="col-md-12 col-sm-12">
                        <a id="btn_advanced_search" class="btn btn-warning btn-block" href="#" data-toggle="modal">
                            Advanced search&nbsp;<i class="fas fa-filter"></i>
                        </a>
                    </div>
                </div>
            </div>
        <!--<form action="<?php echo base_url(); ?>blast" method="post" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-6">
                    <p class="btn btn-default btn-sm" disabled="disabled">Query</p>
                </div>
                <div class="col-md-6" style="text-align: right">
                    <div class="btn-group btn-group-sm" data-toggle="buttons" style="text-align: right">
                        <button class="btn btn-default" disabled="disabled">Search for</button>
                        <label class="btn btn-default active">
                            <input type="radio" name="search" value="peptides" CHECKED>Peptide
                        </label>
                        <label class="btn btn-default">
                            <input type="radio" name="search" value="receptors">Protein
                        </label>                        
                    </div>
                    <input type="submit" class="btn btn-success btn-sm" value="NEW BLAST">

                </div>
            </div>
            <textarea class="form-control" name="sequence" rows="4" placeholder="Your query" style="color:#777"><?php echo $sequence; ?></textarea>
        </form>-->

        <table id="table_search" class="table table-hover table-striped" style="margin-top: 40px">
            <thead>
                <tr class="table-primary">
                    <th class="col-md-1">Subject</th>
                    <th class="col-md-1">Clusters</th>
                    <th class="col-md-1">Protein</th>                    
                    <th>Peptide</th>
                    <th>Sequence</th> 
                    <th>Lenght</th>                    
                    <th>Score</th>    
                    <th>Coverage</th>
                    <th class="col-md-2">Identity</th>
                    <!--<th>Similarity (positives)</th>-->                
                </tr>
            </thead>
            <tbody>
                <?php foreach($result as $r){
                    $nome = explode("|",$r[1]);
                    
                    ?>


                <tr>
                    <td><a href="<?php echo base_url().'index.php/complex/view/'.$nome[0]; ?>"><strong><?php echo strtoupper($nome[0]); ?></strong></a></td>
                    <td><?php if(isset($r[12])) echo $r[12]; ?></td>

                    <td><?php if(isset($nome[1])) echo str_replace('_', ' ', $nome[1]); ?></td>
                    <td><?php if(isset($nome[2])) echo str_replace('_', ' ', $nome[2]); ?></td>
                    <td><?php 
                    if(isset($nome[3])){
                        if(substr($nome[3],-5,5) == '[...]'){
                            echo '<a href="'.base_url().'index.php/complex/view/'.strtoupper($nome[0]).'" title="See complete sequence">'.$nome[3].'</a>';
                        }
                        else{
                            echo $nome[3]; 
                        }
                    }
                    else{
                        echo '-';
                    }
                        
                    ?></td>
                    <td><?php echo $r[4]; ?></td>                    
                    <td><?php echo $r[3]; ?></td>
                    <td>
                        <?php $scov = 1+(100*($r[6]-$r[5]+1)/$r[4]); ?>                        
                        <?php $qcov = 1+(100*($r[9]-$r[8]+1)/$r[7]); ?>
                        <?php $pos = (100*$r[11]/$r[7]); ?>

                        <div class="progress" style="height: 10px; margin-bottom: 5px">
                            <div class="progress-bar" role="progressbar" title="Subject" style="width:  <?php echo intval($scov); ?>%;"></div>
                        </div>
                        <div class="progress" style="height: 10px; margin-bottom: 5px">
                            <div class="progress-bar" role="progressbar" title="Query" style="width:  <?php echo intval($qcov); ?>%;"></div>
                        </div>
                    </td>
                    <td>                 
                        <div class="progress" style="height: 25px; margin-bottom: 5px">
                          <div class="progress-bar progress-bar-success" style="width: <?php echo $r[2]; ?>%; padding-top:2px"><?php echo (int)$r[2]; ?>%</div>
                          <div class="progress-bar progress-bar-danger" style="width: <?php echo 100-$r[2]; ?>%"></div>
                        </div>
                    </td>
                    <!--                       
                    <td>
                        <div class="progress" style="height: 25px; margin-bottom: 5px">
                          <div class="progress-bar progress-bar-success" style="width: <?php echo $pos; ?>%; padding-top:2px"><?php echo (int)$pos; ?>%</div>
                          <div class="progress-bar progress-bar-danger" style="width: <?php echo 100-$pos; ?>%"></div>
                        </div>
                    </td>       -->          
                </tr>
                <?php } ?>           
                
            </tbody>
			
        </table>
        <?php if(empty($result)){ echo 'No result found.'; }    ?>
    </div>
</div>
</div>

<?= $this->endSection() ?>
