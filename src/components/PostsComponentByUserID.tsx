import React from 'react';
import {servicePosts} from "@/services/services.api";

const PostsComponentByUserId = async ({params: id}) => {
    const posts = await servicePosts.postsByUserID(id);

    return (
        <div>
            <h3>Posts Component By User ID</h3>
            {posts.map(post=>
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    {post.body}
                </div>
            )}
        </div>
    );
};

export default PostsComponentByUserId;