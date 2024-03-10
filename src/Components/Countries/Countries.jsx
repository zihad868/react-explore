import  { useEffect, useState } from 'react'
import Country from '../Country/Country';

export default function Countries() {

    const [countries, setCountries] = useState([]);


    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

  return (
    <div>
        <div>Countries {countries.length} </div>
        {
            countries.map(country => <Country country={country} key={country.cca3}></Country>)
        }
    </div>
  )
}
