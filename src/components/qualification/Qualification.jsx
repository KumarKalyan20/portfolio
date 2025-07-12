import React from 'react';
import './Qualification.css'; 

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>


            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button  qualification__active button--flex">
                        <i className="uil uil-graduation-cap
                         qualification__icon"></i>{" "}
                        Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>                    
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">
                                    Bachelor of Computer Science
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></
                                    i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></ span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                           <div className="qualification__data">
                             <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Python Developer</h3>
                                <span className="qualification__subtitle">
                                    Bachelor of Computer Science
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></
                                    i> 2021 - Present
                                </div>
                            </div>
                        </div>


                            <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Java Developer</h3>
                                <span className="qualification__subtitle">
                                    Bachelor of Computer Science
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></
                                    i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></ span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                           <div className="qualification__data">
                             <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">MySQL database</h3>
                                <span className="qualification__subtitle">
                                    Bachelor of Computer Science
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></
                                    i> 2021 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Design</h3>
                                <span className="qualification__subtitle">
                                    Microsoft - India
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></
                                    i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></ span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                           <div className="qualification__data">
                             <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">
                                    Google - India
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></
                                    i> 2021 - Present
                                </div>
                            </div>
                        </div>


                            <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">
                                    Amazon - India
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></
                                    i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></ span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                           <div className="qualification__data">
                             <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">MySQL database</h3>
                                <span className="qualification__subtitle">
                                    Bachelor of Computer Science
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></
                                    i> 2021 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default Qualification;