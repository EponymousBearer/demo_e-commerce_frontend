'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleUser = async (e) => {
        e.preventDefault();

        if (!email || !password || !firstname || !lastname) {
            setError("All Fields are required");
            return;
        }
        
        try {
            const res = await fetch('/api/userExists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })

            const { user } = await res.json();

            if (user) {
                setError("User already exists")
                return;
            }

            const response = await fetch('/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, firstname, lastname })
            })
            
            if (response.ok) {
                const form = e.target;
                form.reset();
                router.push('/');
            } else {
                console.log("user registration failed")
            }
            
        } catch (error) {
            console.log('Error during registration: ', error);
        }
    }

    return (
        <div className='flex flex-col h-screen w-full justify-center items-center'>
            <div className='bg-blue-200 p-6 space-y-4'>
                <div className='my-2 text-center font-semibold text-xl'>Register</div>
                <form onSubmit={handleUser} className="flex flex-col gap-3">
                    <div>First Name</div>
                    <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" name="firstname" />
                    <div>Last Name</div>
                    <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" />
                    <div>Email</div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
                    <div>Password</div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
                    <div>
                        <button className='p-2 bg-blue-300'>
                            Submit
                        </button>
                        {error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )}
                        <Link className="text-sm mt-3 text-right" href={"/"}>
                            Already have an account? <span className="underline">Login</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}