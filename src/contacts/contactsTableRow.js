import React from 'react' ;
import { Link } from 'react-router-dom'

const ContactsTableRow = ({item,titles}) => {


  return (
    <div style = {styles.container}>
        <div style = {styles.btn}> - </div>
        <Link to = {{pathname : 'form', query : {item} }}>
          <div style = {styles.btn}> * </div>
        </Link>
        {
          titles.map(title => (
            <p key = {title} style = {styles.cell}>{item[title]}</p>
          ))
        }

    </div>
  )

}

const styles = {
  container : {
    display : "flex" ,
    justifyContent : 'space-around',
    borderBottom : 'solid 1px #ddd',
    padding : 10,
    alignItems :'center'
  },
  cell : {
    width : '15%',
    textAlign : 'center',

  },
  btn : {
    background : "#F5F5F5" ,
    //color : "#fff" ,
    fontWeight : 'bold',
    height : 20,
    width : 20,
    borderRadius : 6 ,
    display : 'flex' ,
    alignItems: 'center' ,
    justifyContent : 'center',
    padding : 5,
    cursor : 'pointer'


  }

}


export default ContactsTableRow ;
