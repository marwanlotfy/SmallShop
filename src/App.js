import React from 'react'
import Books from './ui/views/Books';
import AddBook from './ui/views/AddBook';
import NavBar from './ui/components/_layout/NavBar';
import { Switch , Route, BrowserRouter as Router } from 'react-router-dom'
import StatusListiner from './core/domain/services/StatusListiner';
import OnlineBar from './ui/components/_layout/OnlineBar';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOnline:true,
            isAuthenticated:false,
        }
    };
    componentDidMount(){
        // AuthenticationManager.start(
        //     (isAuthenticated) => this.setState({isAuthenticated})
        // )
        StatusListiner.start(
            ()=>this.setState({isOnline:true}),
            ()=>this.setState({isOnline:false})
        );
    }
    render(){
        return(
            <Router>
                <OnlineBar Online={this.state.isOnline} />
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
