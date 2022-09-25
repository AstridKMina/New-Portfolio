import React from 'react';
import woman from "../Assets/woman.png"

const Contact = () => {
    return (
        <div>
            <section>
                <div className='contact'>
                    <div className='myContact'>
                        <div className='contact-img'>
                            <img src={woman} alt="" />
                        </div>

                        {/* <div className='userform'>
                            <form action="https://formsubmit.co/58efc24048d8c91ccf16664c5d9c37c3" method="POST"
                            // onSubmit={submit}
                            >
                                <h1><i className="fa-solid fa-user"></i></h1>
                                <div className='divInput'>
                                    <label htmlFor="firstName"> <i className="fa-solid fa-spell-check"></i></label>
                                    <input type="text"
                                        id='firstName'
                                        placeholder="First Name"
                                    // onChange={e => setFirstName(e.target.value)} 
                                    />

                                    <label htmlFor="lastName"> <i className="fa-solid fa-spell-check"></i></label>
                                    <input type="text"
                                        id='lastName'
                                        placeholder="Last Name"
                                    // onChange={e => setLastName(e.target.value)} 
                                    />
                                </div>
                                <div className='divInput'>
                                    <label htmlFor="email"> <i className="fa-solid fa-envelope"></i> </label>
                                    <input className='myInput' type="email"
                                        id='email'
                                        placeholder="Email"
                                    // onChange={e => setEmail(e.target.value)} 
                                    />

                                </div>
                                <div className='divInput'>
                                    <label htmlFor="password"> <i className="fa-solid fa-lock"></i></label>
                                    {/* <textarea className='myInput' 
                                    id='password'
                                // value={password} placeholder="Password"
                                // onChange={e => setPassword(e.target.value)}
                                > */}
                                    {/* <textarea name="" id="" cols="45" rows="5" placeholder='Message'></textarea>
                                </div> */}

                                {/* <div className='btn'>
                                    <button onClick={()=> alert("Message send")}>Send</button>
                                </div>
                            </form>
                        </div>
                    </div> */} 
                    </div>
                    <div className='conect'>

                        <div className='call'>
                            <p>Stay connected!</p>
                        </div>
                        <div className='social'>
                            <button><i className="fa-solid fa-envelope"></i></button>
                            <button><i className="fa-brands fa-whatsapp"></i></button>
                            <button><i className="fa-brands fa-linkedin-in"></i></button>
                        </div>

                    </div>
                </div>
                <footer>
                    <p>@made for Astrid Mina</p>
                </footer>
            </section>
        </div>
    );
};

export default Contact;