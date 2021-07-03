// intro
const intro_wrap = $('#intro_wrap');
const contetns_wrap =$('#contetns_wrap');
const contetns2_wrap = $('#contetns2_wrap');
// video
const playBecomes_img = $('#playBecomes_img');
const more_video_wrap = $('#more_video_wrap');
const cancle_btn = $('#cancle_btn');
const mabinogi_mobile_video = $('#mabinogi_mobile').get(0);

// pop1
const contents_text_box = $('#contents_text_box');
const pop_01_wrap = $('#pop_01_wrap');
const pop_01_wrap_cancle = $('#write_text_box_wrap_cancle');

//pop2
const pop_02_wrap = $('#pop_02_wrap');
const pop_02_cancle = $('#write_text_box_wrap_cancle2')
//timer
const timer = $('#timer');

function timerCount(){
    var dday = new Date("July 16,2021,09:00:00").getTime(); //디데이
	setInterval(function(){
		var now = new Date(); //현재 날짜 가져오기
		var distance = dday - now;
		var d = Math.floor(distance / (1000 * 60 * 60 * 24));
		var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var s = Math.floor((distance % (1000 * 60)) / 1000);
		if(s < 10){
			s = '0'+s;
		}
		timer.html(d+'일 '+h+':'+m+':'+s)
	}, 1000);
}

function intro(){
    setTimeout(function() {
        intro_wrap.slideUp(500);
    }, 2300);
    
}

function contetns_wrap_intro(){
    setTimeout(function() {
        contetns_wrap.slideDown(500);
    }, 2700);
}

function contetns2_wrap_intro(){
    setTimeout(function() {
        contetns2_wrap.slideDown(1000);
    }, 3000);
}

function more_wrap(){
    playBecomes_img.click(function(){
        more_video_wrap.css('display','block');
        mabinogi_mobile_video.play();
    })
}

function more_wrap_cancle(){
    cancle_btn.click(function(){
        more_video_wrap.css('display','none');
        mabinogi_mobile_video.pause();
    })
}


function more_pop_01(){
    contents_text_box.click(function(){
        pop_01_wrap.css('display','block');
    })
}

function more_pop_01_cancle(){
    pop_01_wrap_cancle.click(function(){
        pop_01_wrap.css('display','none');
    })
}

// 이벤트 창
// function pop02_event(){
//     setTimeout(function() {
//         pop_02_wrap.css('display','block')
//       }, 3000);
// }
// function pop02_cancle(){
//     pop_02_cancle.click(function(){
//         pop_02_wrap.css('display','none');
//     })
// }
// pop02_cancle();
// pop02_event();
contetns2_wrap_intro()
contetns_wrap_intro();
timerCount();
more_pop_01_cancle();
more_pop_01();
more_wrap_cancle();
more_wrap();
intro();