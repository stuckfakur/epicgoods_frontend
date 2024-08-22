"use client"
import React, {useState} from 'react';
import '../../style.css';
import __Header from "@/app/components/Globals/headers/__Header";
import __Footer from "@/app/components/Globals/footers/footer";

const cart_items = [
    {
        product: {
            name: 'Headset Earphone Super Bass Gaming 4D Audio Mic',
            price: 'Rp. 100.000',
            icon: '/headset.png'
        },
        shop: {
            icon: '/market.png',
            name: 'Alexandria Store',
            address: './store/AlexandriaStore'
        }
    },
    {
        product: {
            name: 'Headset Earphone Super Bass Gaming 4D Audio Mic',
            price: 'Rp. 100.000',
            icon: '/headset.png'
        },
        shop: {
            icon: '/market.png',
            name: 'Alexandria Store',
            address: './store/AlexandriaStore'
        }
    },
    {
        product: {
            name: 'Headset Earphone Super Bass Gaming 4D Audio Mic',
            price: 'Rp. 100.000',
            icon: '/headset.png'
        },
        shop: {
            icon: '/market.png',
            name: 'Alexandria Store',
            address: './store/AlexandriaStore'
        }
    }
];


export default function () {
    const [voucherApplied, setVoucherApplied] = useState(false);
    const [voucherCode, setVoucherCode] = useState('');

    const handleVoucherClick = () => {
        if (voucherApplied) {
            // Jika voucher sudah diaplikasikan, hapus voucher
            setVoucherApplied(false);
            setVoucherCode('');
        } else {
            if (voucherCode.trim() !== '') {
                // Jika input voucher tidak kosong, aplikasikan voucher
                setVoucherApplied(true);
                // Di sini Anda bisa menambahkan logika untuk validasi voucher dan perhitungan diskon
            } else {
                alert('Silakan masukkan kode voucher.');
            }
        }
    };
    return (
        <>
            <__Header/>
            <div>
                <div className="content">
                    <div className="containerContent">
                        <div style={{
                            padding: '20px 0',
                            fontSize: '22px'
                        }} className="font-bold">Pengiriman
                        </div>
                        <div className="cart-root-parent">
                            <div className="w-full">
                                <div
                                    className="flex flex-col p-[20px] bg-[#ffe6a2] rounded-[10px] gap-[10px] font-bold">
                                    <div>Alamat Pengiriman</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-[18px] h-[18px]">
                                            <img src='/location.png' className="fitImage"/>
                                        </div>
                                        <div>
                                            Rumah <span className="dot"> - </span> Username
                                        </div>
                                    </div>
                                    <div className="text-sm">Jl. Kandang Mas 3 Rt 20 Rw 06, Kampung Melayu, Kota
                                        Bengkulu, Bengkulu, 6282280994738
                                    </div>
                                    <div className="button-address mt-[10px]">
                                        <button>Ganti Alamat</button>
                                        <button>Kirim Ke Beberapa Alamat</button>
                                    </div>
                                </div>
                                <div>
                                    {
                                        cart_items.map((item, i) => (
                                            <div
                                                className="p-[20px] bg-[#ffe6a2] rounded-[10px] gap-[10px] mt-[5px] flex flex-col">
                                                <div className="bold">Pesanan {i + 1}</div>
                                                <div className="flex items-center gap-[10px] font-bold">
                                                    <div className="flex gap-[5px] items-center">
                                                        <div className="shopIcon">
                                                            <img src={item.shop.icon} className="fitImage"/>
                                                        </div>
                                                        <div><a href={item.shop.address}>{item.shop.name}</a></div>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-[10px] w-full">
                                                    <div className="flex gap-[10px] items-start w-full">
                                                        <div className="productIcon">
                                                            <img src={item.product.icon} className="fitImage"/>
                                                        </div>
                                                        <div className="flex flex-col justify-between w-full">
                                                            <div className="flex justify-between">
                                                                <div><a
                                                                    href={item.shop.address}>{item.product.name}</a>
                                                                </div>
                                                                <div className="bold">
                                                                    1 x {item.product.price}
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-end mt-[20px]">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="cart-right-box">
                                <div className="bold">Ringkasan Belanja</div>
                                <div className="h-full flex flex-col w-full gap-2 text-sm">
                                    <div className="flex justify-between">
                                        Total <span>Rp. 100.000</span>
                                    </div>
                                    <div className="h-full rounded-[10px] flex align-center overflow-hidden mt-[10px]">
                                        <input
                                            placeholder="Masukan Kode Voucher..."
                                            className="w-full p-3 rounded-[5px]"
                                            style={{borderRadius: '8px 0 0 8px'}}
                                            disabled={voucherApplied}
                                            value={voucherCode}
                                            onChange={(e) => setVoucherCode(e.target.value)}
                                        />
                                        <button
                                            onClick={handleVoucherClick}
                                            className="bg-gray-600 flex justify-center"
                                            style={{
                                                background: 'gray',
                                                color: 'white',
                                                width: '80px',
                                                borderRadius: '0 8px 8px 0'
                                            }}
                                        >
                                            {voucherApplied ?
                                                <div className="cart-delete-button" style={{
                                                    background: 'none',
                                                    padding: '0px',
                                                    width: '24px',
                                                    height: '24px'
                                                }}>
                                                    <img src='/delete.png' className="fitImage"/>
                                                </div>
                                                : 'Apply'}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button>Bayar</button>
                                </div>
                                <div className="text-sm text-center">
                                    Dengan melanjutkan, kamu menyetujui <a href="/syaratketentuan">S&K</a> kami.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <__Footer/>
        </>
    )
}