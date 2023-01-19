import React from 'react';
import "./css/browser.css";
import arrow from "../../assets/images/arrow.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import Rectangle from "../../assets/images/Rectangle 9.png";

const Browser = () => {
  return (
    <section className="browser">
        <div className="rectangle">
            <img src={Rectangle} alt="rectangle"/>
        </div>
        <div className="container flex">
            <div className="browser-text">
                <h2>The best business solution for you</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /> Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
                <div className="flex anchor">
                    <a>Learn About Our Success</a>
                    <div>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="activity">
                <div className="col1">
                    <div className="activity-logo">
                        <img src={icon1} alt="icon1"/>
                    </div>
                    <p className="darker">Scale Your Activity</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
                <div className="col2">
                    <div className="activity-logo">
                        <img src={icon2} alt="icon2"/>
                    </div>
                    <p className="darker">Scale Your Activity</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
                <div className="col3">
                    <div className="activity-logo">
                        <img src={icon3} alt="icon3"/>
                    </div>
                    <p className="darker">Scale Your Activity</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
                <div className="col4">
                    <div className="activity-logo">
                        <img src={icon4} alt="icon4"/>
                    </div>
                    <p className="darker">Scale Your Activity</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Browser;