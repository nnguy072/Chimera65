import { Component, OnInit } from '@angular/core';

import 'bootstrap';

@Component({
  selector: 'app-root',
  template: "<router-outlet></router-outlet>"
})
export class AppComponent implements OnInit {
  title = 'Chimera65';

  ngOnInit() {}
}
