import { Component, OnInit } from '@angular/core';
import { CreditService } from '../../../credits/services/creditos.service';
import { delay } from 'rxjs';

var auth_token="";
@Component({
  selector: 'shared-visualize-page',
  templateUrl: './visualize-page.component.html',
  styleUrls: ['./visualize-page.component.css']
})
export class VisualizePageComponent implements OnInit {

  constructor( public countryService: CreditService ) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken(): any {
    console.log("aca esta esto1");
    return this.countryService.getToken().subscribe(
      (data: any) => {
        console.log(data.acces_token);
        auth_token=data.acces_token;
        this.getCredits(auth_token);
      }
      );
  }


   getCredits(auth_token:any): any {
    console.log("aca esta esto2" , auth_token);
    return this.countryService.getCredits(auth_token).subscribe(
      (data: any) => {
        console.log(data);
      }
      );
  }

}
