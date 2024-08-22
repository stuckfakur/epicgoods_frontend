"use client"
import React, { useState } from 'react';

export default function CartCounter(props) {
    // Inisialisasi state untuk jumlah produk
    const [count, setCount] = useState(1);

    // Fungsi untuk mengurangi jumlah produk
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    // Fungsi untuk menambah jumlah produk
    const incrementCount = () => {
        setCount(count + 1);
    };

    // Fungsi untuk menangani input perubahan langsung pada input
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            setCount(value);
        }
    };

    return (
        <div className="cart-counter">
            <button onClick={decrementCount}>-</button>
            <input 
                min="1" 
                value={count} 
                type="number" 
                onChange={handleInputChange} 
            />
            <button onClick={incrementCount}>+</button>
        </div>
    );
}
