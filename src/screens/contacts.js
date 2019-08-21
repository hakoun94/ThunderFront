import React, { Component } from 'react' ;
import { ContactsTable } from '../contacts' ;
import { Link } from 'react-router-dom' ;
import { getRequest } from '../funcs/http' ;


const columns = ['id','firstname','lastname','email','phone','addresses'] ;

class Contacts extends Component {

  state = { data : null }


  componentDidMount = () => {
    getRequest('contacts').then(resp => {
      this.setState({data : resp.data})
    })
  }




  render = () => {
    const {data} = this.state ;

    return (
      <div>
        {
          // when user requests data from the server
          data === null &&
          <div style = {styles.empty}>
            <h3 style = {styles.text}>Loading ...</h3>
          </div>

        }
        {
          // when data is ready
          data && data.length > 0 &&
          <div style = {styles.tableWrapper}>
            <ContactsTable
              data = { data }
              columns = { columns }
              pagination = { 5 }
              title = 'Contacts'
              history = { this.props.history }

            />
          </div>
        }

        {
          // when data is ready but empty
          data && data.length === 0 &&
          <div style = {styles.empty}>
            <h3 style = {styles.text}>Not items yet</h3>
            <Link to = '/form'>
              <div style = {styles.btn}>Add First item</div>
            </Link>
          </div>

        }

      </div>

    )
  }

}

const styles = {
  empty : {
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : "center",
    height : '100vh',
    flexDirection : 'column'
  },
  text : {
    background : "#F5F5F5" ,
    padding : 20 ,
    height : 100,
    width : 100 ,
    borderRadius : 6,
    fontSize : 15,
    display : 'flex',
    alignItems : 'center' ,
    justifyContent : "center",
    marginBottom : 20
  },
  btn : {
    background : "#ff4fa1" ,
    color : "#fff",
    borderRadius : 6,
    padding : "10px 20px",
    fontWeight : "bold",
    boxShadow : '2px 2px 5px #ddd',
    cursor : 'pointer'
  },
  tableWrapper : {
    width : '80%',
    margin : "5px auto"
  }
}
export default Contacts ;
