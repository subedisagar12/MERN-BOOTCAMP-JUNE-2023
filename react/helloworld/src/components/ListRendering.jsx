import React from "react";

function ListRendering() {
  const fruits = ["Apple", "Mango", "Orange", "Pineapple", "Kiwi", "Apple"];

  const students = [
    {
      id: 1,
      name: "Harry",
      age: 21,
    },

    {
      id: 2,
      name: "Rita",
      age: 19,
    },

    {
      id: 3,
      name: "Hari",
      age: 25,
    },

    {
      id: 4,
      name: "Hari",
      age: 29,
    },
  ];

  return (
    <>
      <h1>List Rendering</h1>

      {fruits.map((item, index) => (
        <h3 className="heading" key={index}>
          {item}
        </h3>
      ))}

      {students.map((student) => (
        <h3 key={student.id}>{student.name}</h3>
      ))}

      {/* <h3>{fruits[0]}</h3>
      <h3>{fruits[1]}</h3>
      <h3>{fruits[2]}</h3>
      <h3>{fruits[3]}</h3> */}
    </>
  );
}

export default ListRendering;
