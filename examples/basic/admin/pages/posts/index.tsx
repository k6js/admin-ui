import React from 'react';

import { ThemeProvider } from '@keystone-ui/core';
import { useKeystone } from '@k6js-next/admin-ui/context';

import { getListPage } from '@keystone-next/admin-ui/pages/ListPage';


const Page = (props) => {
    const { adminConfig } = useKeystone();
    console.log(adminConfig.theme);
    const Comp = getListPage({ listKey: 'Post' });
    return (
        // @ts-ignore
        <ThemeProvider theme={adminConfig?.theme}>
            <Comp {...props} />
        </ThemeProvider>
    );
}

export default Page;
