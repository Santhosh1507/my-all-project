import React from 'react'
import Styles from './Select.module.css'
import { Link } from 'react-router-dom'

const Selectoption = () => {
    return (
        <div className={Styles.selection}>
            <div className={Styles.selectionpage}>
                <h3 className={Styles.titlename}>New Web</h3>
                <button className={Styles.titlebtnback}><Link to='/profile' className={Styles.btnbacklink}>&lt;</Link></button>

            </div>
            <div className={Styles.titleitems}>
                <div className={Styles.titleitem}>
                    <h1>What brings you to New Web?</h1> <br />
                    <p>Select the options that best describe you. Don't worry, you can explore other options later.</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h5>I'm a designer looking to share my work</h5>
                        <input type="radio" name="fav_language" />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h5>I'm looking to hire a designer</h5>
                        <input type="radio" name="fav_language" />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h5>I'm looking for design inspiration</h5>
                        <input type="radio" name="fav_language" />
                    </div>
                    <button>Finish</button>
                </div>
            </div>
        </div>
    )
}

export default Selectoption