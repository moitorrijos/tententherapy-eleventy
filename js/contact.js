window.addEventListener('load', () => {
  const contactForm = document.querySelector("#contact-form")
  if (contactForm) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const years = contactForm.querySelector("input#years").value
      const months = contactForm.querySelector("input#months").value
      console.log(years, months)
      if (years !== "" && months !== "") return
      const formData = new FormData(contactForm);
      fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    }
    contactForm.addEventListener('submit', handleSubmit)
  }
})