import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredReadList, addToStoredWishList } from '../../Utility/addToDb';

const BookDetail = () => {
    const {bookId}=useParams()
    const id=parseInt(bookId)
    const data=useLoaderData()
    
    const book= data.find(book=> book.bookId === id)
    console.log(book);

    const {bookId: currentBookId, image,bookName,review}=book
    

    const handleMarkAsRead=(id)=>{

    
    /**
     * 1.understand what to store or save: => bookid
     * 2. where to save: database
     * 3.array, list, collection:
     * 4. check: if the book is already in the readList
     * 5. of not, then add the book to the list.
     * 6. if yes, do not add the book
     * 
     
     */

    addToStoredReadList(id)
    }

  const  handleWishList=(id)=>{
    addToStoredWishList(id)
        
    }

    
    
    return (
        <div className='my-12  ml-12'>
          <h2>Book Details:{currentBookId}</h2>
          <img className='w-44 mb-6' src={image} alt="" />
         
          <button onClick={()=> handleMarkAsRead(bookId)} class="btn flex-1 btn-outline btn-accent mr-4">Mark As Read</button>
          <button onClick={()=>handleWishList(bookId)} class="btn flex-1 btn-outline btn-accent">Add to Wish List</button>
         

        </div>
    );
};

export default BookDetail;