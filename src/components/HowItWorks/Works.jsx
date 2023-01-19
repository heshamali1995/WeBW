import React from 'react';
import "./css/works.css";

const Works = () => {
  return (
    <section className="works">
        <div className="container flex">
            <div className="works-text">
                <h2>Acceleration Process to Grow Your Business</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /> Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
                <button>About Us</button>
            </div>
            <div className="lists">
                <div className="list flex">
                    <div className="circle">
                        <p>1</p>
                    </div>
                    <div className="text">
                        <h3>Market Research</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
                <div className="list flex">
                    <div className="circle">
                        <p>2</p>
                    </div>
                    <div className="text">
                        <h3>Market Research</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
                <div className="list flex">
                    <div className="circle">
                        <p>3</p>
                    </div>
                    <div className="text">
                        <h3>Market Research</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works;