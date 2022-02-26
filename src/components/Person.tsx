import React from "react";

interface Person {
  id: number;
  name: string;
  age: number;
  image: string;
}

interface PersonProps {
  people: Person[];
}

export default function Person(props: PersonProps) {
  const { people } = props;

  return (
    <div className="container">
      {people &&
        people.length > 0 &&
        people.map((person: Person) => {
          const { id, name, age, image } = person;
          return (
            <div className="person" key={id}>
              <div className="person__image">
                <img src={image} alt={name} />
              </div>
              <div>
                <p className="person__name">{name}</p>
                <p className="person__age">{age} years</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
