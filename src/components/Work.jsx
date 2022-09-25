import React from 'react';
import ash from "../Assets/ash.png"
import rick from "../Assets/rick.png"
import store from "../Assets/store1.gif"


const Work = () => {
    return (
        <section className='portfolio'>
            <h1>My Works</h1>
            <div className='allWorks'>
                <div className="works">
                    <div className='card' id='card1'>
                        <div className='myWorks'>
                            <div className='t-work'>
                                <img src={store} alt="" className='work-img' />
                            </div>
                            <div className='t-work'>
                                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dignissimos?</h4>
                            </div>
                        </div>
                        <div className='arrow'>
                            <a href="#card3"><i className="fa-solid fa-circle-arrow-left"></i></a>
                            <a href="#card2"><i className="fa-solid fa-circle-arrow-right"></i></a>

                        </div>
                    </div>
                    <div className='card' id='card2'>
                        <div className='myWorks'>
                            <div className='t-work'>
                                <img src={ash} alt="" className='ash' />
                            </div>
                            <div className='t-work'>
                                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dignissimos?</h4>
                            </div>
                        </div>
                        <div className='arrow'>
                            <a href="#card1"><i className="fa-solid fa-circle-arrow-left"></i></a>
                            <a href="#card3"><i className="fa-solid fa-circle-arrow-right"></i></a>

                        </div>
                    </div>
                    <div className='card' id='card3'>
                        <div className='myWorks'>
                            <div className='t-work'>
                                <img src={rick} alt="" className='work-img' />
                            </div>
                            <div className='t-work'>
                                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dignissimos?</h4>
                            </div>
                        </div>
                        <div className='arrow'>
                            <a href="#card2"><i className="fa-solid fa-circle-arrow-left"></i></a>
                            <a href="#card1"><i className="fa-solid fa-circle-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='points'>
                <a href="#card1"><i className="fa-regular fa-circle"></i></a>
                <a href="#card2"><i className="fa-regular fa-circle"></i></a>
                <a href="#card3"><i className="fa-regular fa-circle"></i></a>
            </div>

        </section>
    );
};

export default Work;