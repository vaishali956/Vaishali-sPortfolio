import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-5 mt-5">
      <div className="container mb-5">
        <h2 className="text-center fw-bold mb-4">Skills</h2>

        <div className="row skillspage mt-3" style={{justifyContent:"center"}}>
          {/* Technical Skills */}
          <div className="col-12 col-md-7">
            <div className="card shadow-sm border-0 h-100 mt-5">
              <div className="card-body skillsUl">
                <h4 className="card-title fw-bold" style={{ paddingLeft:"20px"}}>Technical Skills</h4>
                <ul className="list-unstyled fs-6 " style={{ paddingLeft:"10%"}}>
                  <li style={{listStyleType:"circle"}}>
                    <strong>Languages:</strong> Java, C, Data Structures & Algorithms (DSA), OOP
                  </li>
                  <li style={{listStyleType:"circle"}}>
                    <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS
                  </li>
                  <li style={{listStyleType:"circle"}}>
                    <strong>Backend:</strong> Node.js, Express.js, REST APIs
                  </li>
                  <li style={{listStyleType:"circle"}}>
                    <strong>Database:</strong>  MongoDB, SQL
                  </li>
                  <li style={{listStyleType:"circle"}}>
                    <strong>Tools & Platforms:</strong> VS Code, GitHub, AWS, Docker, LeetCode
                  </li >
                  <li style={{listStyleType:"circle"}}>
                    <strong>Other Skills:</strong> Artificial Intelligence, Machine Learning
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="col-12 col-md-7 mb-5">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold mb-3"style={{ paddingLeft:"20px"}}>Soft Skills</h4>

                <ul className="list-unstyled fs-6" style={{ paddingLeft:"10%"}}>
                  <li style={{listStyleType:"circle"}}>Adaptability</li>
                  <li style={{listStyleType:"circle"}}>Team Collaboration</li>
                  <li style={{listStyleType:"circle"}}>Attention to Detail</li>
                  <li style={{listStyleType:"circle"}}>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
