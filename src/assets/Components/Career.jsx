import React from 'react';

function Career() {
  return (
    <div className= "row justify-content-evenly">
    <div className="card  mt-5" style ={{width:"18rem"}}>
        <img src= './images/img15.webp' style={{width:"100%" , height:"auto"}} className="card-img-top" alt="..."/>
       <div className="card-body">
          <h4 className="card-text">Brainstorming in Design Thinking – A Complete Guide</h4>
       </div> 
   </div>

   <div className="card  mt-5" style ={{width:"18rem"}}>
        <img src= './images/img14.png' style={{width:"100%" , height:"auto"}} className="card-img-top" alt="..."/>
       <div className="card-body">
          <h4 className="card-text">10 Innovative Project Ideas for Students to Boost Creativity and Skills</h4>
       </div> 
   </div>

   <div className="card mt-5" style ={{width:"18rem"}}>
        <img src= './images/img13.webp' style={{width:"100%" , height:"auto"}} className="card-img-top" alt="..."/>
       <div className="card-body">
          <h4 className="card-text">Mechanical Engineering to Software Engineering: A Proven Guide | 2024</h4>
       </div> 
   </div>
</div>
  )
}

export default Career;