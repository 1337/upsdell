function imgBar(nWidth) {
    //(C) 2008 Brian Lai - thieves get eaten alive
    var widthCount=0;
    var imgH=76;
    var myImg;
        var myAdd;
    var base="http://www.kgv.edu.hk/upsdell/images/rotation/";
    var ext=".jpg";
    document.writeln("<p style='text-align:center;font-size:x-small;'>");
    while(widthCount<nWidth) {
        var q,qold;
        while(q == qold) {
            q=Math.ceil(Math.random()*86);
        }
        qold=q;
        myImg=new Image();
        myImg.src=base + q + ext;
        while(isNaN(myImg.width)) {}
        myAdd = Math.ceil(parseFloat(myImg.width)/parseFloat(myImg.height)*imgH)+6;
            widthCount+=myAdd;
        if(widthCount<=nWidth|isNaN(widthCount)) {
            document.write("<a href='http://www.kgv.edu.hk/upsdell/resources'><img class='img2' alt='Click to go to the gallery [" + widthCount + "]' src='" + base + q + ext + "' style='height:" + imgH + "px;' /></a>&nbsp;");
        }
    }
    document.writeln("<br />Gallery</p>"); //
    widthCount=0;
}

function preloadpics() {
    var base="http://www.kgv.edu.hk/upsdell/images/rotation/";
    var ext=".jpg";
    for(var i=0;i<=86;i++) {
        document.write("<img src='" + base + i + ext + "' style='display:none' />");
    }
}

function Trophy(p1,p2,p3,p4) {
    document.getElementById('stand').innerHTML="<img alt='' src='../images/" + p1 +
                                                "f.gif' height='100' /><img alt='' src='../images/" + p2 +
                                                "f.gif' height='90' /><img alt='' src='../images/" + p3 +
                                                "f.gif' height='80' /><img alt='' src='../images/" + p4 +
                                                "f.gif' height='70' />";
}