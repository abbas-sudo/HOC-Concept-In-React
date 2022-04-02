import React,{useState, useEffect} from 'react';
import Search from './Search';
import axios from 'axios';

const Table1 = (props) => {
  const { search} = props;
  const [countries, setCountries] = useState('')
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://api.covid19api.com/summary`);
      setCountries(res.data.Countries);
    };
    getData();
  }, []);


  return (
    <>
      <h3>Welcome To Table 1</h3>
      <table className="table mt-5 w-50 m-auto">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">New Cases</th>
            <th scope="col">New Deaths</th>
            <th scope="col">Total Deaths</th>
          </tr>
        </thead>
        <tbody>

          {countries ?
            countries.slice(0,15).filter(name => {
              if(search === ""){
                return name
              }else if(name.Country.toLowerCase().includes(search.toLowerCase())){
                  return name
              }})
            .map(count => {
              return (
                <tr>
                  <td>{count.Country}</td>
                  <td>{count.NewConfirmed}</td>
                  <td>{count.NewDeaths}</td>
                  <td>{count.TotalDeaths}</td>

                </tr>
              )
            }) : null}
        </tbody>
      </table>
    </>
  )
}

export default Search(Table1)