import React, {useState, useEffect}  from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchCountries();
      //console.log('debug1 dailyData:', fetchedData);
      setFetchedCountries(fetchedData);
    }
    fetchAPI();
  }, []);

  return (
    <FormControl>
      <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}
export default CountryPicker;