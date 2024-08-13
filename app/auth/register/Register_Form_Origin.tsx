"use client"
import * as React from 'react';
import {CSSProperties} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

type Props = {

};
export default function _RegisterFormOrigin(props: Props) {
    const Router = useRouter();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password:''
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
            const response = await axios.post('http://127.0.0.1:5000/auth/register', formData , {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            toast.success(response.data.message)
            console.log('Response:', response.data)
            Router.push("/auth/login")
        }catch (e){
            toast.error(e.response.data.error.message)
            console.error('Error:', e)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div style={{marginBottom: '10px'}}>
                        <div style={{marginBottom: '5px'}}>Name</div>
                        <div>
                            <input
                                placeholder="e.g John Doe"
                                type="text"
                                style={styles.input}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <div style={{marginBottom: '5px'}}>Email</div>
                        <div>
                            <input
                                placeholder="e.g johndoe@gmail.com"
                                type="email"
                                style={styles.input}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div style={{marginBottom: '15px'}}>
                        <div style={{marginBottom: '5px'}}>Password</div>
                        <div>
                            <input
                                placeholder="**************"
                                type="password"
                                style={styles.input}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="hover:bg-blue-600 hover:text-white transition duration-300 text-slate-400 bg-slate-200" style={styles.submitButton}>Daftar
                </button>

            </form>
        </div>
    );
};

const styles: { [key: String]: CSSProperties } = {
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
