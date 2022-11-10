
        <!-- Bootstrap core JavaScript
            ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="<?php echo base_url(); ?>public/js/jquery-3.4.1.min.js"></script>
        <script src="<?php echo base_url(); ?>public/js/bootstrap.min.js"></script>
        <script src="<?php echo base_url(); ?>public/js/bootstrap-select.min.js"></script>

        <!--<script src="http://3Dmol.csb.pitt.edu/build/3Dmol-min.js"></script>-->
        <script src="<?php echo base_url(); ?>public/js/3Dmol-nojquery.js"></script>

        <script src="<?php echo base_url(); ?>public/DataTables/datatables.min.js"></script>
        <script src="<?php echo base_url(); ?>public/js/jquery-ui.js"></script>
        <script src="<?php echo base_url(); ?>public/js/util.js"></script>
        <script src="<?php echo base_url(); ?>public/js/d3.v4.min.js"></script>

        <script src="<?php echo base_url(); ?>public/js/font_awesome_5.js"></script>
        

        <?php if (isset($scripts)) {
            foreach ($scripts as $script_name) {
                if ($script_name == "all_datatable_buttons_requires") {?>
        <!-- DATATABLE'S BUTTONS REQUIRED SCRIPTS -->
        <script src="https://cdn.datatables.net/buttons/1.6.2/js/dataTables.buttons.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.6.2/js/buttons.flash.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.6.2/js/buttons.html5.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.6.2/js/buttons.print.min.js"></script>
                <?php
                } else {
                    $src = base_url() . "public/js/" . $script_name; ?>
        <script src="<?=$src?>"></script>
                <?php }
             }
        } ?>

    </body>
</html>