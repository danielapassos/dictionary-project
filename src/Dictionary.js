import React, {useState} from "react";
import './Dictionary.css';
import axios from "axios";

export default function Dictionary() {

    let [keyword, setKeyword]=useState("");

    function handleResponse(response){
        alert(response.data[0].meanings[0].definitions[0].definition)
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiURL).then(handleResponse);
    }
    
    

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }
    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true}/>
        </form>
    </div>
    )
}