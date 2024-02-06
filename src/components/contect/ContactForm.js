import React from "react";
import styles from "./contactForm.module.css";
import { FaUser, FaIndustry, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { MdEdit } from "react-icons/md";

export default function ContactForm() {
  return (
    <div className={styles.ContactForm}>
      <header className={styles.header}>
        <h1>Send A Message</h1>
        <p>
          Please let us know what service you are interested in by completing
          the form below. We will get in touch with you shortly.
        </p>
      </header>

      {/* name, email, company, phone, service, message */}

      <form className={styles.form}>
        <main>
          <div className={styles.differentBox}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Your Name" required />
              <FaUser />
            </div>
            <div className={styles.inputBox} required>
              <input type="email" placeholder="Your Email" required />
              <IoMail />
            </div>
          </div>

          <div className={styles.differentBox}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Company Name" required />
              <FaIndustry />
            </div>
            <div className={styles.inputBox}>
              <input type="number" placeholder="Your Phone" required />
              <FaPhoneAlt />
            </div>
          </div>

          <div className={`${styles.inputBox} ${styles.services}`}>
            <input type="text" placeholder="Service Required" required />
            <GrServices />
          </div>

          <div
            className={`${styles.inputBox} ${styles.services} ${styles.msg}`}
          >
            <textarea placeholder="Let us know what you need" required />
            <MdEdit />
          </div>
        </main>

        <footer className={styles.footer}>
          <p>
            *By submitting this form, you are accepting our Terms of use and our
            Privacy policy
          </p>
          <button type="submit">Send Message</button>
        </footer>
      </form>
    </div>
  );
}
