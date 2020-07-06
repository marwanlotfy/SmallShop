import React from 'react'

class ReactivePaginator extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    paginatorUpdateContent(){
        let node = document.querySelector('#reactive-paginator');
        if ( node.scrollHeight - node.scrollTop === node.clientHeight ) {
            this.props.updateContent()
        }
    }
    render(){
        return (
            <div style={{overflowY:'scroll',height:'53vh'}}
                 id='reactive-paginator'
                 onScroll={()=>this.paginatorUpdateContent()}
            >
            {this.props.children}
            </div>
        )
    }
}
export default ReactivePaginator;
