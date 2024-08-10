import React from 'react';
import {serviceUsers} from "@/services/services.api";
import Link from "next/link";

const Page = async () => {
    const allUsers = await serviceUsers.getAllUsers();

    return (
        <div>
            <h3>User Page</h3>
            {allUsers.map(user => (
                    <div key={user.id}>
                        <div>{user.name}</div>
                        <Link href={'/users/' + user.id}>Info User</Link>
                    </div>
                )
            )}
        </div>
    );
};

export default Page;