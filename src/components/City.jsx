import React, { useState, useEffect } from 'react';
import citiesx from "./pricies.json"
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


function City() {
  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);
  const [data2, setData2] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCityData, setSelectedCityData] = useState('');
  const [selectedCityData2, setSelectedCityData2] = useState('');



  useEffect(() => {
    async function getData() {
      await getCitiesList();
    }
    getData();

  }, []);

  const getCitiesList = async () => {
    await fetch('https://restcountries.com/v3.1/all').then((response) => {
      return response.json();
    }).then((data) => {
      setCities(data);
    })
  }

  const getCityData = async (city, country) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3341305d14mshb50263dad38853cp1289ecjsn4b7daa916c1e',
        'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${city}&country_name=${country}`, options);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  const getCityData2 = async (city, country) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3341305d14mshb50263dad38853cp1289ecjsn4b7daa916c1e',
        'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${city}&country_name=${country}`, options);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  const handleCityChange = async (event) => {

    const fetchCityPrices = await fetch("prices.json");
    const cityData = fetchCityPrices.json();

    if (cityData) {

      setSelectedCity(event.target.value);
      console.log("selectedCity>>", selectedCity)
      if (selectedCity) {
        console.log("data for selected city", data.cities.find(item => item.city_name == selectedCity));
        setSelectedCityData(data.cities.find(item => item.city_name == selectedCity));
      }

    }

  };

  async function handleCitySubmit(event) {
    event.preventDefault();
    const city1InputField = document.getElementById('ct1').value;


    const city1Input = city1InputField.split(' | ');

    const city2InputField = document.getElementById('ct2').value;

    const city2Input = city2InputField.split(' | ');


    (async () => {
      const data = await getCityData(city1Input[1], city1Input[0]);
      setData(data);
    })();

    (async () => {
      const data = await getCityData2(city2Input[1], city2Input[0]);
      setSelectedCityData2(data);
    })();


    console.log(selectedCityData2);
  }


  return (

    <div className='main container' >
      <div class="countrySelector flex flex-col items-center bg-slate-600">
        <form onSubmit={handleCitySubmit}>
          <input id="ct1" list="cityDL" placeholder="Enter City 1" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal text-gray-700" />
          <br></br>
          <input id="ct2" list="cityDL" placeholder="Enter City 2" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal text-gray-700" />
          <br></br>
          <input type="submit" value="Compare" class="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
        </form>
        <datalist id="cityDL">
          {cities && cities.map((city, index) => {
            return <option key={index}>{city.name.common} | {city.capital}</option>
          })}
        </datalist>

      </div>

      <div className="flex flex-col lg:flex-row">

        <div className="w-full p-4">
          <table className="border">
            <thead>
              <tr>
                <th className="border">Item</th>
                <th className="border">Price in {data?.city_name}</th>
                <th className="border">Price in {selectedCityData2?.city_name}</th>
                <th className="border">Graph</th>
              </tr>
            </thead>
            <tbody>
              {data.prices && data.prices.map((priceItem, index) => {
                return (
                  <tr key={index}>

                    <td className="border">{priceItem?.item_name}</td>
                    <td className="border">${priceItem?.usd?.avg}</td>
                    <td className="border">{selectedCityData2?.prices?.find(city => priceItem.item_name === city.item_name)?.usd?.avg}</td>

                    <div><td className=""></td>

                      <div>
                        <td className="border">
                          <Bar
                            data={{
                              labels: data?.prices?.map(item => item.item_name) ?? [],
                              datasets: [
                                {
                                  label: `Prices in ${selectedCityData.city_name ?? ""}`,
                                  data: data?.prices?.map(item => item.average_price) ?? [],
                                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                  borderColor: 'rgba(255, 99, 132, 1)',
                                  borderWidth: 1,
                                },
                                {
                                  label: `Prices in ${selectedCityData2.city_name ?? ""}`,
                                  data: selectedCityData2.prices?.map(item => item.average_price) ?? [],
                                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                  borderColor: 'rgba(54, 162, 235, 1)',
                                  borderWidth: 1,
                                },
                              ],
                            }}
                            options={{
                              scales: {
                                y: {
                                  beginAtZero: true
                                }
                              },
                              plugins: {
                                legend: {
                                  display: true,
                                  position: 'bottom',
                                },
                              },
                            }}
                            width={400}
                            height={300}
                          />
                        </td>
                      </div>




                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>



    </div>
  );

};

export default City;
