import React from 'react'
import Books from './ui/views/Books';
import AddBook from './ui/views/AddBook';
import NavBar from './ui/components/_layout/NavBar';
import { Switch , Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <Books />
                    </Route>
                    <Route path="/add-book" exact>
                        <AddBook/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
export default App;
