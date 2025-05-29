document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
  this.reset();
});

const video = document.getElementById('featureVideo');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = '❚❚';
  } else {
    video.pause();
    playPauseBtn.innerHTML = '&#9658;';
  }
});

video.addEventListener('pause', function() {
  playPauseBtn.innerHTML = '&#9658;';
});

video.addEventListener('play', function() {
  playPauseBtn.innerHTML = '❚❚';
});

// Add click event to all 'Order Now' buttons in pricing section
const orderBtns = document.querySelectorAll('.pricing-btn');
orderBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    // Reset all buttons
    orderBtns.forEach(b => {
      b.style.background = b.classList.contains('pricing-card-featured') ? '#fff' : '#258aff';
      b.style.color = b.classList.contains('pricing-card-featured') ? '#258aff' : '#fff';
      b.textContent = 'Order Now';
    });
    // Set clicked button
    this.style.background = '#22c55e'; // green
    this.style.color = '#fff';
    this.textContent = 'Ordered!';
  });
}); 