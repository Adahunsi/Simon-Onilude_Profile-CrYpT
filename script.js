// ── Epoch clock ───────────────────────────────────────────
const clockEl = document.getElementById('epoch-clock');

function updateClock() {
  clockEl.textContent = Date.now() + ' ms';
}

updateClock();
setInterval(updateClock, 500);