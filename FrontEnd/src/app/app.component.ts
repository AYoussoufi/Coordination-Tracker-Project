import { Component,OnInit, OnChanges } from '@angular/core';
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
  

  constructor(private httprequestService:HttprequestService) { }

  ngOnInit(): void {
    this.httprequestService.sendPostRequest("coordination","").subscribe(
      data=>{
      this.coordination = data;
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
      zoom: 18
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 13,
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

    L.marker([ this.coordination[399][0],this.coordination[399][1]],{ icon: greenIcon }).addTo(this.map).bindPopup(this.coordination[399][0]+" "+this.coordination[399][1]).openPopup();
    L.marker([ this.coordination[0][0],this.coordination[0][1]],{ icon: greenIcon }).addTo(this.map).bindPopup(this.coordination[0][0]+" "+this.coordination[0][1]).openPopup();

    //Its possible to add a api to use this coordination to show up better info but its better to keep it safer maybe the api wont work the time you try to communicate with the api 

    const directionsLatLng = this.coordination.map(coord => L.latLng(coord[0], coord[1]));
    
    const polyline = L.polyline(directionsLatLng, {
      color: '#E74C33',
      fillColor: '#f03',
      fillOpacity: 0.5
    });
    
    polyline.addTo(this.map);
    const bounds = L.latLngBounds([[this.coordination[0][0],this.coordination[0][1]], [this.coordination[399][0],this.coordination[399][1]]]);
    this.map.fitBounds(bounds);
  }


  protected onClick(): void{
    this.isOn = !this.isOn;
    console.log("start")
    this.coordination.forEach((data, index) => {
      setTimeout(() => {
        this.map.setView([data[0], data[1]]);
        this.marker.setLatLng([data[0], data[1]]);
        console.log(index)
        this.isOn = index == this.coordination.length-1 ? !this.isOn : true;
        console.log(this.isOn)
      }, index * 50);
    });
    console.log("finish")
  }
  
}
