import React from "react";

function About() {
  return (
    <section id="about"  
      style={{
        background: "linear-gradient(135deg, #2b2c2d, #1f4cb5ff)",
        minHeight: "100vh",
         paddingTop:"8%"
      }}>
      <div className="container">
        {/* Heading */}

        <div className="row align-items-center about" id="aboutdiv">
          {/* Left - Detailed Info */}
        
          <div className="col-12 col-md-6 text-center text-md-start p-5" 
            style={{
              border:"2px solid #b4c4dcff", 
              boxShadow: "1px 1px 1px white, 0 0 2rem #1b7896", 
              borderRadius:"20px"
          }}>
            <h2 className="fw-bold mb-5">About Me</h2>
            <p className="fs-6">
              I’m a passionate and detail-oriented <strong>Software Developer</strong> focused on
              building applications that are efficient, secure, and user-friendly.  
              My journey into coding started with a curiosity for how technology shapes real-world
              experiences — and that curiosity turned into a strong commitment to software development.
            </p>

            <p className="fs-6">
              I enjoy transforming complex ideas into practical and visually appealing web solutions.
              My professional focus lies in <strong>full-stack development</strong>, emphasizing clean
              design, performance optimization, and seamless user interaction.
            </p>

            <p className="fs-6">
              Beyond coding, I believe in continuous learning, teamwork, and staying updated with
              modern technologies to create meaningful digital experiences.
            </p>

            <a href="/contact" className="btn btn-primary px-4 py-2 rounded-pill mt-3">
              Get in Touch
            </a>
          </div>

          {/* Right - Education */}
          <div className="col-12 col-md-5 mt-md-0 p-3 education" >
            <h3 className="fw-bold mb-3 text-center text-md-start" style={{marginTop:"10%"}}>Education</h3>

            <div className="card mb-3 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-1">Bachelor of technology (B.tech)</h5>
                <p className="card-text mb-1">Institute: <strong>Axis institute of technology & management, Kanpur</strong></p>
                <p className="card-text mb-1">Session: <strong>2022 – 2026</strong></p>
                <p className="card-text mb-0">Cgpa: <strong>7.8</strong></p>
              </div>
            </div>

            <div className="card mb-3 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-1">Intermediate (12th)</h5>
                <p className="card-text mb-1">Board: <strong>Uttar Pradesh Board</strong></p>
                <p className="card-text mb-1">School: <strong>Late ram asre girls inter college, Aung Fatehpur</strong></p>
                <p className="card-text mb-0">Percentage: <strong>78.2%</strong></p>
              </div>
            </div>

            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-1">High School (10th)</h5>
                <p className="card-text mb-1">Board: <strong>Uttar Pradesh Board</strong></p>
                <p className="card-text mb-1">School: <strong>Late ram asre girls inter college, Aung Fatehpur</strong></p>
                <p className="card-text mb-0">Percentage: <strong>85%</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
