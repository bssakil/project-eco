function Contact() {

  return (

    <div className="page">

      <h1>Contact Us</h1>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
        ></textarea>

        <button>
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;