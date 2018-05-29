//js.js
function AjoutPOL(){
  var txt= encodeURIComponent(document.getElementById('textOP').value);
  var num= encodeURIComponent((document.getElementById('numPOL').value)++);
  var url = "fonctions.php?fctn=ajoutPOL&textPOL="+txt+"&numPOL="+num;
  var xhr= getXMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
      affichageInfos();
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);
  var champs =document.getElementById("textPOL");
  for ( i =0;i <champs.length; i++) {
    champs[i].value="";
  }
}

//fonctions.js

var polText=document.getElementById('textPOL');


//Nouvelle NAV
        cttTextPOL = cttXML.getElementsByTagName("TextPOL");
        var txt11="";
        for (i=0;i<cttTextN.length;i++){

          xx=cttTextN[i].getElementsByTagName("number");{
            try{txt11=txt11  +"POL N°"+ decodeURIComponent(xx[0].firstChild.nodeValue)+" : ";}
            catch (er){txt11=txt11+"";}
          }

          xx=cttTextN[i].getElementsByTagName("text");{
            try{txt11=txt11  + decodeURIComponent(xx[0].firstChild.nodeValue)+ "\n";}
            catch (er){txt11=txt11+"\n";}
          }
          polText.style.display="block";
          document.getElementById('textOP').value="";        
      }
        pvText.innerHTML = txt11;