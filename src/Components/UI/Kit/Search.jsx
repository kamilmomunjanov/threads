import React from 'react';
import search from "../svg/Search.svg";
import search1 from "../svg1/search.svg";

const Search = () => {
    return (
        <div>
            <img style={{cursor:"pointer"}} src={search1} alt=""/>
            <img style={{cursor:"pointer"}} src={search} alt=""/>
        </div>
    );
};

export default Search;