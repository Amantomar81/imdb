import React, { useState } from 'react';
import Pagination from './Pagination';

function Favourites() {

  const [curGenre, setCurGenre] = useState('All Genres');
  return <>
    <div className='mt-4 px-2 flex justify-center flex-wrap space-x-2'>

    <button className={
      curGenre=='All Genres'?
      'm-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold'
      : 'm-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'
    }>
      All Genres
    </button>

    <button className={
      curGenre=='Action'?
      'm-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold'
      : 'm-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'
    }>
      Action
    </button>
    
    </div>
    <div className='text-center'>
      <input type="text" placeholder='search' className='border border-2 text-center p-1 m-2'/>
      <input type="number" placeholder='Rows' className='border border-2 text-center p-1 m-2'/>
    </div>

    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full; divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th 
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium
                    text-gray-500 uppercase tracking-wider'
                    >
                      Name
                    </th>
                    <th 
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium
                    text-gray-500 uppercase tracking-wider'
                    >
                      Rating
                    </th>
                    <th 
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium
                    text-gray-500 uppercase tracking-wider'
                    >
                      Popularity
                    </th>
                    <th 
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium
                    text-gray-500 uppercase tracking-wider'
                    >
                      Genre
                    </th>
                    <th 
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium
                    text-gray-500 uppercase tracking-wider'
                    >
                      Remove
                    </th>
                </tr>
              </thead>
              
            </table>
          </div>
        </div>
      </div>
    </div>

    <div className='mt-4'>
      <Pagination/>
    </div>
    
  </>
}

export default Favourites
