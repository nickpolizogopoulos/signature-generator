import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch( error => console.error(error) );
