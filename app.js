// Animacija pri učitavanju stranice
document.addEventListener("DOMContentLoaded", function() {
  // Efekat za fade-in animaciju headera
  const header = document.querySelector('header');
  header.classList.add('fade-in');
});

// Dodavanje animacije u CSS
/* CSS - animacija */
header.fade-in {
  animation: fadeIn 2s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
