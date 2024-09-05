export default function LikeButton() {
  //   function clicked() {
  //     console.log("clicked");
  //   }
  let clicked = () => {
    console.log("clicked");
  };
  return (
    <div>
      <p onClick={clicked}>
        <i className="fa-regular fa-heart"></i>
      </p>
    </div>
  );
}
