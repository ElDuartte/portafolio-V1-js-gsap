//=============== GSAP================

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((section) => {
	ScrollTrigger.create({
		trigger: section,
		start: "top top",
		pin: true,
		pinSpacing: false,
	});
});
//============END scroll page trigger===============
//============START education logo animation===============
gsap.from(".logo-edu", {
	duration: 1,
	opacity: 0,
	scale: 1,
	y: 50,
	x: 50,
	ease: Power3.easeOut,
	stagger: 0.2,
	scrollTrigger: {
		trigger: ".logo-edu",
		start: "top 80%",
		end: "bottom 5%",
		toggleActions: "restart complete",
	},
});
//============END education logo animation===============

//============END GSAP===============
let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;

document
	.getElementById("carousel__btn--next")
	.addEventListener("click", function () {
		moveToNextSlide();
	});

document
	.getElementById("carousel__btn--prev")
	.addEventListener("click", function () {
		moveToPrevSlide();
	});

function updateSlidePosition() {
	for (let slide of slides) {
		slide.classList.remove("carousel__item--visible");
		slide.classList.add("carousel__item--hidden");
	}
	slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	updateSlidePosition();
}

function moveToPrevSlide() {
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}
	updateSlidePosition();
}
