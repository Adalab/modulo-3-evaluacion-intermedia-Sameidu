
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
  const [search, setSearch] = useState('');
  const [searchTutor, setSearchTutor] = useState('');


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

  const handleSearch = (ev) => {
    setSearch(ev.target.value)
  };

  const handleSearchTutor = (ev) => {
    setSearchTutor(ev.target.value)
  }
  
  const htmlData = adalaber
  .filter((eachAdalaber) => eachAdalaber.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  //Sin una opcion seleccionada no pinta la lista por defecto
  //.filter((eachAdalaber) => eachAdalaber.counselor === searchTutor)
  .map((data) => {
    return (
      <tr key={data.id} className='table_body'>
      <td className='table_body-data'>{data.name}</td>
      <td className='table_body-data'>{data.counselor}</td>
      <td className='table_body-data'>{data.speciality}</td>
    </tr>
    )
  })



  return (
    <div className="App">
      <h1 className="title">Adalabers</h1>

      <form action="" className='search'>
        <label htmlFor="">Buscar:</label>
        <input type="search" id='search' placeholder='Ej: Carmen' onInput={handleSearch} />
        {/* <label htmlFor="tutor">Selecciona un tutor</label>
        <select name="tutor" id="tutor" onChange={handleSearchTutor}>
          <option selected disabled>Elige una opcion</option>
          <option value="Ivan">Ivan</option>
          <option value="Yanelis">Yanelis</option>
          <option value="Dayana">Dayana</option>
        </select> */}
      </form>

      <table className="table"> 
  {/* <!-- Fila de cabecera -->  */}
        <thead><tr className='table_head'> 
          <th className='table_head-data'>Nombre</th> 
          <th className='table_head-data'>Tutora</th> 
          <th className='table_head-data'>Especialidad</th> 
        </tr></thead>
            {/* <!-- Fin fila de cabecera -->  */}
      
        <tbody> 
          {htmlData}
        </tbody>
        </table>

        <form action="" className='addAdalaber'>
          <h2 className='titleAdd'>A??adir nueva adalaber</h2>
          <label htmlFor="name">Nombre</label>
          <input type="text" id='name' value={addAdalaber.name} onInput={handleAddAdalaber}/>
          <label htmlFor="counselor">Tutor</label>
          <input type="text" id='counselor' value={addAdalaber.counselor} onInput={handleAddAdalaber}/>
          <label htmlFor="speciality">Especialidad</label>
          <input type="text" id='speciality' value={addAdalaber.speciality} onInput={handleAddAdalaber}/>
          <input type="submit" onClick={handleClickAdd}/>
        </form>
    </div>
  );
}

export default App;