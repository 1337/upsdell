// JavaScript Document

var srcFrame;

function enc(postid) {
whichpost = document.getElementById(postid); 
    if (whichpost.className=="postshown")
        {whichpost.className="posthidden";}
    else {whichpost.className="postshown";}
}

function loadDoc(doc) {
 srcFrame = document.getElementById("hiddenContent");
 srcFrame.src = doc;
}

function loadNotices(doc) {
    srcFrame=document.getElementById("contentArea");
    srcFrame.height=srcFrame.document.height;
}

function T(J){document.getElementById('txtBsy').style.fontSize=J;}






/***********************************************
* IFrame SSI script II- Dynamic Drive DHTML code library (http://www.dynamicdrive.com)
* Visit DynamicDrive.com for hundreds of original DHTML scripts
* This notice must stay intact for legal use
***********************************************/
var iframeids=["myframe"]
var iframehide="yes"
var getFFVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("/")[1]
var FFextraHeight=parseFloat(getFFVersion)>=0.1? 16 : 0 //extra height in px to add to iframe in FireFox 1.0+ browsers

function resizeCaller() {
var dyniframe=new Array()
for (i=0; i<iframeids.length; i++){
if (document.getElementById)
resizeIframe(iframeids[i])
//reveal iframe for lower end browsers? (see var above):
if ((document.all || document.getElementById) && iframehide=="no"){
var tempobj=document.all? document.all[iframeids[i]] : document.getElementById(iframeids[i])
tempobj.style.display="block"
}}}

function resizeIframe(frameid){
var currentfr=document.getElementById(frameid)
if (currentfr && !window.opera){
currentfr.style.display="block"
if (currentfr.contentDocument && currentfr.contentDocument.body.offsetHeight) //ns6 syntax
currentfr.height = currentfr.contentDocument.body.offsetHeight+FFextraHeight; 
else if (currentfr.Document && currentfr.Document.body.scrollHeight) //ie5+ syntax
currentfr.height = currentfr.Document.body.scrollHeight;
if (currentfr.addEventListener)
currentfr.addEventListener("load", readjustIframe, false)
else if (currentfr.attachEvent){
currentfr.detachEvent("onload", readjustIframe) // Bug fix line
currentfr.attachEvent("onload", readjustIframe)
}}}

function readjustIframe(loadevt) {
var crossevt=(window.event)? event : loadevt
var iframeroot=(crossevt.currentTarget)? crossevt.currentTarget : crossevt.srcElement
if (iframeroot)
resizeIframe(iframeroot.id);
}

function loadintoIframe(iframeid, url){
if (document.getElementById)
document.getElementById(iframeid).src=url
}

function TS(e,q,MyEvent){
    //tooltip ss script by Brian Lai
    //again, someone stealing this will drop dead
    var k=document.getElementById('ToolTip');

    k.style.visibility=e>0?'visible':'hidden';
    if(e>=2){
        k.style.left= gMx(MyEvent)+3;
        k.style.top= gMy(MyEvent)+18;

        var M=document.getElementById("ToolTipText");
        switch(e) {
            case 2: //home
                M.innerText="View the latest photos and events from the home page.";
                break;
            case 3: //captains
                M.innerText="Shows Head captains, and captains of each activity, for example 'Music', as well as the names of the Year Coordinators";
                break;
            case 4: //events
                M.innerText="Details of events which is about to take place, taking place already, or about to take place in 2006-2008.";
                break;
            case 5: //goodies
                M.innerText="Be Upsdell, be proud. Posters, wallpapers, Facebook, fanart and more.";
                break;
            case 6: //photos
                M.innerText="View photos of Upsdell on events.";
                break;

        }
    }
        var I=document.getElementById("ToolTipImage");
        switch(q) {
            case 0: //do nothing
                break;
            case 1: //home
                I.style.backgroundImage="url('http://www.kgv.edu.hk/upsdell/images/tt1.png')";
                break;
            case 2: //captains
                I.style.backgroundImage="url('http://www.kgv.edu.hk/upsdell/images/tt2.png')";
                break;
            case 3: //events
                I.style.backgroundImage="url('http://www.kgv.edu.hk/upsdell/images/tt3.png')";
                break;
            case 4: //goodies
                I.style.backgroundImage="url('http://www.kgv.edu.hk/upsdell/images/tt4.png')";
                break;
            case 5: //photos
                I.style.backgroundImage="url('http://www.kgv.edu.hk/upsdell/images/tt5.png')";
                break;
            default:
                I.style.backgroundImage="url('http://www.kgv.edu.hk/upsdell/images/transparent.gif')";
                break;
        }
}


function gMx(MyEvent) {
    var ev=(!MyEvent)?window.event:MyEvent;//IE:Moz
    var M;
    if (ev.pageX){//Moz
        M= ev.pageX+window.pageXOffset;
    }
    else if(ev.clientX){//IE
        M= ev.clientX+document.body.scrollLeft;
    }
    return M;
}

function gMy(MyEvent) {
    var ev=(!MyEvent)?window.event:MyEvent;//IE:Moz
    var M;
    if (ev.pageY){//Moz
        M= ev.pageY+window.pageYOffset;
    }
    else if(ev.clientY){//IE
        M= ev.clientY+document.body.scrollTop;
    }
    return M;
}

if (window.addEventListener)
window.addEventListener("load", resizeCaller, false)
else if (window.attachEvent)
window.attachEvent("onload", resizeCaller)
else
window.onload=resizeCaller

