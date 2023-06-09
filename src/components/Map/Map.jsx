import React from 'react';
import googleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocalActivityOutlined } from '@material-ui/icons/LocalActivityOutlined';
import Rating  from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordinates = {lat:0, lng:0};
  return (
    <div className={classes.mapContainer}>
        <googleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={isMobile? 12 : 14}
          margin={[50,50,50,50]}
          options={''}
          onChange={''}

          onChildClick={''}
        >

        </googleMapReact>
    </div>
  )
}

export default Map