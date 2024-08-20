"use client"
import * as React from 'react';

import './style.css';
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

interface Category {
    id: number;
    category_name: string;
    category_photo: string;
    category_slug: string;
    description: string;
}

export default function RekomKategories(props: Props) {
    const [datas, setDatas] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const host = process.env.NEXT_PUBLIC_HOST;
                const response = await axios.get<Category[]>(`${host}/v1/categories/all`);
                console.log(host)
                // Ensure you're accessing the data correctly based on the API response structure
                if (Array.isArray(response.data)) {
                    setDatas(response.data);
                } else if (response.data && Array.isArray(response.data.data)) {
                    setDatas(response.data.data);
                } else {
                    throw new Error("Unexpected data structure");
                }
                console.log(response.data.data);
            } catch (error) {
                setError(error as Error);
                console.error('Error fetching categories: ', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading categories...</p>;
    }

    if (error) {
        return <p>Error fetching categories: {error.message}</p>;
    }

    return (
        <div className="boxContainer">
            <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                <div>Rekomendasi Kategori</div>
                <div>
                    <a href="/allcategories">Lihat Semua Kategori &gt;&gt;</a>
                </div>
            </div>
            <div style={{ padding: '20px', display: 'flex', gap: '10px', justifyContent: 'space-around', fontWeight: 'bold', overflow: 'auto' }}>
                {datas.length > 0 ? (
                    datas.map((item, index) => (
                        <a key={item.id} href={`/category/${item.category_slug}`}>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '150px', height: '150px', background: 'whitesmoke', borderRadius: '50%' }}>
                                    <img src={item.category_photo} className="fitImage" alt={item.category_name} />
                                </div>
                                <div>
                                    <span>{item.category_name}</span>
                                </div>
                            </div>
                        </a>
                    ))
                ) : (
                    <p>No categories available.</p>
                )}
            </div>
        </div>
    );
}