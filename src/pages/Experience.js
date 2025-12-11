import React from "react";

function Experience() {
  return (
    <section id="experience"
      style={{
        background: "linear-gradient(to left top, #0d3d6cff, #601886ff)",
        minHeight: "100vh",
        paddingTop:"6%"
      }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Internship Experience</h2>
        <div className="row" style={{display:"flex", justifyContent:"center"}}>
          {/* IndiaWings Foundation */}
          <div className="col-12 col-md-4 mb-4">
              <div
                style={{
                backgroundColor:"transparent",
                backdropFilter:"blur(100px)",
                borderTop:"10px solid  rgb(85, 127, 190)", 
                borderLeft:"10px solid  rgb(85, 127, 190)",
                borderRight:"10px solid  rgb(85, 127, 190)",
                boxShadow: "1px 1px 1px #212224ff, 0 0 1rem #202e33ff", 
                borderRadius:"80px 80px 0px 0px",
                padding:"40px 20px 30px 30px",
              }}>
                <h4>IndiaWings Foundation</h4>
                <h6>Web Developer Intern | July 2025 – September 2025</h6>
                <ul className="mt-3">
                  <li>
                    Contributed to a non-profit initiative empowering rural communities through
                    technology and digital literacy.
                  </li>
                  <li>
                    Designed responsive React.js frontend components to enhance UI/UX and ensure
                    cross-device compatibility.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to maintain accessibility standards and
                    align with organizational goals.
                  </li>
                </ul>
                <p className="mt-3 mb-0">
                  <strong>Tech:</strong> React.js, CSS, Bootstrap, JavaScript, Git
                </p>
              </div>
          </div>

          {/* CodSoft Internship */}
          <div className="col-12 col-md-4">
            <div>
              <div
                style={{
                backgroundColor:"transparent",
                backdropFilter:"blur(100px)",
                borderTop:"10px solid  rgb(85, 127, 190)", 
                borderLeft:"10px solid  rgb(85, 127, 190)",
                borderRight:"10px solid  rgb(85, 127, 190)",
                boxShadow: "1px 1px 1px #212224ff, 0 0 1rem #202e33ff", 
                borderRadius:"80px 80px 0px 0px",
                padding:"40px 20px 120px 30px",
                }}>
                <h4> CodSoft </h4>
                <h6> Web Developer Intern | July 2024 </h6>
                <ul className="mt-3">
                  <li>
                    Completed a 4-week virtual internship focused on real-world web development
                    practices.
                  </li>
                  <li>
                    Built a responsive website from scratch, ensuring smooth performance and
                    user-centric design.
                  </li>
                </ul>
                <p className="mt-3 mb-0">
                  <strong>Tech:</strong> HTML, CSS, Bootstrap, JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
