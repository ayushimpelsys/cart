import React from 'react';
import {Link} from 'react-router-dom';
import './components/Menu.css';

const Menu = ()=>{
    return (
        <>
        <div className='header'>
            <div className="head2">
                <h1>Welcome to KartBuy</h1>
            </div>
            <nav>
            <Link to="/Home">Home</Link>
            
            {/* <Link to="/Table">Custom Product</Link> */}
            <Link to="/Cart">Cart</Link>
            <Link to="/Custom">Custom Cart</Link>
        </nav>
        </div>

        
            


            
            

        
        </>
    )
}

export default Menu;


// const Menu = ()=>{
//     return (
//         <>
//         <navbar className="nav">
//         <Link to="/Home">Home</Link>
            
//             <Link to="/Table">Table</Link>
//             <Link to="/Cart">Cart</Link>
//             {/* <Link to="/Custom">Cart2</Link> */}
//         </navbar>