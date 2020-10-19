const form = document.getElementById('contact-form');
form.onsubmit = async function(e) {
    e.preventDefault();
    try {
      const response = await fetch(`/contact`, {
        method: 'POST',
        body: new FormData(form)
      });

      let result = await response.json();

      alert(result.message);

    } catch (error) {
      alert('Une erreur a eu lieu lors de l\'envoi du formulaire');
      console.error(error);
    };
};