import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

const Page = ({params: {id}}:Params) => {
    return (
        <div>
            Single Page User {id}
        </div>
    );
};

export default Page;