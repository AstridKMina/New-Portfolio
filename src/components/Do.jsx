import React from 'react';
import theGirl from "../Assets/girlWorking.png"


const Do = () => {
    return (
        <section className="do">
            <div className="prove">
            <h1>What I Can Do?</h1>
            <div className='canDo'>
                <div className="do-left">
                <div className='do-title'>
                    <h3>Frontend Apps</h3>
                </div>
                <div className='do-info'>
                    <p>I have the ability to develop websites, making proper use of javascript, react, html, css and redux. They will be websites with a focus on detail and correct operation.
                </p></div>
                </div>
                <div className='do-img'>
                    <img src={theGirl} alt="" className='bWoman'/>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Do;


