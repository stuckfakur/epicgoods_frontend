"use client"
import * as React from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import axios from "axios";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {getUserFromLocalStorage} from "@/utils/jwt";
import {toast} from "sonner";

interface User {
    sub: {
        name: string
    }
}
export default function _HeaderButtonProfile() {
    const [user, setUser] = React.useState<User | null>(null)
    const Router = useRouter()
    const handleLogout = () => {
        const host = 'http://127.0.0.1:5000'
        axios.post(`${host}/auth/logout`, {
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(() => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.removeItem('refresh_token')
                toast.success("Youre been logout successfully")
                Router.push('/auth/login')
            })
            .catch((err) => {
                console.log(err)
                toast.error("Something wrong")
            })

    }

    useEffect(() => {
        const storedUser = getUserFromLocalStorage()
        setUser(storedUser)
    }, [])

    useEffect(() => {
        const host = process.env.NEXT_PUBLIC_API_HOST
        const refreshToken = async () => {
            try {
                const res = await axios.post(`${host}/auth/refresh`, {}, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('refresh_token')}`
                    }
                });
            } catch (error: any) {
                console.error('Error refreshing access token:', error);
                if (error.response.status === 422) {
                    Router.push('/auth/login')
                    toast.error("Session expired!")
                }
            }
        };

        refreshToken();
    }, []);
    return (
        <>
            <div>
                <a href="/seller">
                    <button className="login text-sm whitespace-nowrap">My Store</button>
                </a>
            </div>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="whitespace-nowrap">{user && user ? user.sub.name : 'John Doe'}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem></MenubarItem>
                        <MenubarItem>My Account</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Orders</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Settings</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={handleLogout}>Logout</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

        </>
    );
};