import React from "react";
import Nav from '../subcomponents/Navbar';
import Blog from '../subcomponents/Blog';




const Layout = (props) => (



    
    <div >
        <Nav />
        {props.children}
    </div>
);

export default Layout;

