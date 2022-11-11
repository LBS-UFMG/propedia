<?php defined('BASEPATH') OR exit('error php'); ?>

A PHP Error was encountered

Severity:    <?php echo $severity, "\n"; ?>
Message:     <?php echo $message, "\n"; ?>
Filename:    <?php echo $filepath, "\n"; ?>
Line Number: <?php echo $line; ?>

<?php if (defined('SHOW_DEBUG_BACKTRACE') && SHOW_DEBUG_BACKTRACE === TRUE): ?>

Backtrace:
<?php	dd(debug_backtrace()); ?>


<?php endif ?>
