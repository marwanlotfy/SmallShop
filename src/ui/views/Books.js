import React from 'react'
import BookServices from '../../core/domain/services/BookServices'
import AddBookEvent from './../../core/domain/events/AddBookEvent'
class Books extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            books:[],
            booksFilter : {page:1},
        }
        this.bookServices = new BookServices;
        this.AddBookLisinter = new AddBookEvent;
    }
    updateContent(){
        this.setState({isLoading:true})
        this.bookServices.getBooks(
            (books) => this.setState(

            (prevState) => ({
                books:[ ...prevState.books, ...books],
                isLoading:false
            })),
            this.state.booksFilter

        )
    }
    paginatorUpdateContent(){
        let node = document.querySelector('.reactive-paginator');
        if ( node.scrollHeight - node.scrollTop === node.clientHeight ) {
            this.updateContent()
        }
    }
    componentDidMount(){
        this.updateContent()
        this.AddBookLisinter.doForMe( newBook => {
            this.setState( prevState  => ({books:[newBook,...prevState.books]}))
        })
    }
    render(){
        const { books , isLoading} = this.state
        return(
            <div style={{overflowY:'scroll',height:'90vh'}} className='reactive-paginator' onScroll={()=>this.paginatorUpdateContent()}>
                <h1>Books</h1>
                {isLoading?(
                    <div>...loading</div>
                ):(
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>category</th>
                            <th>author</th>
                            <th>edition</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map( book  => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.category}</td>
                                <td>{book.authorName}</td>
                                <td>{book.edition}</td>
                                <td>{book.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
            </div>
        )
    }
}
export default Books;
