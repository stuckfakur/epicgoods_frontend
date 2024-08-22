import React from 'react';

export default function(props){
	return(
		<div className="productShowOf">
			<div className="productShowOf_banner">
				<img src={props.products_show_of[0]} className="fitImage" />
			</div>
			<div className="productShowOf_ShowList">
				{
					props.products_show_of.map((item)=>(
						<div className="productShowOf_ShowList_Item">
							<img src={item} className="fitImage" />
						</div>
					))
				}
			</div>
		</div>
	)
}