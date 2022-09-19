// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// flsModules.popup.open('#popup_thanks');

let priceBtn = document.querySelector('.form-get-price__btn');
let priceEmail = document.querySelector('#price_email');
let priceName = document.querySelector('#price_name');
let priceTel = document.querySelector('#price_tel');
let priceCheckbox = document.querySelector('#c_1');

let supervisorEmail = document.querySelector('#supervisor_email');
let supervisorName = document.querySelector('#supervisor_name');
let supervisorTel = document.querySelector('#supervisor_tel');
let supervisorCheckbox = document.querySelector('#c_2');
let supervisorBtn = document.querySelector('.footer-supervisor__btn');

let priceForm = document.querySelector('#price_form');
let supervisorForm = document.querySelector('#superviser_form');
let priceError = document.querySelector('.form-get-price__error');
let supervisorError = document.querySelector('.footer-supervisor__error');

document.addEventListener('click', function (e) {
	let target = e.target;
	let zoomContainer = document.querySelector('.zoom-container');
	let certificateZoom = document.querySelector('.certificate-zoom-container');
	let reviewsZoom = document.querySelector('.reviews-zoom-container');

	if (!e.path.includes(zoomContainer) && zoomContainer) {
		zoomContainer.classList.remove('show-zoom');
		zoomContainer.classList.add('hide-zoom');
		zoomContainer.innerHTML = '';
	}

	if (!e.path.includes(certificateZoom) && certificateZoom) {
		certificateZoom.classList.remove('show-zoom');
		certificateZoom.classList.add('hide-zoom');
		certificateZoom.innerHTML = '';
	}

	if (!e.path.includes(reviewsZoom) && reviewsZoom) {
		reviewsZoom.classList.remove('show-zoom');
		reviewsZoom.classList.add('hide-zoom');
		reviewsZoom.innerHTML = '';
	}

	document.querySelectorAll('[data-zoom]').forEach(el => {
		if (target === el && zoomContainer) {
			let image = el.cloneNode(true);
			image.removeAttribute('data-zoom');
			zoomContainer.appendChild(image);
			zoomContainer.classList.remove('hide-zoom');
			zoomContainer.classList.add('show-zoom');
		}
	});

	document.querySelectorAll('[certificate-zoom]').forEach(el => {
		if (target === el && certificateZoom) {
			let image = el.cloneNode(true);
			image.removeAttribute('certificate-zoom');
			certificateZoom.appendChild(image);
			certificateZoom.classList.remove('hide-zoom');
			certificateZoom.classList.add('show-zoom');
		}
	});

	document.querySelectorAll('[reviews-zoom]').forEach(el => {
		if (target === el && reviewsZoom) {
			let image = el.cloneNode(true);
			image.removeAttribute('reviews-zoom');
			reviewsZoom.appendChild(image);
			reviewsZoom.classList.remove('hide-zoom');
			reviewsZoom.classList.add('show-zoom');
		}
	});
});

priceCheckbox.addEventListener('input', () => checkForm(priceEmail, priceName, priceTel, priceCheckbox, priceBtn));
priceEmail.addEventListener('input', () => checkForm(priceEmail, priceName, priceTel, priceCheckbox, priceBtn));
priceName.addEventListener('input', () => checkForm(priceEmail, priceName, priceTel, priceCheckbox, priceBtn));
priceTel.addEventListener('input', () => checkForm(priceEmail, priceName, priceTel, priceCheckbox, priceBtn));

supervisorEmail.addEventListener('input', () => checkForm(supervisorEmail, supervisorName, supervisorTel, supervisorCheckbox, supervisorBtn));
supervisorName.addEventListener('input', () => checkForm(supervisorEmail, supervisorName, supervisorTel, supervisorCheckbox, supervisorBtn));
supervisorTel.addEventListener('input', () => checkForm(supervisorEmail, supervisorName, supervisorTel, supervisorCheckbox, supervisorBtn));
supervisorCheckbox.addEventListener('input', () => checkForm(supervisorEmail, supervisorName, supervisorTel, supervisorCheckbox, supervisorBtn));

function checkForm(email, name, tel, checkbox, btn) {
	if (name.value && tel.value && email.value && tel.value.length >= 17 && checkbox.checked) {
		btn.classList.remove('disable_btn');
	} else {
		btn.classList.add('disable_btn');
	}
}


priceForm.addEventListener('submit', e => sendEmail(e, priceError, 'send_price.php', priceForm));
supervisorForm.addEventListener('submit', e => sendEmail(e, supervisorError, 'send_supervisor.php', supervisorForm));

async function sendEmail(e, error, fileName, form) {
  e.preventDefault();

  let formData = new FormData(form);
  let response = await fetch(`../componetns/sendmail/${fileName}`, {
		method: 'POST',
		body: formData,
	});

  if (response.ok) {
    flsModules.popup.open('#popup_thanks');
    error.classList.remove('error-show');
    form.reset()
  } else {
    error.classList.add('error-show');
  }
}
