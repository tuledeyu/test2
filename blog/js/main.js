;(function () {
    'use strict';

	let isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	let fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.full-height').css('height', $(window).height());
			$(window).resize(function(){
				$('.full-height').css('height', $(window).height());
			});
		}

    };

    let scrollWatch=function(){
        $('.animation-box').waypoint(function(direction){
            $(this.element).addClass('animationed');
            if(direction==='down'){
                setTimeout(function(){
                    $('.animation-box.animationed').each(function(index){
                        let that=$(this);
                        setTimeout(function(){
                            let move=that.data('animation-right');
                            that.addClass(move);
                            that.removeClass('animationed');
                        },index*200,)
                    })
                },100)
            }

        },{offset:'85%'})
    }

    let clickToggle=function(){
        $('.cuddy').on('click',function(event){
            event.preventDefault();
            let close=$('.cuddy i').data('cuddy-close');
            if($('.cuddy').hasClass('active')){
                $('#blog-aside').removeClass('blog-aside-toggle');
                $('.cuddy').removeClass('active');
                $('.cuddy i').addClass('fa-align-justify').removeClass(close);
            }
            else{
                $('#blog-aside').addClass('blog-aside-toggle');
                $('.cuddy').addClass('active');
                $('.cuddy i').removeClass('fa-align-justify').addClass(close);
            }
        })
    }

    let res=function(){
        $(window).resize(function(){
            if($('.cuddy').hasClass('active')){
                $('#blog-aside').removeClass('blog-aside-toggle');
                $('.cuddy').removeClass('active');
                $('.cuddy i').addClass('fa-align-justify').removeClass('fa-modx');
            }
        })
    }

    let scr=function(){
        $(window).resize(function(){
            if($('.cuddy').hasClass('active')){
                $('#blog-aside').removeClass('blog-aside-toggle');
                $('.cuddy').removeClass('active');
                $('.cuddy i').addClass('fa-align-justify').removeClass('fa-modx');
            }
        })
    }

    let navAcitve=function(){
        $('#blog-menu li').on('click',function(){
            $(this).addClass('blog-menu-acitve').siblings().removeClass('blog-menu-acitve');
        })
    }

    

    $(function(){
        fullHeight();
        scrollWatch();
        clickToggle();
        res();
        scr();
        navAcitve();
    })
}());