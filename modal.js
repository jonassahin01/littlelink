function openModal() {
  document.getElementById("psnModal").style.display = "block";
}

function closeModal() {
  document.getElementById("psnModal").style.display = "none";
  document.getElementById("copyMessage").style.display = "none";
}

function copyGamertag() {
  const gamertagInput = document.getElementById("gamertag");
  gamertagInput.select();
  gamertagInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");

  // Show "Copied!" message
  const copyMessage = document.getElementById("copyMessage");
  copyMessage.style.display = "block";
}
