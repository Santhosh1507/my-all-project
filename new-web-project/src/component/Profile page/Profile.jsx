import React, { useState } from 'react'
import Styles from './Profile.module.css'
import { MdOutlinePhotoCamera } from "react-icons/md";
import { Link } from 'react-router-dom'

const Profile = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // const handleImageDelete = () => {
  //   setImage(null);
  // };

  return (
    <div className={Styles.profilepage}>
      <h3 className={Styles.titlename}>New Web</h3>
      <div className={Styles.alltitlepage}>
        <h1 className={Styles.titlepage}>Welcome! Let's create your profile</h1><br />
        <p className={Styles.paratitle}>Let others get to know you better! You can do these later</p><br />
        <h3 className={Styles.paratitlename}>Add an avatar</h3><br />
        <div className={Styles.placeholder}>
          <label className="custom-file-upload" >
            {image ? (
              <img src={image} alt="Uploaded" className={Styles.placeholder1} />
            ) : (
              <div><MdOutlinePhotoCamera className={Styles.imageicon} /></div>
            )}
          </label>
        </div>
        <div className={Styles.imageshow}>
        <div >
          <label htmlFor="image-upload" className={Styles.imagebtn}>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              placeholder='choose image'
              style={{ display: 'none' }}
            /> Choose Image
          </label>
          {/* <label onChange={handleImageDelete} className={Styles.imagebtn1}>delete</label> <br /> */}
          <p className={Styles.imagepage1}>&gt; Or choose one of our defaults</p>
        </div>
        </div>
      </div>
      <div className={Styles.alltitlepage1}>
        <h4 className={Styles.alltitlename}>Add your location</h4> <br />
        <input type="text" placeholder='Enter a location' className={Styles.inputtitle}/><br />
        <button className={Styles.btnnext}><Link to='/mainpage' className={Styles.btnLink}>Next</Link></button>
      </div>

    </div>
  )
}

export default Profile