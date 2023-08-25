import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<>
		<h1 className="text-center bold mt-5">Portfolio</h1>
		<div className="all-projects-container ">
			
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						img={project.logo}
						link={project.link}
						
					/>
				</div>
			))}
		</div>
		</>
	);
};

export default AllProjects;
