import { useEffect, useState } from "react";

type SWPerson = {
  name: string;
  eye_color: string;
  birth_year: string;
};

const Person = () => {
  /* const [name, setName] = useState(""); */
  const [person, setPerson] = useState({} as SWPerson);

  useEffect(() => {
    const url = "https://swapi.py4e.com/api/people/1/";
    const fetchLuke = async () => {
      const result = await fetch(url);
      const luke = await result.json();
      if (!ignore) {
        setPerson({
          name: luke.name,
          eye_color: luke.eye_color,
          birth_year: luke.birth_year,
        });
      }
    };
    let ignore = false;
    fetchLuke();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <h1>{person.name}</h1>
      <ul>
        {person ? (
          <>
            <li>Name: </li>
            <li>Name: {person.name}</li>
            <li>Eyes: {person.eye_color}</li>
            <li>Birth year: {person.birth_year}</li>
          </>
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </>
  );
};

export default Person;
