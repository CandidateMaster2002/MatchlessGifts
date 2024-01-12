import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValidation()) {
        // Add your logic for submitting the form data to the backend here
        console.log('Form Data Submitted:', formData);
        // Reset the form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        alert("Message sent successfully")
      } else {
        alert('Please fill in all fields with valid values.');
      }


  };

  const formValidation = () => {
    const { name, email, subject, message } = formData;
  
    // Check if any field is empty
    if (!name || !email || !subject || !message) {
      return false;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
  
    // Additional validation for the message field (for example, minimum length)
    if (message.length < 10) {
      return false;
    }
  
   
  
    return true; // All fields are filled and valid
  };

  return (
    <section className="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
      </p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="name" name="name" className="form-control" onChange={handleChange} placeholder='Your Name' />
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="email" name="email" className="form-control" onChange={handleChange} placeholder='Your Email'/>
                  {/* <label htmlFor="email">Your email</label> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input type="text" id="subject" name="subject" className="form-control" onChange={handleChange} placeholder='Subject'/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea" placeholder='Write the message here' onChange={handleChange}></textarea>
                </div>
              </div>
            </div>
            <div className="text-center text-md-left" style={{marginTop:'16px'}}>
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
            <div className="status"></div>
          </form>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
              <p>7A,Gachhivoli Hyderabad, India (500032)</p>
            </li>
            <li><i className="fas fa-phone mt-1 fa-2x"></i>
              <p>+91 98363 56789</p>
            </li>
            <li><i className="fas fa-envelope mt-1 fa-2x"></i>
              <p>contact@matchlessgifts.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
