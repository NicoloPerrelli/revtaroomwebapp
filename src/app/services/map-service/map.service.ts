import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

	constructor(private http: HttpClient) { }

	fillMapWithClusters(map: L.Map, addressPoints: any[]) {
		
		let markers = L.markerClusterGroup({ chunkedLoading: true });

		for(let i=0;i<addressPoints.length;i++) {
			let a = addressPoints[i];
			let title = a[2];
			let marker = L.marker(L.latLng(a[0],a[1]), { title: title });
			marker.bindPopup(title);
			markers.addLayer(marker);
		}
		
		map.addLayer(markers);
		
	}

	// drawCircle(map) {
	// 	let lat = 27.996097;
	// 	let lon = -82.582035;
		
	// 	let circle = L.circle(latLng(lat,lon), {
	// 		color: 'red',
	// 		fillColor: '#f03',
	// 		fillOpacity: 0.5,
	// 		radius: 300
	// 	}).addTo(map);
	// }

	getAddresses(map:L.Map) {
		this.http.get(`${env.API_URL}/map`).subscribe((res) => {

		}, (err) => {
			console.log(err);
		})
	}

	mockGetAddresses(map:L.Map) {
		let addr = [
			[27.996097, -82.582035, "IQ Apartments"],
			[27.7733051, -82.6469934, "Saint Petesburg"],
			[28.545179, -81.373291, "Orlando"]
		]

		this.fillMapWithClusters(map,addr);

	}

}
