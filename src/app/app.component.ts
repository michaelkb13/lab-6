import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';	
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myWeather:any[]=[];
  constructor(private service: DataService){
  }
  ngOnInit(): void{
    this.service.GetWeatherData().subscribe(    
      (data)=>{
        this.myWeather = 
        this.location = data.name;
        return this.http.'http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303';
      }
    );
    this.service.getWeatherData;
    }
}
//student or students
