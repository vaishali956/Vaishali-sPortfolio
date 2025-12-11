import React from "react";

function Projects() {
  return (
    <section id="projects"
      style={{
        background: "linear-gradient(135deg, #2b2c2d, #3b63bfff)",
        minHeight: "100vh",
         paddingTop:"6%"
      }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-3">Projects</h2>

        <div className="row" style={{display:"flex", justifyContent:"center"}}>
          {/* Project 1 - Dream Home */}
          <div className="col-12 col-md-8 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold">🏠 Dream Home – Property Listing Platform</h4>
                <h6 className="text-muted">Jan 2025 – Apr 2025 | Full Stack Project</h6>
                <ul className="mt-3">
                  <li>
                    A property management web app allowing users to list, search, and manage
                    properties with details like price, location, and amenities.
                  </li>
                  <li>
                    Implemented secure authentication and role-based access for buyers and sellers
                    with a responsive and smooth UI.
                  </li>
                  <li>
                    Developed API-driven backend to handle dynamic property operations efficiently.
                  </li>
                </ul>
                <p className="mt-3 mb-0">
                  <strong>Tech Stack:</strong> HTML, CSS, EJS, Bootstrap, Node.js, Express.js,
                  MongoDB, REST API, Passport.js
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 - Stock Trading Platform */}
          <div className="col-12 col-md-8 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold">📈 Stock Trading Platform </h4>
                <h6 className="text-muted">Jun 2024 – Sept 2024 | MERN Stack Project</h6>
                <ul className="mt-3">
                  <li>
                    Developed a real-time trading platform replicating Zerodha’s key features — live
                    stock data, JWT authentication, order execution, and portfolio management.
                  </li>
                  <li>
                    Integrated APIs with 87% latency reduction through caching and optimized
                    requests.
                  </li>
                </ul>
                <p className="mt-3 mb-0">
                  <strong>Tech Stack:</strong> Node.js, Express.js, React, MongoDB, Netlify, REST APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
