import "./App.css";
import FirstPerson from "./NewPerson";
import Person from "./Person";

function App() {
  return (
    <>
      <Person />
      <FirstPerson personId={1} />
      <FirstPerson personId={2} />
      <FirstPerson personId={3} />
    </>
  );
}

export default App;
