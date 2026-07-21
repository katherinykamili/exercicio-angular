import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Encaminha erros globais do navegador para o tratamento de erros do Angular.
    provideBrowserGlobalErrorListeners(),
    // Registra as rotas e define como a rolagem se comporta durante a navegação.
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    )
  ]
};
