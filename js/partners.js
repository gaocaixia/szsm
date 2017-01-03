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
var newsCon=(function(){
    var $newsCon=$('.refer_news');
    var $oUl=$newsCon.children('ul');
    var $oLi=$oUl.children('li');
    var n=0;
    function setBanner1(){
        if(n>=$oLi.length-1){
            n=0;
            $newsCon.css('left',-920*n);
        }
        n++;
        $newsCon.stop().animate({left:-920*n},500)
    }
    function setBanner2(){
        if(n<=0){
            n=$oLi.length-1;
            $newsCon.css('left',-920*n);
        }
        n--;
        $newsCon.stop().animate({left:-920*n},500)
    }
    return {
        init:function(){
            $('.refer-left').click(function(){
                setBanner1();
            });
            $('.refer-right').click(function(){
                setBanner2();
            })
        }
    }
})();