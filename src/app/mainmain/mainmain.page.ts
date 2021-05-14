import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-mainmain',
  templateUrl: './mainmain.page.html',
  styleUrls: ['./mainmain.page.scss'],
})
export class MainmainPage implements OnInit {

  constructor(private clipboard: Clipboard) { }

  ngOnInit() {
  }

  Clipboard(){
    this.clipboard.copy('Hello world');

this.clipboard.paste().then(
   (resolve: string) => {
      alert(resolve);
    },
    (reject: string) => {
      alert('Error: ' + reject);
    }
  );

this.clipboard.clear();

  }

}
