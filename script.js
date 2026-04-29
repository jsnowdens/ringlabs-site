let attempts = 0;

function login() {
  event.preventDefault();

  let id = document.getElementById("id").value.toLowerCase();
  let key = document.getElementById("key").value;

  attempts++;

  if (id === "node7" && key === "73.3") {
    document.body.innerHTML = `
      <h2>AUTHENTICATION ACCEPTED</h2>
      <p>NODE 7 VERIFIED</p>
      <p>...signal stable...</p>
    `;
    setTimeout(() => {
      window.location.href = "continuity.html";
    }, 2000);
  } else {
    let messages = [
      "Invalid credentials.",
      "Signal mismatch.",
      "Node not recognized.",
      "Enter your signal node.",
      "This terminal is not intended for you.",
      "All attempts are being logged!!"
    ];
    document.getElementById("message").innerText =
      messages[Math.min(attempts - 1, messages.length - 1)];
  }
}

function checkFrequency() {
  event.preventDefault();

  let freq = document.getElementById("freq").value;

  if (freq === "1420") {
	var link = document.createElement("a")
	link.href = "https://open.spotify.com/track/0kgoK46qSIRcru3dZQlunI?si=0d36882a3de6463c";
	link.textContent = "Go here now before they take it down";
	
	var elem = document.getElementById("response");
    elem.innerText = "BASELINE ACCEPTED. CARRIER DETECTED.";
	
	var child = elem.appendChild(document.createElement("p"));	
	child.appendChild(link);
	elem.appendChild(child);
	  
	  
  } else {
    document.getElementById("response").innerText =
      "INCORRECT BASELINE.";
  }
}
