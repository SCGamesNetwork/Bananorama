function submitForm(event) {
  event.preventDefault();
 
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  
  if (name === "" || subject === "" || message === "") {
    var errorMsg = document.getElementById("error-msg");
    errorMsg.textContent = "Please fill in all the required fields.";
    errorMsg.style.display = "block";
    return;
  }

  var nomor = '6285814083661';
  
  var template = `Name: ${name}\nSubject: ${subject}\n\nMessage:\n${message}`;
  var url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(template);
  window.location.href = url;
  
  document.getElementById("sent-msg").style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}