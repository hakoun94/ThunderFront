import React, { Component } from 'react' ;
import { request,deleteRequest } from '../funcs/http' ;

class ContactForm extends Component {

  state = {
    firstname : '' ,
    lastname : '' ,
    email : '' ,
    addresses : '' ,
    phone : '' ,
    buttonDisabled : false ,
  }

  onDeleteClick = () => {
    const { item } = this.props.location.query ;
    deleteRequest(`contacts/${item.id}`).then(resp => {
      this.props.history.push('/')
    })
  }


  // when user clicks submit button
  onSubmit = (e) => {
    e.preventDefault() ;
    this.setState({buttonDisabled : true}) ;

    //decide request method (post or put)
    const method = this.props.location.query ? 'PUT' : 'POST' ;

    //decide request url based on request method type
    const url = method === 'PUT' ? `contacts/${this.props.location.query.item.id}` : 'contacts'
    request(url,{...this.state},method).then(resp => {
      this.setState({buttonDisabled : false }) ;
      this.props.history.push('/') ;
    })

  }

  // change the content for inputs (while user is typing )
  handleChange = (e,key) => this.setState({ [key] : e.target.value }) ;

  componentDidMount = () => {
      if (this.props.location.query) {
        this.setState({...this.props.location.query.item})
      }
  }

  render = () => {

    return (
      <div style = {styles.container}>

        <div style = {styles.formHeader}>
          Contact Form
          {
            this.props.location.query &&
            <div style = {styles.deleteBtn} onClick = {this.onDeleteClick}>Delete</div>
          }

        </div>
        <form style = {styles.form}>

          <div style = {styles.inputWrapper}>
            <p>Firstname</p>
            <input
              type = 'text'
              style = {styles.input}
              value = {this.state.firstname}
              onChange = { (e) => this.handleChange(e,'firstname') }

            />
          </div>

          <div style = {styles.inputWrapper}>
            <p>Lastname</p>
            <input
              type = 'text'
              style = {styles.input}
              value = {this.state.lastname}
              onChange = { (e) => this.handleChange(e,'lastname') }

            />
          </div>

          <div style = {styles.inputWrapper}>
            <p>Email</p>
            <input
              type = 'email'
              style = {styles.input}
              value = {this.state.email}
              onChange = { (e) => this.handleChange(e,'email') }

            />
          </div>

          <div style = {styles.inputWrapper}>
            <p>Phone</p>
            <input
              type = 'text'
              style = {styles.input}
              value = {this.state.phone}
              onChange = { (e) => this.handleChange(e,'phone') }

            />
          </div>

          <div style = {styles.inputWrapper}>
            <p>Address</p>
            <input
              type = 'text'
              style = {styles.input}
              value = {this.state.addresses}
              onChange = { (e) => this.handleChange(e,'addresses') }

            />
          </div>

          <div style = {styles.inputWrapper}>
            <p></p>
            <input
              type = 'submit'
              value = 'Submit'
              style = {styles.submit}
              onClick = {this.onSubmit}
              disabled = {this.state.buttonDisabled}
            />
          </div>


        </form>
      </div>
    )
  }
}


const styles = {
  container : {
    boxShadow : '2px 2px 5px #ddd' ,
    borderRadius : 6 ,
    width : '100%',
    height : '100%',
    padding : '10px 20px'
  },
  formHeader : {
    padding : 5 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-between',
    borderBottom : 'solid 1px #ddd'
  },
  inputWrapper : {
    display: 'flex' ,
    flexDirection : 'column',
    alignItems : 'center' ,
    justifyContent : 'center'
  },
  form : {
    padding : 10
  },
  input : {
    border : 'solid 1px #ddd',
    padding : 14,
    width : '80%',
    textAlign : 'center'
  },
  submit : {
    padding : 10 ,
    color : "#fff" ,
    fontWeight : "bold" ,
    background : "#ff4fa1",
    border : "none",
    width : '90%'
  },
  deleteBtn : {
    background : "#444" ,
    color : "#fff",
    padding : 10,
    borderRadius : 6,
    cursor : 'pointer'
  }
}
export default ContactForm ;
