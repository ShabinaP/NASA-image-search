import {React} from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css"

const SearchResults = ({results}) => {
if(!results.length) {
    return <p></p>
}
else
    return (
        <>
        <p className="search-results">Search Results</p>
        {results.map((image) => (
        <img 
        className="card-image"
        src={image}
        alt="NASA images"
        />
        ))}
         </>
    )
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
}

export default SearchResults;