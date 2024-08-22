// @flow
import * as React from 'react';
import './style.css';
import _LoginForm from "@/app/auth/login/Login_Form";
import {CSSProperties} from "react";

type Props = {};
export default function Page(props: Props) {
    return (
            <div style={styles.body} >
                <div style={styles.model} >
                    <img src="/momcarting.png" className="fitImage" />
                </div>
                <div style={{marginTop:'100px', zIndex:1}} >
                    <img src="/logo.png"
                        style={{
                            width:'160px'
                        }}
                    />
                </div>
                <div className="container"  style={styles.container}>
                    <div style={{textAlign:'center', marginBottom:'32px'}} >
                        <div style={{fontWeight:'bold', fontSize:'18px', marginBottom:'5px'}} >Masuk</div>
                        <div style={{display:'flex',gap:'2px',justifyContent:'center', fontSize:'12px'}} >
                            <span>Belum punya akun Epic Goods?</span>
                            <span>
                                <a href="/auth/register" style={{color:'blue', fontWeight:'bold'}} >Daftar</a>
                            </span>
                        </div>
                    </div>
                    <div>

                        <_LoginForm/>

                    </div>
                </div>
            </div>
    );
};

const styles: { [key: string] : CSSProperties } = {
    body: {
        position:'absolute', top:0, left:0, width:'100%', height:'100%', background:'#ffe6a2',
        display:'flex', justifyContent:'flex-start',alignItems:'center',flexDirection:'column',
        gap:'20px', overflow:'auto'
    },
    model: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '100%'
    },
    container: {
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 5px 5px #0000001c',
        marginBottom: '100px'
    },
}