import { Component,OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { HttprequestService } from './service/httprequest.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges{

  private map: any;
  private marker:any;
  protected coordination:number[][] = [];
  protected pointingX:number = 0; //this.coordination[0][0]
  protected pointingY:number = 0; //this.coordination[0][1]
  protected isOn:boolean = false;
  

  constructor(private httprequestService:HttprequestService,private  cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.httprequestService.sendPostRequest("coordination","").subscribe(
      data=>{
      this.coordination = data;
      console.log(this.coordination);
      this.initMap();
    },
    error=>{
      console.log(error);
    }
    )
  }

  ngOnChanges(): void {
    console.log("yes changed");
  }

  private initMap(): void {
    this.pointingX = this.coordination[0][0];
    this.pointingY = this.coordination[0][1];
    this.map = L.map('map', {
      center: [
        this.pointingX,
        this.pointingY
      ],
      zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    const greenIcon = L.icon({
      iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
      iconSize: [38, 38],
      iconAnchor: [20, 34],
      popupAnchor: [-3, -76],
    });

    this.marker = L.marker([ this.pointingX,this.pointingY],{ icon: greenIcon }).addTo(this.map);

    const directionsLatLng = this.coordination.map(coord => L.latLng(coord[0], coord[1]));
    
    // Create a polygon object from the array of directions
    const polyline = L.polyline(directionsLatLng, {
      color: '#E74C33',
      fillColor: '#f03',
      fillOpacity: 0.5
    });
    
    // Add the polygon to the map
    polyline.addTo(this.map);
  }


  protected onClick(): void{
    this.isOn = true;
    console.log("start")
    this.coordination.forEach((data, index) => {
      setTimeout(() => {
        this.map.setView([data[0], data[1]]);
        this.marker.setLatLng([data[0], data[1]]);
        console.log(index)
        this.isOn = index == 399 ? false : true;
      }, index * 50);
    });
    console.log("finish")
  }
  
}
