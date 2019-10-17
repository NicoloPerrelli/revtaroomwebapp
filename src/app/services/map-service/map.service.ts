import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import * as L from 'leaflet';
import { HousingInfo } from 'src/app/models/housing-info';

@Injectable({
  providedIn: 'root'
})
export class MapService {

	markerTitle = "Monthly price: $"

	constructor(private http: HttpClient) { }

	fillMapWithClusters(map: L.Map, list: HousingInfo[]) {
		
		let addressPoints: any[] = this.mapHousingIntoCoords(list);

		// Create cluster object and define its configuration
		let markers = L.markerClusterGroup({ 
			chunkedLoading: true,
			iconCreateFunction: (cluster) => {
				let children = cluster.getAllChildMarkers();
				let avg = 0;
				children.forEach(marker => {
					let value = +marker.options.title.replace(this.markerTitle, ""); // the plus sign is to convert from string to number
					avg += value;
				})
				avg = avg/children.length;
				return new L.DivIcon({
					html: '<div style="padding: 4px;border-radius: 50%;background: rgba(255,152, 0, 0.6);border: 1px solid #F57C00;"><span> $' + avg + '</span></div>',
					className: 'marker-cluster', iconSize: new L.Point(40, 40)
				})
			}
		});


		// Get addresses points and insert them in the cluster group
		for(let i=0;i<addressPoints.length;i++) {
			let a = addressPoints[i];
			let title = a[2];
			let marker = L.marker(L.latLng(a[0],a[1]), { title: title });
			marker.bindPopup(title);
			markers.addLayer(marker);
		}

		console.log("markers", markers);
		
		// Add all the points to the map
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

	getHousing() {
		return this.http.get(`${env.API_URL}/housing`);
	}

	getRooms() {
		return this.http.get(`${env.API_URL}/rooms`);
	}

	mockGetAddresses(map:L.Map) {
		let addr = [
			[27.996097, -82.582035, "IQ Apartments"],
			[27.7733051, -82.6469934, "Saint Petesburg"],
			[28.545179, -81.373291, "Orlando"],
			[30.2685144, -81.5098507,"UNF"]
		]

		// this.fillMapWithClusters(map,addr);

	}

	mapHousingIntoCoords(list: HousingInfo[]) {
		let points = [];
		list.forEach(item => {
			if(item.address.latitude && item.address.longitude) {
				let lat = item.address.latitude;
				let lng = item.address.longitude;
				let price = this.markerTitle + item.pricePerMonth;
				points.push([lat, lng, price]);
			}
		});
		return points;
	}

}
