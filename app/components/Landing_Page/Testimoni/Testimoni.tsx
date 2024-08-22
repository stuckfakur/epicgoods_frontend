// @flow
import * as React from 'react';

type Props = {};

const testimonials = [
    {
        comment:'Terimakasih Banyakkk, sangatt membantu',
        profile_picture:'/profile.jpg',
        job:'Penjual',
        name:'Jeremy'
    },
    {
        comment:'Terimakasih Banyakkk, sangatt membantu',
        profile_picture:'/profile.jpg',
        job:'Penjual',
        name:'Jeremy'
    },
    {
        comment:'Terimakasih Banyakkk, sangatt membantu',
        profile_picture:'/profile.jpg',
        job:'Penjual',
        name:'Jeremy'
    }
];

export default function _Testimoni(props: Props) {
    return (
        <div style={{
            width:'100%',
            background:'#ffe6a291',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            padding:'40px',
            position:'relative'
        }}>
            <div style={{
                position:'absolute',opacity:'.5',
                top:0,left:0,width:'100%',height:'100%'
            }}>
                <img src="/customerservice.jpg" className="fitImage"/>
            </div>
            <div style={{fontSize:'24px',background:'white',fontWeight:'bold',padding:'10px 20px',borderRadius:'10px',marginBottom:'30px',zIndex:1}}>
                Mereka Yang Berlangganan
            </div>
            <div style={{
                display:'flex',
                gap:'20px',
                overflow:'auto',
                paddingBottom:'20px',zIndex:1
            }} className="containerContent">
                {testimonials &&
                    testimonials.map((item,value)=>(
                        <div style={{
                            padding:'20px',
                            background:'white',
                            borderRadius:'10px',
                            display:'flex',
                            flexDirection:'column',
                            gap:'10px',
                            width:'100%'
                        }} key={value}>
                            <div style={{fontSize:'18px'}}>
                                "{item.comment}"
                            </div>
                            <div style={{
                                display:'flex',
                                gap:'30px',
                                alignItems:'center'
                            }}>
                                <div style={{width:'64px',height:'64px',borderRadius:'50%',overflow:'hidden'}}>
                                    <img src={item.profile_picture} className="fitImage"/>
                                </div>
                                <div>
                                    <div>{item.name}</div>
                                    <div className="bold">{item.job}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}