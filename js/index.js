/************ 사전지식 *************/
/* 
// for(var v of datas) {
// for(var i in datas) {
for(var i=0; i<datas.length; i++){
	html  = '<div class="slide">';
	html += '<img src="'+datas[i].src+'" class="img">';
	html += '</div>';
	$(".main-wrap").append(html);
} 
*/

/************ 전역변수 *************/
var datas;
var mainNow = 0;
var mainPrev, mainNext, mainLast;
mainAjax();


/************ 사용자함수 *************/
function mainAjax() {
	$.get("../json/banner.json", function(res){
		datas = res.banners;
		mainLast = datas.length - 1;
		mainInit();
		mainPager();
	});
}

function mainInit() {
	mainPrev = (mainNow == 0) ? mainLast : mainNow - 1;
	mainNext = (mainNow == mainLast) ? 0 : mainNow + 1;
	$(".main-wrap").find(".slide").remove();
	$(htmlMaker(mainNow)).appendTo(".main-wrap").css({
		"position": "static",
		"transition": "transform 0.5s"
	});
	$(htmlMaker(mainPrev)).appendTo(".main-wrap").css("top", "-100%");
	$(htmlMaker(mainNext)).appendTo(".main-wrap").css("top", "100%");
}
$(".main-wrap . pager").removeClass("active");
$(".main-wrap . pager").eq("mainNow").addClass()

function htmlMaker(n) {
	html  = '<div class="slide">';
	html += '<img src="'+datas[n].src+'" class="img">';
	html += '</div>';
	return html;
}

function mainPager() {
	
}

function fixShow(show) {
	if(show) {
		$(".header > .fix-wrap").css("display", "block");
		setTimeout(function(){
			$(".header > .fix-wrap").addClass("active");
			$(".header > .fix-wrap > div").addClass("active");
		}, 0);
	}
	else {
		$(".header > .fix-wrap").removeClass("active");
		$(".header > .fix-wrap > div").removeClass("active");
		setTimeout(function(){
			$(".header > .fix-wrap").css("display", "none");
		}, 500);
	}
}

/************ 이벤트콜백 *************/
function onResize() {
	$(".main-wrap").css("top", $(".header").outerHeight()+"px");
}

function onNaviHover() {
	$(this).find(".subs").stop().fadeIn(500);
}

function onNaviLeave() {
	$(this).find(".subs").stop().fadeOut(500);
}

function onBarClick() {
	if($(this).hasClass("default")) {
		$(this).removeClass("default").addClass("active");
		fixShow(true);
	}
	else if($(this).hasClass("active")) {
		$(this).removeClass("active").addClass("default");
		fixShow(false);
	}
	else {
		$(this).addClass("active");
		fixShow(true);
	}
}

function onNaviChildClick() {
	$(this).next().stop().slideToggle(500);
	$(this).children("i").toggleClass("active");
	
}

function onMainPrev() {
	$(".main-wrap > .slide").eq(0).css("transform", "translateY(100px)");
	$(".main-wrap > .slide").eq(1).stop().animate({"top": 0}, 500, function() {
		mainNow = (mainNow == 0) ? mainLast : mainNow - 1;
		mainInit();
	});
}

function onMainNext() {
	$(".main-wrap > .slide").eq(0).css("transform", "translateY(-100px)");
	$(".main-wrap > .slide").eq(2).stop().animate({"top": 0}, 500, function() {
		mainNow = (mainNow == mainLast) ? 0 : mainNow + 1;
		mainInit();
	});
}

/************ 이벤트선언 *************/
$(window).resize(onResize).trigger("resize");

$(".header .navi-child").hover(onNaviHover, onNaviLeave);
$(".header .navi-bars").click(onBarClick);
$(".header .navi-child-mo").click(onNaviChildClick);

$(".main-wrap > .bt-prev").click(onMainPrev);
$(".main-wrap > .bt-next").click(onMainNext);