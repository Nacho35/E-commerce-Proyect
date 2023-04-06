import React, { useEffect } from "react";
import "../App.css";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Overlay from "ol/Overlay";

const MapFooter = () => {
	useEffect(() => {
		const map = new Map({
			target: "map",
			layers: [
				new TileLayer({
					source: new OSM(),
				}),
			],
			view: new View({
				center: fromLonLat([-94.55643, 39.09039]), //* Aca se definen las coordenadas del centro del mapa
				zoom: 17, //* Aca se define el nivel de zoom inicial
				pixelRatio: 2, //* Resolucion del mapa
			}),
		});

		const markerElement = document.createElement("div");
		markerElement.className = "marker";
		const markerOverlay = new Overlay({
			element: markerElement,
			position: fromLonLat([-94.55643, 39.09039]),
			positioning: "center-center",
			stopEvent: false,
		});
		map.addOverlay(markerOverlay);

		return () => {
			map.dispose();
		};
	}, []);

	return <div data-aos="flip-down" className="map" id="map"></div>;
};

export default MapFooter;
