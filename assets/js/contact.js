const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailJs.sendForm('','','#contact-form','')
        .then(() => {
            contactMessage.textContent = 'Mensaje enviado ✅'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            contactForm.requestFullscreen()
        }, () => {
            contactMessage.textContent = 'No se pudo enviar el mensaje ❌(Error en el Servicio)'
        })
}

contactForm.addEventListener('submit', sendEmail)