import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = () => {
	const [item] = useState(
		[
			{
				item:'Home',
				link:'/'
			},
			{
				item:'About',
				link:'/about'
			},
			{
				item:'Projects',
				link:'/projects'
			},
			{
				item:'Articles',
				link:'/articles'
			},
			{
				item:'Contact',
				link:'/contact'
			},
			
		]
	)

	return (
		<React.Fragment>
			


        <div className="d-flex justify-content-center fixed-top">
		<nav className="navbar navbar-expand-lg  w-50 ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
     	 <ul className="navbar-nav">
       
			{
				item.map((e)=>{
					return(
						<>
						<li className="nav-item">
						<Link className="nav-link" to={e.link}>{e.item}</Link>
						</li>
						</>
					)
				})
			}
      
     	 </ul>
    </div>
  </div>
</nav>
		</div>
		</React.Fragment>
	);
};

export default NavBar;
