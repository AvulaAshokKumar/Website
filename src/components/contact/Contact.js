import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ykw0j9h', 'template_oxedyiu', form.current, 'zpNmZYnhdY38PWNUD')
    
    e.target.reset()
      
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>

          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>ashok141923@gmail.com</h5>
             <a href='mailto:ashok141923@gmail.com' target='blank'>Send a message</a>
          </article>

          <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>AshokKumarAvula</h5>
             <a href='https://m.me/ernest.achiever'  target='blank'>Send a message</a>
          </article>

          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+918686605674</h5>
             <a href='https://api.whatsapp.com/send?phone+2343455456' target='blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='meassage' rows='7' placeholder='Your Message' required/>
        <button type='Submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
