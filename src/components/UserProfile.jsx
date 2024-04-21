'use client'

import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';

export default function UserProfile() {
    const { data: session } = useSession();

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='bg-blue-200 p-10'>
                <h2 className='text-xl text-center font-bold'>Account Details</h2>
                <div className='py-6'>
                    <div>
                        <ul>
                            <li>Name: {session?.user?.name}</li>
                            <li>Email: {session?.user?.email}</li>
                            <li><button onClick={() => signOut()}>Log Out</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
