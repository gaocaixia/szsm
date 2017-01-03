var focus=(function(){
    return {
        init:function(){
            $('.text').focus(function(){
                $(this).val(null);
            });
        }
    }
})();
focus.init();
var navList=(function(){
    var $oNav1=$('#nav1');
    var $oNav_first=$oNav1.children('ul');
    var $oNav2=$('#nav2');
    var $oNav_second=$oNav2.children('ul');
    function navMouse(){
        $oNav1.mouseenter(function(event){
            console.log(event.target);
            $oNav_first.css('display','block');
            event.preventDefault();
            event.stopPropagation();
        });
        $oNav1.mouseleave(function(event){
            if(event.target.tagName.toLowerCase()!=='ul'&&event.target.className!=='nav1'&&event.target.className!=='aNav1'){
                $oNav_first.css('display','none');
            }
        });
        $oNav2.mouseenter(function(event){
            console.log(event.target);
            $oNav_second.css('display','block');
        });
        $oNav2.mouseleave(function(event){
            if(event.target.tagName.toLowerCase()!=='ul'&&event.target.className!=='nav2'&&event.target.className!=='aNav2'){
                $oNav_second.css('display','none');
            }
        });

    }
    return {
        init:function(){
            navMouse()
        }
    }
})();
navList.init();
var navFooter=(function(){
    var bOk=true;
    return {
        init:function(){
            $('.minArrow').click(function(){
                if(bOk){
                    $('.arrowSpan').css('backgroundPosition',-13);
                    $('.navFooter').stop().animate({
                        height:0
                    },500);
                    //$('.footer').stop().animate({
                    //    top:589
                    //},500);
                    bOk=false;
                }else{
                    $('.navFooter').stop().animate({
                        height:270
                    },500);
                    //$('.footer').stop().animate({
                    //    bottom:0
                    //},500);
                    $('.arrowSpan').css('backgroundPosition',0);
                    bOk=true;
                }
            })
        }
    }
})();
navFooter.init();