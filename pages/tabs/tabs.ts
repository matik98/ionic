import { Component } from '@angular/core';

import { HomePage } from '../home/home';

const EventSource: any = window['EventSource'];

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homePage = {
    page: HomePage,
    title: "Home"
  }

  pages: Object = [
    {
      page: HomePage,
      title: "Home"
    }
  ]

  constructor() {
     var es = new EventSource("http://localhost:5555/stream");

    es.addEventListener("message", function(event) {
        console.log(event.data);
    });
  }
}
