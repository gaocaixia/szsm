/**
 * Created by Administrator on 2016/12/2 0002.
 */
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
//ÂÖ²¥Í¼
var picture=(function(){
    var $oPic=$('#picture'),
        $oDiv=$oPic.children('.pic_image'),
        $aImage=$oDiv.children('div'),
        $oPre=$oPic.children('.pre'),
        $oNext=$oPic.children('.next'),
        $oIndex=$oPic.children('.index'),
        $aLiBtn=$oIndex.children('li');
    var n=0;
    var timer=null;
    function autoMove(){
        console.log($aImage.length);
        if(n>=$aImage.length-1){
            n=-1;
           /* $oUl.css({left:-n*1000})*/
        }
        n++;
       /* $oUl.animate({left:-n*1000},600);*/
        setBanner();
    }
    function setBanner(){
        $.each($aImage,function(index,item){
            if(index==n){
                /*$oImg[index].style.width=(document.body.clientWidth||document.documentElement.clientWidth)+'px';*/
                //$(item).css('zIndex',0).siblings().css('zIndex',-1);
                $(item).stop().show(0,function(){
                    $(this).siblings().stop().hide();
                })
            }
        });
        bannerTip();
    }
    function bannerTip(){
        $.each($aLiBtn,function(index,item){
            item.className=index==n?'on':null;
        })
    }
    function handleChange(){
        $.each($aLiBtn,function(index,item){
            $(item).click(function(){
                n=index;
                setBanner();
            })
        })
    }
    function btnClick(){
        $oPre.click(function(){
            if(n<=0){
                n=$aImage.length;
            }
            n--;
            setBanner()
        });
        $oNext.click(function(){
            autoMove();
        });
    }
    return {
        init:function(){
            clearInterval(timer);
            timer=setInterval(autoMove,5000);
            btnClick();
            handleChange()
        }
    }
})();
picture.init();

var newsCon=(function(){
    var $newsCon=$('.newsCon');
    var $oDiv=$newsCon.children('div');
    var n=0;
    function setBanner1(){
        if(n>=$oDiv.length-1){
            n=0;
            $newsCon.css('left',-1000*n);
        }
           n++;
        $newsCon.stop().animate({left:-1000*n},500)
    }
    function setBanner2(){
        if(n<=0){
            n=$oDiv.length-1;
            $newsCon.css('left',-1000*n);
        }
            n--;
        $newsCon.stop().animate({left:-1000*n},500)
    }
    return {
        init:function(){
            $('#newsLeft').click(function(){
                setBanner1();
            });
            $('#newsRight').click(function(){
                setBanner2();
            })
        }
    }
})();
newsCon.init();
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
                   $('.footer').stop().animate({
                       top:589
                   },500);
                   bOk=false;
               }else{
                   $('.navFooter').stop().animate({
                       height:270
                   },500);
                   $('.footer').stop().animate({
                       top:859
                   },500);
                   $('.arrowSpan').css('backgroundPosition',0);
                   bOk=true;
               }
            })
        }
    }
})();
navFooter.init();

