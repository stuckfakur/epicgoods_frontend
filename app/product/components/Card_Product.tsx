"use client"
import * as React from 'react';
import {useEffect, useState} from 'react';
import ProductItems from './Item_Product.tsx';

import './style.css';
import axios from "axios";

interface Product {
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
    }
}

type Props = {};

export default function _CardProduct(props: Props) {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error
        | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            setError(null); // Clear any previous errors

            try {
                const host = process.env.NEXT_PUBLIC_HOST;
                const response = await axios.get<Product[]>(`${host}/v1/products/all`);
                setProducts(response.data.data);
            } catch (error) {
                setError(error);
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array to fetch data only once

    if (isLoading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error fetching products: {error.message}</p>;
    }


    return (
        <div style={{
            padding: '20px 0',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            margin: '20px 0'
        }}>
            <div style={{
                display: 'flex',
                fontWeight: 'bold',
                justifyContent: 'space-between'
            }}>
                <div>Barang Populer</div>
                <div>
                    <a href="/products">
                        Lihat Semua Barang >>
                    </a>
                </div>
            </div>
            <div className="products_container">
                {products && (
                    products.map((item: Product, index:number) => (
                        <ProductItems
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
                         id={item.id} product_detail={item.product_detail}></ProductItems>
                    ))
                )
                }
                {!products && <p>Loading products...</p>}
            </div>
        </div>
    );
}