"use client"
import * as React from 'react';
import {CSSProperties} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import {toast} from "sonner";
import {saveRefreshTokenToLocalStorage, saveTokenToLocalStorage} from "@/utils/jwt";

type Props = {

};
export default function _LoginForm(props: Props) {
    const Router = useRouter()
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/auth/login', formData , {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            toast.success("Welcome back")
            const token = response.data
            saveTokenToLocalStorage(token.access_token)
            saveRefreshTokenToLocalStorage(token.refresh_token)
            console.log('Response:', response.data)
            Router.push("/")
        }catch (e: any){
            toast.error(e.response.data.error.message)
            console.error('Error:', e)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom: '10px'}}>
                <div style={{marginBottom: '5px'}}>Email</div>
                <div>
                    <input
                        placeholder="e.g johndoe@gmail.com"
                        type="email"
                        style={styles.input as CSSProperties}
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
            </div>
            <div style={{marginBottom: '15px'}}>
                <div style={{marginBottom: '5px'}}>Password</div>
                <div>
                    <input
                        placeholder="**************"
                        type="password"
                        style={styles.input as CSSProperties}
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
            </div>
            <div>
                <button type="submit" className="hover:bg-blue-600 hover:text-white transition duration-300 text-slate-400 bg-slate-200 " style={styles.submitButton}>
                    Masuk
                </button>
            </div>
        </form>
    );
};

interface Styles {
    input: CSSProperties,
    submitButton: CSSProperties,
    background: CSSProperties,
    model: CSSProperties,
    container: CSSProperties
}

const styles: Styles = {
    background: {
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#ffe6a2',
        display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column',
        gap: '20px', overflow: 'auto'
    },
    model: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        height: '100%'
    },
    container: {
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 5px 5px #0000001c',
        marginBottom: '100px'
    },
    input: {
        border: '1px solid gainsboro',
        padding: '10px',
        width: '100%',
        borderRadius: '8px',
        background: 'white'
    },
    submitButton: {
        padding: '10px',
        width: '100%',
        borderRadius: '5px',
        fontWeight: 'bold',
        border: '1px solid gainsboro',
    }
}
