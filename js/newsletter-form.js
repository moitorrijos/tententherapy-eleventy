window.addEventListener('load', () => {
  const newsletterForm = document.querySelector("#newsletter-form")
  if (newsletterForm) { 
    const handleSubmit = (event) => {
      event.preventDefault();
      const fetchUrl('https://n8n.cotiza.me/webhook-test/d413a8a3-689f-4e2e-91fd-09768995023e')
      const formData = new FormData(newsletterForm)
      const submitButton = document.querySelector("#submit-button")
      const elements = newsletterForm.elements
      fetch("/workshops", {
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
    newsletterForm.addEventListener('submit', handleSubmit)
  }
})