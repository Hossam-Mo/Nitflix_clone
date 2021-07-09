import React, { useState, useEffect } from "react";
import "./nav.css";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
function NetflixNav() {
  const [{ user }, dispatch] = useStateValue();
  const { userid } = useParams();
  const [avatarImg, setAvatarImg] = useState([]);

  useEffect(() => {
    db.collection(user.uid).onSnapshot((s) => {
      setAvatarImg(
        s.docs.map((it) => {
          return { name: it.data().name, img: it.data().img };
        })
      );
    });
  }, [userid]);

  const ava = avatarImg.filter((it) => {
    if (it.name === userid) {
      return 1;
    }
  });
  let ss1;
  if (ava.length > 0) {
    ss1 = ava[0].img;
  }

  const [show, handleShow] = useState(false);
  useEffect(function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    /* return function () {
      if (window) window.removeEventListener("scroll");
    };*/
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.bigboompyro.com/images/1200/big-boom-logo.png"
        alt="logo"
      ></img>

      <img
        className="nav-avatar"
        src={ss1}
        /*src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"*/
        alt="Avatar"
      ></img>
    </div>
  );
}

export default NetflixNav;
