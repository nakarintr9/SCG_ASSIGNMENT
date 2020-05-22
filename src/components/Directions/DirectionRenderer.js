import React, { Component } from "react";

const {
  Polyline,
  DirectionsRenderer,
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const initMap = (resultDirection) => {  
  const direction = resultDirection;
  const encoded_poly = direction.resultDirection.routes[0].overview_polyline.points;
  const start_location = direction.resultDirection.routes[0].legs[0].start_location;
  const end_location = direction.resultDirection.routes[0].legs[0].end_location;

  const center = start_location;

  var array_path = new window.google.maps.geometry.encoding.decodePath(
    encoded_poly
  );

  return (
    <GoogleMap defaultZoom={12} center={center}>
      <Marker label={"SCG"} position={start_location} />
      <Marker label={"Central World"} position={end_location} />
      <Polyline
        path={array_path}
        geodesi={true}
        strokeColor={"#33FF4C"}
        strokeOpacity={1.0}
        strokeWeight={5}
        draggable={true}
      />
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(initMap));

export default MapWrapped;
