// @flow
import * as React from 'react';
<<<<<<< Updated upstream
import ProductItems from './Item_Product.tsx';

import './style.css';
=======
import {useEffect, useState} from 'react';

import './style.css';
import axios from "axios";
import _ItemProduct from "@/app/product/components/Item_Product";
>>>>>>> Stashed changes


const dataProducts = [
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/product/details'
    }
];

type Props = {};

export default function _CardProduct(props: Props) {
    return (
        <div style={{
            padding:'20px 0',
            borderTop:'1px solid',
            borderBottom:'1px solid',
            margin:'20px 0'
        }}>
            <div style={{
                display:'flex',
                fontWeight:'bold',
                justifyContent:'space-between'
            }}>
                <div>Barang Populer</div>
                <div>
                    <a href="/product">
                        Lihat Semua Barang >>
                    </a>
                </div>
            </div>
            <div className="products_container">
<<<<<<< Updated upstream
            {
                dataProducts.map((item,index)=>(
                    <ProductItems
                        title={item.title}
                        price={item.price}
                        price_old={item.price_old}
                        thumbnail={item.thumbnail}
                        sellout={item.sellout}
                        rating_point={item.rating_point}
                        market={item.market}
                        product_link={item.product_link}
                    />
                ))
            }
=======
                {products && (
                    products.map((item: Product, index:number) => (
                        <_ItemProduct
                            key={item.id}
                            product_name={item.product_name}
                            product_price_discount={item.product_price_discount}
                            product_price={item.product_price}
                            product_photo={item.product_photo}
                            sellout={`100+`}
                            rating_point={`4,7`}
                            store_name={item.seller.store_name}
                            product_slug={item.product_slug}
                            location={'Jakarta'}
                         id={item.id} product_detail={item.product_detail} product_gallery={item.product_gallery} product_status={item.product_status} seller={item.seller}></_ItemProduct>
                    ))
                )
                }
                {!products && <p>Loading products...</p>}
>>>>>>> Stashed changes
            </div>
        </div>
    );
}