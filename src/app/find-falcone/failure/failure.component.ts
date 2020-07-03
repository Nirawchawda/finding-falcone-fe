import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from './../../store';
import { FalconeFoundService } from 'src/app/services/falcone-found.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.scss']
})
export class FailureComponent implements OnInit {

  planetFound$ : Observable<any>;
  falconeFoundTime$ : Observable<number>;
  
  constructor(
    private store:Store<fromStore.FindFalconeState>, 
    private falconeFoundService:FalconeFoundService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.falconeFoundService.failure == "_failure@987"){
      this.planetFound$ = this.store.select(fromStore.getFalconeFoundPlanet);
      this.falconeFoundTime$ = this.store.select(fromStore.getFalconeFoundTime);  
    }else{
      this.goBack();
    }
  }
  goBack(){
    this.router.navigate(['find-falcone']);
  }
}
