function openModal(id) {
  document.getElementById("modal" + id).style.display = "block";
}

function closeModal(id) {
  document.getElementById("modal" + id).style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(event) {
  for (let i = 1; i <= 3; i++) {
    let modal = document.getElementById("modal" + i);
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
};
