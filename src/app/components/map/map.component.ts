import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from 'src/app/services/map-service/map.service';
import { HousingInfo } from 'src/app/models/housing-info';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

	map:any;

	constructor(private mapService: MapService) { }

	ngOnInit() {
		this.createMap();
		console.log("Map created");
		
		// this.mapService.mockGetAddresses(this.map);
		
		this.populateMap();

	}

	createMap() {
		this.map = L.map('mapId').setView([35, -91.676174], 5,);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			maxZoom: 18,
			minZoom: 4
        }).addTo(this.map);
	}

	populateMap() {
		console.log("In populate map without housing array");
		this.mapService.getHousing().subscribe(
			(res: any) => {
				let housingList = res as HousingInfo[];
				console.log("In populate map with housing array");
				this.mapService.fillMapWithClusters(this.map,housingList);
			},
			(err) => {

			}
		);
	}

}
