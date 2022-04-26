import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {FacebookShareButton} from "react-share";
import {FacebookIcon} from "react-share";
import {WhatsappIcon} from "react-share"; 
import {WhatsappShareButton} from "react-share";
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';



   function Event(props){
       
  
const Event = props => (
    <tr>
    {/* <td>{props.event.username}</td> */}
    <td>{props.event.title}</td>
    <td>{props.event.description}</td>
    <td>{props.event.date}</td>
    <td>{props.event.modality}</td>
    <td>{props.event.category}</td>
    

    </tr>
    
    )
    const shareUrl = 'https://www.youtube.com/watch?v=9WzIACv_mxs';
         return(
             
           <div>
               <Header/>
	        <section className="page-title-area">
            
		        <div className="container" >
               
			        <div className="row align-items-center justify-content-between"  >
				    <div className="col-lg-8">
					<h1 className="page-title" >Events</h1>
				    </div>
				<div className="col-auto">
					<ul className="page-breadcrumb">
						<li><a href="index.html">Home</a></li>
						<li>Events</li>
					</ul>
				</div>
			         </div>
		        </div>
	        </section>





            <section className="event-area section-gap-extra-bottom">
                    <div className="container">
                        <div className="event-items">
                            <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
                                <div className="event-thumb">
                                    <img src="assets/img/event/01.jpg" alt="Image"/>
                                </div>
                                <div className="event-content">
                                    <ul className="meta">
                                        <li>
                                            <a  className="category">Education</a>
                                        </li>
                                        <li>
                                            <a  className="date"><i className="fal fa-map-marker-alt"></i>Esprit </a>
                                        </li>
                                    </ul>
                                    <h4 className="event-title"><a href="#">Pegasus Road</a></h4>
                                    <p>
                                    As Chris Grosser once said : "Opportunities Don't Happen. You Create Them”, and as the leaders of a newer 
                                    and improved tomorrow, we are pleased to announce that this Wednesday, March 30th at 10:30 A.M, our Student 
                                    Branch is hosting our 1st Annual Pegasus Road Conference.
                                    </p>
                                </div>
                        
                                <div className="event-button">
                                    <a href="/EventDetails" className="main-btn bordered-btn">For more details <i className="far fa-arrow-right"></i></a>
                                </div>   
                 <div className="event-button">
                 <FacebookShareButton
          url={shareUrl}
          quote={"heyy join a video streaming noww !!"} hashtag="#React"
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
                 <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
                                </div> 
                                
                            </div>
                          
                         
                           
                           
                           
                            <div className="view-more-btn text-center mt-80">
                                <a  className="main-btn bordered-btn">View More Events <i className="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
















                    
                
                <script src="assets/js/jquery.min.js"></script>
                
                <script src="assets/js/bootstrap.min.js"></script>
                
                <script src="assets/js/jquery.inview.min.js"></script>

                <script src="assets/js/slick.min.js"></script>

                <script src="assets/js/lity.min.js"></script>
                
                <script src="assets/js/wow.min.js"></script>
                
                <script src="assets/js/main.js"></script>
                </section>
            <Footer/>
    </div>
    )
    
}

    export default Event;