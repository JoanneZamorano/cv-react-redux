import React from "react";
import "./Contact.scss";

const Contact = ({ contact }) => {
  return (
    <div className="contact">
      <img width="300px" src={contact.image} alt="" />
      <div className="card">
      <h2>
        {contact.name} {contact.adress}
      </h2>
        <p>{contact.city} </p>
        <p>{contact.birthDate}</p>
        <p>
          <a href={"mailto:" + contact.email}>
          joannezamorano@gmail.com
          </a>
        </p>
        <p>{contact.phone}</p>
        <p><a href={contact.linkedin}>
        Linkedin
          </a></p>
        <p><a href={contact.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Contact;