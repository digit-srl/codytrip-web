import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-valdinoto-video',
  templateUrl: './valdinoto-video.component.html',
  styleUrls: ['./valdinoto-video.component.css']
})
export class ValdinotoVideoComponent {
  @ViewChild('iframeContainer')
  container: ElementRef;

  id: string;
  url: any;
  error = false;

  iWidth: number = window.innerWidth > 1000 ? 1000 : window.innerWidth;
  iHeight: number = window.innerWidth > 1000 ? 500 : window.innerWidth * 0.5;

  links = {
    '06': 'Pb0wOBdTA0U', '10': 'Pb0wOBdTA0U', '12': 'Pb0wOBdTA0U', '15': 'Pb0wOBdTA0U', '16': 'Pb0wOBdTA0U',
    '19': 'Pb0wOBdTA0U', '23': 'Pb0wOBdTA0U', '26': 'Pb0wOBdTA0U', '29': 'Pb0wOBdTA0U', '30': 'Pb0wOBdTA0U',
    '33': 'Pb0wOBdTA0U', '38': 'Pb0wOBdTA0U', '40': 'Pb0wOBdTA0U', '44': 'Pb0wOBdTA0U', '45': 'Pb0wOBdTA0U',
    '46': 'Pb0wOBdTA0U', '48': 'Pb0wOBdTA0U', '50': 'Pb0wOBdTA0U', '54': 'Pb0wOBdTA0U', '55': 'Pb0wOBdTA0U',
    '57': 'Pb0wOBdTA0U', '62': 'Pb0wOBdTA0U'
  };

  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sanitazer: DomSanitizer) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.error = false;
      this.id = params['id'];

      const baseUrl = "https://www.youtube-nocookie.com/embed/";
      var link = this.links[this.id];
      if(link === null || link === undefined) {
        this.error = true;
      }

      this.url = this.sanitazer.bypassSecurityTrustResourceUrl(baseUrl + link)
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  async navigate(link: string): Promise<void> {
    await this.router.navigate(['/' + link]);
  }

  async navigateExternal(link: string): Promise<void> {
    window.open(link, '_blank');
  }
}
