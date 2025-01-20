const BACKEND_URL = 'https://script.google.com/macros/s/AKfycbz7KUu9y_GKqAqbx4YdhJVQwwuZwoKG5L3HxU28yBipB1I3K8M1pPOIbkLfySFIHC0wIw/exec'; // Backend-URL (z. B. Google Cloud oder Railway)

async function submitTip() {
  const spieler = document.getElementById('spieler').value;
  const platz1 = document.getElementById('platz1').value;
  const platz2 = document.getElementById('platz2').value;
  const platz3 = document.getElementById('platz3').value;
  const platz4 = document.getElementById('platz4').value;
  const platz5 = document.getElementById('platz5').value;

  if (!spieler || !platz1 || !platz2 || !platz3 || !platz4 || !platz5) {
    alert("Bitte fülle alle Felder aus!");
    return;
  }

  try {
    const response = await fetch(`${BACKEND_URL}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ spieler, platz1, platz2, platz3, platz4, platz5 }),
    });
    const result = await response.text();
    document.getElementById('response').innerText = result;
  } catch (error) {
    console.error("Fehler beim Senden des Tipps:", error);
    document.getElementById('response').innerText = "Fehler beim Speichern des Tipps.";
  }
}
