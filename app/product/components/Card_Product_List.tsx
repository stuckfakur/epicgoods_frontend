// @flow
import * as React from 'react';
import ProductItems from './Item_Product.tsx';

import './style.css';


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
        }}>
            <div className="flex font-bold justify-between items-center">
                <div>Menampilkan {dataProducts.length} Barang</div>
                <div className="flex" style={{alignItems:'center',gap:'10px'}}>
                    <div>Urutkan:</div>
                    <div>
                        <select>
                            <option>Sesuaikan</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="products_container">
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
            </div>
            <div className="p-[20px] text-center">
                <button style={{
                    background:'whitesmoke'
                }} className="p-[10px]">Muat Lebih Banyak</button>
            </div>
        </div>
    );
}