import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOtions } from '../../api.js';
const Search = (props) => {
    const [search, setSearch] = useState(null);
    const onChangeHandler = (searchData) => {
        setSearch(searchData);
        props.onSearchChange(searchData);
    };
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOtions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return{
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`,
                            }
                        
                    })
                }
            })
            .catch(err => console.error(err));
    };
    return (<AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={onChangeHandler}
        loadOptions={loadOptions}
    />)
}
export default Search;