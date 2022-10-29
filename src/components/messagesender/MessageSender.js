import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    //some db work
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      image: imageUrl,
      username: user.displayName,
    });

    //reset
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="messageSender__input"
            type="text"
            placeholder={`What's on your mind,${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="image URL (optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
