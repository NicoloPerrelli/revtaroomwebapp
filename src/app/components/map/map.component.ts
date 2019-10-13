import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from 'src/app/services/map-service/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

	map:any;

	constructor(private mapService: MapService) { }

	ngOnInit() {
		this.map = L.map('mapId').setView([27.996097, -82.582035], 8,);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			maxZoom: 18
        }).addTo(this.map);

		this.mapService.mockGetAddresses(this.map);

	}

}
