import React from 'react'
import '../styleSheets/inlineCSS.css'
import '../styleSheets/inlineCSS2.css'
import styles from '../styleSheets/sample.module.css'

const header = {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '2px',
    backgroundColor: 'yellow'
}

function InlineCss(props) {

    let cssClassName = props.primary? 'primary': ''
    return (
        <div>
        {/* Inline Css */}    
    <div className = {`${cssClassName} secondary`} >Inline Css</div>
     {/* Object based css */}
    <div style = {header}>Object Css</div>
    {/* module css */}
    <div className={styles.third}>Module Css</div>

    </div>
  )
}

export default InlineCss