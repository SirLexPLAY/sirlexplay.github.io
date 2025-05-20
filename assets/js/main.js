document.addEventListener('DOMContentLoaded', () => {
  // Get all "View Details" buttons
  const modalTriggerButtons = document.querySelectorAll('.view-details-btn');
  
  modalTriggerButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal-target');
      const modal = document.querySelector(modalId);
      if (modal) {
        modal.style.display = 'block';
        // Optional: trap focus within the modal for accessibility
      }
    });
  });

  // Get all modal close buttons
  const closeButtons = document.querySelectorAll('.course-modal-close');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.course-modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Close modal if user clicks outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('course-modal')) {
      event.target.style.display = 'none';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.course-modal').forEach(modal => {
        if (modal.style.display === 'block') {
          modal.style.display = 'none';
        }
      });
    }
  });
});