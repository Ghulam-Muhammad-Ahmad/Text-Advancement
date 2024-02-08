import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function Textform(props) {
  function changeValue(event){
    textState(event.target.value);
  }
  function upperCaseClick() {
    textState(text.toUpperCase());
    props.showAlert("success" , "Converted To Uppercase")
  }
  function lowerCaseClick() {
    textState(text.toLowerCase());
    props.showAlert("success" , "Converted To Lowercase")
  }
  function removeText() {
    let textclr = "";
    textState(textclr);
    props.showAlert("danger" , "Text Removed")
  }
  function copyHandler() {
navigator.clipboard.writeText(text);
props.showAlert("secondary" , "Text Copied");
  }
  const extraSpaceRemove = () =>{
    let nospaceText = text.split(/[ ]+/);
    textState(nospaceText.join(" "));
    props.showAlert("warning", "Extra Spaces Removed")
  }
  function removedigits() {
  let digitremovedtext = text.replace(/[0-9]/g , "");
  textState(digitremovedtext); 
  props.showAlert("danger", "Digits Removed")
  }
  const [text, textState] = useState("");

  return (
    <>
    <div className='my-3'>
     <form>
  <div className="form-group">
    <label htmlFor="myText" className={`textlabel text-${props.mode === "dark" ? "light" : "dark"}`}>Enter Text </label>
    <textarea className="form-control" value={text} onChange={changeValue} id="myText" rows="8"></textarea>
  </div>
</form>
<div className="btns my-4">
<button disabled={text.length === 0}  className="btn btn-primary mt-1 my-1 ml-4" onClick={upperCaseClick}>Convert To Upper Case</button>
<button disabled={text.length === 0} className="btn btn-primary mt-1 my-1 " onClick={lowerCaseClick}>Convert To Lower Case</button>
<button disabled={text.length === 0} className="btn btn-secondary mt-1 my-1" onClick={copyHandler}>Copy Text</button>
<button disabled={text.length === 0} className="btn btn-info mt-1 my-1" onClick={extraSpaceRemove}>Remove Extra Spaces</button>
<button disabled={text.length === 0} className="btn btn-danger mt-1 my-1 " onClick={removedigits}>Remove Digits</button>
<button disabled={text.length === 0} className="btn btn-danger mt-1 my-1 " onClick={removeText}>Remove</button>

</div>
    </div>
    <div className="container mt-4">
    <div className={`characterprops text-${props.mode === "dark" ? "light" : "dark"}`}>
      {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters In The text
    </div>
    <div className="preview">
      <h2 className={`mt-4 text-${props.mode === "dark" ? "light" : "dark"}`} >Preview:</h2>
      <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        {text.length > 0 ? (
    text
  ) : (
    <span className="text-secondary">Enter Text To Preview</span>
  )}
         </p>
    </div>
    </div>
    </>
  )
}
