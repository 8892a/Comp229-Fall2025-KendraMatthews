import React from "react";

function Portfolio() {

  return(
    <div className="backgroundportfolio"> 
      <h2>Portfolio</h2>
      <h3>One of my biggest projects is my Aquarium information guide website, currently it is only a prototype for educational purposes to help me learn, but its something I'm incredibly proud of and has taken a long time to build since I would like relevent information and for it to look like a professional website.</h3>
      <div className="portfoliophotos">
          <img src="portfolio1.png" height={500} width={800} ></img>
      </div>
      <h3>The Image above is a species list that when clicked provides the user with all relative information on each fish.</h3>
      <div className="portfoliophotos">
        <img src="portfolio2.png" height={500} width={800}></img>
      </div>
       <h3>The image above is a water change calculator, this helps by taking the tank size, fish count, nitrite levels, nitrate levels, ammonia levels and filter type to provide the user with an accurate estimate on when/if they need to perform a water change. how it does this is it compares values, for example the amount of fish you have is going to make your water quality worse, same with other factors, it checks whether or not the water is currently safe and recommends exactly how much water to replace</h3>
       <div>
        <img src="portfolio3.png" height={500} width={800}></img>
       </div>
       <h3>Below is a glossary of some aquarium topics that people struggle with the most, I wanted this to look like a real website so I went on platforms and did research on common questions, not all of these links take you to a complete webpage, I work on the project on my own so its quite difficult to provide accurate information for so many topics quickly.</h3>
      </div>

  )

}

export default Portfolio;
