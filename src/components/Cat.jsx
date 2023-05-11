import { useState } from "react";

const Cat = () => {
  const [cat, setCat] = useState({
    name: "Tisha",
    age: 15,
  });

  const handleClick = () => {
    // setCat({...cat, age: cat.age + 1})
    setCat((prev) => ({ ...prev, age: cat.age + 1 }));
  };

  return (
    <>
      <h2>
        {cat.name} - {cat.age}
      </h2>
      <button className="btn btn-dark mb-2" onClick={handleClick}>
        Update age
      </button>
    </>
  );
};

export default Cat;
