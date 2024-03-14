import { useState, useEffect } from "react";

type NewPerson = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
};

type FirstPersonProps = {
  personId: number;
};

const FirstPerson: React.FC<FirstPersonProps> = ({ personId }) => {
  const [person, setPerson] = useState({} as NewPerson);

  useEffect(() => {
    const url = `https://swapi.py4e.com/api/people/${personId}/`;
    const fetchLuke = async () => {
      const result = await fetch(url);
      const data = await result.json();
      if (!ignore) {
        setPerson({
          name: data.name,
          height: data.height,
          mass: data.mass,
          hair_color: data.hair_color,
          skin_color: data.skin_color,
          eye_color: data.eye_color,
          birth_year: data.birth_year,
          gender: data.gender,
          homeworld: data.homeworld,
          films: data.films,
          species: data.species,
          vehicles: data.vehicles,
          starships: data.starships,
          created: data.created,
        });
      }
    };
    let ignore = false;
    fetchLuke();
    return () => {
      ignore = true;
    };
  }, [personId]);

  return (
    <div className="lukeBox">
      {person ? (
        <>
          <h1>{person.name}</h1>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Created: {person.created}</p>
          <p>Films appeared in: {person.films ? person.films.length : 0}</p>
          <p>Species: </p>
          <ul>
            {person.species &&
              person.species.map((species, index) => (
                <li key={index}>{species}</li>
              ))}
          </ul>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default FirstPerson;
