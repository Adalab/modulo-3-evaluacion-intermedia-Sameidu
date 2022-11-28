
import { useState } from 'react';
import '../styles/App.scss';
import contacts from '../services/api.json'

function App() {
  const [adalaber, setAdalaber] = useState(contacts.results);
  const [addAdalaber, setAddAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: ''
  });

  const handleAddAdalaber = (ev) => {
    setAddAdalaber({...addAdalaber, [ev.target.id]: ev.target.value})
  };

  const handleClickAdd = (ev) => {
    ev.preventDefault();
    adalaber.push(addAdalaber);
    setAdalaber([...adalaber]);
    setAddAdalaber({
      name: '',
      counselor: '',
      speciality: ''
    })
  };

  const htmlData = adalaber.map((data) => {
    return (
      <tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.counselor}</td>
      <td>{data.speciality}</td>
    </tr>
    )
  })


  return (
    <div className="App">
      <h1 className="title">Adalabers</h1>

      <table className="table"> 
  {/* <!-- Fila de cabecera -->  */}
        <thead><tr> 
          <th>Nombre</th> 
          <th>Tutora</th> 
          <th>Especialidad</th> 
        </tr></thead>
            {/* <!-- Fin fila de cabecera -->  */}
      
        <tbody> 
          {htmlData}
        </tbody>
        </table>

        <form action="">
          <h2>Añadir nueva adalaber</h2>
          <label htmlFor="name">Nombre</label>
          <input type="text" id='name' value={addAdalaber.name} onInput={handleAddAdalaber}/>
          <label htmlFor="counselor">Tutor</label>
          <input type="text" id='counselor' value={addAdalaber.counselor} onInput={handleAddAdalaber}/>
          <label htmlFor="speciality">Especialidad</label>
          <input type="text" id='speciality' value={addAdalaber.specialty} onInput={handleAddAdalaber}/>
          <input type="submit" onClick={handleClickAdd}/>
        </form>
    </div>
  );
}

export default App;