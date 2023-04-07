import React, { useState, useEffect } from 'react';

import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';

function Comparator() {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3341305d14mshb50263dad38853cp1289ecjsn4b7daa916c1e',
        'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
      }
    };
    
    fetch('https://country-facts.p.rapidapi.com/all', options)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  console.log("data >>", data);
  const selectedCountryData = data.find(item => item.name.common === selectedCountry);
  

  return (
    <div>
      
      <h1 className='title'>Country Facts</h1>
      <div className="flex flex-col lg:flex-row">
       

        <div className="w-full lg:w-1/2 p-4">

          <select id="countries" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">-- Select a country --</option>
            {data.map(item => (
              <option key={item.name.common} value={item.name.common}>{item.name.common}</option>
            ))}

          </select>

          <div className="flag-container">
             <img src={selectedCountryData?.flag} alt={`${selectedCountry} flag`} />
         </div>

          <div class="p-4 md:p-8 lg:p-12 border rounded-md shadow-lg">
  <p class="mb-2"><strong>Country name:</strong> <span id="country-name" class="text-blue-600">{selectedCountryData?.name.common}</span></p>
  <p class="mb-2"><strong>Country region:</strong> <span id="country-currency" class="text-gray-600">{selectedCountryData?.region}</span></p>
  <p class="mb-2"><strong>Country subregion:</strong> <span id="country-population" class="text-gray-600">{selectedCountryData?.subregion}</span></p>
  <p class="mb-2"><strong>Country area:</strong> <span id="country-area" class="text-gray-600">{selectedCountryData?.area}</span></p>
  <p class="mb-2"><strong>Country population:</strong> <span id="country-population" class="text-gray-600">{selectedCountryData?.population}</span></p>
  <p class="mb-2"><strong>Country status:</strong> <span id="country-status" class="text-gray-600">{selectedCountryData?.status}</span></p>
  <p class="mb-2"><strong>Country capital-city:</strong> <span id="country-capital" class="text-gray-600">{selectedCountryData?.capital}</span></p>
</div>


          {/* map container */}

        </div>
        <div className='w-full lg:w-1/2 p-4'>

        {selectedCountryData && (

<>
        {/* <p> Official name: <span>{selectedCountryData.official}</span></p>

        <p> cca3 code: <span>{selectedCountryData.cca3}</span></p> */
        <div class="max-w-full lg:max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />   
        {/* <Marker position={[data.item.latlng[0], data.item.latlng[1]]}> */}
        <Marker position={selectedCountryData && [selectedCountryData.latlng[0], selectedCountryData.latlng[1]]}>
            <Popup>
                Rwanda
            </Popup>

        </Marker>
        
        </MapContainer>
        </div>

        }
        </>

        )}
        </div>
        
      </div>

      <div className="row">
        <div className="city1">
          {/* <div className="cityName">{selectedCountryData?.[0]}</div> */}
        </div>
        <div className="city2">
          {/* <div className="cityName">{selectedCountryData?.major_cities[1]}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Comparator;
