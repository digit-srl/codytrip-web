import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-valdinoto',
  templateUrl: './valdinoto.component.html',
  styleUrls: ['./valdinoto.component.css']
})
export class ValdinotoComponent {
  constructor(private router: Router){}

  async navigate(link: string): Promise<void> {
    await this.router.navigate(['/' + link]);
  }

  async navigateExternal(link: string): Promise<void> {
    window.open(link, '_blank');
  }
}
