import React from "react"
const baseURL = "http://image.tmdb.org/t/p/w200/"
const Actor =({actor})=>{
    return (
        <div>
            <h2>{actor.name}</h2>
            <img src={baseURL+actor.profile_path} width="200" />
            <h3>{actor.character}</h3>
        </div>
    )
}

export default  Actor;