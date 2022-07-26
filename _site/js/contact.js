window.addEventListener('load', () => {
  const contactForm = document.querySelector("#contact-form")
  if (contactForm) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const submitButton = document.querySelector("#submit-button")
      const elements = contactForm.elements
      const formData = new FormData(contactForm)
      fetch("/contact", {
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
    contactForm.addEventListener('submit', handleSubmit)
  }
})