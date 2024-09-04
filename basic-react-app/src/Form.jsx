function hanldeFormSubmit(event) {
  event.preventDefault();
  console.log("form was submitted");
}

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="write something" />
      <button onClick={hanldeFormSubmit}>Submit</button>
    </form>
  );
}
