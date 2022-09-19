import React,{useState} from 'react'

export default function TextForm(prop) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        prop.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        prop.showAlert("Converted to LowerCase","success");
    }

    const handleClearClick=()=>{
        let newText = ' ';
        setText(newText);
        prop.showAlert("Clear Text","success");
    }

    const handleCopyText = ()=>{
        var text = document.getElementById("Textform");
        text.select();
        navigator.clipboard.writeText(text.value);
        prop.showAlert("Copy All text","success");
    }

    const handleSpaceText = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        prop.showAlert("Remove Extra Space","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const [text,setText] = useState("Enter Text Here..");


  return (
    <>
    <div className='container' style={{color:prop.mode === 'dark'?'white':'grey'}}>
        <h1>{prop.heading}</h1>
        <div className="mb-3">
        <label  className="form-label">Email address</label>
        <textarea type="email" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:prop.mode === 'dark'?'grey':'white',color:prop.mode === 'dark'?'white':'grey'}} id="Textform" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert Into UpperCase</button>

        <button className="btn btn-danger mx-1" onClick={handleLoClick}>Covert to LowerCase</button>

        <button className="btn btn-success mx-1" onClick={handleClearClick}>Clear</button>

        <button className="btn btn-success mx-1" onClick={handleCopyText}>Copy Text</button>
        
        <button className="btn btn-success mx-1" onClick={handleSpaceText}>Remove Space Text</button>

        
        
    </div>

    <div className="container my-3" style={{color:prop.mode === 'dark'?'white':'grey'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview"}</p>
    </div>
    </>
  )
}
