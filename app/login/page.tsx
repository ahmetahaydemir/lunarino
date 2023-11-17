'use client'

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter, FaTwitch, FaReddit, FaDiscord } from "react-icons/fa";
import { signIn } from "next-auth/react"

export default function Login() {
    console.log("Page Route : Login");

    return <div className="w-full flex flex-col gap-6 pt-12 items-center justify-center text-1xl">
        <h2 className="text-2xl text-white">OAuth Login Page</h2>

        <button className="bg-white text-black w-64 h-16 flex flex-row items-center justify-evenly text-lg drop-shadow-lg rounded-lg"
            onClick={() => signIn('google', { callbackUrl: '/user' })}>
            <FcGoogle size={32} ></FcGoogle>
            Sign in with Google
        </button>
        <button className="bg-orange-500 text-white w-64 h-16 flex flex-row items-center justify-evenly text-lg drop-shadow-lg rounded-lg"
            onClick={() => signIn('reddit', { callbackUrl: '/user' })}>
            <FaReddit size={32} color={'white'}></FaReddit>
            Sign in with Reddit
        </button>
        <button className="bg-violet-600 text-white w-64 h-16 flex flex-row items-center justify-evenly text-lg drop-shadow-lg rounded-lg"
            onClick={() => signIn('twitch', { callbackUrl: '/user' })}>
            <FaTwitch size={32} ></FaTwitch>
            Sign in with Twitch
        </button>
        <button className="bg-indigo-500 text-white w-64 h-16 flex flex-row items-center justify-evenly text-lg drop-shadow-lg rounded-lg"
            onClick={() => signIn('discord', { callbackUrl: '/user' })}>
            <FaDiscord size={32} ></FaDiscord>
            Sign in with Discord
        </button>
        <button className="bg-zinc-800 text-white  w-64 h-16 flex flex-row items-center justify-evenly text-lg drop-shadow-lg rounded-lg"
            onClick={() => signIn('github', { callbackUrl: '/user' })}>
            <FaGithub size={32} ></FaGithub>
            Sign in with Github
        </button>
        <button className="bg-blue-400 text-white w-64 h-16 flex flex-row items-center justify-evenly text-lg drop-shadow-lg rounded-lg"
            onClick={() => signIn('twitter', { callbackUrl: '/user' })}>
            <FaTwitter size={32} ></FaTwitter>
            Sign in with Twitter
        </button>
    </div>
}