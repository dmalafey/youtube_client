import React from "react";
import "./search_bar.css";

const SearchBar = ({onSearchVideos}) => {
    return (
        <div className="search-wrapper">
            <input
                type="search"
                onChange={e => onSearchVideos(e.target.value)}
                className="search-bar"
                placeholder="Type for search..."
            />
        </div>
    );
}

export default SearchBar;