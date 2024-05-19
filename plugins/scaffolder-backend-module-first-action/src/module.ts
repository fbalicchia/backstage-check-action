import { createBackendModule } from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import { createAcmeExampleAction } from './actions';

export const acmeModule = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'firstaction',
  register({ registerInit }) {
    registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
      },
      async init({ scaffolder }) {
        scaffolder.addActions(createAcmeExampleAction());
      },
    });
  },
});
