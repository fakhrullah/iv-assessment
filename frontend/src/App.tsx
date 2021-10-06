import React, { useState } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';

interface LocationModel {
  lat: number
  lng: number
}

interface OfficeModel {
  name: string
  slug: string
  location: LocationModel
}

function App() {

  const offices: OfficeModel[] = [
    {
      name: 'Singapore',
      slug: 'singapore',
      location: {
        lat: 1.285194,
        lng: 103.8522982
      }
    },
    {
      name: 'London',
      slug: 'london',
      location: {
        lat: 51.5049375,
        lng: -0.0964509
      }
    },
  ];

  const getOfficeLocation = (slug: string): LocationModel => offices
    .find((office) => office.slug === slug)?.location || {lat: 0, lng: 0};

  const [office, setOffice] = useState<string>('singapore');
  const zoom = 8;

  return (
    <div className="App">
      <div>
        Choose location:
        <select
          onChange={(e) => setOffice(e.target.value)}
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
           bootstrapURLKeys={{ key: ''}}
           defaultCenter={getOfficeLocation('singapore')}
           defaultZoom={zoom}
           center={getOfficeLocation(office)}
          >
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
