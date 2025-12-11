import React from "react";

function Skills() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0d3d6cff, #601886ff)",
        minHeight: "100vh",
         paddingTop:"6%"
      }}>
      <div className="container mb-3">
        <h2 className="text-center fw-bold mb-4">My Skills</h2>

        <div className="row skillspage" style={{display:"flex", justifyContent:"center"}}>
          {/* Technical Skills */}
          <div className=" skills col-12 col-md-4">
            <h4 style={{ paddingLeft:"10%"}}>Technical Skills</h4>
            <ul className="list-unstyled fs-6 " style={{ paddingLeft:"20%"}}>
              <li style={{listStyleType:"circle"}}>
                <strong>Languages:</strong> Java, Data Structures & Algorithms (DSA)
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
                <strong>Tools & Platforms:</strong> GitHub, AWS, Docker, LeetCode, Azure
              </li >
              <li style={{listStyleType:"circle"}}>
                <strong>Other:</strong> Artificial Intelligence, Machine Learning
              </li>
            </ul>
          </div>
        
          {/* Soft Skills */}
          <div className="skills col-12 col-md-4">
              <h4 style={{ paddingLeft:"10%"}}>Soft Skills</h4>
              <ul className="list-unstyled fs-6" style={{ paddingLeft:"20%"}}>
                <li style={{listStyleType:"circle"}}>Adaptability</li>
                <li style={{listStyleType:"circle"}}>Team Collaboration</li>
                <li style={{listStyleType:"circle"}}>Attention to Detail</li>
                <li style={{listStyleType:"circle"}}>Problem Solving</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
