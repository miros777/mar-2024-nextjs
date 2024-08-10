import React from 'react';
import PostsComponentByUserID from "@/components/PostsComponentByUserID";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

const Page = async ({params: {id}}: Params) => {
    console.log(id);

    return (
        <div>
            <h2>Posts By User ID</h2>
            <PostsComponentByUserID params={id}/>
        </div>
    );
};

export default Page;