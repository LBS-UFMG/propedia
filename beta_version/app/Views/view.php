<?= $this->extend('template') ?>
<?= $this->section('conteudo') ?>

<div class="container">   
   <div class="container-fluid">
      <h2>Complex Viewer</h2>
      <h4>Nome</h4>
   </div>
   <br>
</div>

<div class="container-fluid">
<div class="row">
<div class="col-md-4 col-xs-12">
	<?php

		$amino = array(	"A" => "Alanina",
			"R" => "Arginina",
			"N" => "Asparagina",
			"D" => "Aspartato",
			"C" => "Cisteína",
			"Q" => "Glutamina",
			"E" => "Glutamato",
			"G" => "Glicina",
			"H" => "Histidina",
			"I" => "Isoleucina",
			"L" => "Leucina",
			"K" => "Lisina",
			"M" => "Metionina",
			"F" => "Fenilalanina",
			"P" => "Prolina",
			"S" => "Serina",
			"T" => "Treonina",
			"W" => "Triptófano",
			"Y" => "Tirosina",
			"V" => "Valina"); 
	?>

	<?php foreach($protein as $row): $dic = [];?>
    
    <!--<script src="http://3Dmol.csb.pitt.edu/build/3Dmol-min.js"></script>-->
<script src="<?php echo base_url(); ?>public/js/3dmol.js"></script>    
<script type="text/javascript">
    var h = screen.height-150; 
    $(document).ready(function(){
     $("#pdb").css("height", h);
     $("#seq").css("height", h);
    });</script>

	<div id="pdb" style="min-height: 550px; margin:10px 0; width: 100%; position: relative;" class='viewer_3Dmoljs' data-href="<?php echo base_url(); ?>public/db/<?php echo $row->pdb;?>" data-backgroundcolor='0xffffff' data-style='cartoon:color=spectrum'></div>
    <a href="<?php echo base_url(); ?>public/db/<?php echo $row->pdb;?>">Download PDB file</a><br>
	</div>


	<div id="seq" class="col-md-8 col-xs-12" style="padding: 18px 40px; text-align: justify; overflow: auto">

        <h1><i><?php echo $row->organism; ?></i> β-glucosidase</h1>

		<span style="color: #09b0b2;width: 5em;display: inline-block; vertical-align: top; font-size: 130%; text-align: right">Protein: </span>

		<span style="display: inline-block; vertical-align: top; margin-top: 0; padding-top: 0; padding-left: .5em; border-left-width: 4px; margin-left: 4px; border-left-style: solid; box-sizing: border-box;border-left-color: #99c6d7"><b><?php echo $row->protein_name; ?></b><br></span>
		<br>
		<span style="color: #09b0b2;width: 5em;display: inline-block; vertical-align: top; font-size: 130%; text-align: right">Organism: </span>
		<span style="display: inline-block; vertical-align: top; margin-top: 0; padding-top: 0; padding-left: .5em; border-left-width: 4px; margin-left: 4px; border-left-style: solid; box-sizing: border-box;border-left-color: #fcdf99"><b><i><?php echo $row->organism; ?></i></b><br></span>
		<br>
		<span style="color: #09b0b2;width: 5em;display: inline-block; vertical-align: top; font-size: 130%; text-align: right">Lenght: </span>
        <span style="display: inline-block; vertical-align: top; margin-top: 0; padding-top: 0; padding-left: .5em; border-left-width: 4px; margin-left: 4px; border-left-style: solid; box-sizing: border-box;border-left-color: #fcaa99"><b><?php echo $row->lenght; ?></b><br></span>
        <br>

        <span style="color: #09b0b2;width: 5em;display: inline-block; vertical-align: top; font-size: 130%; text-align: right">UniprotID: </span>
        <span style="display: inline-block; vertical-align: top; margin-top: 0; padding-top: 0; padding-left: .5em; border-left-width: 4px; margin-left: 4px; border-left-style: solid; box-sizing: border-box;border-left-color: #99b6c1"><b><a target="_blank" href="https://www.uniprot.org/uniprot/<?php echo $row->UNIPROT; ?>"><?php echo $row->UNIPROT; ?></a></b><br></span>

        <!-- change title -->
        <script type="text/javascript">

            $(document).ready(function() {
                document.title = 'GLUTANTBASE | <?php echo $row->organism; ?> β-glucosidase';
            });

        </script>

		<table id="nomeQualquer">
			<div style="font-family:monospace;">
				<div class="btn-group btn-group-xs" role="group">
                    <?php 

                    $len = strlen($row->seq); $sequence =  str_split($row->seq);
					$count = 1;
					$pos = 1;
					$position = array();
					$colored = array();	
                    $ss = $row->ss; #estrutura secundaria
                    $docking = $row->docking;

                    foreach($sequence as $pos_mut): ?>
                        <?php # ********************* PRIMEIRO NUMERO ********************* --> ?>
						<?php if(($pos % 35)==1): ?>
							<div style="font-family: monospace;">
								<div class="btn-group btn-group-xs" role="group" style="margin-top:25px">
									<button type="button" class="btn input-group-addon" data-toggle="tooltip" data-placement="top" title="Tooltip on top" style="width: 40px"><?php echo $pos; ?></button>

						<?php endif;?>
                        <?php #  ********************* FIM PRIMEIRO NUMERO ********************* --> ?>
                        
                        <?php #  ******************** RESÍDUO DE AMINOACIDO ******************** --> ?>

                        <button type="button" 
                            onmouseover="selectID(glviewer,<?php echo $pos;?>)" 
                            class="btn btn-<?php echo $cores[$pos]; ?>" 
                            style="<?php echo $cor_texto[$pos]; 
                                switch ($ss[$pos]) {
                                    case 'B':
                                        echo 'border-bottom: purple 10px solid'; break; #fita beta
                                    case 'E':
                                        echo 'border-bottom: purple 10px solid'; break;
                                    case 'H':
                                        echo 'border-bottom: gold 10px solid'; break; #alfahelice
                                    case 'G':
                                        echo 'border-bottom: gold 10px solid'; break;
                                    case 'I':
                                        echo 'border-bottom: gold 10px solid'; break;    
                                    default:
                                        echo 'border-bottom: #ccc 10px solid'; break; # T S - foram considerados loops
                                }

                            ?>" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="<?php echo $amino[$pos_mut] . "\n" . "Local position: " . $pos . "\n" . "Global position: " . $global_sequence[$pos]; ?>"
                        >
                            <?php echo $pos_mut; ?>                            
                        </button>

                        <?php #  *************** FIM RESÍDUO DE AMINOACIDO *************** --> ?>

                        <?php #  ********************* ULTIMO NUMERO ********************* --> ?>
						<?php if(($pos % 35)==0 or $pos == $len): ?>
							<button type="button" class="btn input-group-addon" style="width: 40px"><?php echo $pos; ?></button>
								</div>
							</div>
						<?php endif;?>
                        <?php #  ********************* FIM ULTIMO NUMERO ********************* --> ?>


						<?php $count ++;
						$pos ++;?>

					<?php endforeach; ?>

				</div>
			</div>
			<?php endforeach; ?>
		</table>

		<br>
        <div class="row">
            <div class="col-md-6">
                <button type="button" class="btn btn-primary" style="width: 10px"></button><?php echo " Acid/base catalytic "; ?>
                <br>		
        		<button type="button" class="btn btn-info" style="width: 10px"></button><?php echo " Conserved (> 50%) "; ?>
        		<br>
        		<button type="button" class="btn btn-danger" style="width: 10px"></button><?php echo " Conserved (> 80%) "; ?>
        		<br>
                <button type="button" class="btn btn-success" style="width: 10px"></button><?php echo " Extrapoled mutation "; ?>
            </div>
            <div class="col-md-6">
                <button type="button" class="" style="color:orange"><b>A</b></button><?php echo " Catalytic pocket (0-6.5Å from ligand) "; ?>
                <br>
                <button type="button" class="" style="width: 20px;background-color:gold; border: 1px solid gold"> </button><?php echo " α-helix | 3-helix | π-helix "; ?>
                <br>
                <button type="button" class="" style="width: 20px;background-color:purple; border: 1px solid purple"> </button><?php echo " β-bridge | β-ladder | β-strand "; ?>
                <br>
                <button type="button" class="" style="width: 20px; background-color:#ccc"> </button><?php echo " Loop | bend | hydrogen bonded turn"; ?>
                <br>
                
        	</div>
        </div>
        <hr style="margin:50px 0">
        
        <h1 class="display">Extrapoled mutations</h1>

        
        <?php 

        # [0] mutacao; [1] pose_1_celobiose_selvagem; [2] pose_1_celobiose_mutante; [3] pose_1_glicose_selvagem; [4] pose_1_glicose_mutante; 
        # [5] mutacao; [6] pose_1-3_celobiose_selvagem; [7] pose_1-3_celobiose_mutante; [8] pose_1-3_glicose_selvagem; [9] pose_1-3_glicose_mutante; 
        # [10] mutacao; [11] pose_1-10_celobiose_selvagem; [12] pose_1-10_celobiose_mutante; [13] pose_1-10_glicose_selvagem; [14] pose_1-10_glicose_mutante; 
        $doc_aux = explode(';', $docking);

        for($i = 0; $i<count($doc_aux); $i=$i+5){

            $mut_atual = $doc_aux[$i];
            if(!isset($doc2[$mut_atual])){
                $doc2[$mut_atual] = array(); 
            }
            @array_push($doc2[$mut_atual], $doc_aux[$i+1]);
            @array_push($doc2[$mut_atual], $doc_aux[$i+2]);
            @array_push($doc2[$mut_atual], $doc_aux[$i+3]);
            @array_push($doc2[$mut_atual], $doc_aux[$i+4]);

        }
        
        foreach ($doc2 as $key => $doc){ 
            if($doc[0] != ''){ ?>
        
        <div class="row">
            <h4><?php $m = $key; 
                if($m[0] == "A"){
                    echo "<button class='btn btn-success'>".$m."</button>";
                }
                elseif($m[0] == "H"){
                    echo "<button class='btn btn-warning'>".$m."</button>";
                }
                elseif($m[0] == "E"){
                    echo "<button class='btn btn-danger'>".$m."</button>";
                }
                elseif($m[0] == "L"){
                    echo "<button class='btn btn-info'>".$m."</button>";
                }
                elseif($m[0] == "V"){
                    echo "<button class='btn btn-primary'>".$m."</button>";
                }
                ?> | Cellobiose docking</h4>
            <table class="table table-hover table-listred">
                <tr>
                    <th>Poses (avg)</th>
                    <th>Affinity (wild)</th>
                    <th>Affinity (mutant)</th>
                    <th>ΔAffinity</th>
                    <th>ΔAffinity expected</th>
                    <th>Status</th>
                </tr>
                <tr class="<?php if(($doc[1]-$doc[0]) < 0){ echo 'bg-success'; } else{ echo 'bg-danger'; } ?>">
                    <td>1</td>
                    <td><?php echo $doc[0]; ?></td>
                    <td><?php echo $doc[1]; ?></td>
                    <td><?php echo $doc[1]-$doc[0]; ?></td>
                    <td>ΔAffinity < 0</td>
                    <td><?php if(($doc[1]-$doc[0]) < 0){ echo '✓'; } else{ echo 'x'; } ?></td>
                </tr>
                <tr class="<?php if(($doc[5]-$doc[4]) < 0){ echo 'bg-success'; } else{ echo 'bg-danger'; } ?>">
                    <td>1-3</td>
                    <td><?php echo $doc[4]; ?></td>
                    <td><?php echo $doc[5]; ?></td>
                    <td><?php echo $doc[5]-$doc[4]; ?></td>
                    <td>ΔAffinity < 0</td>
                    <td><?php if(($doc[5]-$doc[4]) < 0){ echo '✓'; } else{ echo 'x'; } ?></td>
                </tr>
                <tr class="<?php if(($doc[9]-$doc[8]) < 0){ echo 'bg-success'; } else{ echo 'bg-danger'; } ?>">
                    <td>1-10</td>
                    <td><?php echo $doc[8]; ?></td>
                    <td><?php echo $doc[9]; ?></td>
                    <td><?php echo $doc[9]-$doc[8]; ?></td>
                    <td>ΔAffinity < 0</td>
                    <td><?php if(($doc[9]-$doc[8]) < 0){ echo '✓'; } else{ echo 'x'; } ?></td>
                </tr>
            </table>
        </div>

        <div class="row">
           <h4><?php $m = $key; 
                if($m[0] == "A"){
                    echo "<button class='btn btn-success'>".$m."</button>";
                }
                elseif($m[0] == "H"){
                    echo "<button class='btn btn-warning'>".$m."</button>";
                }
                elseif($m[0] == "E"){
                    echo "<button class='btn btn-danger'>".$m."</button>";
                }
                elseif($m[0] == "L"){
                    echo "<button class='btn btn-info'>".$m."</button>";
                }
                elseif($m[0] == "V"){
                    echo "<button class='btn btn-primary'>".$m."</button>";
                }
                ?> | Glucose docking</h4>
            <table class="table table-hover table-listred">
                <tr>
                    <th>Poses (avg)</th>
                    <th>Affinity (wild)</th>
                    <th>Affinity (mutant)</th>
                    <th>ΔAffinity</th>
                    <th>ΔAffinity expected</th>
                    <th>Status</th>
                </tr>
                <tr class="<?php if(($doc[3]-$doc[2]) > 0){ echo 'bg-success'; } else{ echo 'bg-danger'; } ?>">
                    <td>1</td>
                    <td><?php echo $doc[2]; ?></td>
                    <td><?php echo $doc[3]; ?></td>
                    <td><?php echo $doc[3]-$doc[2]; ?></td>
                    <td>ΔAffinity > 0</td>
                    <td><?php if(($doc[3]-$doc[2]) > 0){ echo '✓'; } else{ echo 'x'; } ?></td>
                </tr>
                <tr class="<?php if(($doc[7]-$doc[6]) > 0){ echo 'bg-success'; } else{ echo 'bg-danger'; } ?>">
                    <td>1-3</td>
                    <td><?php echo $doc[6]; ?></td>
                    <td><?php echo $doc[7]; ?></td>
                    <td><?php echo $doc[7]-$doc[6]; ?></td>
                    <td>ΔAffinity > 0</td>
                    <td><?php if(($doc[7]-$doc[6]) > 0){ echo '✓'; } else{ echo 'x'; } ?></td>
                </tr>
                <tr class="<?php if(($doc[11]-$doc[10]) > 0){ echo 'bg-success'; } else{ echo 'bg-danger'; } ?>">
                    <td>1-10</td>
                    <td><?php echo $doc[10]; ?></td>
                    <td><?php echo $doc[11]; ?></td>
                    <td><?php echo $doc[11]-$doc[10]; ?></td>
                    <td>ΔAffinity > 0</td>
                    <td><?php if(($doc[11]-$doc[10]) > 0){ echo '✓'; } else{ echo 'x'; } ?></td>
                </tr>
            </table>
        </div>
        <?php } # foreach 
        } # if ?>

		<br><br><br>
        <h3>Methodology</h3>
        <div class="row">
        <div class="col-12">
        <div class="thumbnail" style="border-left: #5cb85c 5px solid; color: #ccc">
        <div class="caption">         
        <h4>Comparative modeling</h4>       
        <p>Three-dimensional structures were modeled by homology using <a href="https://salilab.org/modeller/" target="_blank">MODELLER</a>. Sequences were collected in <a href="https://uniprot.org" target="_blank">UniProt</a>. We searched for the E.C. number of beta-glucosidases (3.2.1.21) and collected sequences of family GH1 (~3000). For each sequence, we selected the structure of highest identity using <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi" target="_blank">BLAST</a> against the PDB database to be used as a template. Sequences with identity lower than 25% were discarded. 100 models were constructed for each sequence. The best model was selected using the lowest value of the DOPE score. Mutants were modeled using MODELLER's mutation script. The mutations were based on beneficial mutations described in the literature. </p>
        </div>
        </div>
        </div>
        </div>

        <div class="row">
        <div class="col-12">
        <div class="thumbnail" style="border-left: #FFB93F 5px solid; color: #ccc">
        <div class="caption">         
        <h4>Minimization</h4>       
        <p>PDB models were minimized using <a href="http://ambermd.org/" target="_blank">AMBER tools</a>. We performed 1000 steps of minimization in the vacuum (parameters: <code>imin=1, maxcyc=1000, ncyc=750, cut=10.0, ntb=0, igb=0</code>).</p>
        </div>
        </div>
        </div>
        </div>

        <div class="row">
        <div class="col-12">
        <div class="thumbnail" style="border-left: #06A2F7 5px solid; color: #ccc">
        <div class="caption">         
        <h4>Multiple alignment</h4>       
        <p>We performed multiple alignment using <a href="https://www.ebi.ac.uk/Tools/msa/clustalo/">Clustal Omega</a> (default parameters). We used Python scripts to detect conservation.</p>
        </div>
        </div>
        </div>
        </div>
        <div class="row">

        <div class="col-12">
        <div class="thumbnail" style="border-left: #F51873 5px solid; color: #ccc">
        <div class="caption">         
        <h4>Docking</h4>       
        <p>We performed docking of glucose (product) and cellobiose (substrate) for wild and mutant beta-glucosidases using <a href="http://vina.scripps.edu/" target="_blank">AutoDock Vina</a> (parameters: <code>exhaustiveness = 20; num_modes = 10</code>). The box center was defined using the median coordinate of the last atom of the two catalytic glutamates. The experiment was performed in triplicate. We collected ten poses for each docking and analyzed the average of affinity energies predicted by the software for (i) pose 1, (ii) poses 1-3, and (iii) poses 1-10.</p>
        </div>
        </div>
        </div>
        </div>
</div>
</div>
</div>

</div>

<!-- scripts -->
<script src="<?php echo base_url(); ?>public/js/jquery.min.js"></script>
<script src="<?php echo base_url(); ?>public/js/bootstrap.min.js"></script>
<script src="<?php echo base_url(); ?>public/js/3Dmol.js"></script>
<script>

// 3DMOL **********************************************************************
/* Select ID */
function selectID(glviewer,residues){
var res1 = residues;


glviewer.setStyle({},{line:{color:'grey'},cartoon:{color:'white'}}); /* Cartoon multi-color */
glviewer.setStyle({resi:res1},{stick:{colorscheme:'whiteCarbon'}}); 

glviewer.zoomTo({resi: res1}); 

glviewer.render();

}


function selectPDB(id){

var ids = id.split("_");
var mut = ids[1].replace("/","_");

try {
    var pos = mut.split("_");
    var pos1 = pos[0].substr(1,pos[0].length-2);
    var pos2 = pos[1].substr(1,pos[1].length-2);
    var pos1a = Number(pos1) - 1;
    var pos1d = Number(pos1) + 1;
    var pos2a = Number(pos2) - 1;
    var pos2d = Number(pos2) + 1;
    pos1a = pos1a.toString();
    pos1d = pos1d.toString();
    pos2a = pos2a.toString();
    pos2d = pos2d.toString();
}
catch(err) {
    var erro = 1;
}


var txt2 = "<?php echo base_url(); ?>public/db/<?php echo $row->pdb; ?>";

$.post(txt2, function(d) {

        moldata = data = d;

        // Creating visualization 
        glviewer2 = $3Dmol.createViewer("preview_contact", {
            defaultcolors : $3Dmol.rasmolElementColors
        });

        // Color background 
        glviewer2.setBackgroundColor(0xffffff);

        receptorModel = m = glviewer2.addModel(data, "pqr");

        // Name of the atoms 
        atoms = m.selectedAtoms({});
        for ( var i in atoms) {
            var atom = atoms[i];
            atom.clickable = true;
            atom.callback = atomcallback;
        }

        glviewer2.mapAtomProperties($3Dmol.applyPartialCharges);
        glviewer2.zoomTo();




        
        glviewer2.setStyle({},{stick:{colorscheme:'greenCarbon'}}); // Cartoon multi-color 
   

        
        glviewer2.render();

});

var txt3 = "<?php echo base_url(); ?>public/db/<?php echo $row->pdb; ?>";

$.post(txt3, function(d) {

        moldata = data = d;

        receptorModel = m = glviewer2.addModel(data, "pqr");

        glviewer2.mapAtomProperties($3Dmol.applyPartialCharges);
        glviewer2.zoomTo();     
        glviewer2.setStyle({resi: [pos1a,pos1,pos1d,pos2a,pos2,pos2d]},{stick:{colorscheme:'blueCarbon'}}); 
        glviewer2.render();

});

// write title
$('#pdb_origin_name').html(ids[1]);
$('#residues_pdb_origin_name').html(ids[2]+'/'+ids[3]);

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

}

$(document).ready(function(){



var txt = "<?php echo base_url(); ?>public/db/<?php echo $row->pdb; ?>";

$.post(txt, function(d) {

    moldata = data = d;

    /* Creating visualization */
    glviewer = $3Dmol.createViewer("pdb", {
        defaultcolors : $3Dmol.rasmolElementColors
    });

    /* Color background */
    glviewer.setBackgroundColor(0xffffff);

    receptorModel = m = glviewer.addModel(data, "pqr");

    /* Type of visualization */
    glviewer.setStyle({},{line:{color:'grey'},cartoon:{color:'white'}}); /* Cartoon multi-color */
    


    /* Name of the atoms */
    atoms = m.selectedAtoms({});
    for ( var i in atoms) {
        var atom = atoms[i];
        atom.clickable = true;
        atom.callback = atomcallback;
    }

    glviewer.mapAtomProperties($3Dmol.applyPartialCharges);
    glviewer.zoomTo();
    glviewer.render();
});

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
});

</script>

<?= $this->endSection() ?>
