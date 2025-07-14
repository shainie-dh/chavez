<script>
  function validateForm() {
    const form = document.getElementById("registrationForm");
    const inputs = form.querySelectorAll("input");
    const messageBox = document.getElementById("formMessage");
    const emailInput = form.querySelector('input[name="Email"]');
 
    let allFilled = true;
    let validEmail = true;
 
    messageBox.innerText = "";
    messageBox.className = "";
 
    let i = 0;
    while (i < inputs.length) {
      inputs[i].classList.remove("error");
      i++;
    }
 
    i = 0;
    while (i < inputs.length) {
      if (inputs[i].value.trim() === "") {
        inputs[i].classList.add("error");
        allFilled = false;
      }
      i++;
    }
 
    if (emailInput.value.trim() !== "" && !emailInput.value.includes("@gmail.com")) {
      emailInput.classList.add("error");
      validEmail = false;
    }
 
    if (!allFilled) {
      messageBox.innerText = "❌ Please fill out all fields.";
      messageBox.classList.add("failure");
    } else if (!validEmail) {
      messageBox.innerText = "❌ Please enter the Gmail address (hint: should contain '@gmail.com').";
      messageBox.classList.add("failure");
    } else {
      messageBox.innerText = "✅ You have successfully submitted the form. Thank you for the Feedback!";
      messageBox.classList.add("success");
      form.reset();
      alert("Yippie!! Thank you for submitting! Here have a cookie. You deserve it 🍪🍪!!");
      form.reset();
    }
  }
</script>
</script>