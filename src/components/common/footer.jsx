import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	 const [footerData]=useState( [
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
		
	])
	return (
		<React.Fragment>
			<div className="footer d-flex justify-content-center bg-dark w-100">
				<div className="footer-links ">
					<ul className="footer-nav-link-list">
						{
							footerData.map((e)=>{
								return(
									<>
									
									<li className="footer-nav-link-item">
										<Link to={e.link}>{e.item}</Link>
									</li>
									</>
								)
							})
						}
					
					</ul>
				</div>

			
			</div>
		</React.Fragment>
	);
};

export default Footer;
