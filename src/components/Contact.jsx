import Styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <section className={Styles.contact} id="contact">
        <h2>Get In Touch With Me</h2>
        <div className={Styles.contactformcontainer}>
          <div className={Styles.contactform}>
            <form action="https://formspree.io/f/xyylngw" method="POST">
              <div className={Styles.formcontrol}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter Your Name"
                  className={Styles.inputfield}
                  required
                />
              </div>
              <div className={Styles.formcontrol}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Enter Your Email"
                  className={Styles.inputfield}
                  required
                />
              </div>
              <div className={Styles.formcontrol}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  cols="60"
                  rows="10"
                  placeholder="Enter Your Message"
                  name="message"
                  className={Styles.inputfield}
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                id="submit-btn"
                className={Styles.submitbtn}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
