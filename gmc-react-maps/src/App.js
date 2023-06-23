import React from 'react';
import { GoogleMap, LoadScript } from 'react-google-maps';

const mapStyles = {
  height: '400px',
  width: '400px',
  margin: '0 auto'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const App = () => {
  return (
    <div>
      <h1>Welcome to My Google Maps App!</h1>
      <LoadScript googleMapsApiKey="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">
        <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={10} />
      </LoadScript>
    </div>
  );
};

export default App;

