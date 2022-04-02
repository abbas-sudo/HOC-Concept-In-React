import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = (Wcomponent) => {
    const NewComponent = (props) => {
        const {name} = props
        const [search, setSearch] = useState('')
        function handleChange(e) {
            setSearch(e.target.value)
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
                <Wcomponent search={search} />
            </>
        )
    }
    return NewComponent;
}

export default Search