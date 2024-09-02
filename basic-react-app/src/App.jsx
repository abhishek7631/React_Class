import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./productTab.jsx";
import MsgBox from "./msgBox.jsx";

function App() {
  return (
    <>
      <MsgBox userName="Abhishek" textColor="red"></MsgBox>
      <ProductTab></ProductTab>
    </>
  );
}

export default App;
