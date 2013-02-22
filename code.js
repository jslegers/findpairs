if (window.Event)document.captureEvents(Event.MOUSEUP);
function nocontextmenu(){
    event.cancelBubble = true;
    event.returnValue = false;
    return false;
}
function norightclick(e){
    if (window.Event){
        if (e.which == 2 || e.which == 3)return false;
    }else if (event.button == 2 || event.button == 3){
        event.cancelBubble = true;
        event.returnValue = false;
        return false;
    }
}
document.oncontextmenu = nocontextmenu;
document.onmousedown = norightclick;
var f=0, l=0, naam, k, g, prentje, plaatswaarde, gewonnen=false, checkvar=0, d=document;
plaatjesmatrix = new Array();
gewonnenm = new Array();
for (i=1; i < 3; i++){
    for (j=1; j < 10; j++){
        k=0;
        while (k == 0){
            g = Math.round(Math.random()*17) + 1;
            if (plaatjesmatrix[g] == null){
                k=1;
                plaatjesmatrix[g] = "'"+ j + ".jpg'";
            }
        }
    }
}
for (i=1; i < 10; i++) {
    gewonnenm[i]=false
        }
        function newImage(arg) {
    if (document.images) {
        rslt = new Image();
        rslt.src = arg;
        return rslt;
    }
}
var preloadFlag = false;
function preloadImages() {
    if (document.images) {
        een = newImage("1.jpg");
        twee = newImage("2.jpg");
        drie = newImage("3.jpg");
        vier = newImage("4.jpg");
        vijf = newImage("5.jpg");
        zes = newImage("6.jpg");
        zeven = newImage("7.jpg");
        acht = newImage("8.jpg");
        negen = newImage("9.jpg");
        preloadFlag = true;
    }
}
function restore(a, b){
    eval("d.images.plaatje"+a+".src = '0.jpg';d.images.plaatje"+b+".src = '0.jpg'");
    checkvar = 0;
}
function s(waarde){
    plaatswaarde = waarde;
    if (gewonnenm[plaatjesmatrix[plaatswaarde].charAt(1)]==false){
        f=0;
        u();
        checker();
    }
}
function u(){
    prentje = "plaatje" + plaatswaarde;
    if(f < 5) {
        f+=1;
    }
    if (f < 3){
        eval("d.images."+prentje+".src = '0.jpg'");
    }else {
        eval("d.images."+prentje+".src =" +plaatjesmatrix[plaatswaarde]);
    }
    if((f == 2)||(f == 4)){
        eval("d.images."+prentje+".width = 20");
    }else if(f == 3){
        eval("d.images."+prentje+".width = 4");
    }else {
        eval("d.images."+prentje+".width = 40");
    }
    if(f < 5) {
        setTimeout('u()',40);
    }
}
function checker(){
    if (document.images && (preloadFlag == true)){
        if (checkvar == 0){
            checkvar = plaatswaarde;
        }else{
            if (plaatswaarde != checkvar){
                if (plaatjesmatrix[plaatswaarde] != plaatjesmatrix[checkvar]){
                    setTimeout('restore(checkvar,plaatswaarde)',400)
                    }else{
                    checkvar = 0;
                    gewonnenm[plaatjesmatrix[plaatswaarde].charAt(1)]=true;
                    if ((gewonnenm[1] == true) && (gewonnenm[2] == true) && (gewonnenm[3] == true) && (gewonnenm[4] == true) && (gewonnenm[5] == true) && (gewonnenm[6] == true) && (gewonnenm[7] == true) && (gewonnenm[8] == true) && (gewonnenm[9] == true)){
                        var opnieuw = confirm("Proficiat, u heeft gewonnen.\nWenst u een nieuw spelletje te spelen?");
                        if (opnieuw) {
                            location.reload()
                            }
                        }
                }
        }
}
}else {
    alert("Gelieve geduld te hebben tot alle beelden zijn geladen.")
    }
}