import React from 'react';
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>Home page</Link></li>
                <li><Link href={'/users'}>Users page</Link></li>
                <li><Link href={'/posts'}>Posts page</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;