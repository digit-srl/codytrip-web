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

  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sanitazer: DomSanitizer) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.error = false;
      this.id = params['id'];

      const baseUrl = "https://www.youtube-nocookie.com/embed/";
      var link = "";
      switch (this.id) {
        case "01":
          link = "Pb0wOBdTA0U";
          break;
        case "02":
          link = "4v84ABX7tiY?start=1514";
          break;
        default:
          this.error = true;
          break;
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
