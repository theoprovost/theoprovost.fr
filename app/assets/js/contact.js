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
      }).then(window.location = 'htpps://theoprovost.herokuapp.com/');
      
    } catch (error) {
      console.error(error);
    };
};



