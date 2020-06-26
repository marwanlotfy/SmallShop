import React from 'react'
import { baseUrl } from './config'

class App extends React.Component{
    render(){
        return(<div> hello World agin ! <a href={baseUrl} >click me </a> </div>)
    }
}
import { format } from 'path';
export default App;
