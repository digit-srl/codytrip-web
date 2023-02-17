// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mock: false,
  baseUrl: 'https://dev.wom.social/api/',
  baseBillingUrl: 'https://localhost:7284/billing',
  v1: 'v1/',
  v2: 'v2/',
  i18n: '1.1.0',
  noreplyEmail: 'noreply@wom.social',
  baseEmail: 'info@digit.srl',
  sendInBlueApiKey: '#SENDINBLUEAPI#'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
