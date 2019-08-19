import React from 'react' ;
import { ContactForm } from '../contacts' ;

const ContactFormScreen = (props) => {
  
  return (
      <div style = {styles.container}>
        <button style = {styles.btn} onClick = {() => props.history.push('/')}>Back</button>
        <div style = {styles.formWrapper}>
          <ContactForm  {...props}/>
        </div>
      </div>
  )
}


const styles = {
  container : {
    display : 'flex' ,

  },
  formWrapper : {
    width : '30%' ,
    margin : '5px auto',
  },
  btn : {
    height : 40,
    width : 100,
    margin : 5,
    background : "#444" ,
    border : 'none',
    color : "#fff",
    boxShadow : '2px 2px 5px #ddd',
    cursor : 'pointer'
  }
}

export default ContactFormScreen;
