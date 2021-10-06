import React, { useState } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Marker, { MarkerStyle } from './components/Marker';
import { OfficeModel } from './models/OfficeModel';
import { offices } from './data/offices'
import { useQuery } from 'react-query';
import { getDrivers } from './services/driver_service_fake';

function App() {

  const getCurrentOffice = (slug: string): OfficeModel => offices
    .find((ofc) => ofc.slug === slug) || offices[0];

  const driverQuery = useQuery('drivers', getDrivers, {
    initialData: [],
  });

  const [officeData, setOfficeData] = useState<OfficeModel>(offices[0]);
  const zoom = 11;

  return (
    <div className="App">
      <div>
        Choose location:
        <select
          onChange={(e) => setOfficeData({...officeData, ...getCurrentOffice(e.target.value)})}
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

      <div>Slider car number</div>

      <div style={{width: '100%', height: '320px'}}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyCzOjhJjfh6FGaYAxpvCekVI8Zvn2JWyZE'}}
           defaultCenter={officeData.location}
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
        <input type="number"/>
      </div>

    </div>
  );
}

export default App;
