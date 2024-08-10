import React from 'react';
import {servicePosts} from "@/services/services.api";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

const Page = async ({params: {userID}}: Params) => {
    let postByUserID = await servicePosts.postsByUserID(userID);

    return (
        <div>
            {
                postByUserID.map(post=>
                    <div key={post.id}>{post.title}</div>
                )
            }
        </div>
    );
};

export default Page;