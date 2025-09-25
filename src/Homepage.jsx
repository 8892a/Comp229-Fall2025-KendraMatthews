// Portfolio-KendraMatthews Kendra Matthews Comp229 Assignment 1 2025-09-23 301499660


//Homepage

//Displays about me information.
function Homepage() {
  return (
    <div className="background">
    


      <h1>Welcome to My Portfolio</h1>
      <h3>My name is Kendra Matthews, I'm a second year Software Engineering student at Centennial College</h3>
      <p className="mission-statement">Mission Statement: I strive to create perfect harmony between creativity and technology.</p>
      <button onClick={() => window.location.href="/About"}>Learn More About Me</button>
    </div>
  );
}

export default Homepage;
