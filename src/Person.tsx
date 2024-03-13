import { useEffect, useState } from "react";

type SWPerson = {
  name: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

const Person = () => {
  /* const [name, setName] = useState(""); */
  const [person, setPerson] = useState({} as SWPerson);
  const [personId, setPersonId] = useState(0);

  useEffect(() => {
    const url = `https://swapi.py4e.com/api/people/${personId}/`;
    const fetchPerson = async () => {
      const result = await fetch(url);
      const personData = await result.json();
      if (!ignore) {
        setPerson({
          name: personData.name,
          eye_color: personData.eye_color,
          birth_year: personData.birth_year,
          gender: personData.gender,
        });
      }
    };
    let ignore = false;
    fetchPerson();
    return () => {
      ignore = true;
    };
  }, [personId]);
  console.log(personId);

  const randomizePerson = () => {
    const randomId = Math.floor(Math.random() * 82) + 1;
    setPersonId(randomId);
  };

  return (
    <>
      <div className="characterBox">
        <input
          type="number"
          value={personId}
          onChange={(e) => setPersonId(Number(e.target.value))}
        />
        <button onClick={randomizePerson}>Randomize</button>
        <h1>{person.name}</h1>
        <ul>
          {person ? (
            <>
              {/* <li>Name: {person.name}</li> */}
              <li>Eyes: {person.eye_color}</li>
              <li>Birth year: {person.birth_year}</li>
              <li>Gender: {person.gender}</li>
            </>
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Person;
