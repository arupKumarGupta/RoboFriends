import React from 'react';
export const SearchBox = ({searchText,searchEvent}) => {
    return (
        <div className="search-box">
            <input type="text" 
            value={searchText}
            placeholder="search robots"  
            className="pa3 ba b--green bg-lightest-blue"
            onChange={searchEvent}/>
        </div>
    );
}