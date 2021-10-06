import React from 'react';
import PropTypes from 'prop-types';
import {ChildComponentProps} from 'google-map-react'

const Marker = (props: ChildComponentProps) => (
  <div
    style={{
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
    }}
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