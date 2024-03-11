import { useState } from 'react';
import './Country.css'

function Country({ country, handleVisitedCountries, handleVisitedFlag }) {
  const {name, flags, cca3} = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () =>{
    setVisited(!visited);
  }

  return (
    <div className={`country ${visited ? 'visited-country' : 'not'}`}>
        <h4 className=''>Name: {name.common}</h4>
        <img src={flags.png} alt="" />
        <p style={{color: visited ? 'yellow' : 'black'}}>CCA3: {cca3}</p>
        <button onClick={() => handleVisitedCountries(country)}>Mark Country</button>

        <br />
        <button onClick={() => handleVisitedFlag(country.flags.png)}>Visited Flag</button>
        <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
        {visited ? 'Visited country' : 'Not Visited'}
    </div>
  )
}

export default Country