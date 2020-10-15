import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListData } from './services/listdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  result = [];
  constructor(private listService: ListData) { }

  ngOnInit(){
  }


  storeValue(ngform: NgForm){
    // console.log(form);
    const key = ngform.form.value.key;
    const value = ngform.form.value.value;

    this.listService.setKeyValue(key, value).subscribe(
      (response) => {
        console.log(response);
      }
      );
  }

  getValue() {
    this.listService.getKeyValue().subscribe(
        (response) => {
          console.log(response);
          this.result = response;
        }
      );
    }

}
