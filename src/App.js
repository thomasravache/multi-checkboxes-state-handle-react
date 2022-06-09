import React from 'react';

const permissoes = [
  ['Editar Algo', 'editar'],
  ['Criar Algo', 'criar'],
  ['Ler Algo', 'ler'],
  ['Excluir Algo', 'excluir'],
];

// I abstracted Checkbox to a component but it's up to you
const Checkbox = ({ checked, onChange, label, name }) => (
  <label>
    <input
      type="checkbox"
      checked={checked} // use checked to have a controlled component
      onChange={onChange}
      name={name}
    />
    {label}
  </label>
);

const App = () => {
  const [permissions, setPermissions] = React.useState({
    editar: false,
    criar: false,
    ler: false,
    excluir: false,
  });

  // extract name and checked properties
  const handleChange = ({ target: { name, checked } }) => {
    setPermissions({ ...permissions, [name]: checked });
  };

  const handleSubmit = (event) => {
    console.log(permissions);
    event.preventDefault();
  };

  return (
    <div>
      <h1>React Checkbox onChange Example</h1>
      <form onSubmit={handleSubmit}>
        {permissoes.map(([nome, chave]) => (
          <>
            <Checkbox
              onChange={handleChange}
              name={chave}
              checked={permissions[chave]}
              label={nome}
            />
            <br />
          </>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
