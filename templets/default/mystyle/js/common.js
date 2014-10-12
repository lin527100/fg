$(document).ready(function(){
    var options = {
        slides: '.slide', // The name of a slide in the slidesContainer
        swipe: true,    // Add possibility to Swipe > note that you have to include touchSwipe for this
        slideTracker: true, // Add a UL with list items to track the current slide
        slideTrackerID: 'slideposition', // The name of the UL that tracks the slides
        slideOnInterval: true, // Slide on interval
        interval: 5000, // Interval to slide on if slideOnInterval is enabled
        animateDuration: 1000, // Duration of an animation
        animationEasing: 'ease', // Accepts: linear ease in out in-out snap easeOutCubic easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: false // Pause when user hovers the slide container
    };


$(".slider").simpleSlider(options);
// 通用滑动门
function scrollDoor(){
}
scrollDoor.prototype = {
    sd : function(menus,divs,openClass,closeClass){
        var _this = this;
        if(menus.length != divs.length)
        {
            alert("菜单层数量和内容层数量不一样!");
            return false;
        }               
        for(var i = 0 ; i < menus.length ; i++)
        {   
            _this.$(menus[i]).value = i;                
            _this.$(menus[i]).onmouseover = function(){
                    
                for(var j = 0 ; j < menus.length ; j++)
                {                       
                    _this.$(menus[j]).className = closeClass;
                    _this.$(divs[j]).style.display = "none";
                }
                _this.$(menus[this.value]).className = openClass;   
                _this.$(divs[this.value]).style.display = "block";              
            }
        }
        },
    $ : function(oid){
        if(typeof(oid) == "string")
        return document.getElementById(oid);
        return oid;
    }
}
window.onload = function(){
    var SDmodel = new scrollDoor();
    SDmodel.sd(["m01","m02","m03"],["c01","c02","c03"],"sd01","sd02");<!--搜索

}

<!-- 去掉网页错提示
function killErrors() {
    return true;
}
window.onerror = killErrors;
// -->

function IsTelephone(obj)// 正则判断 
{  
    var pattern=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/;  
    if(pattern.test(obj))  
    {  
    return true;  
    }  
    else  
    {  
    return false;  
    }  
}  




// qq box
    var _userAgent = window.navigator.userAgent.toLowerCase();

    if(_userAgent.indexOf('android')<0 && _userAgent.indexOf('iphone')<0 &&  _userAgent.indexOf('ipad')<0 )
    { 
            $('.onlineService').show();
            $('.box_os').hide();        
    }else{

        $('.onlineService').show();
        $('.box_os').show();
    }
    
    $('.onlineService .ico_os').click(function()
    {       
        $('.onlineService').hide();
        $('.box_os').show();
    });
    $('.os_x').click(function()
    {
        $('.box_os').hide();
        $('.onlineService').show();
    });

    $('.acbox .ico_pp').hover(function(){
        $(this).stop().animate({height:'52px'},'fast');
        },function(){
        $(this).stop().animate({height:'33px'},'fast');
        }
    );
    $('.acbox .ico_gt').hover(function(){
        $(this).stop().animate({height:'52px'},'fast');
        },function(){
        $(this).stop().animate({height:'33px'},'fast');
        }
    );
    
    $('.onlineService .ico_pp').hover(function(){
        $(this).stop().animate({width:'87px'},'fast');
        },function(){
        $(this).stop().animate({width:'39px'},'fast');
        }
    );
    $('.ico_pp').click(function(){
        obj = $('#liuyan_box');
        if(obj.css('display') == 'none'){
            obj.show();
            w_width = $(window).width();
            w_height = $(window).height();
            o_width = obj.width();
            o_height = obj.height();

            l = (w_width-o_width)/2
            t = (w_height - o_height)/2

            obj.animate({left:l,top:t},500);

        }else{
            obj.hide();
        }
    });
     $('#liuyan_box .close_box').click(function(){
        $(this).parent().hide();
     });
    $('.onlineService .ico_gt').hover(function(){
        $(this).stop().animate({width:'97px'},'fast');
        },function(){
        $(this).stop().animate({width:'39px'},'fast');
        }
    );
    
    $('.ico_gt').click(function(){
        $("html, body").animate({scrollTop:0}, 1);
    })
    
    
    //分辨率
    if ( $(window).width()<1200 || screen.width<1200) 
    { 
        $('.hydp950,.w_950,.sdmain,.main').css('overflow','hidden');
        $('.top_bg').css({'overflow':'hidden','width':'950px','margin':'0 auto'});
        $('.db_bg2').addClass('db_bg2_s');
        $('.jstd_c .bg_l,.jstd_c .bg_r').css('display','none');
        $('#js_play .prev').css('left','0');
        $('#js_play .next').css('right','0');
        $('#videoplay .prev, #videoplay2 .prev').addClass('prev_s');
        $('#videoplay .next, #videoplay2 .next').addClass('next_s');
    }else{
        $('.hydp950,.w_950,.sdmain,.main').removeAttr('style');
        $('.top_bg').removeAttr('style');
        $('.db_bg2').removeClass('db_bg2_s');
        $('.jstd_c .bg_l,.jstd_c .bg_r').removeAttr('style');
        $('#js_play .prev').removeAttr('style');
        $('#js_play .next').removeAttr('style');
        $('#videoplay .prev, #videoplay2 .prev').removeClass('prev_s');
        $('#videoplay .next, #videoplay2 .next').removeClass('next_s');
    }


    // liuyan
    $('.liuyan_sub').click(function(){
        content = $('#liuyan_content').val()
        tel = $('#liuyan_tel').val() 
        qq = $('#liuyan_qq').val()
        // check form
        err_arr = []
        if(content.length < 3){
            err_arr.push('请输入留言内容');
        }
        if( tel== '' || !IsTelephone(tel) ){
            err_arr.push('请输入正确电话号码');
        }

        if( qq == '' ||  !qq.match(/\d{4,15}/)){
            err_arr.push('请输入正确QQ');
        }
        if(err_arr.length){
            alert(err_arr);
            return false;
        }
        // send form
        $.ajax({
            type:"POST",
            url:_ROOT + "/send_feedback.php", 
            data:{content:content,qq:qq,tel:tel},
            cache:false,
            success:function(data){
                alert('发送成功!我们会及时回复您。');
                $('#liuyan_content').val('');
                $('#liuyan_tel').val('') ;
                $('#liuyan_qq').val('');
                    window.location.reload();
            },
            error:function(){
                alert('发送错误!');
            }
        });
    });

});