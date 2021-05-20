import React from 'react';

import { ThemeProvider } from '@keystone-ui/core';
import { useKeystone } from '@keystone-next/admin-ui/context';

import { getItemPage } from '@keystone-next/admin-ui/pages/ItemPage';


// const Page = (props) => {
//     const { adminConfig } = useKeystone();
//     console.log(adminConfig.theme);
//     const Comp = getItemPage({ listKey: 'Post' });
//     return (
//         // @ts-ignore
//         <ThemeProvider theme={adminConfig?.theme}>
//             <Comp {...props} />
//         </ThemeProvider>
//     );
// }

// export default Page;

export default getItemPage({ listKey: 'Post' });