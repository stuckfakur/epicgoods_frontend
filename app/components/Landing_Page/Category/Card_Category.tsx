// @flow
import * as React from 'react';

import './style.css';

type Props = {};

const dataKategories = [
    {label:'Laptop',thumbnail:'/samplelaptop.png'},
    {label:'Laptop',thumbnail:'/samplelaptop.png'},
    {label:'Laptop',thumbnail:'/samplelaptop.png'},
    {label:'Laptop',thumbnail:'/samplelaptop.png'},
    {label:'Laptop',thumbnail:'/samplelaptop.png'}
];


export default function RekomKategories(props: Props) {
<<<<<<< Updated upstream
=======
    const [datas, setDatas] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const host = process.env.NEXT_PUBLIC_HOST;
                const response : any = await axios.get<Category[]>(`${host}/v1/categories/all`);
                console.log(host)
                // Ensure you're accessing the data correctly based on the API response structure
                if (Array.isArray(response.data)) {
                    setDatas(response.data);
                } else if (response.data && Array.isArray(response.data?.data)) {
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

>>>>>>> Stashed changes
    return (
        <div className="boxContainer">
            <div style={{fontWeight:'bold',display:'flex',justifyContent:'space-between'}} >
                <div>
                    Rekomendasi Kategori
                </div>
                <div>
                    <a href="/allcategories">
                        Lihat Semua Kategori>>
                    </a>
                </div>
            </div>
            <div style={{padding:'20px',display:'flex',gap:'10px',justifyContent:'space-around',fontWeight:'bold',overflow:'auto'}}>
                {
                    dataKategories.map((item,index)=>(
                        <a href="/category/" key={index}>
                            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                                <div style={{width:'150px',height:'150px',background:'whitesmoke',borderRadius:'50%'}}>
                                    <img src={item.thumbnail} className="fitImage"/>
                                </div>
                                <div>
                                    <span>{item.label}</span>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}