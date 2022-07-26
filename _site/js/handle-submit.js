module.exports.handleSubmit = (event, fetchUrl, formData, submitButton, elements) => {
  event.preventDefault();
  fetch(fetchUrl, {
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