import React from 'react';

// export { HomePage as default } from '@keystone-next/admin-ui/pages/HomePage';
import { HomePage } from '@keystone-next/admin-ui/pages/HomePage';
import { ThemeProvider } from '@keystone-ui/core';
import { useKeystone } from '@keystone-next/admin-ui/context';


const Page = (props) => {
    const { adminConfig } = useKeystone();
    console.log(adminConfig.theme);
    return (
        // @ts-ignore
        <ThemeProvider theme={adminConfig?.theme}>
            <HomePage {...props} />
        </ThemeProvider>
    );
}

// export default Page;
export default HomePage;
