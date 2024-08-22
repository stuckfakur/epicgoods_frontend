// @flow
import * as React from 'react';
import './style.css';

type Props = {
    key: number;
    id: number;
    product_name: string;
    product_price: number;
    product_price_discount: number;
    product_detail: string;
    product_photo: string;
    product_gallery: object;
    product_slug: string;
    product_status: string;
    seller: {
        store_name: string;
        location: string;
    }
};

export default function _ItemProduct(props: Props) {
    return (
        <div key={props.key} style={{
            background: 'whitesmoke',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alingItem: 'center',
            width: '200px'
        }}>
            <div style={{
                width: '100%',
                height: '200px',
                borderRadius: '10px'
            }}>

                <img src={props.product_name} className="fitImage"/>
            </div>
            <div className="details_container">
                <div className="product_title">
                    <a href={props.product_slug}>
                        {props.product_name}>
                    </a>
                </div>
                <div className="product_price">
                    <div className="price">{props.product_price_discount}</div>
                    <div className="price_old sliced-content">
                        <span>{props.product_price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
                    </div>
                </div>
                <div className="product_rating">
                    <div className="star">
                        <img src="/star.png" className="fitImage"/>
                    </div>
                    <div className="rating_point">{`4,7`}</div>
                    <div className="dot"></div>
                    <div className="sellout">{`100`}+ Terjual</div>
                </div>
                <div className="product_store">
                    <div className="market">
                        <img src="/market.png" className="fitImage"/>
                    </div>
                    <div>
                        <a href="asd">
                            {/*{props.seller.store_name}*/}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}