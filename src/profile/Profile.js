import React, { useState, useEffect } from "react";
import "./profile.css";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import db from "../firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

function Profile() {
  const [{ user }, dispatch] = useStateValue();
  if (user ? console.log(user.uid) : console.log("fuck off"));
  let [imgs, setImgs] = useState([]);
  useEffect(() => {
    db.collection(user.uid)
      .orderBy("timestamp", "asc")
      .onSnapshot((s) => {
        setImgs(
          s.docs.map((it) => {
            return { name: it.data().name, img: it.data().img };
          })
        );
      });
  }, []);

  const useImages = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",
    " https://pm1.narvii.com/6915/b750d3766167c6d41dfd8f55e45f72631d100409r1-320-320v2_hq.jpg",
    "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg",
    "https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg",
    "https://i.pinimg.com/originals/0d/6a/b2/0d6ab257cdc929ca129ba5557b125a68.png",
    "https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png",
    "https://emblemsbf.com/img/35214.webp",
  ];
  const s = Math.floor(Math.random() * 7);

  function addProfile() {
    const userName = prompt("Enter a Name");
    if (userName) {
      db.collection(user.uid).add({
        name: userName,
        img: useImages[s],
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  }

  return (
    <div className="profile">
      <Avatar
        className="profile_avatar"
        src={user.photoURL}
        alt={user.displayName}
      ></Avatar>
      <img
        className="profile_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Logo"
      ></img>
      <h3 className="profile_who">Who's watching ?</h3>

      <div className="profile_imgC">
        {imgs.map((it) => {
          return (
            <Link to={`/${it.name}`}>
              <div>
                <img className="profile_img" src={it.img}></img>
                <div className="profile_name"> {it.name} </div>
              </div>
            </Link>
          );
        })}
        <div className="profile_add">
          <IconButton onClick={addProfile}>
            <AddIcon className="profile_icon" fontSize="large"></AddIcon>
          </IconButton>
        </div>
      </div>
      <h2 className="profile_manage">MANAGE PROFILES</h2>
    </div>
  );
}

export default Profile;
