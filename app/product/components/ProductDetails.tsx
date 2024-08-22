import React from 'react';
import './style.css';
export default function(props){
	return(
		<div style={{padding:'0 20px',width:'100%'}}>
			<div style={{
				fontWeight:'bold',
				fontSize:'18px'
			}}>Kemeja Putih Polos Pria</div>
			<div style={{
				display:'flex',
				gap:'10px',
				fontWeight:'bold',
				color:'gray',
				alignItems:'center',
				fontSize:'13px',
				padding:'10px 0'
			}}>
				<div>Terjual 100+</div>
				<div className="dot"></div>
				<div className="product_rating">
          <div className="star" style={{width:'16px',height:'16px'}}>
            <img src="/star.png" className="fitImage" />
          </div>
          <div className="rating_point">4.9 (33 Rating)</div>
        </div>
        <div className="dot"></div>
				<div>Diskusi (11)</div>
			</div>
			<div className="details_price bold" style={{paddingBottom:'10px'}}>Rp. 65.000</div>
			<div className="navigation_details bold" style={{gap:'20px'}}>
				<div className="active">Detail</div>
				<div>Info Toko</div>
			</div>
			<div style={{padding:'20px 0'}}>
				<textarea value={props.data.product.description} style={{
					width:'100%',
					height:'auto',
					outline:'none'
				}} readonly spellCheck={false}></textarea>
			</div>
			<div style={{display:"flex",paddingBottom:'20px'}}>
				<div className="moreButton">Lihat selengkapnya</div>
			</div>
			<div className="navigation_details bold" style={{alignItems:'center',gap:'20px'}}>
				<div style={{
					minWidth:'64px',
					minHeight:'64px',
					maxWidth:'64px',
					maxHeight:'64px',
					padding:'0',
					borderRadius:'50%',
					overflow:'hidden'
				}}>
					<img src={props.data.shop.profile} className="fitImage" />
				</div>
				<div style={{paddingBottom:'20px'}}>
					<div style={{display:'flex',gap:'10px',alignItems:'center'}}>
						<div style={{width:'24px'}}>
							<img src="/market.png" className="fitImage"/>
						</div>
						<div>Epic Goods</div>
					</div>
					<a href={props.data.shop.follow_link}>
						<div className="follow_button">
							Ikuti
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}