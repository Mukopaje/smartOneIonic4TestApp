import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  printInit() {
    (<any> window).smartOnePrinter.printerInit(
      (res) => {
        console.log('Print Text Back');
        console.log(res);

      },
      (error) => {
        console.log('Error while fetching fetching data');
        console.log(error);

      }

    );
  }

}
