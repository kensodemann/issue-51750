import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonInput, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  log: string = '';

  constructor() {}

  ngOnInit() {
    window.addEventListener('keydown', (evt: any) => (this.log += ` ${evt.code}`));
  }
}
