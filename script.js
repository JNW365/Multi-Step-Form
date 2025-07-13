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
