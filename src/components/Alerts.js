import React from 'react'

export default function Alerts(props) {
 function capitalized(text){
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
 }
  return (
    props.alerts && <div className='container'>
        <div className={`alert alert-${props.alerts.type} d-flex align-items-center`} role="alert">
            <div>
                {capitalized(props.alerts.type)} : {props.alerts.msg}
            </div>
        </div>
    </div>
  )
}
