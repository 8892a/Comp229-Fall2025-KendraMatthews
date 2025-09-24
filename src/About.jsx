import React from "react";

function About() {
  return  (
    <div className="information">
      <h1>About Me:</h1>
      <h3>My name is Kendra Riley Matthews, I'm a 20 year old software development student at Centennial College, I am in my second year and initially started programming because I enjoyed a python course in highschool, since then I have been studying programming for 3 years now. </h3>
      <a href="/Kendra_Matthews_Resume.pdf">Resume</a>
      <button onClick={() => window.location.href="/portfolio"}>View my Portfolio</button>
    </div>

  )


}

export default About;
