import React from 'react'
import BookServices from '../../core/domain/services/BookServices'
class Books extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            books:[],
            booksFilter : {},
        }
        this.bookServices = new BookServices
    }
    componentDidMount(){
        this.setState({isLoading:true})
        this.bookServices.getBooks( 
            (books) => this.setState({books,isLoading:false}),
            this.state.booksFilter
         )
    }
    render(){
        const { books , isLoading} = this.state
        return(
            <>
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
            </>
        )
    }
}
export default Books;
