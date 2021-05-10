import type { KeystoneConfig } from '@keystone-next/types';

export const noAccessTemplate = (session: KeystoneConfig['session']) =>
  `import { getNoAccessPage } from '@k6js-next/admin-ui/pages/NoAccessPage';

export default getNoAccessPage(${JSON.stringify({ sessionsEnabled: !!session })})
`;
