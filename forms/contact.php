<?php
  $nomor = '6285814083661';
  $template = "Name: " . $_POST["name"] .
  "\nSubject: " . $_POST["subject"] . 
  "\n\nMessage: \n" . $_POST["message"];

  header("Location: https://wa.me/" . $nomor . "?text=" . urlencode($template));
?>
