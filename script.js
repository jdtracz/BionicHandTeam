var CONTACT="CHANGE_ME@example.com";
var m=document.getElementById("m");m.textContent=CONTACT;m.href="mailto:"+CONTACT;
document.getElementById("f").addEventListener("submit",function(ev){ev.preventDefault();
var e=document.getElementById("e").value,r=document.getElementById("r").value;
location.href="mailto:"+CONTACT+"?subject="+encodeURIComponent("Bionic hand tests - "+r)+"&body="+encodeURIComponent("Please contact me about testing the bionic hand.\nRole: "+r+"\nEmail: "+e);});