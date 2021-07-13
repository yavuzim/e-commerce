/* Ufak cihazlar için menü açma butonunun işlemleri */

// header-menu-open-button-field
function menuopen() {
    let x = document.getElementById("header-menu-button-limit-field");
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
/* Ufak cihazlar için menü açma butonunun işlemleri */
window.onload = function () {
    let documentWidth = outerWidth;
    let messagefield = document.getElementById("header-message-field").style.length;
    let osfetValue;
    if (messagefield) {
        if (documentWidth >= 1200) {
            osfetValue = 108
        }
        else if (documentWidth >= 992 && documentWidth <= 1199) {
            osfetValue = 98
        }
        else if (documentWidth >= 768 && documentWidth <= 991) {
            osfetValue = 88
        }
        else if (documentWidth >= 576 && documentWidth <= 767) {
            osfetValue = 78
        }
        else if (documentWidth <= 574) {
            osfetValue = 78
        }
    } else {
        if (documentWidth >= 1200) {
            osfetValue = 148
        }
        else if (documentWidth >= 992 && documentWidth <= 1199) {
            osfetValue = 138
        }
        else if (documentWidth >= 768 && documentWidth <= 991) {
            osfetValue = 118
        }
        else if (documentWidth >= 576 && documentWidth <= 767) {
            osfetValue = 108
        }
        else if (documentWidth <= 574) {
            osfetValue = 103
        }
    }
    document.getElementById("main").style.top = osfetValue + "px";
    document.getElementById("footer").style.top = osfetValue + "px";
};
window.addEventListener('resize', function () {
    let documentWidth = outerWidth;
    let messagefield = document.getElementById("header-message-field").style.length;
    let osfetValue;
    if (messagefield) {
        if (documentWidth >= 1200) {
            osfetValue = 108
        }
        else if (documentWidth >= 992 && documentWidth <= 1199) {
            osfetValue = 98
        }
        else if (documentWidth >= 768 && documentWidth <= 991) {
            osfetValue = 88
        }
        else if (documentWidth >= 576 && documentWidth <= 767) {
            osfetValue = 78
        }
        else if (documentWidth <= 574) {
            osfetValue = 78
        }
    } else {
        if (documentWidth >= 1200) {
            osfetValue = 148
        }
        else if (documentWidth >= 992 && documentWidth <= 1199) {
            osfetValue = 138
        }
        else if (documentWidth >= 768 && documentWidth <= 991) {
            osfetValue = 118
        }
        else if (documentWidth >= 576 && documentWidth <= 767) {
            osfetValue = 108
        }
        else if (documentWidth <= 574) {
            osfetValue = 103
        }
    }
    document.getElementById("main").style.top = osfetValue + "px";
    document.getElementById("footer").style.top = osfetValue + "px";
}, true);

/*top : 148px*/

