import React from 'react'
import page1 from '../../../images/page1.png'
import Styles from './Signup.module.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className={Styles.titlesign}>
            <section>
                <img src={page1} alt="" className={Styles.imagepage} />
            </section>
            <section className={Styles.fullitem}>
                <p className={Styles.titlesignin}>Already a member? <a href="">Sign In</a></p>
                <div className={Styles.titleitem}>
                    <h1>Sign up to New web</h1>
                    <form action="">
                        <div className={Styles.nameitem}>
                            <div className={Styles.nameitem1}>
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder='Enter the name' />
                            </div>
                            <div className={Styles.nameitem1}>
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder='Enter the username' />
                            </div>
                        </div>
                        <div className={Styles.nameitem2}>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Enter the email' />
                        </div>
                        <div className={Styles.nameitem2}>
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder='6+ characters' />
                        </div>
                        <div className={Styles.checkitem}>
                            <input type="checkbox" name="" id="" />
                            <p>Create an account means you're okey with our  <span>Terms of <br />Service, Privacy Policy,</span>
                                and our default <span>Notification Settings.</span></p>
                        </div>

                        <button className={Styles.btnitem}><Link className={Styles.btnlink} to='/profile'>Create Account</Link></button>

                        <p className={Styles.titleend}>This site is protected by reCATCHA and the Google <br />
                            <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Signup