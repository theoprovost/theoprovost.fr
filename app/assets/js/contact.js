const submitbtn = document.getElementById('btn-sub');
submitbtn.addEventListener('submit', handleFormSubmit);

const form = document.getElementById('contact-form');

const handleFormSubmit = async function(e) {
    e.preventDefault();
    try {
      const data = new FormData(form);
      const response = await fetch(`https://theoprovost.herokuapp.com/contact`, {
        method: 'POST',
        body: data,
      });
    } catch (error) {
      alert('Une erreur a eu lieu lors de l\'envoi du formulaire');
      console.error(error);
    };
};