import React from 'react';

function All() {
  return (
  <div className= "row justify-content-evenly">
        <div className="card  mt-5" style ={{width:"18rem"}}>
            <img src= './images/img1.jpeg' style={{width:"100%" , height:"auto"}} className="card-img-top" alt="..."/>
           <div className="card-body">
              <h4 className="card-text">Top 10 Unique Project Ideas for College Students</h4>
           </div> 
       </div>

       <div className="card  mt-5" style ={{width:"18rem"}}>
            <img src= './images/img2.jpeg' style={{width:"100%" , height:"auto"}} className="card-img-top" alt="..."/>
           <div className="card-body">
              <h4 className="card-text">A Guide To Learning Blockchain Technology From Scratch</h4>
           </div> 
       </div>

       <div className="card  mt-5" style ={{width:"18rem"}}>
            <img src= './images/img3.jpg' style={{width:"100%" , height:"auto"}} className="card-img-top" alt="..."/>
           <div className="card-body">
              <h4 className="card-text">10 Hardest and Easiest Programming Languages in 2024</h4>
           </div> 
       </div>
    </div>
  )
}

export default All;