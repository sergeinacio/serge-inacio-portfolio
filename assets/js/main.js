$( document ).ready(function() {
    $('a[href^="#"]').on("click",function(){
        var t= $(this.hash);
        var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
        if(t.length){
            var tOffset=t.offset().top;
            $('html,body').animate({scrollTop:tOffset}, 900);
            return false;
        }
    });
 
});