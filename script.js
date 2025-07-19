// multi-steps
let currentStep = 0;
const steps = document.querySelectorAll('.form-step');
const previous = document.getElementById('prev');
const next = document.getElementById('next');

function showStep(step) {
  steps.forEach((s, index) => {
    s.classList.toggle('d-none', index !== step);
  });
}

function nextStep() {
  if(currentStep < steps.length -1) {
    currentStep++;
    showStep(currentStep);
    // adding values to confirmation form
    // customer information
    nameConfirm.innerHTML = nameInput.value;
    phoneConfirm.innerHTML = phone.value;
    emailConfirm.innerHTML = email.value;
    // location information
    addressConfirm.innerHTML = address.value;
    cityConfirm.innerHTML = city.value;
    // date/time information
    dateConfirm.innerHTML = date.value;
    timeConfirm.innerHTML = time.value;
    // bicycle information
    brandConfirm.innerHTML = brand.value;
    modelConfirm.innerHTML = model.value;
    yearConfirm.innerHTML = year.value;
  }
}

function prevStep() {
  if(currentStep > 0) {
    currentStep --;
    showStep(currentStep);
  }
}

showStep(currentStep);

// Event Listeners
previous.addEventListener('click', prevStep);
next.addEventListener('click', nextStep);

// Flatpickr
// date
document.addEventListener('DOMContentLoaded', function () {
  flatpickr("#appointment-date", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "F j, Y",
    minDate: "today"
  });
});
// time
document.addEventListener('DOMContentLoaded', function() {
  flatpickr("#appointment-time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    time_24hr: false // set to true for 24hr time
  });
});

// service choice
let radios = Array.from(document.querySelectorAll('input[type="radio"]'));

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      let serviceLevel = document.getElementById('service-type');
      serviceLevel.innerHTML = radio.value;
    }
  })
})



// Form summary/confirmation
let nameInput = document.getElementById('name-input');
let nameConfirm = document.getElementById('name');

let phone = document.getElementById('phone-input');
let phoneConfirm = document.getElementById('phone');

let email = document.getElementById('email-input');
let emailConfirm = document.getElementById('email');

let address = document.getElementById('address-input');
let addressConfirm = document.getElementById('address');

let city = document.getElementById('city-input');
let cityConfirm = document.getElementById('city');

let date = document.getElementById('appointment-date');
let dateConfirm = document.getElementById('date');

let time = document.getElementById('appointment-time');
let timeConfirm = document.getElementById('time');

let brand = document.getElementById('brand-input');
let brandConfirm = document.getElementById('brand');

let model = document.getElementById('model-input');
let modelConfirm = document.getElementById('model');

let year = document.getElementById('year-input');
let yearConfirm = document.getElementById('year');

