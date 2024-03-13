let map

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8,
	})

	const marker = new google.maps.Marker({
		position: { lat: -34.397, lng: 150.644 },
		map: map,
	})
}

//Sticky menu background
window.addEventListener('scroll', function () {
	if (window.scrollY > 150) {
		document.querySelector('#navbar').style.opacity = 0.9
	} else {
		document.querySelector('#navbar').style.opacity = 1
	}
})

//Smooth Scrolling Brad Traversy
$('#navbar a').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault()

		const hash = this.hash

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 100,
			},
			800
		)
	}
})
