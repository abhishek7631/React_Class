import { useState } from "react";

export default function LikeButton() {
  //   function clicked() {
  //     console.log("clicked");
  //   }

  let [isLiked, setIsliked] = useState(false);
  let toggleLike = () => {
    setIsliked(!isLiked);
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
