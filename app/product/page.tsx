import React from 'react';
import Header from '../components/Globals/headers/header.tsx';
import Footer from '../components/Globals/footers/footer.tsx';
import '../style.css';
import Filterer from './components/ProductFilter';
import Product from './components/Card_Product_List';

const categories = [
  ['Gadgets', ['Laptop', 'Handphone', 'Charger']],
  ['Furniture', ['Sofa', 'Meja', 'Kursi']],
  ['Kecantikan', ['Makeup', 'Skincare']],
  ['Sport', ['Sepak Bola', 'Basket']],
];

const locations = [
	'Jawa Barat',
	'Jawa Tengah',
	'Jakarta',
	'Banten'
];

export default function(props){
	return (
		<>
			<Header isBannerOf={true}/>
			<content>
				<div className="content">
					<div className="containerContent flex">
						<Filterer categories={categories} locations={locations}/>
						<Product/>
					</div>
				</div>
			</content>
			<Footer/>
		</>
	)
}