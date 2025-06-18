  // Add click effect to all elements with class "clickable"
    document.querySelectorAll('.clickable').forEach(el => {
      el.addEventListener('click', () => {
        el.classList.add('clicked');
      });
    });