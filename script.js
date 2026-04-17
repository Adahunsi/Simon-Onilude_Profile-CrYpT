
const timeMil = document.getElementById('epoch-clock');

function updateClock() {
  timeMil.textContent = Date.now() + ' ms';
}

updateClock();
setInterval(updateClock, 500);