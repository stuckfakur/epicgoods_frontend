"use client"
import * as React from 'react';
import _HeaderButtonDefault from "@/app/components/Globals/headers/header_button_default";
import _HeaderButtonProfile from "@/app/components/Globals/headers/header_button_profile";

export default function(props) {
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        // Check if there is a 'user' item in localStorage only on the client side
        const user = localStorage.getItem('user');
        setIsUserLoggedIn(!!user);
    }, []);

    // Render nothing or a loader while checking if localStorage is available
    if (isUserLoggedIn === null) {
        return null; // Or a loading spinner
    }
    return (
        <header>
            <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'flex-end',
                padding: '0 20px',
                alignItems: 'center',
                fontWeight: 'bold',
                color: 'gray'
            }}>
                <div>
                    <a href="/aboutus">
                        Kami
                    </a>
                </div>
                <div className="seperator-c"></div>
                <div>
                    <a href="/brand">
                        Brand
                    </a>
                </div>
                <div className="seperator-c"></div>
                <div>
                    <a href="/testi">
                        Testimoni
                    </a>
                </div>
            </div>
            <div style={{
                display: 'flex',
                padding: '20px 30px',
                background: '#ffe6a2',
                gap: '20px',
                justifyContent: 'space-between'
            }}>
                <div>
                    <a href="/">
                        <div style={{
                            width: '156px',

                        }}>
                            <img src="/landinglogo.png" className="fitImage"/>
                        </div>
                    </a>
                </div>
                <div style={{
                    gap: '10px',
                    width: '100%'
                }} className="centerMenu">
                    <div>
                        <select>
                            <option>Kategori</option>
                        </select>
                    </div>
                    <div style={{
                        width: '100%'
                    }}>
                        <div style={{
                            display: 'flex',
                            padding: '10px',
                            gap: '10px',
                            alignItems: 'center',
                            background: 'white',
                            border: '1px solid black',
                            borderRadius: '8px'
                        }}>
                            <div style={{
                                width: '18px'
                            }}>
                                <img src='/find.png' className="fitImage"/>
                            </div>
                            <div style={{width: '100%'}}>
                                <input placeholder="Cari di Epic Goods" style={{width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <div style={{
                        width: '24px'
                    }}>
                        <a href="/cart">
                            <img src="/cart.png" className="fitImage"/>
                        </a>
                    </div>
                    <div className="seperator"></div>
                    {!isUserLoggedIn ? <_HeaderButtonDefault/> : <_HeaderButtonProfile/>}
                </div>
            </div>
            {!props.isBannerOf && (
                <div style={{
                    width: '100%',
                    height: '400px',
                    position: 'relative'
                }}>
                    <img src="/banner.png" className="fitImage"/>
                    <div style={{
                        background: 'black',
                        opacity: '.6',
                        position: 'absolute',
                        top: 0, left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1
                    }}></div>
                </div>
            )}
        </header>
    );
}