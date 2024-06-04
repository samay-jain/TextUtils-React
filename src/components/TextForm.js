import React,{useState} from 'react'



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
        document.getSelection().removeAllRanges();
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
            <h2 className="mb-2">{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#13466e':'white', color: props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn mx-1 my-1" style={{backgroundColor: '#1aec8a'}} onClick={ConvertToUppercase}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn mx-1 my-1" style={{backgroundColor: '#1aec8a'}} onClick={ConvertToLowercase}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn mx-1 my-1" style={{backgroundColor: '#1aec8a'}} onClick={ClearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn mx-1 my-1" style={{backgroundColor: '#1aec8a'}} onClick={ExtractEmails}>Extract Emails</button>
            <button disabled={text.length===0} className="btn mx-1 my-1" style={{backgroundColor: '#1aec8a'}} onClick={CopyToClipboard}>Copy Text</button>
            <button disabled={text.length===0} className="btn mx-1 my-1" style={{backgroundColor: '#1aec8a'}} onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white':'#042743'}}>
            <h2>Your text summary</h2>

            <p> <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words, <b>{text.length}</b> characters</p>
            
            <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read</p>

            <h2>Preview</h2>
            <p>{text.length>0? text: "Nothing to preview"}</p>
        
        </div>
        </>
    )
}
