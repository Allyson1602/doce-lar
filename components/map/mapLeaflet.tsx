import L, { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { FC } from "react";
import { MapPin } from "phosphor-react";

const position: LatLngExpression = [-15.708387, -47.877172];
const bounds: LatLngBoundsExpression = [
  [-15.708387, -47.877172]
];

const MapLeaftlet: FC = () => {
    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{width: "100%", height: "100%",}}>
          <TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
		  <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
			<MapPin size={40} weight="duotone" />
		  </SVGOverlay>
        </MapContainer>
    );
};

export default MapLeaftlet;
