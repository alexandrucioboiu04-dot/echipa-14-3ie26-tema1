/* ===================================
   Form Validation & Toast Notification
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    initFormValidation(contactForm);
  }
});

/**
 * Initialize form validation with real-time feedback
 * @param {HTMLFormElement} form - The form element to validate
 */
function initFormValidation(form) {
  const fields = {
    name: form.querySelector('#name'),
    email: form.querySelector('#email'),
    phone: form.querySelector('#phone'),
    subject: form.querySelector('#subject'),
    message: form.querySelector('#message')
  };

  // Add real-time validation listeners
  Object.entries(fields).forEach(([fieldName, field]) => {
    if (!field) return;

    // Validate on blur (when user leaves the field)
    field.addEventListener('blur', () => {
      validateField(fieldName, field);
    });

    // Clear error on input
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        clearFieldError(field);
      }
    });
  });

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit(form, fields);
  });
}

/**
 * Validate individual form field
 * @param {string} fieldName - Name of the field
 * @param {HTMLInputElement} field - The field element
 * @returns {boolean} Validation result
 */
function validateField(fieldName, field) {
  const value = field.value.trim();
  const errorElement = document.getElementById(`${fieldName}Error`);

  let isValid = true;
  let errorMessage = '';

  switch (fieldName) {
    case 'name':
      if (!value) {
        isValid = false;
        errorMessage = 'Numele este obligatoriu';
      } else if (value.length < 2) {
        isValid = false;
        errorMessage = 'Numele trebuie să conțină cel puțin 2 caractere';
      } else if (!/^[a-zA-ZăâîșțĂÂÎȘȚ\s-]+$/.test(value)) {
        isValid = false;
        errorMessage = 'Numele poate conține doar litere';
      }
      break;

    case 'email':
      if (!value) {
        isValid = false;
        errorMessage = 'Email-ul este obligatoriu';
      } else if (!isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Vă rugăm să introduceți un email valid';
      }
      break;

    case 'phone':
      // Phone is optional, but if provided, validate format
      if (value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Vă rugăm să introduceți un număr de telefon valid (ex: 0722123456)';
      }
      break;

    case 'subject':
      if (!value) {
        isValid = false;
        errorMessage = 'Vă rugăm să selectați un subiect';
      }
      break;

    case 'message':
      if (!value) {
        isValid = false;
        errorMessage = 'Mesajul este obligatoriu';
      } else if (value.length < 10) {
        isValid = false;
        errorMessage = 'Mesajul trebuie să conțină cel puțin 10 caractere';
      } else if (value.length > 1000) {
        isValid = false;
        errorMessage = 'Mesajul nu poate depăși 1000 de caractere';
      }
      break;
  }

  if (!isValid) {
    showFieldError(field, errorElement, errorMessage);
  } else {
    clearFieldError(field, errorElement);
  }

  return isValid;
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} Validation result
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate Romanian phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Validation result
 */
function isValidPhone(phone) {
  // Remove spaces and common separators
  const cleanPhone = phone.replace(/[\s\-()]/g, '');

  // Romanian phone formats: 0722123456, +40722123456, 0040722123456
  const phoneRegex = /^(\+?40|0040|0)[27][0-9]{8}$/;
  return phoneRegex.test(cleanPhone);
}

/**
 * Show error message for a field
 * @param {HTMLElement} field - The field element
 * @param {HTMLElement} errorElement - Error message element
 * @param {string} message - Error message
 */
function showFieldError(field, errorElement, message) {
  field.classList.add('error');
  field.setAttribute('aria-invalid', 'true');

  if (errorElement) {
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
  }
}

/**
 * Clear error message for a field
 * @param {HTMLElement} field - The field element
 * @param {HTMLElement} errorElement - Error message element
 */
function clearFieldError(field, errorElement) {
  field.classList.remove('error');
  field.setAttribute('aria-invalid', 'false');

  if (errorElement) {
    errorElement.textContent = '';
    errorElement.removeAttribute('role');
  }
}

/**
 * Handle form submission
 * @param {HTMLFormElement} form - The form element
 * @param {Object} fields - Form fields object
 */
function handleFormSubmit(form, fields) {
  let isFormValid = true;

  // Validate all fields
  Object.entries(fields).forEach(([fieldName, field]) => {
    if (field && !validateField(fieldName, field)) {
      isFormValid = false;
    }
  });

  // If form is valid, process submission
  if (isFormValid) {
    const formData = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      phone: fields.phone.value.trim(),
      subject: fields.subject.value,
      message: fields.message.value.trim(),
      timestamp: new Date().toISOString()
    };

    // Simulate form submission (in a real app, this would be an API call)
    console.log('Form data:', formData);

    // Show success message
    showToast('Mesajul a fost trimis cu succes! Vă vom răspunde în curând.', 'success');

    // Reset form
    form.reset();

    // Clear any remaining error states
    Object.values(fields).forEach(field => {
      if (field) {
        clearFieldError(field);
      }
    });
  } else {
    // Show error message
    showToast('Vă rugăm să corectați erorile din formular.', 'error');

    // Focus first invalid field
    const firstInvalidField = form.querySelector('.error');
    if (firstInvalidField) {
      firstInvalidField.focus();
    }
  }
}

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type of toast (success or error)
 */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const toastClose = document.getElementById('toastClose');

  if (!toast || !toastMessage) return;

  // Set message
  toastMessage.textContent = message;

  // Set background color based on type
  if (type === 'error') {
    toast.style.backgroundColor = 'var(--color-error-600)';
  } else {
    toast.style.backgroundColor = 'var(--color-success-600)';
  }

  // Show toast
  toast.classList.add('show');

  // Auto hide after 5 seconds
  const autoHideTimeout = setTimeout(() => {
    hideToast();
  }, 5000);

  // Close button handler
  const closeHandler = () => {
    clearTimeout(autoHideTimeout);
    hideToast();
  };

  toastClose.addEventListener('click', closeHandler, { once: true });

  function hideToast() {
    toast.classList.remove('show');
  }
}
