import './style.css';
import RekomKategories from "@/app/components/Landing_Page/Category/Card_Category";
import _Testimoni from "@/app/components/Landing_Page/Testimoni/Testimoni";
import _CardProduct from "@/app/product/components/Card_Product";
import _CardWeAre from "@/app/components/Landing_Page/WeAre/Card_WeAre";
import __Header from "@/app/components/Globals/headers/__Header";
import __Footer from "@/app/components/Globals/footers/footer";


export default function Home() {
    return (
        <>
            <__Header/>
            <main>
                <div className="content">
                    <div className="containerContent">
                        {/*rekomendasi*/}
                        <RekomKategories/>
                        {/*products*/}
                        <_CardProduct/>
                        <_CardWeAre/>
                    </div>
                </div>
            </main>
            <_Testimoni/>
            <__Footer/>
        </>
    );
}
