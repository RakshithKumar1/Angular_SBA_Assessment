import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  toDo(msg: string){
    console.log(msg);
  }
}
