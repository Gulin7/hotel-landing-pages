//Smooth Scrolling
$('.page .btn').on('click', function (e) {
	if (this.hash !== '') {
		e.preventDefault()

		const hash = this.hash
		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top,
			},
			800
		)
	}
})
// Horizontal Scroll

let rightArrow1 = document.querySelector('#about-1 .right-arrow')
let leftArrow1 = document.querySelector('#about-1 .left-arrow')

rightArrow1.addEventListener('click', function () {
	let scroll = document.querySelector('#about-1 .panel')
	scroll.scrollLeft += 200
})
leftArrow1.addEventListener('click', function () {
	let scroll = document.querySelector('#about-1 .panel')
	scroll.scrollLeft -= 200
})
