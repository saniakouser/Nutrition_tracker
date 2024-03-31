import {Link} from "react-router-dom"
import { useEffect } from "react"
export default function Navbar(){
    
    return(
        <div className="navbar" style={{background:'rgba(0, 0, 128, 0.5)'}}>
             <ul>
                <Link to="/" id="img">WELLNEST</Link>
                <Link to="/">Home</Link>
                <Link to="/about_us">About Us</Link>
                <Link to="/subscription">Subscription</Link>
             </ul>
        </div>
    )
}