import React from 'react';
import Header from '../../components/Globals/headers/header.tsx';
import Footer from '../../components/Globals/footers/footer.tsx';
import NavigationLink from '../components/NavigationLink';
import ProductShowOf from '../components/ProductShowOf';
import ProductDetails from '../components/ProductDetails';
import '../../style.css';

// data example of product show of
const products_show_of = [
	'/kemejaputih.png',
	'/kemejaputih.png',
	'/kemejaputih.png',
	'/kemejaputih.png',
	'/kemejaputih.png',
	'/kemejaputih.png',
	'/kemejaputih.png',
	'/kemejaputih.png',
];

const productDetails = {
	shop:{
		profile:'/kemejaputih.png',
		follow_link:'/user/follow/epicgoods'
	},
	product:{
		description:`Kondisi: Baru\nKualitas: Bagus
		`
	}
}

export default function(props){
	return (
		<>
			<Header isBannerOf={true} />
			<content>
				<div className="content">
					<div className="containerContent">
						<NavigationLink navs={['Home','Fashion','Kemeja Polos']} />
						<div style={{
							display:'flex',
							gap:'10px'
						}} className="flex-responsive">
							<ProductShowOf products_show_of={products_show_of} />
							<ProductDetails data={productDetails} />
						</div>
					</div>
				</div>
			</content>
			<Footer/>
		</>
	)
}