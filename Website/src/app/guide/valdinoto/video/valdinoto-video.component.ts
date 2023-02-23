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
    '10': 'IsoSt0ojvT0', '12': '6Up9dPwrTag', '15': 'nrEE5BaGLe0', '16': 'tqKvIKL16lU', '19': 'J7RiJSnvi_E',
    '23': '-i3kknRXc5o', '26': 'ccbLZh2nrwE', '29': '897hSodGr0g', '30': '_iqoqS2WDWY', '33': 'Qh5qT0YCly4',
    '38': 'hVbI38a_0Oo', '40': 'ugxfa2QblGU', '44': 'fQsVcJQ4aqk', '46': 'e23kcbivH8g', '48': 'GWGPamoeEXg',
    '50': 'CFamJ4Zyny0', '54': 'UKVtelxw1XE', '55': '1n2jC5YH9fM', '57': 'alPR6XJD4j8', '62': 'n5mANzI-be0'
  };

  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sanitazer: DomSanitizer) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.error = false;
      this.id = params['id'];

      if(this.id === "06")
        this.navigateExternal('https://codemooc.org/codytrip-2022-modica/');
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
