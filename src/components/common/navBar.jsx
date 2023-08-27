import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
			

{/* 
        <div classNameName="d-flex justify-content-center fixed-top">
		<nav classNameName="navbar navbar-expand-lg  w-50 ">
  <div classNameName="container-fluid">
    
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
     	 <ul classNameName="navbar-nav">
       
			{
				item.map((e)=>{
					return(
						<>
						<li classNameName="nav-item">
						<a classNameName="nav-link" >{e.item}</a>
						</li>
						</>
					)
				})
			}
      
     	 </ul>
    </div>
  </div>
</nav> */}
		{/* </div> */}

	                <div className="d-flex justify-content-center fixed-top mt-5 ">
					<Navbar collapseOnSelect expand="lg" >
      <Container >
        <Navbar.Brand >UpDate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav>
            {
				item.map((e)=>{
					return(
						<>
           			 <Nav.Link className="d-flex justify-content-center" >
						<Link className="nav-item" to={e.link}>
						{e.item}
						</Link>
					 </Nav.Link>
						
						</>
					)
				})
			}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
					</div>
		</React.Fragment>
	);
};

export default NavBar;
