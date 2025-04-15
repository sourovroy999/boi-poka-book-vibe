import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks=useLoaderData();
    const[readList, setReadList]=useState([])
    const[sort,setSort]=useState('')



    //ideally er will directly get the read book list from the database

    useEffect(()=>{
        const storedReadList=getStoredReadList();
        const storedReadListInt=storedReadList.map(id=>parseInt(id))

        //this is the worst way

        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book=>storedReadListInt.includes(book.bookId))

        setReadList(readBookList)
        
        
    },[])


    const handleSort=sortType=>{
            setSort(sortType);
            if(sortType=== 'No of Pages'){
                const sortedReadList=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
                setReadList(sortedReadList)
            }

            if(sortType==='Published Year'){
                const sortedReadList=[...readList].sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing)
                setReadList(sortedReadList)
            }
    }

    return (
        <div className='mb-64'>
            <h3 className='text-3xl my-8'>Listed Books</h3>

        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="btn mb-5" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  {
    sort? `Sort By:${sort}`: "Sort By"
  }
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li onClick={()=>handleSort('No of Pages')}><a>No of pages</a></li>
  <li onClick={()=>handleSort('Published Year')}><a>Published Year</a></li>
</ul>

            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Books I Read:{readList.length}</h2>
      {
        readList.map(book => <Book book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>My Wish List</h2>
    </TabPanel>
  </Tabs>
           

        </div>
    );
};

export default ListedBooks;