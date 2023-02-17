import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
  constructor(private router: Router){}

  async navigate(link: string): Promise<void> {
    await this.router.navigate(['/' + link]);
  }

  async navigateExternal(link: string): Promise<void> {
    window.open(link, '_blank');
  }
}
