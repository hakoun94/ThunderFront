import React from 'react';
import { Contacts,ContactFormScreen } from './screens' ;
import { BrowserRouter , Route,Switch } from 'react-router-dom' ;


//
//
// const data = [
//   {id : 1 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 2 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 3 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 4 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 5 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 6 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 7 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 8 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 9 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 10 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 11, firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 12 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 13 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 14 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 15 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 16 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 17 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 18 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 18 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 19 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
//   {id : 20 , firstname : 'Hamza',lastname : 'Hakoun',phone : '0938268712' , email : "hakoun.h.94@gmail.com",address : 'asd'} ,
// ] ;
//

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path = '/' component = {Contacts} exact />
        <Route path = '/form' component = {ContactFormScreen} />
      </Switch>
    </BrowserRouter>

  );
}


export default App;
