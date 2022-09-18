// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// flsModules.popup.open('#popup_thanks');

document.addEventListener('click', function (e) {
	let target = e.target;
	let zoomContainer = document.querySelector('.zoom-container');
	let certificateZoom = document.querySelector('.certificate-zoom-container');
	let reviewsZoom = document.querySelector('.reviews-zoom-container');

	if (!e.path.includes(zoomContainer)) {
		zoomContainer.classList.remove('show-zoom');
		zoomContainer.classList.add('hide-zoom');
		zoomContainer.innerHTML = '';
	}

	if (!e.path.includes(certificateZoom)) {
		certificateZoom.classList.remove('show-zoom');
		certificateZoom.classList.add('hide-zoom');
		certificateZoom.innerHTML = '';
	}

	if (!e.path.includes(reviewsZoom)) {
		reviewsZoom.classList.remove('show-zoom');
		reviewsZoom.classList.add('hide-zoom');
		reviewsZoom.innerHTML = '';
	}

	document.querySelectorAll('[data-zoom]').forEach(el => {
		if (target === el) {
			let image = el.cloneNode(true);
			image.removeAttribute('data-zoom');
			zoomContainer.appendChild(image);
			zoomContainer.classList.remove('hide-zoom');
			zoomContainer.classList.add('show-zoom');
		}
	});

	document.querySelectorAll('[certificate-zoom]').forEach(el => {
		if (target === el) {
			let image = el.cloneNode(true);
			image.removeAttribute('certificate-zoom');
			certificateZoom.appendChild(image);
			certificateZoom.classList.remove('hide-zoom');
			certificateZoom.classList.add('show-zoom');
		}
	});

	document.querySelectorAll('[reviews-zoom]').forEach(el => {
		if (target === el) {
			let image = el.cloneNode(true);
			image.removeAttribute('reviews-zoom');
			reviewsZoom.appendChild(image);
			reviewsZoom.classList.remove('hide-zoom');
			reviewsZoom.classList.add('show-zoom');
		}
	});
});
