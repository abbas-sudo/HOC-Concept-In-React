import React from 'react';
import Search from './Search';

const Table2 = (props) => {
    const {countriesName,search} = props.props;
  let newCountriesName
  if(countriesName){
   newCountriesName = countriesName.splice(0,15);
  console.log(newCountriesName) 
}
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
          
          {
            newCountriesName ? 
          newCountriesName.filter(name => {
            console.log(name,"name form Filter")
            if(search === ""){
              return name
            }else if(name.countries.toLowerCase().includes(search.toLowerCase())){
                return name
            }}).map(count => {
            return(
          <tr>
            <td>{count.countries}</td>
            <td>{count.NewConfirmed}</td>
            <td>{count.newDeaths}</td>
            <td>{count.TotalDeaths}</td>

          </tr>
          )}) : null}
        </tbody>
      </table>
      </>
    )
}


export default Search(Table2)