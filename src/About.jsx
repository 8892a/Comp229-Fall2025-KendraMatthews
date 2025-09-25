// Portfolio-KendraMatthews Kendra Matthews Comp229 Assignment 1 2025-09-23 301499660

//About page
import React from "react";

//Displays information about me with buttons leading the user to my portfolio, and resume.

function About() {
  return  (
    <div className="informationabout">
      <div className="about">
              <h2>About Me:</h2>
      <h4>My name is Kendra Riley Matthews, I'm a 20 year old software development student at Centennial College, I am in my second year and initially started programming because I enjoyed a python course in highschool, since then I have been studying programming for 3 years now. I have enjoyed and interacted with technology since a young age making this career path more appealing to me in the long run.</h4>
      <img src="src\KendraPhoto.jpg" height={500} width={400}></img>
      </div>
      <div className="about2">
              <a href="/Kendra_Matthews_Resume.pdf"><button>View my Resume</button></a>
            <button onClick={() => window.location.href="/portfolio"}>View my Portfolio</button>
            
      </div>

    </div>

  )


}

export default About;
