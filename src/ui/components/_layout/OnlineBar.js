import React from 'react'
export default class OnlineBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {show:false}
    }
    componentWillReceiveProps(nextProps){
        let animateBar = () => { setTimeout(() => this.setState({show:false}),1000) }

        this.setState({show:true})

        if ( nextProps.Online ){
            setTimeout( animateBar , 0)
        }
    }

    render(){
        return (
            <>
            {this.state.show?(
                <div style={{
                        display:'block',
                        boxSizing:'border-box',
                        height:'40px',
                        width:'100%',
                        backgroundColor:'green',
                        textAlign:'center',
                        padding:'10px',
                    }}>
                    {this.props.Online?'you are online':'you are offline'}
                </div>
            ):null}
            </>
        )
    }
}
