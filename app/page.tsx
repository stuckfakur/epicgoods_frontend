import Image from "next/image";
import './style.css';

export default function Home() {
  return (
    <>
      <header>
        <div style={{
          display:'flex',
          gap:'10px',
          justifyContent:'flex-end',
          padding:'0 20px',
          alignItems:'center',
          fontWeight:'bold',
          color:'gray'
        }} >
          <div>
            <a href="/aboutus">
              Kami
            </a>
          </div>
          <div className="seperator-c"></div>
          <div>
            <a href="/brand">
              Brand
            </a>
          </div>
          <div className="seperator-c"></div>
          <div>
            <a href="/testi">
              Testimoni
            </a>
          </div>
        </div>
        <div style={{
          display:'flex',
          padding:'20px 30px',
          background:'#ffe6a2',
          gap:'20px'
        }} >
          <div>
            <a href="/">
              <div style={{
                width:'156px',

              }} >
                <img src="/landinglogo.png" className="fitImage"/>
              </div>
            </a>
          </div>
          <div style={{
            display:'flex',
            gap:'10px',
            width:'100%'
          }}>
            <div>
              <select>
                <option>Kategori</option>
              </select>
            </div>
            <div style={{
              width:'100%'
            }}>
              <div style={{
                display:'flex',
                padding:'10px',
                gap:'10px',
                alignItems:'center',
                background:'white',
                border:'1px solid black',
                borderRadius:'8px'
              }} >
                <div style={{
                  width:'18px'
                }} >
                  <img src='/find.png' className="fitImage"/>
                </div>
                <div style={{width:'100%'}}>
                  <input placeholder="Cari di Epic Goods" style={{width:'100%'}} />
                </div>
              </div>
            </div>
          </div>
          <div style={{
            display:'flex',
            alignItems:'center',
            gap:'10px'
          }} >
            <div style={{
              width:'24px'
            }}>
              <img  src="/cart.png" className="fitImage"/>
            </div>
            <div className="seperator"></div>
            <div>
              <a href="/auth/login">
                <button className="login">Masuk</button>
              </a>
            </div>
            <div>
              <a href="/auth/register">
                <button className="register">Daftar</button>
              </a>
            </div>
          </div>
        </div>
        <div style={{
          width:'100%',
          height:'300px',
          position:'relative'
        }}>
          <img src="/banner.png" className="fitImage"/>
          <div style={{
            background:'black',
            opacity:'.6',
            position:'absolute',
            top:0,left:0,
            width:'100%',
            height:'100%',
            zIndex:1
          }}></div>
        </div>
      </header>
    </>
  );
}
