import { Button, IconButton, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db, { auth, provider } from "../../firebase";
import "./box11.css";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import { makeStyles } from "@material-ui/core/styles";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "347px",
    backgroundColor: "black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 560,
    border: "2px double gray",
    outline: "none",
    borderRadius: 10,
  },
}));

function Box() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [{ user }, dispatch] = useStateValue();
  const [user1, setUser1] = useState();
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).catch((e) => {
      alert(e.message);
    });
    setOpen(false);
  };
  const signIn1 = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((r) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: r.user,
        });
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((r) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: r.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="box1">
      <div className="box2"></div>
      <div className="box11">
        <div className="sign-in">
          <strong>Sign In</strong>
        </div>

        <form className="signIn-form">
          <input
            className="input"
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className="input2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button className=" button" type="submit" onClick={signIn1}>
            <strong>Sign in</strong>
          </button>
        </form>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div style={modalStyle} className={classes.paper}>
            <form className="model_c">
              <img
                className="model_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Logo"
              ></img>
              <i>
                <h1>GET STARTED</h1>
              </i>

              <p>
                by clicking sign up you are agreeing to the terms of use and
                acknowledging the privacy policy and Cookie Policy
              </p>
              <input
                className="input3"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <input
                className="input3"
                type="text"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <input
                className="input3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <button className=" button1" type="submit" onClick={signUp}>
                <strong>Sign Up</strong>
              </button>
              <a>Trouble Signing Up?</a>
            </form>
          </div>
        </Modal>
        <div className="nh">
          <div className="nh1">
            <input className="ckbox" type="checkbox"></input>
            <div className="nd">Remember me</div>
          </div>

          <a className="nd1" href="#">
            Need help?
          </a>
        </div>
        <div className="footbox">
          <div className="Google_login">
            <div>Login with Google</div>
            <IconButton onClick={signIn}>
              <MeetingRoomIcon className="n-p"></MeetingRoomIcon>
            </IconButton>
          </div>

          <div className="s">
            <div>New to Netflix?</div>
            <button className="model_button" onClick={() => setOpen(true)}>
              Sign Up
            </button>
          </div>
          <div>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
