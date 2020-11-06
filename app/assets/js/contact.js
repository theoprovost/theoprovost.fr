const form = document.getElementById('contact-form');
form.onsubmit = async function(e) {
    e.preventDefault();
    try {
      formData = new FormData(form);
      const plainFormData = Object.fromEntries(formData.entries());
      const formDataJsonString = JSON.stringify(plainFormData);

      const result = await fetch(`https://theoprovost.herokuapp.com/contact`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        mode: "cors",
        body: formDataJsonString
      });
      console.log(result);

    } catch (error) {
      alert.error(error);
    };
};



