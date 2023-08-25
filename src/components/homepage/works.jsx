import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import facebook from '../../assets/facebook.png'

const Works = () => {
	return (
		<div className="works shadow-lg">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={facebook}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Facebook</div>
							<div className="work-subtitle">
								Front End Web Developer 
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>

					
					</div>
				}
			/>
		</div>
	);
};

export default Works;
