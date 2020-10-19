const form = document.getElementById('contact-form');
form.onsubmit = async function(e) {
    e.preventDefault();
    try {
      formData = new FormData(form);
      const plainFormData = Object.fromEntries(formData.entries());
      const formDataJsonString = JSON.stringify(plainFormData);

      const response = await fetch(`https://theoprovost.herokuapp.com/contact`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: formDataJsonString
      });

      let result = await response.json();
      alert(result.message);

    } catch (error) {
      alert('Une erreur a eu lieu lors de l\'envoi du formulaire');
      console.error(error);
    };
};