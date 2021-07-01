var pres=document.getElementById("presentation");
var changer=document.getElementById("changer");
var exp=document.getElementById('experience');
var comp=document.getElementById('comp');
var conn=document.getElementById('conn');
var forma=document.getElementById('formation');
var test= true;
var mode= true;

var darkactive=document.getElementById('darka');
var darkder=document.getElementById('darkderoul');
var darkmod=document.getElementById('darkmode');
var conter="false"

function activemenu(){
    if(darkactive=document.activeElement){
        darkder.style.top="3.2vw";
    }
    else{
        alert(error);
    }
}

function disablemenu(){
    if(darkactive=document.activeElement){
        darkder.style.top="0vw";
    }
}

function lightmode(){
    if(darkmod.checked==true){
        document.getElementById('css').setAttribute('href', 'Lstyle.css');
    }

    if(darkmod.checked==false){
        document.getElementById('css').setAttribute('href', 'style.css');
    
    }
}


function cont(){    
    if (changer=document.activeElement){
        test=!test;
        console.log(test)
    }
    else{
        alert("non reussi")
    }
}

function teste(){
        if(test==true){
            pres.style.display="flex";
            changer.innerHTML="Expérience Pro";
            exp.style.display="none";
            comp.style.display="flex";
            conn.style.display="flex";
            forma.style.display="none";

        }

        if(test==false){
            pres.style.display="none";
            changer.innerHTML="Accueil";
            exp.style.display="flex";
            comp.style.display="none";
            conn.style.display="none";
            forma.style.display="flex";
        }

    }