import React from 'react';
import './App.css';
import {Search} from './Components/Search';
import {Card} from './Components/Card/Card';
import './Styles/bootstrap-grid.css';

class App extends React.Component{

  constructor(props){
    super(props);
     this.state={
      cartItems:[],
      searchField:''

     }
  }



  componentDidMount(){

      fetch('http://jsonplaceholder.typicode.com/users')
          .then(res=>res.json())
          .then(users=>this.setState({
              cartItems:users
          }))
          .catch(error=>console.log(error))

      console.log(this.state.cartItems)


  }

    handleChange=(e)=>{
      this.setState({
          searchField:e.target.value
      })
    }


  render(){

      const {cartItems,searchField}=this.state;

      const searchResults=cartItems.filter(monsters=>
        monsters.name.toLowerCase().includes(searchField.toLowerCase())
      );

      console.log(searchResults);
      // console.log(this.state);
      return (
          <div className="container">
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <Search  placeHolder='Search Monsters' onChange={this.handleChange} />
            </div>

            <Card monsters={searchResults} />

          </div>
      )
  }

}

export default App;
