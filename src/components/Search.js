import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Search.css"
import "../requests/getImages"
import getImages from "../requests/getImages";

const Search =  ({setSearchResults}) => {
const [value, setValue] = useState()
const handleSubmit = async (event) => {
    event.preventDefault()
    setSearchResults(await getImages(value))
}
    return (
        <> 
        <form  className="search_form" onSubmit={handleSubmit}>
        <input className="search_input" type="text" placeholder="Search here.." onChange={(e) => setValue(e.target.value)} /> 
        <button className="submit_button" type="submit"> Shoot! </button>
        </form> </>
    )

    }

    Search.propTypes = {
        setSearchResults: PropTypes.func.isRequired,
    }
    export default Search;