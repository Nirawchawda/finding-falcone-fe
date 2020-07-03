import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})

export class DestinationComponent implements OnInit {

  @Input('name')  name: string;
  @Input('planets') planets$ : Observable<Planet[]>;
  @Input('vehicles') vehicles$ : Observable<Vehicle[]>;
  @Input() form: FormGroup;
  @Output() onSelectPlanet = new EventEmitter<any>();
  @Output() onSelectVehicle = new EventEmitter<any>();
  
  showVehicles: boolean = false;
  planet : any;
  constructor() { }
  
  ngOnInit(): void { }

  selectPlanet(e,n,p){
    // console.log('See all Planets' ,p)
    this.onSelectPlanet.emit({index : e,destination : n,planets:p});
    this.showVehicles = true;
  }

  selectVehicle(e,n,v){
    // console.log(this.form);
    this.onSelectVehicle.emit({event : e,destination : n,vehicle:v});
  }
}