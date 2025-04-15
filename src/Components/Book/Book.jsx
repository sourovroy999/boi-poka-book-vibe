
import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookName, author, image,tags,category,rating, bookId,totalPages,yearOfPublishing } = book;
    return (
    <Link to={`/books/${bookId}`}>
         <div className="card bg-base-100 w-96 shadow-sm p-6">
            
            <figure className='bg-blue-200 py-8 rounded-2xl'>
                <img className='h-[166px]'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className='flex gap-4'>
                    {
                        tags.map((tag, idx)=><button key={idx} className='btn btn-xs bg-green-200 text-green-500'>{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>

                <div className='border-t-2 border-dashed'></div>

                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div>
                        <p>Pages:{totalPages}</p>
                        <p>Published:{yearOfPublishing}</p>
                    </div>
                    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;