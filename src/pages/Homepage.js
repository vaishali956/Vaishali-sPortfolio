import React from "react";
import TwoComponent from "./TwoComponent";
import About from './About';
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Extracurricular from "./Extracurricular";
import Contact from "./Contact";

function Homepage(){
    return(
        <>
           <TwoComponent
              imageUrl="/Media/MyPhotocopy.jpg"
              name="Hi, I'm Vaishali Patel"
              description1="Aspiring Full-Stack Developer passionate about building secure, 
                high-performance, and user-focused web applications."
              description2="I combine technical precision with creativity to design efficient, scalable systems — from concept to deployment. "
              more="Open to work & collaboration opportunities"
              resume="\Media\Resume.pdf"
           />
           
           <About/>
           <Experience/>
           <Projects/>
           <Skills/>
           <Extracurricular/>
           <Contact/>

        </>
    );
}
export default Homepage;