import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="three">
        <h1>Contacts</h1>
      </div>

      <div className="contact-content">
        <div className="contact-text">
          <p>
            I’m interested in freelance opportunities. However, if you have other
            requests or questions, don’t hesitate to contact me.
          </p>
        </div>

        <div className="contact-box">
          <h3>Message me here</h3>
          <p>Github: <span>hiba-mourtafiaa</span></p>
          <p>Num: <span>+212 648 973 038</span></p>
          <p>Email: <span>mourtafiaah@gmail.com</span></p>
        </div>
      </div>

<div className="contact-form">
  <h3>Send me a message</h3>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      const msg = document.querySelector(".success-msg");
      msg.style.display = "block";
      e.target.reset();
      setTimeout(() => {
        msg.style.display = "none";
      }, 4000);
    }}
  >
    <div className="form-group">
      <input type="text" name="name" placeholder="Your Name" required />
    </div>

    <div className="form-group">
      <input type="email" name="email" placeholder="Your Email" required />
    </div>

    <div className="form-group">
      <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    </div>

    <button type="submit" className="send-btn">Send Message</button>
  </form>

  <p className="success-msg">Message sent successfully! </p>
</div>


      <p className="copyright">
        © Copyright 2025. Made by <strong>Hiba Mourtafiaa</strong>
      </p>
    </section>
  );
};

export default Contact;
