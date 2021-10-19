import {React, PropTypes} from "react";
import "../styles/SearchResults.css"

const SearchResults = ({results}) => {
if(!results.length) {
    return <p>No results</p>
}
else
    return (
        <>
        <p>Search Results</p>
        {results.map((image) => (
        <img 
        className="card-image"
        src={image}
        alt="moon"
        />
        ))}
         </>
    )
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
}

export default SearchResults;