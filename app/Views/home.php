<?= $this->extend('template') ?>
<?= $this->section('conteudo') ?>

<div id="hero">
  <div id="overlay_hero">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-xs-12" style="padding: 20px 30px;">
          <h2>A database of peptide-protein interactions</h2>
          <p style="font-size:16px; padding:15px 0; text-align: justify;">
            PROPEDIA is a database of peptide-protein complexes clusterized in three methodologies: based on <strong>peptide sequences</strong>; based on <strong>structure interface</strong>; and based on <strong>binding sites</strong>. PROPEDIA main goal is to give new insights into peptide design of biotechnological interests.
          </p>
          <a href="<?php echo base_url('explore'); ?>" class="btn btn-primary">Explore v2.3</a>
          <a href="http://bioinfo.dcc.ufmg.br/propedia-v1" class="btn btn-outline-primary">Back to Propedia v1.0</a>

          <!--<a href="#" data-toggle="modal" class="btn btn-success btn-lg" data-target="#tutorial">Tutorial</a>-->
        </div>
        <div class="col-md-5 col-xs-12">
          <img title="Propedia" src="<?php echo base_url('/img/fig_pedro2.png'); ?>" class="w-100" style="margin-top:-50px">
        </div>
      </div>
      <div id="run" style="margin:60px"></div>
    </div>
  </div>
</div>

<div id="info" class="container">
  <div class="row">
    <div class="col-xs-12 col-lg-3">
      <div class="card p-2" style="border-left: #5cb85c 5px solid; color: #ccc">
        <div class="caption">
          <div class="row">
            <div class="col-md-4 text-success" style="font-size: 72px">
              <i class="fas fa-database"></i>
            </div>
            <div class="col-md-8 text-end">
              <h1 class="mt-3">
                <strong>
                  <a class="text-success" href="<?php echo base_url('/explore'); ?>">
                    <?=number_format($complex_number)?>
                  </a>
                </strong>
              </h1>
              <p class="text-muted"><strong>PEPTIDE-PROTEIN COMPLEXES*</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-3">
      <div class="card p-2" style="border-left: #5cb85c 5px solid; color: #ccc">
        <div class="caption">
          <div class="row">
            <div class="col-md-4 text-success" style="font-size: 72px">
              <i class="fas fa-font"></i>
            </div>
            <div class="col-md-8 text-end">
              <h1><strong><a class="text-success" href="<?php echo base_url('/cluster/sequence'); ?>">
                    </ /?=number_format($cluster_info["number_cluster_sequence"])?>
                  </a></strong>
              </h1>
              <p class="text-muted"><strong>SEQUENCE CLUSTERS</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-3">
      <div class="card p-2" style="border-left: #5cb85c 5px solid; color: #ccc">
        <div class="caption">
          <div class="row">
            <div class="col-md-4 text-success" style="font-size: 72px">
              <i class="fas fa-bacon"></i>
            </div>
            <div class="col-md-8 text-end">
            <h1 class="mt-3"><strong><a class="text-success" href="<?php echo base_url('/cluster/interface'); ?>">
                    <?=number_format($cluster_info["number_cluster_interface"])?>
                  </a></strong>
              </h1>
              <p class="text-muted"><strong>INTERFACE CLUSTERS</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-3">
      <div class="card p-2" style="border-left: #5cb85c 5px solid; color: #ccc">
        <div class="caption">
          <div class="row">
            <div class="col-md-4 text-success" style="font-size: 72px">
              <i class="fab fa-hubspot"></i>
            </div>
            <div class="col-md-8 text-end">
              <h1 class="mt-3"><strong><a class="text-success" href="<?php echo base_url('/cluster/binding'); ?>">
                    <<h1 class="mt-3">?=number_format($cluster_info["number_cluster_binding"])?>
                  </a></strong>
              </h1>
              <p class="text-muted"><strong>BINDING SITE CLUSTERS</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h5 class="text-muted">*Last updated on: Dec 2022</h5>
</div>

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-lg-12">
      <div class="alert alert-success shadow my-4 " style="border-left: green 5px solid">
        <div class="caption">
          <div class="row">
            <div class="col-md-12 p-4">
              <h4 class=""><strong>How to cite:</strong></h4>
              <p class=" small" id="browse">Pedro M. Martins, Lucianna H. Santos, Diego Mariano, Felippe C. Queiroz, Luana L. Bastos, Isabela de S. Gomes, Pedro H. C. Fischer, Rafael E. O. Rocha, Sabrina A. Silveira, Leonardo H. F. de Lima, Mariana T. Q. de Magalhães, Maria G. A. Oliveira & Raquel C. de Melo-Minardi (2021). <a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03881-z">Propedia: a database for protein–peptide identification based on a hybrid clustering algorithm.</a> BMC Bioinformatics, 22(1), 1-20.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- 
<div class="container">
  <h2 style="padding: 20px 0 10px 0"><strong>Case Studies</strong>
  </h2>
  <h4 class="lead text-muted">
    SARS-CoV-2 main protease interactions with peptides (PDB id: 6lu7)
    <a href="<?= base_url('search/binding/covid'); ?>" class="btn btn-link">View</a>
  </h4>
  <h4 class="lead text-muted">
    Anti-carsia Protease Inhibitor
    <a href="<?= base_url('search/binding/protease'); ?>" class="btn btn-link">View</a>
  </h4>
</div> -->


<div class="container" id="browse_dataset">
  <h2 class="mt-5 mb-3"><label class="badge bg-success me-2">New</label><strong>Browse by specific datasets</strong> <a href="<?= base_url('/explore'); ?>" class="btn btn-outline-primary">View all</a></h2>
  <p class="lead text-muted">Propedia is composed of many datasets of protein-peptide complexes. You can explore and construct your queries clicking on "View all" button or browse by the most accessed datasets shown below.</p>


  <form id="dataset_filter" method="post" action="<?= base_url('/explore'); ?>">
    <div class="row">

      <input hidden id="groups_selected" name="groups_selected" value="">

      <!-- COLUNA ESQUERDA -->
      <div class="col-12 col-lg-6" id="bubble">

        <div class="card" style="border-left: #ccc 5px solid; color: #ccc; height: 712px">
          <div class="caption">
            <div id="bubble_chart" class="svg-container"></div>
          </div>
        </div>
      </div>

      <!-- COLUNA DIREITA -->
      <div class="col-12 col-lg-6">

        <div class="row g-2">
          <div class="col-6" onclick="showDataset([7])" title="Click to explore this dataset">
            <div class="card p-2 specific_db" style="border-left: #ff7f0e 5px solid; color: #ff7f0e">
              <div class="caption">
                <div class="row">
                  <div class="col-md-12 text-center text-muted">
                    <i style="font-size: 72px" class="fab fa-cloudsmith"></i>
                    <p class="text-muted">PROPEDIA<br><strong>ANTIMICROBIAL</strong>DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6" onclick="showDataset([72])" title="Click to explore this dataset">
            <div class="card p-2 specific_db" style="border-left: #d62728 5px solid; color: #d62728">
              <div class="caption">
                <div class="row">
                  <div class="col-md-12 text-center text-muted">
                    <i style="font-size: 72px" class="fas fa-fire"></i>
                    <p class="text-muted">PROPEDIA<br><strong>VIRAL</strong>DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-6" onclick="showDataset([36, 41, 42, 43, 49, 53, 54, 68])" title="Click to explore this dataset">
            <div class="card p-2 specific_db" style="border-left: #1e90ff 5px solid; color: #1e90ff">
              <div class="caption">
                <div class="row">
                  <div class="col-md-12 text-center text-muted">
                    <i style="font-size: 72px" class="fas fa-ban"></i>
                    <p class="text-muted">PROPEDIA<br><strong>ENZYME</strong>DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6" onclick="showDataset([67])" title="Click to explore this dataset">
            <div class="card p-2 specific_db" style="border-left: #5cb85c 5px solid; color: #ccc">
              <div class="caption">
                <div class="row">
                  <div class="col-md-12 text-center text-muted">
                    <i style="font-size: 72px" class="fas fa-water"></i>
                    <p class="text-muted">PROPEDIA<br><strong>TRANSCRIPTION</strong>DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card p-2 specific_db" style="border-left: #ccc 5px solid; color: #ccc">
              <div class="caption">
                <div class="row">
                  <div class="col-md-12 text-center text-muted">
                    <i style="font-size: 72px" class="fas fa-atom"></i>
                    <p class="text-muted"><br><strong>OTHERS</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6" onclick="showDataset([35])" title="Click to explore this dataset">
            <div class="card p-2 specific_db" style="border-left: #ff1493 5px solid; color: #ff1493">
              <div class="caption">
                <div class="row">
                  <div class="col-md-12 text-center text-muted">
                    <i style="font-size: 72px" class="fas fa-venus-mars"></i>
                    <p class="text-muted">PROPEDIA<br><strong>HORMONE</strong>DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6" onclick="showDataset([66])" title="Click to explore this dataset">
            <div class="card p-2 specific_db" style="border-left: #00ff00 5px solid; color: #00ff00">
              <div class="caption">
                <div class="row">
                  <div class="col-md-12 text-center text-muted">
                    <i style="font-size: 72px" class="fas fa-skull-crossbones"></i>
                    <p class="text-muted">PROPEDIA<br><strong>TOXIN</strong>DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card p-2 specific_db" style="border-left: gold 5px solid; color: #ccc">
              <div class="caption">
                <div class="row">
                  <div class="col-md-12 text-center text-muted">
                    <i style="font-size: 72px" class="fas fa-brain"></i>
                    <p class="text-muted">PROPEDIA<br><strong>NEUROPEPTIDE</strong>DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- row -->
  </form>
</div>

<div class="row">


</div>
</div>
<div id="explore">
  <div class="container">
    <h2><strong>Complex samples</strong></h2>
    <table id="dt_complex_home" class="table table-striped table-hover" style="width:100%; ">
      <thead>
        <tr class="tableheader">
          <th class="dt-center">Complex<sup><a class="tip" href="#" data-placement="top" data-toggle="tooltip" title="PDB - peptide chain - receptor chain">?</a></sup></th>
          <th class="dt-center">Peptide&nbsp;size<sup><a class="tip" href="#" data-placement="top" data-toggle="tooltip" title="Peptide length in amino acids">?</a></sup></th>
          <th class="dt-center">Receptor&nbsp;size<sup><a class="tip" href="#" data-placement="top" data-toggle="tooltip" title="Receptor length in amino acids">?</a></sup></th>
          <th class="dt-center">Resolution&nbsp;(&#8491;)<sup><a class="tip" href="#" data-placement="top" data-toggle="tooltip" title="X-Ray resolution">?</a></sup></th>
          <th>Protein Name</th>
          <th>Classification</th>
          <th>Clusters</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    <br><br>
    <a class="btn btn-outline-success btn-lg d-block" href="<?php echo base_url('explore'); ?>" role="button">Show more...</a>
  </div>
</div>


<?= $this->endSection() ?>
