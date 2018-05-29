<?php
case "ajoutPOL":ajoutTextPOL();break;

function ajoutTextPOL(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace=false;
  $dom->formatOutput=true;
  $dom->load('feuilledequart.xml');
  $nouveauText = $dom->createElement('TextPOL');
  $text=$dom->createElement('text', $_GET['textPOL']);
  $number=$dom->createElement('number',$_GET['numPOL']);
  $noeud=$dom->getElementsByTagName('actops')->item(0);
  $nouveauText->appendChild($text);
  $nouveauText->appendChild($number);
  $noeud->appendChild($nouveauText);
  $dom->save('feuilledequart.xml');
}
?>