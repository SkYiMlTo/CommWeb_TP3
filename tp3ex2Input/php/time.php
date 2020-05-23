<?php
$today = getdate();

$data = array('Il est : '.$today[hours].':'.$today[minutes].':'.$today[seconds], array("hours" => $today[hours], "minutes" => $today[minutes], "seconds" => $today[seconds]));

$json = json_encode($data);

print_r($json);
?>