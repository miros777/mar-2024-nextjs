import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {servicePosts, serviceUsers} from "@/services/services.api";
import Link from "next/link";
import PostsComponentByUserId from "@/components/PostsComponentByUserID";

const Page = async ({params: {id}}: Params) => {
    let user = await serviceUsers.getOneUser(id);

    return (
        <div>
           <h3> Single Page User <i>{id}</i></h3>
            <div>ID: {user.id}</div>
            <div>NAME: {user.name}</div>
            <div>EMAIL: {user.email}</div>
            {/*<button onClick={() => servicePosts.postsByUserID(user.id)}>Show Posts</button>*/}
            {/*<button onClick={() => <PostsComponentByUserId/>}>Show Posts</button>*/}
            <Link href={+ id + '/posts'}>All posts</Link>
        </div>
    );
};

export default Page;