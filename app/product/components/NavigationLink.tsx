import React from 'react';
export default function(props){
	let link = '';
	return (
		<div style={{
			display:"flex",
			gap:"5px",
			padding:"20px 0"
		}}>
			{
				props.navs.map((item,i)=>{
					link += `/${item}`;
					return (
						<a href={link} style={{
							display:'flex',
							gap:'10px',
							alignItems:'center',
							color:'blue',
							fontWeight:'bold'
						}}>
							<span>{item}</span>
							{i !== props.navs.length-1 && (
								<span>></span>
							)}
						</a>
					)})
			}
		</div>
	)
}