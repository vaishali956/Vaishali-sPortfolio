import React from "react";

function Extracurricular() {
  return (
    <section id="extracurricular"
      style={{
        background: "linear-gradient(135deg, #2b2c2d, #3b63bfff)",
        minHeight: "100vh",
         paddingTop:"6%"
      }}>
      <div className="container p-2">
        <h2 className="text-center fw-bold mb-5">Extracurricular Activities</h2>

        <div className="row" style={{justifyContent:"center"}}>
          {/* Internshala Campus Ambassador */}
          <div className="col-12 col-md-5 mb-3 p-2">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold">💻 Infosys Training Program (2025) </h4>
                <p className="text-muted mb-0">
                  Completed intensive hands-on training covering machine learning algorithms, data preprocessing, 
                  model building, and fundamentals of Microsoft Azure services including cloud compute, storage, and deployment workflows.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-5 mb-3 p-2">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold">🎓 Campus Ambassador – Internshala (ISP Program)</h4>
                <p className="text-muted mb-0">
                  Led events and outreach initiatives to promote student internships and skill
                  development across campus. Enhanced communication, leadership, and event
                  coordination skills through student engagement activities.
                </p>
              </div>
            </div>
          </div>

          {/* Google AI/ML Tech Camp */}
          <div className="col-12 col-md-5 mb-3 p-2">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold">🤖 Google AI/ML Tech Camp (2024)</h4>
                <p className="text-muted mb-0">
                  Worked on model development, data preprocessing, and applied AI projects focused
                  on solving real-world problems using Machine Learning techniques. Collaborated in
                  a team environment to implement optimized AI models.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 mb-3 p-2">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                
                <h4 className="card-title fw-bold"> 🏅 Crack-Ed (2024)</h4>
                <p className="text-muted mb-0">
                  Certified in verbal communication and professional etiquette, with demonstrated expertise in effective 
                  business communication and workplace professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Extracurricular;
