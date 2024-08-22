// @flow
import * as React from 'react';
import {CSSProperties} from 'react';
import './style.css';
import _RegisterFormOrigin from "@/app/auth/register/Register_Form_Origin";

type Props = {};
export default function Page(props: Props) {

    return (<>
            <div>
                <div style={styles.background}>
                    <div style={styles.model}>
                        <img src="/girlmodel.png" className="fitImage"/>
                    </div>
                    <div style={{marginTop: '100px'}}>
                        <img src="/logo.png"
                             style={{
                                 width: '160px'
                             }}
                        />
                    </div>
                    <div className="container" style={styles.container}>
                        <div style={{textAlign: 'center', marginBottom: '32px'}}>
                            <div style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '5px'}}>
                                Daftar Sekarang
                            </div>
                            <div style={{display: 'flex', gap: '2px', justifyContent: 'center', fontSize: '12px'}}>
                                <span>Sudah punya akun Epic Goods?</span>
                                <span>
                                <a href="/auth/login" style={{color: 'blue', fontWeight: 'bold'}}>Masuk</a>
                            </span>
                            </div>
                        </div>

                        <_RegisterFormOrigin/>

                        <div style={{marginTop: '30px', textAlign: 'center'}}>
                            <span>Dengan mendaftar, saya menyetujui
                                <a href="/syaratketentuan" style={{color: 'blue', fontWeight: 'bold'}}>{" "}Syarat & Ketentuan{" "}</a>
                                yang berlaku.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

interface Styles {
    background: CSSProperties;
    model: CSSProperties;
    container: CSSProperties;
    input: CSSProperties;
    submitButton: CSSProperties;
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
        borderRadius: '8px'
    },
    submitButton: {
        padding: '10px',
        background: 'whitesmoke',
        width: '100%',
        borderRadius: '5px',
        color: 'gray',
        fontWeight: 'bold',
        border: '1px solid gainsboro'
    }
}
