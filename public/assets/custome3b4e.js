window.awe = window.awe || {};
awe.init = function () {
	awe.showPopup();
	awe.hidePopup();	
};
$(window).on('load', function() {
    awe_owl();
})
$(document).ready(function ($) {

	"use strict";
	
	awe_backtotop();
	awe_category();
	awe_menumobile();
	awe_tab();
	awe_tab_2();
	awe_lazyloadImage();
	$('.header-main .time').each(function(e){
		awe_countDown2($(this));
	});

	$('[data-toggle="tooltip"]').tooltip();
	/*Time product_grid_office*/
	$('.wrapitem_deal').each(function(e){
		awe_countDown2($(this));
	});
	/*time details deal*/
	$('.times').each(function(e){
		awe_countDown($(this));
	});

	/*Modal gửi yêu cầu đặt phòng*/

	$('body').click(function(event) {
		if (!$(event.target).closest('.style_booklich').length) {
			$('#modal_request').removeClass('show');
			$('.opacity_modal').removeClass('open_opacity_modal');
		};
	});

	$(document).on('click', '.popup_click', function(e) {
		$('.form_book_room').addClass('style_booklich');
		$('.opacity_modal').toggleClass('open_opacity_modal');
		var ngayden = $('.wrap_form').find('.ngayden').val();
		var ngaydi = $('.wrap_form').find('.ngaydi').val();
		var songuoi = $('.wrap_form').find('.songuoi').val();
		var email = $('.wrap_form').find('.email').val();
		var price = $('.module_banggia').find('.price').html();
		$('.wrap_form .tt_style').remove();
		$('.wrap_form .ngayden').val(ngayden);
		$('.wrap_form .ngaydi').val(ngaydi);
		$('.wrap_form .songuoi').attr('value',songuoi);
		$('.wrap_form .email').attr('value',email);
		$('.wrap_form .product-price').html(price);
		$('#modal_request').addClass('show');
	});
	var dateToday = new Date();

	/*Modal gửi yêu cầu đặt phòng*/
	$(document).on('click', '.btn-dichvu', function(e) {
		var ngayden = $('.wrap_form').find('.ngayden').val();
		var ngaydi = $('.wrap_form').find('.ngaydi').val();
		var songuoi = $('.wrap_form').find('.songuoi').val();
		var email = $('.wrap_form').find('.email').val();
		var price = $('.wrap_form').find('.product-price').html();
		var tt = $('.wrap_form').find('.tt_price').html();

		$('.wrap_form .ngayden').val(ngayden);
		$('.wrap_form .ngaydi').val(ngaydi);
		$('.wrap_form .songuoi').attr('value',songuoi);
		$('.wrap_form .email').attr('value',email);
		$('.wrap_form .product-price').attr('value',price);
		$('.wrap_form .tt_price_val').attr('value',tt);
	});
	var dateToday = new Date();

});

/*Modal thông báo thành công*/
$(document).ready(function(){
	$('#closed_dichvu').on('click', function(e){
		e.preventDefault();
		$('.modal_dichvu').hide();
	});
	var test = $('.guilienhe_thanhcong').text();
	if (test != '') {
		$('#datlich_thanhcong').modal();
	}
});

$(function() {
	if ($(".form_book_room").hasClass("top_fix_price_0")) {
		$('.home-slider').addClass('home_fix_0');
		$('.modal_request_room').addClass('modal_request_room_fix_0');
		$('.class_db').addClass('margin_fix_0');
		$('.margin-top-article').addClass('margin_fix_0');
	}
});

/*End Modal thông báo thành công*/

/*Js datepicker tình trạng đặt phòng */
$( function() {

	if($('.line-item-property__field').attr('data-date')){
		var datadate = $(this).find('.line-item-property__field').attr('data-date').replace(/\n/gi, "").split(",");
		var disableddates = datadate;
		function DisableSpecificDates(date) {
			var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
			return [disableddates.indexOf(string) == -1];
		}

	}else{
		var disableddates = false;
	}
	var dateToday = new Date();
	$(".line-item-property__field").datepicker({
		defaultDate: "",
		setDate: dateToday,
		numberOfMonths: 3,
		minDate: 0,
		beforeShowDay: DisableSpecificDates
	});
});



/*
var disableddates = ["20-01-2019", "29-01-2019", "12-02-2019", "19-02-2019"];
	function DisableSpecificDates(date) {
    var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
    return [disableddates.indexOf(string) == -1];
  }
$(function() {
	var dateToday = new Date();
  $(".line-item-property__field").datepicker({
	  setDate: dateToday,
	  numberOfMonths: 3,
		minDate: 0,
    beforeShowDay: DisableSpecificDates
  });
});

*/
$(document).ready(function ($) {
	setTimeout(function(){
		$('.mm-menu').removeClass('');
		awe_owl();
	},500);

});


$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	hidePopup('.awe-popup'); 	
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})

/********************************************************
# LAZY LOAD
********************************************************/
function awe_lazyloadImage() {
	setTimeout(function(){
		var i = $("[data-lazyload]");
		i.length > 0 && i.each(function() {
			var i = $(this), e = i.attr("data-lazyload");
			i.appear(function() {
				i.removeAttr("height").attr("src", e);
			}, {
				accX: 0,
				accY: 120
			}, "easeInCubic");
		});
		var e = $("[data-lazyload2]");
		e.length > 0 && e.each(function() {
			var i = $(this), e = i.attr("data-lazyload2");
			i.appear(function() {
				i.css("background-image", "url(" + e + ")");
			}, {
				accX: 0,
				accY: 120
			}, "easeInCubic");
		});
	},1000);
} window.awe_lazyloadImage=awe_lazyloadImage;



/********************************************************
# SHOW NOITICE
********************************************************/
function awe_showNoitice(selector) {
	$(selector).animate({right: '0'}, 500);
	setTimeout(function() {
		$(selector).animate({right: '-300px'}, 500);
	}, 3500);
}  window.awe_showNoitice=awe_showNoitice;

/********************************************************
# SHOW LOADING
********************************************************/
function awe_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.awe_showLoading=awe_showLoading;

/********************************************************
# HIDE LOADING
********************************************************/
function awe_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;

/********************************************************
# SHOW POPUP
********************************************************/
function awe_showPopup(selector) {
	$(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;

/********************************************************
# HIDE POPUP
********************************************************/

function awe_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;
/********************************************************
# HIDE POPUP
********************************************************/
awe.hidePopup = function (selector) {
	$(selector).removeClass('active');
}


/************************************************/
$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	awe.hidePopup('.awe-popup'); 
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})

/*Double click go to link menu*/
var wDWs = $(window).width();
if (wDWs < 1199) {
	$('.ul_menu li:has(ul)' ).doubleTapToGo();
	$('.item_big li:has(ul)' ).doubleTapToGo();
}

/********************************************************
# CONVERT VIETNAMESE
********************************************************/
function awe_convertVietnamese(str) { 
	str= str.toLowerCase();
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
	str= str.replace(/đ/g,"d"); 
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
	str= str.replace(/-+-/g,"-");
	str= str.replace(/^\-+|\-+$/g,""); 
	return str; 
} window.awe_convertVietnamese=awe_convertVietnamese;


/*JS Bộ lọc*/


/********************************************************
# SIDEBAR CATEOGRY
********************************************************/
function awe_category(){

	$('.nav-category .fa-angle-right').click(function(e){
		$(this).parent().toggleClass('active');
	});
	$('.nav-category .fa-angle-down').click(function(e){
		$(this).parent().toggleClass('active');
	});
} window.awe_category=awe_category;



/********************************************************
Search header
********************************************************/
$('body').click(function(event) {
	if (!$(event.target).closest('.collection-selector').length) {
		$('.list_search').css('display','none');
	};
});
/* top search */

$('.search_text').click(function(){
	$(this).next().slideToggle(200);
	$('.list_search').show();
})



/********************************************************
# MENU MOBILE
********************************************************/
function awe_menumobile(){
	$('.menu-bar').click(function(e){
		e.preventDefault();
		$('#nav').toggleClass('open');
	});
	$('#nav .fa').click(function(e){		
		e.preventDefault();
		$(this).parent().parent().toggleClass('open');
	});
} window.awe_menumobile=awe_menumobile;

/********************************************************
# ACCORDION
********************************************************/
function awe_accordion(){
	$('.accordion .nav-link').click(function(e){
		e.preventDefault;
		$(this).parent().toggleClass('active');
	})
} window.awe_accordion=awe_accordion;

/********************************************************
# OWL CAROUSEL
********************************************************/
function awe_owl() { 
	$('.owl-carousel:not(.not-aweowl)').each( function(){
		var xs_item = $(this).attr('data-xs-items');
		var md_item = $(this).attr('data-md-items');
		var lg_item = $(this).attr('data-lg-items');
		var sm_item = $(this).attr('data-sm-items');	
		var margin=$(this).attr('data-margin');
		var dot=$(this).attr('data-dot');
		var nav=$(this).attr('data-nav');
		var height=$(this).attr('data-height');
		var play=$(this).attr('data-play');
		var loop=$(this).attr('data-loop');
		if (typeof margin !== typeof undefined && margin !== false) {    
		} else{
			margin = 30;
		}
		if (typeof xs_item !== typeof undefined && xs_item !== false) {    
		} else{
			xs_item = 1;
		}
		if (typeof sm_item !== typeof undefined && sm_item !== false) {    

		} else{
			sm_item = 3;
		}	
		if (typeof md_item !== typeof undefined && md_item !== false) {    
		} else{
			md_item = 3;
		}
		if (typeof lg_item !== typeof undefined && lg_item !== false) {    
		} else{
			lg_item = 3;
		}
		if (typeof dot !== typeof undefined && dot !== true) {   
			dot= true;
		} else{
			dot = false;
		}
		$(this).owlCarousel({
			loop:false,
			margin:Number(margin),
			responsiveClass:true,
			dots:dot,
			nav:nav,
			autoplay:false,
			autoHeight: false,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:Number(xs_item)				
				},
				600:{
					items:Number(sm_item)				
				},
				1000:{
					items:Number(md_item)				
				},
				1200:{
					items:Number(lg_item)				
				}
			}
		})
	})
} window.awe_owl=awe_owl;


/* OWL SLIDER */
$(document).ready(function (){
	$('.home-slider').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		items: 1,
		slideSpeed : 1000,
		dots:false,
		autoHeight:false,
		autoplay:false,
		autoplayTimeout:false,
		autoplayHoverPause:true,
		nav:false,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			992: {
				items:1,
				nav: false
			},
			1200:{
				items:1,
				nav:false,
				loop:true
			}
		}
	});
});
/*OWL TAB SP MỚI*/
$(document).ready(function (){
	$(".blog_index_right_owl").owlCarousel({
		navigation : true,
		nav: true,
		items:2,
		navigationPage: false,
		navigationText : false,
		slideSpeed : 1000,
		pagination : true,
		dots: false,
		margin: 30,
		autoHeight:false,
		autoplay:false,
		autoplayTimeout:false,
		autoplayHoverPause:true,
		loop: false,
		responsive: {
			0:{
				items:1,
				margin: 0,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			992: {
				items:1,
				nav: true
			},
			1200:{
				items:1,
				nav:true
			}
		}
	});
});
/* OWL SP NỔI BẬT */
$(document).ready(function (){
	$(".brand_content").owlCarousel({
		navigation : false,
		nav: false,
		items:5,
		navigationPage: false,
		navigationText : false,
		slideSpeed : 1000,
		pagination : true,
		autoplay: true,
		dots: false,
		margin: 55,
		loop: false,
		responsive: {
			0:{
				items:2,
				nav:false,
				loop: false
			},
			600:{
				items:2,
				nav:false,
				loop: false
			},
			768:{
				items:3,
				nav:false,
				loop: false
			},
			992: {
				items:4,
				loop: false
			},
			1024: {
				items:4,
				loop: false
			},
			1200:{
				items:5,
				nav:false,
			}
		}
	});
});


/*OWL single item index**/




/********************************************************
# BACKTOTOP
********************************************************/
function awe_backtotop() { 
	/* Back to top */
	if ($('.backtop').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.backtop').addClass('show');
				} else {
					$('.backtop').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.backtop').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.awe_backtotop=awe_backtotop;

/********************************************************
# Tab
********************************************************/
function awe_tab() {
	$(".e-tabs:not(.not-dqtab)").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');

		$(this).find('.tabs-title li').click(function(){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
		});    
	});
} window.awe_tab=awe_tab;

function awe_tab_2() {
	$(".service-tabs:not(.not-dqtab)").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');
		$(this).find('.tabs-title li').click(function(){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
		});    
	});
} window.awe_tab_2=awe_tab_2;


/********************************************************
# DROPDOWN
********************************************************/
$('.dropdown-toggle').click(function() {
	$(this).parent().toggleClass('open'); 	
}); 
$('.btn-close').click(function() {
	$(this).parents('.dropdown').toggleClass('open');
}); 
$('body').click(function(event) {
	if (!$(event.target).closest('.dropdown').length) {
		$('.dropdown').removeClass('open');
	};
});

/*Bắt lỗi điền giá trị âm pop cart*/
$(document).on('keydown','#qty, .number-sidebar',function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
/* Cong tru product detaile*/

$(document).on('click','.qtyplus',function(e){
	e.preventDefault();   
	fieldName = $(this).attr('data-field'); 
	var currentVal = parseInt($('input[data-field='+fieldName+']').val());
	if (!isNaN(currentVal)) { 
		$('input[data-field='+fieldName+']').val(currentVal + 1);
	} else {
		$('input[data-field='+fieldName+']').val(0);
	}
});

$(document).on('click','.qtyminus',function(e){
	e.preventDefault(); 
	fieldName = $(this).attr('data-field');
	var currentVal = parseInt($('input[data-field='+fieldName+']').val());
	if (!isNaN(currentVal) && currentVal > 1) {          
		$('input[data-field='+fieldName+']').val(currentVal - 1);
	} else {
		$('input[data-field='+fieldName+']').val(1);
	}
});

$(document).ready(function() {
	$('.btn-wrap').click(function(e){
		$(this).parent().slideToggle('fast');
	});
/*fix menu sub*/
	jQuery("#nav li.level0 li").mouseover(function(){
		if(jQuery(window).width() >= 740){
			jQuery(this).children('ul').css({top:0,left:"158px"});
			var offset = jQuery(this).offset();
			if(offset && (jQuery(window).width() < offset.left+300)){
				jQuery(this).children('ul').removeClass("right-sub");
				jQuery(this).children('ul').addClass("left-sub");
				jQuery(this).children('ul').css({top:0,left:"-158px"});
			} else {
				jQuery(this).children('ul').removeClass("left-sub");
				jQuery(this).children('ul').addClass("right-sub");
			}
			jQuery(this).children('ul').fadeIn(100);
		}
	}).mouseleave(function(){
		if(jQuery(window).width() >= 740){
			jQuery(this).children('ul').fadeOut(100);
		}
	});
});



/*MENU MOBILE*/

$('.menu-bar-h').click(function(e){
	e.stopPropagation();
	$('.menu_mobile').toggleClass('open_sidebar_menu');
	$('.opacity_menu').toggleClass('open_opacity');
});
$('.opacity_menu').click(function(e){
	$('.menu_mobile').removeClass('open_sidebar_menu');
	$('.opacity_menu').removeClass('open_opacity');
});
$('.ct-mobile li .ti-plus').click(function() {
	$(this).closest('li').find('> .sub-menu').slideToggle("fast");
	$(this).closest('i').toggleClass('show_open hide_close');
	return false;              
});


$(document).ready(function(){
	$("body header .topbar .login_content").hover(
		function () {
			$("body #menu-overlay").addClass('reveal');
		}, 
		function () {
			$("body #menu-overlay").removeClass("reveal");
		}
	);
});


/*JS XEM THÊM MENU DANH MỤC SP*/

$('.xemthem').click(function(e){
	e.preventDefault();
	$('ul.ul_menu>li').css('display','block');
	$(this).hide();
	$('.thugon').show();
})
$('.thugon').click(function(e){
	e.preventDefault();
	$('ul.ul_menu>li').css('display','none');
	$(this).hide();
	$('.xemthem').show();

})
$('.ul_menu .lev-1').click(function(e){
	var lil = $('.ul_menu .lev-1').length;
	var divHeight = $('.list_menu_header').height();
	if(lil = 2){
		$('.ul_menu .ul_content_right_1').css('min-height', divHeight);
	}
});

/* elevator click*/ 
$(document).on('click','a.btn-elevator',function(e){
	e.preventDefault();
	var target = this.hash;
	if($(document).find(target).length <=0){
		return false;
	}
	var $target = $(target);
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top-50
	}, 500);
	return false;
})

/*Show searchbar*/
$('.showsearchfromtop').click(function(event){
	$('.login_and_register').hide();
});
$('.showsearchfromtop').click(function(event){
	$('.searchfromtop').slideToggle("fast");
	$('.login_and_register').hide();
});
$('.hidesearchfromtop').click(function(event){
	$('.searchfromtop').slideToggle("up");
});

var wDH = $(window).height();
if (wDH < 1199) {
	$('.use_ico_register').click(function(){
		$('.login_and_register').slideToggle("fast");
		$('.searchfromtop').hide();
	});
}

$(document).ready(function(e){
	$(".section_base").each(function() {
		var a = $(this).find('.dmsp');
		$(this).find('.click_base').click(function (e) {
			$(a).slideToggle("fast");
			e.preventDefault();
		});
	});



});

/*JS CHECK SĐT NHẬP TEXT*/
function preventNonNumericalInput(e) {
	e = e || window.event;
	var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
	var charStr = String.fromCharCode(charCode);

	if (!charStr.match(/^[0-9]+$/))
		e.preventDefault();
}

/*JS TÌNH TRẠNG ĐẶT PHÒNG*/
var date_slide = new Date();
function customRangeStartDate(input) {
	if(input.id == "EndDate"){
		return {
			minDate: $("#StartDate").datepicker("getDate"),
			maxDate: null
		};
	}else{
		return {
			minDate: date_slide,
			maxDate:  $("#EndDate").datepicker("getDate")
		};
	}
}
$(function(){
	$('#StartDate, #EndDate').datepicker ({
		defaultDate: date_slide,
		setDate: date_slide,
		minDate: date_slide,
		dateFormat: "dd/mm/yy",
		beforeShow: customRangeStartDate
	});
});
//animation scroll js
$('a[href*="#"]:not([href="#"])').on('click', function () {		

	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {

			$("html,body").animate({
				scrollTop: target.offset().top - 150

			}, 1000);
			return false;
		}
	}
});


$(window).on('load resize', function () {
   var wDW = $(window).width();
	if (wDW > 1200) {
	var  mn = $("header");
	var  fix = $(".modal_request_room");
	fixstic= "fixstic";
	mns = "sticky";
	hdr = $('header').height();
	$(window).scroll(function() {
		if( $(this).scrollTop() > hdr ) {
			mn.addClass(mns);
			fix.addClass(fixstic);
			
		} else {
			mn.removeClass(mns);
			fix.removeClass(fixstic);
		}
	});
	}
});

// fix menu
$('.item_big li a').click(function(e){
	$('.item_big li').removeClass('active');
	$(this).parent().addClass('active');
});