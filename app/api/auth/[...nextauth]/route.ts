import NextAuth from "next-auth"
//
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import TwitchProvider from "next-auth/providers/twitch"
import AppleProvider from "next-auth/providers/apple"
import TwitterProvider from "next-auth/providers/twitter"
import DiscordProvider from "next-auth/providers/discord"
import RedditProvider from "next-auth/providers/reddit"
import SpotifyProvider from "next-auth/providers/spotify"
import LinkedinProvider from "next-auth/providers/linkedin"
import PinterestProvider from "next-auth/providers/pinterest"
//
export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        // FacebookProvider({
        //     clientId: "",
        //     clientSecret: ""
        // }),
        TwitchProvider({
            clientId: process.env.TWITCH_ID as string,
            clientSecret: process.env.TWITCH_SECRET as string,
        }),
        // AppleProvider({
        //     clientId: "",
        //     clientSecret: ""
        // }),
        TwitterProvider({
            clientId: process.env.REDDIT_ID as string,
            clientSecret: process.env.REDDIT_SECRET as string,
            version: "2.0"
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_ID as string,
            clientSecret: process.env.DISCORD_SECRET as string,
        }),
        RedditProvider({
            clientId: process.env.REDDIT_ID as string,
            clientSecret: process.env.REDDIT_SECRET as string,
        }),
        // SpotifyProvider({
        //     clientId: "",
        //     clientSecret: ""
        // }),
        // LinkedinProvider({
        //     clientId: "",
        //     clientSecret: ""
        // }),
        // PinterestProvider({
        //     clientId: "",
        //     clientSecret: ""
        // })
    ],
}
//
const handler = NextAuth(authOptions);
//
export { handler as GET, handler as POST }