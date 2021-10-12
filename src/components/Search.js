import React, { useState } from "react";
import "../styles/Search.css"

const Search = () => {
const [value, setValue] = useState("")

    return (
        <> 
        <form className="search_form">
        <input onChange={(e) => setValue(e.target.value)} className="search_input" type="text"/> 
        <button className="submit_button" type="submit" placeholder="Search our cool database.."> Search </button>
        </form> </>
    )

    }

    export default Search;