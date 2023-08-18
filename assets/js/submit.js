function submitForm(event) {
  event.preventDefault();
 document.getElementById("error-msg").style.display = "none";
 document.getElementById("sent-msg").style.display = "none";
 
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  
  if (name === "" || subject === "" || message === "") {
    document.getElementById("error-msg").textContent = "Please fill in all the required fields.";
    document.getElementById("error-msg").style.display = "block";
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
