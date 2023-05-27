import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [state, setState] = useState("pendiente");

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Si sabes llenar los campos 🤨😡",
      });
    }

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === "completado",
    });

    Swal.fire({
      position: 'center',
      icon: "success",
      title: "Todo agregado correctamente 😎👍",
      showConfirmButton: false,
      timer: 1500
    })
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // console.log(e.target.type);
    const { type, name, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese una descripción"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar Prioridad</label>
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar Todo
      </button>
    </form>
  );
};

export default Formulario;
