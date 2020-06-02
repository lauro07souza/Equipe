import { Component } from '@angular/core';
import { sistema } from 'environments/environment';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public version: string = sistema.version;
  public nomeMinisterio: string = sistema.nomeMinisterio;
  /**
   * Constructor
   */
  constructor() {}
}
