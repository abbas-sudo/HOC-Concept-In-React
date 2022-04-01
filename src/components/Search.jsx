import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = (Wcomponent) => {
    const NewComponent = () => {
        const [search, setSearch] = useState('')
        const [countries, setCountries] = useState('')
        const [filterData, setFilterData] = useState([])
        function handleChange(e) {
            setSearch(e.target.value)
        }
        useEffect(() => {
            async function getData() {
                const res = await axios.get(`https://api.covid19api.com/summary`);
                setCountries(res.data.Countries);
            };
            getData();
        }, []);
        let countriesName
        if (countries) {
             countriesName = countries.map((count) => {
                return {
                    countries: count.Country,
                    newDeaths: count.NewDeaths,
                    NewConfirmed: count.NewConfirmed,
                    TotalDeaths: count.TotalDeaths
                }
            })
        }
        let passThroughProps = {
            countriesName,
            search
        }
        return (
            <>
                <div className="container">
                    <div className="row height d-flex justify-content-center align-items-center">
                        <div className="col-md-6" style={{ display: 'flex', marginTop: '20px' }}>
                            <div className="form"> <input type="text" name="search" className="form-control form-input ml-5" placeholder="Search anything..." onChange={handleChange} /> </div>
                            <button type="button" className="btn btn-primary" style={{ marginLeft: '20px' }}>Primary</button>
                        </div>
                    </div>
                </div>
                <Wcomponent props={passThroughProps} />
            </>
        )
    }
    return NewComponent;
}

export default Search