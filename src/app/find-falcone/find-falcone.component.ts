import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from './../store';
import { Planet } from '../models/planet.model';
import { Vehicle } from '../models/vehicle.model';
import { FalconeFoundService } from '../services/falcone-found.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.scss']
})
export class FindFalconeComponent implements OnInit {
  planets$ : Observable<Planet[]>;
  planetsLoading$ : Observable<boolean>;

  vehicles$ : Observable<Vehicle[]>;
  vehiclesLoading$ : Observable<boolean>;

  falconeFoundTime$ : Observable<number>;
  falconeFoundToken$ : Observable<number>;
  isAllDestinationsSelected$ : Observable<boolean>;
  
  destinations : {} = {
    ['Destination 1'] : {planet:null,vehicle:null}, 
    ['Destination 2'] : {planet:null,vehicle:null}, 
    ['Destination 3'] : {planet:null,vehicle:null},
    ['Destination 4'] : {planet:null,vehicle:null}
  };

  constructor(
    private store:Store<fromStore.FindFalconeState>, 
    private falconeFoundService:FalconeFoundService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.PlanetsLoading(null));
    this.planets$ = this.store.select(fromStore.getAllPlanets);
    this.planetsLoading$ = this.store.select(fromStore.getPlanetsLoading);

    this.store.dispatch(new fromStore.VehiclesLoading(null));
    this.vehicles$ = this.store.select(fromStore.getAllVehicles);
    this.vehiclesLoading$ = this.store.select(fromStore.getVehiclesLoading);
    
    var destination = JSON.parse(JSON.stringify(this.destinations));
    this.store.dispatch(new fromStore.FalconeFoundSet(destination));
    this.store.dispatch(new fromStore.FalconeFoundSetToken(null));
    this.falconeFoundTime$ = this.store.select(fromStore.getFalconeFoundTime);
    this.falconeFoundToken$ = this.store.select(fromStore.getFalconeFoundToken);
    this.isAllDestinationsSelected$ = this.store.select(fromStore.isAllDestinationsSelected);
  }
  getKeys(obj){
    return Object.keys(obj);
  }
  selectPlanet(data){
    let index = data.index.target.value;
    this.destinations[data.destination].planet = data.planets[index];
    this.store.dispatch(new fromStore.PlanetsSet({destination : data.destination,index: index}));
    this.selectVehicle({destination :data.destination,event: -1})
  }

  selectVehicle(data){
    if(!(data.event < 0)){
      this.destinations[data.destination].vehicle = data.vehicle;
    }else{
      this.destinations[data.destination].vehicle = null;
    }
    this.store.dispatch(
      new fromStore.VehiclesSet(
        { 
          destination : data.destination,
          index: data.event,
          planet: this.destinations[data.destination].planet
        }
      )
    );
    var destination = JSON.parse(JSON.stringify(this.destinations));
    this.store.dispatch(new fromStore.FalconeFoundSet(destination));
  }

  showStatus(token){
    var statusRequest = {token : token,planet_names : [],vehicle_names : []};
    JSON.stringify(this.destinations,function replacer(key,value){
        if(key == 'planet'){
            statusRequest.planet_names.push(value.name)
        }
        if(key == 'vehicle'){
            statusRequest.vehicle_names.push(value.name)
        }
        return value;
    })
    var self = this;
    this.store.dispatch(new fromStore.FalconeFoundGetStatus({
      req : statusRequest, 
      res : function(status){
        if(status.status == "success"){
          self.falconeFoundService.success = "_success@987"
          self.router.navigate(['find-falcone/success'])
        }else{
          self.falconeFoundService.failure = "_failure@987";
          self.router.navigate(['find-falcone/failure']);
        }
      }
    }));
  }
}
