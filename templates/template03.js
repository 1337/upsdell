function mnuShows(mnunum) {
    for(i=0;i<4;i++) {
        ctl=document.getElementById("mnu" + i);
        ctl.style.visibility="visible";
        ctl.style.display = (i == mnunum ? "block" : "none");
        ctl.style.width = document.getElementById("bannerID").style.width;
        document.getElementById("leMenus").style.display = "block";
    }
    if(mnunum==-1){
        document.getElementById("mnu0").style.visibility="hidden";
        document.getElementById("mnu0").style.display="block";
        document.getElementById("leMenus").style.display = "none";
    }
}
function postChange(mgm) {
    var i;
    switch(mgm)
    {
        case 1:
            i="http://webmail.kgv.edu.hk/src/redirect.php";
            document.TargetForm.action=i;
            document.TargetForm.elements[0].name="login_username";
            document.TargetForm.elements[1].name="secretkey";
            break;
        case 2:
            i="http://lionel.kgv.edu.hk/moodle/login/index.php";
            document.TargetForm.action=i;
            document.TargetForm.elements[0].name="username";
            document.TargetForm.elements[1].name="password";
            break;
    }
    return true;
}