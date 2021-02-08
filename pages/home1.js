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
        <title>Pop Grafite · Idea!Zarvos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>


      <div className={Styles.homeHero + " container-fluid"}>
        
        <section className={Styles.hero} data-aos="fade-in">
          <div>
            <img src="../../images/home/home-01.jpg"/>
          </div>
        </section>
        <div className={Styles.homeInfo + " container"}>
          <div class="col-8">
            <p>Magazine</p>
            <h1>POP Grafite, o studio perfeito da Idea!Zarvos</h1>
            <p>
              Em entrevista ao Magazine Idea!Zarvos, as arquitetas do Estúdio Penha falam sobre todos os elementos que compõem o decorado.
            </p>
            <div class="btn">
              Ir para o Magazine
            </div>
          </div>
        </div>

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



