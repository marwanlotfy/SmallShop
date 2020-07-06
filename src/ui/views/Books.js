import React from 'react'
import BookServices from '../../core/domain/services/BookServices'
import AddBookEvent from './../../core/domain/events/AddBookEvent'
import { Container } from 'reactstrap'
import ReactivePaginator from '../components/ReactivePaginator'

const sound = require('./../../assets/sounds/swiftly.mp3')
class Books extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            books:[],
            booksFilter : {
                page:1,
                category:'',
                author:'',
            },
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
                }),

            ),
            this.state.booksFilter
        )
    }
    paginatorUpdateContent(){
        if (this.bookServices.haveBooksFor(this.state.booksFilter)) {
            this.state.booksFilter.page++;
            this.updateContent()
        }
    }
    playSound(){
       (new Audio( sound )).play();
    }
    componentDidMount(){
        this.updateContent()
        this.AddBookLisinter.doForMe( newBook => {
            this.setState( prevState  => ({books:[newBook,...prevState.books]}),()=>this.playSound())
        })
    }
    render(){
        const { books , isLoading} = this.state
        return(
            <Container>
                {books.length?(
                <ReactivePaginator updateContent={()=>this.paginatorUpdateContent()}>
                    <h1>Books</h1>
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
                            <tr style={{marginBottom:'20px'}} key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.category.name}</td>
                                <td>{book.author.name}</td>
                                <td>{book.edition}</td>
                                <td>{book.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {isLoading?(
                        <div>...loading</div>
                    ):null}
                </ReactivePaginator>
                ):(<div>Sorry There Is No Books </div>)}
            </Container>
        )
    }
}
export default Books;
