import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-5 mt-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Contact Me</h2>
        <p className="text-center mb-5">
          I’d love to connect! Whether you have a project, an opportunity, or just want to say hello —
          feel free to reach out.
        </p>

        <div className="row" style={{justifyContent:"center"}}>

          {/* Contact Info */}
          <div className="col-12 col-md-6 mb-2 p-2" 
            style={{
             border:"2px solid #b4c4dcff", 
             boxShadow: "2px 2px 2px #aeb5ccff, 1rem 1rem 1rem #1b7896", 
             borderRadius:"20px"
            }}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="fw-bold mt-4 mb-3" style={{paddingLeft:"30px"}}>📧 Email</h5>
                <p className="text-muted" style={{paddingLeft:"55px"}}>vaishalipatel6157@gmail.com</p>

                <h5 className="fw-bold mt-4 mb-3" style={{paddingLeft:"30px"}}>🌐 Social Links</h5>
                <div className="contact" style={{paddingLeft:"30px"}}>
                  <a
                    href="https://github.com/vaishali956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none me-3"
                  >
                    <i class="fa-brands fa-github" style={{color:"#181717"}}></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vaishalipatel09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none me-3"
                  >
                    <i class="fa-brands fa-linkedin" style={{color:"#0077B5"}}></i>
                  </a>
  
                  <a href=" https://wa.me/919569886157? text= hello" target="_blank" >
                    <i class="fa-brands fa-whatsapp" style={{color:"#25D366"}}></i>
                  </a>
                </div>
              </div>
              <h5 className="fw-bold mb-3" style={{paddingLeft:"40px"}}>📍 Location</h5>
              <p className="text-muted" style={{paddingLeft:"70px"}}>Kanpur, Uttar Pradesh, India</p>

            </div>
          </div>
        </div>

        <p className="text-center mt-5 mb-0">
          © {new Date().getFullYear()} Vaishali Patel | All Rights Reserved
        </p>
      </div>
    </section>
  );
}

export default Contact;
