import React from "react";

function Experience() {
  return (
    <section id="experience" className="p-5 mt-5"
        style={{
          border:"2px solid #e0e7ff", 
          boxShadow: "2px 2px 2px #aeb5ccff, 1rem 1rem 1rem #1b7896", 
          borderRadius:"20px", 
          padding:"20px",
          margin:"0px 40px"
     }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Internship Experience</h2>

        <div className="row" style={{display:"flex", justifyContent:"center"}}>
          {/* IndiaWings Foundation */}
          <div className="col-12 col-md-8 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body" 
                style={{
                border:"2px solid black", 
                boxShadow: "1px 1px 1px #b4c4dcff, 0 0 2rem #b2d6e1ff", 
                borderRadius:"10px"
              }}>
                <h4 className="card-title fw-bold">IndiaWings Foundation</h4>
                <h6 className="text-muted">Web Developer Intern | July 2025 – September 2025</h6>
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
          </div>

          {/* CodSoft Internship */}
          <div className="col-12 col-md-8">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body" style={{border:"2px solid #b4c4dcff", boxShadow: "1px 1px 1px #b4c4dcff, 0 0 2rem #b2d6e1ff", borderRadius:"10px"}}>
                <h4 className="card-title fw-bold">CodSoft</h4>
                <h6 className="text-muted">Web Developer Intern | July 2024</h6>
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
