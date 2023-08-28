import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show,handelShow]= useState(false);

  const transitionNavBar=()=>{  
      if(window.scrollY > 100){
        handelShow(true); 
      }
      else{
        handelShow(false);
      } 
  };

  useEffect(()=>{   
    window.addEventListener("scroll",transitionNavBar);
   return ()=> window.removeEventListener("scroll",transitionNavBar);
  },[]);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix_Log"
        ></img>

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        ></img>

        
      </div>
    </div>
  );
}

export default Nav;
 