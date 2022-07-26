document.addEventListener('load', () => {
  const registerForm = document.querySelector("#register-form")
  if (registerForm) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(registerForm);
      const elements = registerForm.elements
      fetch("/workshops/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          submitButton.disabled = true;
          submitButton.innerContent = "Message Sent"
          submitButton.style.backgroundColor = "green"
          for (const element of elements) {
            element.disabled = true
          }
        })
        .catch((error) => alert(error));
    }
    registerForm.addEventListener('submit', handleSubmit)
  }
})