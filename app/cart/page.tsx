"use client"
import React, { useState } from 'react';
import '../style.css';
import Header from '../components/Globals/headers/header.tsx';
import Footer from '../components/Globals/footers/footer.tsx';
import Counter from '../components/Cart/Counter';

const cart_items = [
	{
		product:{
			name:'Headset Earphone Super Bass Gaming 4D Audio Mic',
			price:'Rp. 100.000',
			icon:'/headset.png'
		},
		shop:{
			icon:'/market.png',
			name:'Alexandria Store',
			address:'./store/AlexandriaStore'
		}
	},
	{
		product:{
			name:'Headset Earphone Super Bass Gaming 4D Audio Mic',
			price:'Rp. 100.000',
			icon:'/headset.png'
		},
		shop:{
			icon:'/market.png',
			name:'Alexandria Store',
			address:'./store/AlexandriaStore'
		}
	},
	{
		product:{
			name:'Headset Earphone Super Bass Gaming 4D Audio Mic',
			price:'Rp. 100.000',
			icon:'/headset.png'
		},
		shop:{
			icon:'/market.png',
			name:'Alexandria Store',
			address:'./store/AlexandriaStore'
		}
	}
];

export default function CartPage() {
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
			<Header isBannerOf={true}/>
			<content>
				<div className="content">
					<div className="containerContent">
						<div style={{
							padding:'20px 0',
							fontSize:'22px'
						}} className="font-bold">Keranjang</div>
						<div className="cart-root-parent">
							<div style={{width:'100%'}}>
								<div style={{
									background:'#ffe6a2'
								}} className="flex items-center p-[20px] rounded-[10px] font-bold gap-[10px]">
									<div className="radio_parent">
										<div className="input_radio"></div>
									</div>
									<div className="w-full">Pilih Semua({cart_items.length})</div>
									<div className="delete_button">Hapus</div>
								</div>
								<div>
									{
										cart_items.map((item, index)=>(
											<div key={index} style={{
												background:'#ffe6a2',
												borderRadius:'10px',
											}} className="p-[20px] gap-[20px] mt-[5px] flex flex-col">
												<div className="flex items-center gap-[10px] font-bold">
													<div className="radio_parent">
														<div className="input_radio"></div>
													</div>
													<div className="flex gap-[5px] items-center">
														<div className="shopIcon">
															<img src={item.shop.icon} className="fitImage"/>
														</div>
														<div><a href={item.shop.address}>{item.shop.name}</a></div>
													</div>
												</div>
												<div className="w-full flex gap-[10px] items-start">
													<div className="radio_parent">
														<div className="input_radio"></div>
													</div>
													<div className="flex gap-[10px] items-start w-full">
														<div className="productIcon">
															<img src={item.product.icon} className="fitImage"/>
														</div>
														<div className="w-full flex flex-col justify-between" style={{
															minHeight:'80px',
														}}>
															<div className="flex justify-between">
																<div><a href={item.product.address}>{item.product.name}</a></div>
																<div className="bold">
																	{item.product.price}
																</div>
															</div>
															<div className="flex justify-end mt-[20px]">
																<div className="flex gap-[10px] items-center">
																	<div className="cart-delete-button">
																		<img src='/delete.png' className="fitImage"/>
																	</div>
																	<Counter/>
																</div>
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
										Total <span>Rp. 300.000</span>
									</div>
									<div className="h-full rounded-[10px] flex align-center overflow-hidden mt-[10px]">
										<input 
											placeholder="Masukan Kode Voucher..." 
											className="w-full p-3 rounded-[5px]" 
											style={{borderRadius:'8px 0 0 8px'}}
											disabled={voucherApplied}
											value={voucherCode}
											onChange={(e) => setVoucherCode(e.target.value)}
										/>
										<button 
											onClick={handleVoucherClick}
											className="bg-gray-600 flex justify-center" 
											style={{background:'gray',color:'white',width:'80px',borderRadius:'0 8px 8px 0'}}
										>
											{voucherApplied ? 
												<div className="cart-delete-button" style={{background:'none',padding:'0px',width:'24px',height:'24px'}}>
													<img src='/delete.png' className="fitImage"/>
												</div>
											 : 'Apply'}
										</button>
									</div>
								</div>
								<div>
									<button><a href='/cart/checkout'>Beli</a></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</content>
			<Footer/>
		</>
	)
}

