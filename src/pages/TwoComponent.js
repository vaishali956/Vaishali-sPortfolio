import React from "react";
import { Link } from "react-router-dom";

function TwoComponent({
  imageUrl,
  name,
  description1,
  description2,
  more,
  resume,
}) {
  return (
    <section
      id="home"
      className="py-5"
      style={{
        background: "linear-gradient(to right , #0e0e0eff, #1e51e8ff)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          border: "2px solid #b4c4dc",
          boxShadow: "2px 2px 5px 5px #ccccdcff, 1rem 1rem 1rem #1b7896",
          borderRadius: "20px",
          padding: "10%",
        }}
      >
        <div className="row align-items-center">
          {/* LEFT: Image */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0 fade-left">
            <img
              src={imageUrl}
              alt={`${name}'s Profile`}
              className="img-fluid rounded-circle shadow-lg"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                border: "5px solid #6866cfff",
                boxShadow: "2px 2px 5px 5px #aeb5ccff, 1rem 1rem 1rem #1b7896",
              }}
            />
          </div>

          {/* RIGHT: Text */}
          <div className="col-12 col-md-6 text-center text-md-start px-md-5 fade-right">
            <h1 className="fw-bold mb-3 typing-animation">{name}</h1>

            <p className="fs-6 mb-2">{description1}</p>
            <p className="fs-6 mb-3">{description2}</p>
            <p className="fs-6 mb-4">{more}</p>

            <div className="mt-3">
              {/* Download Resume */}
              <a
                href={resume}
                download="resume"
                className="btn btn-primary px-4 py-2 me-3"
                style={{ borderRadius: "25px" }}
              >
                Download Resume
              </a>

              {/* Contact Me */}
              <Link
                to="/contact"
                className="btn btn-outline-primary px-4 py-2"
                style={{ borderRadius: "25px" }}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          /* Fade Animations */
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .fade-left {
            animation: fadeInLeft 1s ease-in-out;
          }

          .fade-right {
            animation: fadeInRight 1s ease-in-out;
          }

          /* Typing Effect */
          .typing-animation {
            overflow: hidden;
            white-space: nowrap;
            border-right: 3px solid #0d6efd;
            width: 0;
            animation: typing 3s steps(30, end) forwards, blink 0.6s step-end infinite alternate;
          }

          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes blink {
            50% { border-color: transparent; }
          }
        `}
      </style>
    </section>
  );
}

export default TwoComponent;
