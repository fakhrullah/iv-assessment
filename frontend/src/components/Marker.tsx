import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import {ChildComponentProps} from 'google-map-react'
import {Center, Box, Image} from '@chakra-ui/react'

import carImage from '../car.png';
import officeImage from '../office.png';

export enum MarkerStyle {
  'office',
  'car'
}

type MarkerProps = {
  markerStyle: MarkerStyle
} & ChildComponentProps;

const Marker = (props: MarkerProps) => {
    return (<Center 
      width={props.markerStyle === MarkerStyle.car ? 8 : 10}
      height={props.markerStyle === MarkerStyle.car ? 8 : 10}
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      backgroundColor={props.markerStyle === MarkerStyle.car ? 'white' : 'white'}
      border="solid 2px red"
      borderRadius="50%"
     ><Image width="100%" 
      src={props.markerStyle === MarkerStyle.car ? carImage : officeImage}/>
    </Center>);
};

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;