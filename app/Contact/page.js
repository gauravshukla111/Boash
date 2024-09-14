import style from "../styles/Contact.module.css";
import React from "react";
import Image from "next/image";
import img from "../assets/about-page-header-bg.jpg";
const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.contacts}>
        <div className={style.contact}>
          <h1>Contact</h1>
          <pre>
            <h2>Home - Contact</h2>
          </pre>
        </div>
        <div className={style.contactImg}>
          <Image className={style.Img} src={img} alt="not fount" />
        </div>
      </div>

      <div className={style.contactPage}>
        <div className={style.contactMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509369!2d144.96305761531672!3d-37.81362797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d496e3b0ed4e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1614707410495!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className={style.contactRegister}>
          <div className={style.contactLine}>
            <h2>CONTACT</h2>
            <div className={style.line}></div>
          </div>

          <h1>Join Us To Get It Free Consultations</h1>

          <div className={style.forms}>
            <form action="">
              <div className={style.nameEmail}>
                <input type="text" placeholder="NAME *" />
                <input type="email" placeholder="EMAIL *" />
              </div>
              <div className={style.nameEmail}>
                <input type="text" placeholder="PHONE *" />
                <input type="text" placeholder="SUBJECT *" />
              </div>
              <textarea
                name=""
                id=""
                placeholder="WRITE YOUR MESSAGE *"
                rows={6}
              ></textarea>

              <div className={style.btn}>
                <button>BOOK NOW</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
