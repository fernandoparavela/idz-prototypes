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
        <title>Hero Template 2 · Idea!Zarvos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0"></meta>
      </Head>

      <Header/>


      <div className={Styles.homeHero + " container-fluid"}>
        <section className={Styles.heroTeste3} data-aos="fade-in">
        <div>
            <img src="../../images/pop/ourania-cover.jpg" className={Styles.heroImg}/>
          </div>
          <div className={Styles.heroContainer}>
            <div className={Styles.intro}>
                
                <div className={Styles.info}>
                    <div className={Styles.homeInfo2}>
                        <p>Portfólio</p>
                        <h1>Ourânia 231</h1>
                        <p>
                        Personalização ao extremo, das plantas à fachada, em um Idea!Zarvos de apenas oito apartamentos assinado por Marcio Kogan.
                        </p>
                    </div>
                    
                    <div class="btn">
                        Conhecer este Idea!Zarvos
                    </div>
                    
                </div>
               
            </div>
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



