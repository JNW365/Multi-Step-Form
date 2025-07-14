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
    dateFormat: "Y-m-d",
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

// Form summary/confirmation
