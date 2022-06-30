import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[] = this.flightsService.getFlights();

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
  }

  getFlights(){

  }

}
