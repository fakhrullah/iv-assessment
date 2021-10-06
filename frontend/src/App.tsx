import React, { useState } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Marker, { MarkerStyle } from './components/Marker';
import { OfficeModel } from './models/OfficeModel';
import { offices } from './data/offices'
import { useQuery } from 'react-query';
import { Box, Container, Center,
  Text,
  Spinner, Select,
  Slider, SliderTrack, SliderFilledTrack, SliderThumb 
} from '@chakra-ui/react';
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
  const onCarSliderChange = (value: number) => {
    setCarCount(value);
  }

  const onRefreshRateChange = (value: number) => {
    setRefreshRateSeconds(value);
  }

  return (
    <div className="App">

      <Container pt={16}>

        {
          driverQuery.isRefetching && 
          <Spinner color="blue.800" position="absolute" top={8} />
        }

        <Box display="flex">
          <Text w="160px">Choose Office :</Text>
          <Select onChange={onLocationChange}>
            {
              offices
                .map((office) => (
                  <option 
                  key={office.slug} 
                  value={office.slug}
                  >{office.name}</option>
                ))
            }
          </Select>
        </Box>

        <Box height={4} />
      
        <Center>
          <Box width='100%'>
            <Text>Car count: ({carCount})</Text>
            <Slider
              aria-label="slider-ex-1"
              value={carCount}
              step={1}
              min={1}
              max={50}
              onChange={onCarSliderChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </Center>

        <Box height={4} />

      </Container>

      <Box width="100%" height="360px">
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
      </Box>

      <Center>
          <Box width='400px' display="flex">
            <Text>Refresh Rate: ({refreshRateSeconds}s)</Text>
            <Box width={8} />
            <Slider
              aria-label="slider-ex-1"
              value={refreshRateSeconds}
              step={1}
              min={1}
              max={20}
              onChange={onRefreshRateChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </Center>

    </div>
  );
}

export default App;
