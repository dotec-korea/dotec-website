import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const markers = [
  {
    markerOffset: -28,
    name: 'Singapore',
    coordinates: [103.8198, 1.3521],
  },
];

const MapChart = () => {
  return (
    <div className='w-full -mt-10'>
      <ComposableMap
        height={200}
        projectionConfig={{
          center: [103.8198, 1.3521],
          scale: 500,
        }}
      >
        <Geographies
          geography='/features.json'
          fill='#D6D6DA'
          stroke='#FFFFFF'
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill='none'
              stroke='#1D4ED8'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='translate(-12, -24)'
            >
              <circle cx='12' cy='10' r='3' />
              <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
            </g>
            <text
              fontSize={10}
              textAnchor='middle'
              y={markerOffset}
              style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
