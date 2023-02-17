import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {appRoutingModule} from './app.routing';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {JoinstringsPipe} from 'src/app/_helpers/joinstringsPipe';

import {LogoutDialogComponent, NavComponent} from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HttpMockRequestInterceptor} from './_helpers/HttpMockRequestInterceptor';

import {environment} from '../environments/environment';
import {TokenInterceptorService} from './_helpers/httpInterceptor';
import {ProgressSpinnerComponent} from './_progressSpinner/progress-spinner.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {AppOverlayModule} from './_overlay/overlay.module';
import {CookieService} from 'ngx-cookie-service';
import {PageNotFoundComponent} from './pageNotFound/page-not-found.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {GoogleMapsModule} from '@angular/google-maps';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {CarouselModule} from "primeng/carousel";
import {GuideComponent} from "./guide";
import {ValdinotoComponent} from "./guide/valdinoto/valdinoto.component";
import {ValdinotoVideoComponent} from "./guide/valdinoto/video/valdinoto-video.component";

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json?cb=' + environment.i18n);

export function translateFactory(translate: TranslateService): any {
    return async () => {
        translate.setDefaultLang('en');
        translate.use('en');
        return new Promise<void>(resolve => {
            translate.onLangChange.subscribe(() => {
                resolve();
            });
        });
    };
}

export const isMock = environment.mock;

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavComponent,
        ProgressSpinnerComponent,
        PageNotFoundComponent,
        LogoutDialogComponent,
        JoinstringsPipe,
        GuideComponent,
        ValdinotoComponent,
        ValdinotoVideoComponent
    ],
    exports: [
        MatStepperModule,
    ],
    imports: [
        appRoutingModule,
        RouterModule.forRoot([
            {path: '', component: GuideComponent, pathMatch: 'full'}
        ]),
        TranslateModule.forRoot({
            defaultLanguage: 'it',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatMenuModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatCardModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatStepperModule,
        MatTooltipModule,
        MatDialogModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        FormsModule,
        GoogleMapsModule,
        OverlayModule,
        AppOverlayModule,
        MatButtonModule,
        TranslateModule,
        MatGridListModule,
        MatGridListModule,
        GoogleMapsModule,
        FlexLayoutModule,
        FlexModule,
        MatButtonModule,
        BreadcrumbModule,
        MatDividerModule,
        CommonModule,
        MatSidenavModule,
        MatListModule,
        NgxChartsModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        PdfViewerModule,
        CarouselModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: translateFactory,
            deps: [TranslateService],
            multi: true
        },
        isMock
            ? [{
                provide: HTTP_INTERCEPTORS,
                useClass: HttpMockRequestInterceptor,
                multi: true
            },
                CookieService
            ]
            : [{
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptorService,
                multi: true
            },
                CookieService
            ]
    ],
    entryComponents: [ProgressSpinnerComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
