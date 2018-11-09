import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
   constructor(){
       super();
       this.state ={
        users: [],
        expenses: []};
   }
   componentDidMount() {
          fetch('/users')
            .then(res => {
                console.log(res);
                return res.json()
             })
            .then(users => { 
                console.log(users); 
                this.setState({ users })
             });

             fetch('/expense')
            .then(res => {
                console.log(res);
                return res.json()
             })
            .then(expenses => { 
                console.log(expenses); 
                this.setState({ expenses })
             });
         }
   render() {
        return (
            <div className="App">
                <h1>Users</h1>
                {this.state.users.map(user =>
                <div key={user.id}>user: {user.name} Email: {user.email}</div>
              )}
              {this.state.expenses.map(expense =>
                <div key={expense.id}>user: {expense.username} Type: {expense.type}</div>
              )}
            </div>
        );
    }
}
export default App;