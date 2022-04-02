import React,{useState, useEffect} from 'react';
import Search from './Search';
import axios from 'axios';

const Table2 = (props) => {
  const { search} = props;
  const [pokemon, setPokemon] = useState('')
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      setPokemon(res.data.results);
    };
    getData();
  }, []);
  return (
    <>
      <h3>Welcome To Table 2</h3>
      <table className="table mt-5 w-50 m-auto">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Links</th>
            <th scope="col">Name</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>

          {
            pokemon ?
            pokemon.filter(name =>{
              if(search === ""){
                return name
              }else if(name.name.toLowerCase().includes(search.toLowerCase())){
                  return name
              }
            }).slice(0,15).map(poke => {
              return (
                <tr>
                  <td>{poke.name}</td>
                  <td>{poke.url}</td>
                  <td>{poke.name}</td>
                  <td>{poke.name}</td>

                </tr>
              )
            }) : null}
        </tbody>
      </table>
    </>
  )
}


export default Search(Table2)