import React from 'react'

function Alert(props) {
    return (
        <div style={{height:'50px'}}>
       { props.alert && <>
          <div id="alert1" className={`alert alert-${props.alert.state} alert-dismissible fade show d-flex justify-content-between align-items-center`} role="alert">
            <strong>{props.alert.heading}</strong>{props.alert.msg}
          </div>
          </>
          }
          </div>
        
      );
      
}

export default Alert
