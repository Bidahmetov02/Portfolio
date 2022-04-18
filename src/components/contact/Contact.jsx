import "./contact.scss" 
import { useState } from "react";
import emailjs from '@emailjs/browser';
import emailKeys from '../../emailKeys'
import validator from 'validator'

export default function Contact() {

  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let email = e.target.elements.email.value

    if (validator.isEmail(email)) {
      sendEmail()
      setMessage('Message sent succesfully! I will reply ASAP :)')
      e.target.elements.email.value = ''
      e.target.elements.message.value = ''
    } else {
      setMessage('Enter a valid Email Adress!')
    }
  }

  const sendEmail = () => {
    emailjs.sendForm(emailKeys.SERVICE_ID, emailKeys.TEMPLATE_ID, "#form", emailKeys.PUBLIC_KEY)
      .then((res) => {
        console.log(res.text)
      }, (err) => {
        console.log(err)
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
          <input type="text" placeholder="Email" name="email" required/>
          <textarea placeholder="Message" name="message" required></textarea>
          <span className={message.includes("succesfully!") ? "valid" : "notValid"}>{message}</span>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
