import React, { Component } from 'react' ;
import ContactsTableRow from './contactsTableRow' ;


class ContactsTable extends Component {


  state = {
    index : 0, // index of current page in table (pagination)
  }

  // when user clicks next button
  next = () => {
    const { index } = this.state ;
    const { pagination,data } = this.props ;
    if (index  + pagination > data.length) {
      this.setState({index : data.length}) ;
      return
    }
    this.setState({index : index + pagination})
  }


  // when user clicks previous button
  prev = () => {
    const { index } = this.state ;
    const { pagination } = this.props ;
    if (index - pagination < 0) {
      this.setState({index : pagination}) ;
      return
    }
    this.setState({index : index - pagination})
  }


  render = () => {
    const { title, columns,data,pagination } = this.props ;
    let block ; // block of data to be displayed

    if (pagination <= 0 ||  ! pagination) {
     block = data ;
    } else {
      block = [...data.slice(this.state.index ,this.state.index + pagination)]
    }

    return (
      <div style = {styles.container}>

        <div style = {styles.tableHeader}>
          <h3>{title}</h3>
          <button style = {styles.add} onClick = {() => this.props.history.push('/form')}> + </button>
        </div>

        <div style = {styles.titles}>
          {
            //columns.map(title => <p>{title}</p>)
          }
        </div>

        <div style = {styles.tableBody}>
          {
            block &&
            block.map((item,index) => (
              <ContactsTableRow
                item = {item}
                titles = {columns}
                key = {item.id}
              />
            ))
          }
        </div>

        <div style = {styles.footer}>
          {
            !!pagination && pagination > 0 &&
            <div style = {styles.buttonsWrapper}>
              <button
                style = {styles.btn}
                onClick = {this.prev}
                disabled = { this.state.index  <= 0 }
                >Prev</button>
              <button
                style = {styles.btn}
                onClick = {this.next}
                disabled = {this.state.index + pagination >= data.length}
              >Next</button>
            </div>
          }


        </div>

      </div>
    )
  }
}


const styles = {
  container : {
    width : '100%' ,
    minHeight : 300 ,
    boxShadow : '2px 2px 5px #ddd' ,
    borderRadius : 6,
    position : 'relative'
  } ,
  tableHeader : {
    padding : '10px 20px',
    color : '#444',
    display : "flex" ,
    justifyContent : "space-between" ,
    alignItems : "center",
    width : '95%',
    margin : 'auto'
  } ,

  tableBody : {
    padding : '0px 50px',
  },
  footer : {
    padding : 20,
    display : 'flex' ,
    justifyContent: 'flex-end',


  },
  buttonsWrapper : {
    padding : '0 20px',
    display : "flex"
  },

  titles : {
    display : 'flex',
    justifyContent : 'space-around',
    padding : "0 50px",

  },
  btn : {
    border : 'none',
    padding : 20 ,
    background : '#fff',
    color : "#444" ,
    cursor : 'pointer'
  },
  add : {
    background : "#444" ,
    border : 'none' ,
    color : "#fff" ,
    fontWeight : 'bold',
    borderRadius : 6,
    width : 25 ,
    height : 25,
    cursor : 'pointer'
  }

}

export default ContactsTable ;
