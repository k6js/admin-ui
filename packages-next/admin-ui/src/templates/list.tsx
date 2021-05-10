export const listTemplate = (listKey: string) =>
  `import { getListPage } from '@k6js-next/admin-ui/pages/ListPage';

export default getListPage(${JSON.stringify({ listKey })});
`;
