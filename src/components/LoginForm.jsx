"use client"
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter()

    const handleuser = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn('credentials', {
                email, password, redirect: false,
            })

            if (res?.error) {
                setError("Invalid Credentials")
                return;
            }
            router.replace('dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col h-screen w-full justify-center items-center '>
            <div className=' bg-blue-200 p-6 space-y-4'>
                <div className='my-2 text-center font-semibold text-xl'>Login</div>
                <form onSubmit={handleuser}>
                    <div>Email</div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
                    <div>Password</div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
                    <div>
                        <button className='p-2 bg-blue-300'>Submit</button>
                        <Link href={"forgotPassword"}><div>Forgot Password</div></Link>
                        {error && (
                            <div className='text-red-500'>
                                {error}
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
