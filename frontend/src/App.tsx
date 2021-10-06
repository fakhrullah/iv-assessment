import React, { useState } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Marker, { MarkerStyle } from './components/Marker';
import { OfficeModel } from './models/OfficeModel';
import { offices } from './data/offices'
import { useQuery } from 'react-query';
import { getDrivers } from './services/driver_service_impl';
// import { getDrivers } from './services/driver_service_fake';

const { REACT_APP_GOOGLE_MAP_API_KEY = '' } = process.env;

function App() {
  
  const [officeData, setOfficeData] = useState<OfficeModel>(offices[0]);
  const [carCount, setCarCount] = useState<number>(5);
  const [refreshRateSeconds, setRefreshRateSeconds] = useState<number>(10)

  const zoom = 11;

  const getCurrentOffice = (slug: string): OfficeModel => offices
    .find((ofc) => ofc.slug === slug) || offices[0];

  const driverQuery = useQuery(
    ['drivers', officeData, carCount],
    () => getDrivers(officeData.location, carCount),
    {
      initialData: [],
      refetchInterval: refreshRateSeconds * 1000, // convert to milliseconds
    }
  );

  const onLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOfficeData({...officeData, ...getCurrentOffice(e.target.value)});
    // driverQuery.refetch({});
  }

  // TODO: Optimization - Only call when user confirm set number, so that less burden for backend API
  // TODO: Optimization - Filter number in local data because we already have the data
  const onCarCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarCount(parseInt(e.target.value));
  }

  const onRefreshRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRefreshRateSeconds(parseInt(e.target.value));
  }

  return (
    <div className="App">
      {driverQuery.isRefetching && 
        <div style={{position: 'absolute', width: '40px', height: '40px', backgroundColor:'blue'}}> </div>
        }
      <div>
        Choose location:
        <select
          onChange={onLocationChange}
          >
          {
            offices
              .map((office) => (
                <option 
                key={office.slug} 
                value={office.slug}
                >{office.name}</option>
              ))
          }
        </select>
      </div>

      <div>Slider car number:
        {' '}
        <input type="number" value={carCount} onChange={onCarCountChange}/>
      </div>

      <div style={{width: '100%', height: '320px'}}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAP_API_KEY}}
           defaultCenter={offices[0].location}
           defaultZoom={zoom}
           yesIWantToUseGoogleMapApiInternals
           center={officeData.location}
          >
            <Marker
                key={officeData.slug}
                text={officeData.name}
                lat={officeData.location.lat}
                lng={officeData.location.lng}
                markerStyle={MarkerStyle.office}
              />

      {driverQuery.data?.map((driver) => (
        <Marker
          key={driver.id}
          text={driver.id}
          lat={driver.location.lat}
          lng={driver.location.lng}
          markerStyle={MarkerStyle.car}
          />
      ))}
        </GoogleMapReact>
      </div>

      <div>
        Refresh rate interval: 
        {' '}
        <input type="number" value={refreshRateSeconds} onChange={onRefreshRateChange} />
      </div>

    </div>
  );
}

export default App;
