import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import {ChildComponentProps} from 'google-map-react'


export enum MarkerStyle {
  'office',
  'car'
}

type MarkerProps = {
  markerStyle: MarkerStyle
} & ChildComponentProps;

const officeStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '18px',
  height: '18px',
  backgroundColor: 'red',
  border: '2px solid #fff',
  borderRadius: '100%',
  userSelect: 'none',
  transform: 'translate(-50%, -50%)',
}

const carStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '18px',
  height: '18px',
  backgroundColor: 'green',
  border: '2px solid #fff',
  borderRadius: '100%',
  userSelect: 'none',
  transform: 'translate(-50%, -50%)',
}

const Marker = (props: MarkerProps) => (
  <div
    style={props.markerStyle === MarkerStyle.office ? officeStyle : carStyle}
  />
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;