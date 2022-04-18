import "./contact.scss" 
import emailjs from '@emailjs/browser';
import emailKeys from '../../emailKeys'

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(emailKeys.SERVICE_ID, emailKeys.TEMPLATE_ID, "#form", emailKeys.PUBLIC_KEY)
      .then((res) => {
        console.log(res.text)
      }, (err) => {
        console.log(err.text)
      })
  }

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me.</h2>
        <form onSubmit={handleSubmit} id="form">
          <input type="email" placeholder="Email" name="email" required/>
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
