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
      <FirstPerson personId="Skywalker" />
      <FirstPerson personId="R2" />
      <FirstPerson personId="vader" />
    </>
  );
}

export default App;
