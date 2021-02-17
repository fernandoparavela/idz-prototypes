import Head from 'next/head'
import React, {useEffect} from "react";
import Header from '../components/header-global.js'
import Footer from '../components/footer-global.js'
import Styles from '../styles/home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Helmet from 'react-helmet'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {
  
  //scroll transition lib
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 40,
      easing: 'ease-in-out',
    })
  },);

  const [isToggled, setToggle] = useState(false);

  const toggleState = function(){
      
      setToggle(!isToggled);

      if(isToggled==false){   
        document.getElementById("accordion-pd").classList.add(Styles.estoqueOpenState);     
        document.getElementById("chevron-list").style.transform = "rotate(-180deg)"
      }else{
        document.getElementById("accordion-pd").classList.remove(Styles.estoqueOpenState);
        document.getElementById("chevron-list").style.transform = "rotate(0deg)"
      }
  }

  
  return (

    <div>

      <Head>
        <title>Hero Template 3 · Idea!Zarvos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0"></meta>
      </Head>

      <Header/>


      <div className={Styles.homeHero + " container-fluid"}>
        <section className={Styles.homeHero4} data-aos="fade-in">
          
          <div className={Styles.heroContainer}>
            <div className={Styles.intro}>
                
                <div className={Styles.info}>
                    <div className={Styles.homeInfo2}>
                        <p>Portfólio</p>
                        <h1>
                            Autem</h1>
                        <p>
                        Com arquitetura de Andrade Morettin e paisagismo tropical de Rodrigo Oliveira, o prédio tem vista para o verde do Jardim Europa e unidades duplex privilegiadas por muita luz e ventilação natural.
                        </p>
                    </div>
                    <div class="btn">
                    Conhecer este Idea!Zarvos
                    </div>
                </div>
            </div>
          </div>

          <div className={Styles.homeImgRight}>
            <img src="../../images/pop/autem-cover.jpg" className={Styles.heroImg}/>
          </div>    

        </section>

      </div>

      <div class="container">

        <section class="col-9" data-aos="fade-in">
          <p>Portfólio</p>
          <h2>
            Prédios únicos, assinados por arquitetos premiados e com estética diferente dos padrões repetitivos da cidade.
          </h2>
        </section>

          

      </div>
      
      <Footer/>
    </div>
  )
}



