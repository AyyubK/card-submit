import React from "react"

const name = "Ayyub Khan"
const year = new Date().getFullYear()


function Footer(){
    return(
        <div className="footer">
        <p>Created by {name}</p>
        <p>Copyright @ {year}</p>

        </div>
    )
}
export default Footer