import React, { Component } from 'react';
import './App.css';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';


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
                <div className="App-logo">Users</div>
                <p className="App-header">
                    {this.state.users.map(user =>
                    <div key={user.id}>user: {user.name} Email: {user.email}</div>
                    )}
                    {this.state.expenses.map(expense =>
                        <div key={expense.id}>user: {expense.username} Type: {expense.type}</div>
                    )}

                    <Form>
                        <legend>Title</legend>
                        <Input placeholder="Input 1" />
                        <Input placeholder="Input 2" />
                        <Button variant="raised">Submit</Button>
                    </Form>
                    </p>
            </div>
        );
    }
}
export default App;