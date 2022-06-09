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

class App extends React.Component {
  // constructor method is called implicit you can define state outside
  // for binding methods, you can declare them as arrow functions
  state = {
    editar: false,
    criar: false,
    ler: false,
    excluir: false,
  };

  // extract name and checked properties
  handleChange = ({ target: { name, checked } }) =>
    this.setState({ [name]: checked });

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>React Checkbox onChange Example</h1>
        <form onSubmit={this.handleSubmit}>
          {permissoes.map(([nome, chave]) => (
            <div key={chave}>
              <Checkbox
                key={chave}
                onChange={this.handleChange}
                name={chave}
                checked={this.state[chave]}
                label={nome}
              />
              <br />
            </div>
          ))}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
