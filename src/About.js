import React, { useState } from "react";

const About = () => {
    const [Mystyle , setMystyle ] = useState({
        color: "black",
        background: "white",
      }
      )
      const [ Btnmode, setBtnMode] = useState("Enabled Dark Mode")

      const Darkmode = ()=>
      {
        if(Mystyle.color=="white")
        {
            setMystyle({
                color: "black",
                background: "white",
              
              })
              setBtnMode("Enabled Dark Mode")
        }
        else
        {
            setMystyle({
                color: "white",
                background: "black",
                
              })
              setBtnMode("Disabled Dark Mode")
        } 
      }
  return (
    <>
   </>
  );
};

export default About;
