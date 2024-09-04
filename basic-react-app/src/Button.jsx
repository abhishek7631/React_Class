function printHello(event) {
  console.log("hello world!");
  console.log(event);
}

function printBye() {
  console.log("bye!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click Me!</button>
      <p onMouseOver={printBye}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, totam?
        Magni esse consequuntur, id obcaecati porro cumque est sunt explicabo
        animi neque voluptatem corrupti, voluptates quasi, dignissimos
        repudiandae fuga et?
      </p>
    </div>
  );
}
