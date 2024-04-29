// form contact
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contactForm')

	form.addEventListener('submit', function (event) {
		event.preventDefault()

		// Mendapatkan nilai input
		const name = document.getElementById('name').value.trim()
		const phone = document.getElementById('phone').value.trim()
		const email = document.getElementById('email').value.trim()
		const message = document.getElementById('message').value.trim()

		// Validasi input
		if (name === '' || email === '' || message === '') {
			alert('Silakan lengkapi semua kolom yang diperlukan.')
			return
		}

		// Validasi email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			alert('Silakan masukkan alamat email yang valid.')
			return
		}

		const whatsappNumber = '+6282256235690'
		const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`

		const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
			whatsappMessage
		)}`
		window.location.href = whatsappUrl
	})
})

const btnHumb = document.querySelector('[data-toggle-navbar]')
const navbar = document.querySelector('[data-navbar]')
const overlay = document.querySelector('[data-nav-overlay]')
if (btnHumb && navbar) {
	const toggleBtnAttr = () => {
		const isOpen = btnHumb.getAttribute('data-is-open')
		btnHumb.setAttribute('data-is-open', isOpen === 'true' ? 'false' : 'true')
		if (isOpen === 'false') {
			overlay.classList.toggle('hidden')
		} else {
			overlay.classList.add('hidden')
		}
	}
	btnHumb.addEventListener('click', () => {
		navbar.classList.toggle('invisible')
		navbar.classList.toggle('opacity-0')
		navbar.classList.toggle('translate-y-10')
		toggleBtnAttr()
	})

	overlay.addEventListener('click', () => {
		navbar.classList.add('invisible')
		navbar.classList.add('opacity-0')
		navbar.classList.add('translate-y-10')
		toggleBtnAttr()
	})
}

var toTopBtn = document.getElementById('toTopBtn')
window.onscroll = function () {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		toTopBtn.style.display = 'block'
	} else {
		toTopBtn.style.display = 'none'
	}
}

toTopBtn.addEventListener('click', function () {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
})
