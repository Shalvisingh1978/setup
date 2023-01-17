import React, { useState } from 'react'

const Textform = (props) => {
     const [ text , setText] = useState("");
     const handleUpCase = () =>
     { let newText = text.toUpperCase();
        setText(newText)
     }
     const handleLowCase = () =>
     { let newText = text.toLowerCase();
        setText(newText)
     }
     const handleClearCase = () =>
     { let newText = "";
        setText(newText)
     }
     const upper =(event)=>
     {
        setText(event.target.value)
     }
  return (
    <>
    <div className="mb-3">
    <label htmlFor="Mybox" className="form-label">{props.heading}</label>
  <textarea className="form-control" onChange={upper} value={text} id="Mybox" rows="8"></textarea>
    </div>
  <button type="button" onClick={handleUpCase} className="btn btn-primary">Convert To Uppercase</button>
  <button type="button" onClick={handleLowCase} className="btn btn-primary mx-2">Convert To Lowercase</button>
  <button type="button" onClick={handleClearCase} className="btn btn-primary mx-2">Clear Text</button>
  <div className="container my-3">
    <h1>Your Text Summery</h1>
    <p>
       {text.split(" ").length} word {text.length} characters
    </p>
    <p>
       { 0.008*text.split(" ").length} minutes
    </p>
    <h1>Preview</h1>
    <p>
       {text}
    </p>

  </div>


    </>


  )
}

export default Textform
