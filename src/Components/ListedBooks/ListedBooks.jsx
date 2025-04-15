import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks=useLoaderData();
    const[readList, setReadList]=useState([])



    //ideally er will directly get the read book list from the database

    useEffect(()=>{
        const storedReadList=getStoredReadList();
        const storedReadListInt=storedReadList.map(id=>parseInt(id))

        //this is the worst way

        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book=>storedReadListInt.includes(book.bookId))

        setReadList(readBookList)
        
        
    },[])
    return (
        <div className='mb-64'>
            <h3 className='text-3xl my-8'>Listed Books</h3>
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