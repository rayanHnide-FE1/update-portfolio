import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import img from '../../assets/impact.png'
import "./styles/project.css";
import AOS from 'aos'

const Project = (props) => {
	const { img,link } = props;
	AOS.init();
	return (
		<React.Fragment>
			

		
			 <div className="row mx-0">
				
			 <div className="col-md-9 " data-aos="flip-left">
            <div className="work-box">
                <div className="work-img">
                  <img src={img} st alt="" class="img-fluid"/>
                </div>
              <div className="work-content">
                   <div className="d-flex justify-content-center"> <a href={link}  target="_blank" class="w-title btn btn-outline-info">Live Demo</a></div>
              </div>
            </div>
          </div>
			 </div>
		</React.Fragment>
	);
};

export default Project;
