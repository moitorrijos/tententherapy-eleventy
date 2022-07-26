document.addEventListener('load', () => {
  const registerForm = document.querySelector("#register-form")
  if (registerForm) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(registerForm);
      fetch("/workshops/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    }
    registerForm.addEventListener('submit', handleSubmit)
  }
})