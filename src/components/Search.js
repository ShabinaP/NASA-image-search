import React, { useState } from "react";
import "../styles/Search.css"
import "../requests/getImages"
import getImages from "../requests/getImages";

const Search = () => {
const [value, setValue] = useState("")
const handleSubmit = (event) => {
    event.preventDefault()
    getImages(value)
}
    return (
        <> 
        <form  className="search_form" onSubmit={handleSubmit}>
        <input className="search_input" type="text" placeholder="Search here.." onChange={(e) => setValue(e.target.value)} /> 
        <button className="submit_button" type="submit"> Shoot! </button>
        </form> </>
    )

    }

    export default Search;