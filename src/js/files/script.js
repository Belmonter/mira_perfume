// Подключение функционала "Чертогов Фрилансера"
import {isMobile} from './functions.js';
// Подключение списка активных модулей
import {flsModules} from './modules.js';

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

priceForm.addEventListener('submit', e => sendEmail(e, priceError, 'send_price.php', priceForm, 'popup_thanks-price'));
supervisorForm.addEventListener('submit', e => sendEmail(e, supervisorError, 'send_supervisor.php', supervisorForm, 'popup_thanks-supervisor'));

async function sendEmail(e, error, fileName, form, popup) {
  e.preventDefault();

  let formData = new FormData(form);
  let response = await fetch(`../componetns/sendmail/${fileName}`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    flsModules.popup.open(`#${popup}`);
    error.classList.remove('error-show');
    form.reset();
  } else {
    error.classList.add('error-show');
  }
}
