import  { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

export default function Countries() {

    const [countries, setCountries] = useState([]);
    const [visitedContries, setVisitedContries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);


    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedCountries = (country) => {
      console.log("Add this your visited country");
      const newVisitedCountry = [...visitedContries, country];
      setVisitedContries(newVisitedCountry);
    }

    const handleVisitedFlag = (flag) => {
      const newVisitedFlags = [...visitedFlag, flag];
      setVisitedFlag(newVisitedFlags);
    }

  return (
    <div>
        <div>Countries {countries.length} </div>
        
        
        <div className='flag-container'>
        <div>
          {
            visitedFlag.map(flag => <li key={flag}><img src={flag} alt="" /></li>)
          }
        </div>
        </div>

        <div>
           <h5>Visited Countries: {visitedContries.length}</h5>
           <ul>
               {
                 visitedContries.map(country => <li key={country.cca3}>{country.name.common}</li>)
               }
           </ul>
        </div>


        <div className='countries-components'>
           {
               countries.map(country => 
               <Country 
               key={country} 
               country={country}
               handleVisitedCountries = {handleVisitedCountries}
               handleVisitedFlag = {handleVisitedFlag}
               >

               </Country>)
           }
        </div>
    </div>
  )
}
