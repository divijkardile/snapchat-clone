import { Avatar } from "@material-ui/core";
import { ChatBubble, Search } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import "./Chats.css";
import { selectUser } from "./features/appSlice";
import { auth, db } from "./firebase";

function Chats() {
  const [post, setPost] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setPost(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar src={user.profilePic} onClick={() => auth.signOut()}className="chats__avatar" />
        <div className="chats__search">
          <Search />
          <input placeholder="Friends" type="text" />
        </div>
        <ChatBubble className="chats__chatIcon" />
      </div>

          <div className="chats__posts">
              {
                  post.map(({ id, data:{profilePic, username, timestamp, imageUrl, read} }) => (
                      <Chat key={id} id={id} username={username} timestamp={timestamp} imageUrl={imageUrl} read={read} profilePic={profilePic}
                      />
                  ))
              }
      </div>
    </div>
  );
}

export default Chats;
