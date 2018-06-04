var scrollTop = document.getElementById("scroll-top");
scrollTop.onclick = function(){
var scrollToTop = window.setInterval(function() {
    var pos = window.pageYOffset;
    if ( pos > 0 ) {
        window.scrollTo(0, pos - 40 );
    } else {
        window.clearInterval( scrollToTop );
    }
},1 );
}; 