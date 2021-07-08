import React from "react";

export default function Form() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    about: "",
    Qual: "masters",
    technology: "javaScript",
    freelancing: false,
  });

  function handleChange(evt) {
    // console.log(`type of input is ${evt.target.type}`);
    // console.log(evt.target.checked);
    // console.log(evt.target.value);

    const value =
      evt.target.type === "checkbox"
        ? evt.target.checked
        : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="app">
      <form onSubmit={onSubmit}>
        <label>
          <div className="heading">First Name</div>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">email</div>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">About</div>
          <textarea
            name="about"
            value={state.about}
            onChange={handleChange}
          />
        </label>
        <div>
          <div className="heading">Qualification</div>
          <label>
            Bachelors
            <input
              type="radio"
              name="Qual"
              value="bachelors"
              checked={state.Qual === "bachelors"}
              onChange={handleChange}
            />
          </label>
          <label>
            Masters
            <input
              type="radio"
              name="Qual"
              value="masters"
              checked={state.Qual === "masters"}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          <div className="heading">Technology</div>
          <select
            name="technology"
            onChange={handleChange}
            value={state.technology}
          >
            <option value="javaScript">javaScript</option>
            <option value="dotnet">Dot Net</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
        </label>
        <label>
          <div className="heading">Interested in Freelancing?</div>
          <input
            type="checkbox"
            name="freelancing"
            checked={state.freelancing}
            onChange={handleChange}
          />
        </label>
        <button className="btn btn-primary btn-block">
          Add User
        </button>
      </form>
      {/* <pre>{JSON.stringify(state, null, 3)}</pre> */}
    </div>
  );
}
