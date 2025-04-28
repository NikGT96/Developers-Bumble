import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./userCard";
import axios from "axios";
import { addFeed } from "../Utils/feedSlice";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    getFeed();
  }, [user]);

  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (!user) {
      navigate("/login");
    } else {
      try {
        const res = await axios.get("http://localhost:7777/feed", {
          withCredentials: true,
        });
        // console.log(res.data.data);
        dispatch(addFeed(res.data.data));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    feed && (
      <div>
        {feed?.map((feed) => (
           <UserCard key={feed._id} user={feed} />
        ))}
      </div>
    )
  );
};

export default Feed;
