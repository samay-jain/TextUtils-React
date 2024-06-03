import React, {useState} from 'react'



export default function TextForm(props) {
    const ConvertToUppercase = () => {
        //console.log("Button was clicked")
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const ConvertToLowercase = () => {
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const ClearText = () => {
        setText('');
        props.showAlert("Cleared text","success");
    }
    const ExtractEmails = () => {
        const words = text.split(" ");
        let newEmail = "";
        words.forEach(element => {
            if(element.endsWith(".com"))
                newEmail += element+"\n";
            setText(newEmail);
        });
        props.showAlert("Emails are extracted!","success");
    }
    const CopyToClipboard = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard!","success");
    }
    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed","success");
    }
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={ConvertToUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={ConvertToLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={ClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={ExtractEmails}>Extract Emails</button>
            <button className="btn btn-primary mx-1" onClick={CopyToClipboard}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p> <b>{text.trim().split(" ").length===1 && text.trim().split(" ")[0]==="" ? 0 : text.trim().split(" ").length}</b> words, <b>{text.length}</b> characters</p>
            <p><b>{0.008*text.split(" ").length}</b> Minutes read</p>

            <h2>Preview</h2>
            <p>{text.length>0? text: "Enter something in the textbox above to preview it here"}</p>
        
        </div>
        </>
    )
}
