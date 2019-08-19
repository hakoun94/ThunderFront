import React from 'react' ;

const ContactsTableRow = ({item,titles}) => {


  return (
    <div style = {styles.container}>
        <div style = {styles.btn}> - </div>
        <div style = {styles.btn}> * </div>
        {
          titles.map(title => (
            <p key = {title}>{item[title]}</p>
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


  }

}


export default ContactsTableRow ;
