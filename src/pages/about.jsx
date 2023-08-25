import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import about from "../assets/about.jpg"
import Skills from "../components/skills/Skills";
import SkillsData from "../data/Skills";
import AOS from 'aos'
const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	AOS.init()

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				
				
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container" data-aos="flip-left">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div className="w-75">
						{
							SkillsData.map((e,i)=>{
								return(
									<>
									<Skills deg={e.deg} degProgress={e.degProgress} title={e.title}/>
									
									</>
								)
							})
						}
						</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={about}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
                                 
								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					    
						
                 
				</div>
				
						  
					<hr />
			</div>
					
		</React.Fragment>
	);
};

export default About;
