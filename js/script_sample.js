document.addEventListener('DOMContentLoaded', function(){

	//object-fit for IE
	objectFitImages('img');

	//menu
	const gnavBtn = document.querySelector('.gnav__button');
	gnavBtn.addEventListener('click', function(){
		gnavBtn.classList.toggle('is-open');
	});

	//pagetop
	const pagetop = document.querySelector('.pagetop');
	window.addEventListener('scroll', function(){
		if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
			pagetop.classList.add('is-showed');
		}else{
			pagetop.classList.remove('is-showed');
		}
	})

	//Menu current
	let elemTop = [];
	let elemH = [];
	let winH;
	let scTop;
	function statusCheck(){
		const sections = document.querySelectorAll('.section');
		sections.forEach((section, i)=> {
			elemTop[i] = Math.round(section.offsetTop);
			elemH[i] = Math.round(section.clientHeight);
		});
		winH = window.innerHeight;
		scTop = Math.round(document.documentElement.scrollTop) || Math.round(document.body.scrollTop);
	}
	function addMenuCurrentClass() {
		const navElem = document.querySelectorAll('.gnav__menu');
		navElem.forEach((navEl, i) => {
			let actPosTop = elemTop[i] - winH / 2;
			let actPosBottom = (elemTop[i] + elemH[i]) - winH / 2;
			navEl.classList.remove('is-active');
			if(scTop >= actPosTop && scTop < actPosBottom ) {
				navEl.classList.add('is-active');
			}
		});
	}
	function fvParallax() {
		document.querySelector('.header').style.transform = 'translateY(' + scTop * 0.5 + 'px)';
		document.querySelector('.title-logo').style.transform = 'translateY(' + scTop * -0.5 + 'px)';
	}
	function scrollUpFadeIn() {
		const blocks = document.querySelectorAll('.header, .section');
		winH = window.innerHeight;
		scTop = Math.round(document.documentElement.scrollTop) || Math.round(document.body.scrollTop);
		blocks.forEach((block, i)=> {
			elemTop[i] = Math.round(block.offsetTop);
			const anime01 = block.querySelectorAll('.anime-hide01');
			const anime02 = block.querySelectorAll('.anime-hide02');
			let actPosTop = elemTop[i] - winH / 2;
			anime01.forEach((anime01Elm) => {
				if(scTop >= actPosTop) {
					anime01Elm.classList.remove('anime-hide01');
					anime01Elm.classList.add('anime-show01');
				}
			});
			anime02.forEach((anime02Elm) => {
				if(scTop >= actPosTop) {
					anime02Elm.classList.remove('anime-hide02');
					anime02Elm.classList.add('anime-show02');
				}
			});
		});

	}
	function characterScrollIn(){
		const charSlidBlock = document.getElementById('Character');
		const charSlideFirst = charSlidBlock.querySelector('.swiper-slide:first-child');
		const ot =  Math.round(charSlidBlock.offsetTop);
		winH = window.innerHeight;
		scTop = Math.round(document.documentElement.scrollTop) || Math.round(document.body.scrollTop);
		let actPosTop = ot - winH / 2;
		if(scTop < actPosTop){
			charSlideFirst.classList.remove('swiper-slide-active');
		}
		window.addEventListener('scroll', function(){
			if(scTop >= actPosTop && charSlidBlock.querySelectorAll('.swiper-slide-active').length === 0){
				charSlideFirst.classList.add('swiper-slide-active');
			}
		});
	}
	function charParallax() {
		const block = document.getElementById('Character');
		const blockTop = Math.round(block.offsetTop);
		const paraContents = block.querySelectorAll('.character__name > img');
		const paraContents02 = block.querySelectorAll('.character__img > img');
		const paraContents03 = block.querySelectorAll('.character__shadow > img');
		let blockScroll = (scTop + winH) - blockTop;
		paraContents.forEach((paraElm) => {
			if(blockTop <= (scTop + winH)){
				paraElm.style.transform = 'translateY(' + blockScroll * -0.1 + 'px)';
			}else{
				paraElm.style.transform = '';
			}
		});
		paraContents02.forEach((paraElm02) => {
			if(blockTop <= (scTop + winH)){
				paraElm02.style.transform = 'translateY(' + blockScroll * -0.05 + 'px)';
			}else{
				paraElm02.style.transform = '';
			}
		});
		paraContents03.forEach((paraElm03) => {
			if(blockTop <= (scTop + winH)){
				paraElm03.style.transform = 'translateY(' + blockScroll * -0.025 + 'px)';
			}else{
				paraElm03.style.transform = '';
			}
		});
	}
	window.addEventListener('load', function(){
		statusCheck();
		addMenuCurrentClass();
		fvParallax();
		scrollUpFadeIn();
		characterScrollIn();
		charParallax();
	})
	window.addEventListener('scroll', function(){
		statusCheck();
		addMenuCurrentClass();
		fvParallax();
		scrollUpFadeIn();
		charParallax();
	})
	window.addEventListener('resize', function(){
		statusCheck();
		addMenuCurrentClass();
		fvParallax();
		scrollUpFadeIn();
		charParallax();
	});

	//Gallery Swiper
	const mainSlides = document.querySelectorAll('#gallery-main .swiper-slide');
	const galleryMain = new Swiper('#gallery-main', {
		loop: true,
		loopedSlides: mainSlides.length,
		spaceBetween: 3,
		effect: 'fade',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	const galleryThumbs = new Swiper('#gallery-thumbs', {
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		slideToClickedSlide: true,
		slidesPerView: 3,
		centeredSlides: true,
		loop: true,
		loopedSlides: mainSlides.length,
		controller: {
			control: galleryMain,
		},
		breakpoints: {
			768: {
				slidesPerView: 7,
				loopedSlides: 9,
			},
		}
	});
	galleryMain.controller.control = galleryThumbs;


	//Character Swiper
	const characterSlide = new Swiper('#character-list', {
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function(index, className) {
				return '<span class="character__thumb ' + className + '"><img class="character__thumb-img" src="img/char_icon0' + (index + 1) + '.png" alt=""><img class="character__thumb-img--act" src="img/char_icon0' + (index + 1) + '_act.png" alt=""></span>';
			}
		}
	});

	//Character voice
	const voiceBtns = document.querySelectorAll('.character__voice-button');
	voiceBtns.forEach(voiceBtn => {
		let voice = voiceBtn.nextElementSibling;
		voiceBtn.addEventListener('click', function(){
			if(!voice.paused){
				voice.pause();
			}else{
				voice.play();
			}
		});
	});

});