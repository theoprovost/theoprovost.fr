const form = document.getElementById('contact-form');
form.onsubmit = async function(e) {
    e.preventDefault();
    try {
      formData = new FormData(form);
      const plainFormData = Object.fromEntries(formData.entries());
      const formDataJsonString = JSON.stringify(plainFormData);

      await fetch(`https://theoprovost.herokuapp.com/contact`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: formDataJsonString

      }).then(res => res.json())
        .then(res => {
          setTimeout(() => window.location.replace("https://theoprovost.herokuapp.com/"), 8000)
          const msg = document.createElement('div');
          msg.className = 'response-contact';
          msg.textContent = res;
          document.querySelector('.form-wrapper').appendChild(msg);
          
        });

    } catch (err) {
      console.log(err);
    };
};



