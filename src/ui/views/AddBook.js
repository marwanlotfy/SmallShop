import React from 'react'
import Book from '../../core/domain/entities/Book';
import BookServices from '../../core/domain/services/BookServices';
import { Button } from 'reactstrap';
import ReactiveInput from '../components/ReactiveInput';
import AddBookEvent from '../../core/domain/events/AddBookEvent';
class AddBook extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            disableSubmit:true,
            book : new Book,
        }
        this.bookServices = new BookServices
    }
    updateBook(prop,value){
        let book = this.state.book;
        book[prop] = value;
        this.bookServices.validator.validateBookField(
            prop,
           String.prototype.trim.call(value)
        )
        this.setState({
            book,
            disableSubmit:this.bookServices.validator.hasErrors(),
        })
    }
    render(){
        const { book , disableSubmit } = this.state;
        return(
            <div>
                <h1>Add Book To The Store</h1>
                <div>
                    <ReactiveInput
                            value={book.name}
                            onChange={this.updateBook.bind(this,'name')}
                            placeholder='Book Name...'
                            hasError={this.bookServices.validator.hasErrorFor('name')}
                            errors={this.bookServices.validator.getErrorFor('name')}
                    />
                    <ReactiveInput
                            value={book.authorName}
                            onChange={this.updateBook.bind(this,'authorName')}
                            placeholder='Book authorName...'
                            hasError={this.bookServices.validator.hasErrorFor('authorName')}
                            errors={this.bookServices.validator.getErrorFor('authorName')}
                    />
                    <ReactiveInput
                            value={book.price}
                            onChange={this.updateBook.bind(this,'price')}
                            placeholder='Book price...'
                            hasError={this.bookServices.validator.hasErrorFor('price')}
                            errors={this.bookServices.validator.getErrorFor('price')}
                    />

                    <Button disabled={disableSubmit} onClick={()=>this.bookServices.addBookToStore(book)} >Add Book</Button>
                </div>
            </div>
        )
    }
}
export default AddBook;
