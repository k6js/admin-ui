export const itemTemplate = (listKey: string) =>
  `import { getItemPage } from '@k6js-next/admin-ui/pages/ItemPage';

export default getItemPage(${JSON.stringify({ listKey })})
`;
