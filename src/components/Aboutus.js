import React, { useState } from 'react'
export default function Aboutus(props) {
  return (
    <>
    <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>FAQs:</h2>
      <div className="container p-3 rounded" >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Usage Of Text Advancement
              </button>
              
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body"  >
              Text advancement is used for Uppercasing, Lowercasing, Copying, Removing Text & Characters.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Benefits of Text Advancement
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body"  >
                Text advancement is very useful for content writers and book readers to format their text and other things.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Who to use text advancement
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body"  >
              Paste Text And start using Text Advancment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
