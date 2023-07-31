import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreditService } from 'src/app/credits/services/creditos.service';
import { Subject, Subscription, debounceTime } from 'rxjs';

var auth_token="";
@Component({
  selector: 'shared-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  public interes: number[] = [0.85, 1, 1.25, 2, 2.4];

  constructor(  public countryService: CreditService ) { }

  ngOnInit(): void {
  }

  @Output()
  public onDebounce = new EventEmitter<string>();

  creditoForm = new FormGroup({
    nombre: new FormControl(''),
    monto: new FormControl(''),
    plazoMeses: new FormControl(''),
    interesEA: new FormControl(''),
    cuotaMensual: new FormControl(''),
  });

  /* getToken(form:any): any {
    return this.countryService.getToken().subscribe(
      (data: any) => {
        console.log("valro data" , form);
        auth_token=data.acces_token;
        console.log("valro data2" , auth_token);
        this.saveCredit(form, auth_token);
      }
      );
  } */
  saveCredit(form:any){
    this.countryService.getToken().subscribe(
      (data: any) => {
        auth_token=data.acces_token;
        console.log("valro data2" , auth_token);
      }
      );
    this.countryService.saveCredit(form,auth_token).subscribe(
      (data2: any) => {
        console.log("algo",data2);
  });
  }
  onSubmit() {
    console.warn(this.creditoForm.value);
    this.saveCredit(this.creditoForm.value);

  }

  monto = "";
  plazomeses = "";
  inter = "";
  llamar(interes: any){
    console.log("algo",this.monto + " " + this.plazomeses + " " + this.inter);
    if(this.inter != null){
    this.countryService.calcular(this.monto, this.plazomeses, this.inter).subscribe(
      (data: any) => {
        console.log("algo",data);
    });
  }
  }
}
