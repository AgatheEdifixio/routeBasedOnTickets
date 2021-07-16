
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routeBasedOnTickets';


  // replace your array of tickets in the const "tickets"
  callroute() {
  const tickets = [["BER", "PAR"], ["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["PHL", "BST"], ["UAE", "JPN"], ["PHL", "PAR"], ["BST", "BER"], ["BEL", "USA"]]; 
  this.getRoute(tickets)
  }


  getRoute(ticketsList: any[]) {
    const elements = ticketsList;
    console.log("The inital array of tickets is : ", elements);
    const copieElement = elements;
    const finalTab: any[] = [];


    for (const e of elements) {
      const elemnt = copieElement.find(el => el[1] === e[0]);

      if (elemnt === undefined) {
        if (!finalTab.includes(e)) {
          finalTab.push(e);
        }
      }
    }

    for (const f of finalTab) {
      const lastItem = finalTab[finalTab.length - 1];

      const elem = elements.find(el => el[0] === lastItem[1]);
      if (elem != undefined) {
        if (elem[0] === f[1]) {
          if (!finalTab.includes(elem)) {
            finalTab.push(elem)
          }
        }
      }
    }
  
    const newTab: any[] = [];

    let result = finalTab.map(a => [
      a[0],
      newTab.push(a[0]),
      a[1],
      newTab.push(a[1]),

    ]);
    let unique = [...new Set(newTab)];
    let finalResult = unique.join()
   
    console.log("The original route of the trip is : ", finalResult);
  }
}


