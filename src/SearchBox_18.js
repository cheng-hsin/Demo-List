import React from 'react'

export const SearchBox = ({searchChange}) => {
    console.log("searchBox")
    return (
        <div className='pa2'>
            <input 
            className="pa1 ba bw1 b--light-red bg-light-red br3"
            type="search"
            placeholder='Search Demos!'
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;
