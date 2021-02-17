import Head from 'next/head'
import React, {useEffect} from "react";
import Header from '../components/header-global.js'
import Footer from '../components/footer-global.js'
import Styles from '../styles/home.module.css'
import Helmet from 'react-helmet'
import Link from 'next/link'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'


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
        document.getElementById("accordion-pd").classList.add(Styles.estoqueOpenStateHarmonia);     
        document.getElementById("chevron-list").style.transform = "rotate(-180deg)"
      }else{
        document.getElementById("accordion-pd").classList.remove(Styles.estoqueOpenStateHarmonia);
        document.getElementById("chevron-list").style.transform = "rotate(0deg)"
      }
  }

  
  return (

  <div>

      <Head>
        <title>Onze 22 · Idea!Zarvos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no"></meta>
      </Head>

      <Header/>
      

      <div className="container-fluid">
       
        <section className={Styles.heroTeste4} data-aos="fade-in">
          
          <div className={Styles.homeImgLeft}>
            <img src="../../images/onze22/onze22-cover.jpg"/>
          </div> 

          <div className={Styles.heroContainer}>
            
            <div className={Styles.intro}>
                
              <div className={Styles.info}>
                    <h1>ONZE <sup>22</sup></h1>
                    <br/>
                    <span className={Styles.claim}>
                    Morar nunca foi tão moderno.
                    </span>
                    <p class="text-sm">
                    Em obras · Vila Madalena<br/>
                    <b>
                        Rua Agissê, 287<br/>
                        Arquitetura Triptyque
                    </b>
                    </p>
                    
                    <div className={Styles.estoque} id="accordion-pd">
                    <div className={Styles.heading} onClick={toggleState} id="list-heading">
                        <span>
                        Plantas disponíveis
                        </span>
                        <img src="../../images/icon/chevron.svg" class="icon list" id="chevron-list"/>
                    </div> 
                    <ul>
                        <li>
                        <div>
                            <span>
                            <span>Studio 27m²</span><br/>
                            <b>Disponível para comprar</b>
                            </span>
                        </div>
                        <img src="../../images/icon/plus.svg" class="icon list"/>
                        </li>
                        <li>
                        <div>
                            <span>
                            <span>Apartamento 42m² · 1 suíte</span><br/>
                            <b>Disponível para alugar</b>
                            </span>
                        </div>
                        <img src="../../images/icon/plus.svg" class="icon list"/>
                        </li>
                        <li>
                        <div>
                            <span>
                            <span>Apartamento 127m² · 2 suítes</span><br/>
                            <b>Disponível para alugar</b>
                            </span>
                        </div>
                        <img src="../../images/icon/plus.svg" class="icon list"/>
                        </li>
                        
                        <li className={Styles.seeMore}>
                        <div>
                            <span><span>Ver todas as plantas</span></span>
                        </div>
                        <img src="../../images/icon/plus.svg" class="icon list"/>
                        </li>
                    </ul>
                    <div className={Styles.action}>
                      <div class="btn filled">
                        Contato
                      </div>
                      <div class="btn ghost">
                      <img src="../../images/icon/share.svg" class="icon"/> Compartilhar
                      </div>
                    </div>                   
                  </div>
              </div>
            </div>
          </div>
        </section>

      </div>


      <div class="container">

        <section class="col-8" data-aos="fade-in">
          <h2>
          Faz tempo que a Vila Madalena concentra arte e energia inovadora, expressa nas lojas, restaurantes, bares e consumidores que inauguram tendências. 
          </h2>
          <div class="btn outline teaser">
            <img src="../../images/icon/play.svg" class="icon"/>Assista ao teaser
          </div>
          <p>
            Nos últimos anos essa cena atraiu uma geração de empresas de tecnologia e da economia criativa, boa parte delas instaladas nos edifícios comerciais da Idea!Zarvos. O Onze 22 traz um novo conceito de moradia para esse público que já frequenta o bairro diariamente.
          </p>
          <p>
            Idealizado pelo escritório de arquitetura Triptyque, propõe duas torres independentes  (Home e Studio) com unidades modernas e funcionais e áreas comuns que trazem o urbano e a natureza para dentro.
          </p>
          <div class="btn ghost readmore">
            <img src="../../images/icon/plus.svg" class="icon"/> Leia mais
          </div>
        </section>

        <section>
          <div className={Styles.mosaic3} data-aos="fade-in">
            <img src="../../images/onze22/onze22-01.jpg"/>
            <img src="../../images/onze22/onze22-02.jpg"/>
            <img src="../../images/onze22/onze22-03.jpg"/>
          </div>
          <div class="btn outline">
            <img src="../../images/icon/gallery.svg" class="icon"/>Galeria de imagens
          </div>
        </section>

        <section class="col-8" data-aos="fade-in">
          <h2>
            O prédio foi pensado como lajes empilhadas com fechamento em vidro piso-teto, favorecendo a entrada de ar e luz nos apartamentos. 
          </h2>
          <p>
          A sacada que contorna todo o perímetro do edifício aumenta a sensação de espaço nos apartamentos, protege do sol e privilegia a vista. No térreo, um exuberante jardim tropical criado por Rodrigo Oliveira envolve os espaços de convivência, inteiramente envidraçados. 
          </p>
          <div class="btn ghost readmore">
            <img src="../../images/icon/plus.svg" class="icon"/> Leia mais
          </div>
        </section>

        <section data-aos="fade-in">
          <div className={Styles.mosaic2}>
            <img src="../../images/onze22/onze22-04.jpg"/>
            <img src="../../images/onze22/onze22-05.jpg"/>
          </div>
          <div class="btn outline">
            <img src="../../images/icon/gallery.svg" class="icon"/>Galeria de imagens
          </div>
        </section>

        <section className={Styles.imgContainer} data-aos="fade-in">
          <div class="col-6">
            <h2>
                <b>Arquitetura</b><br/>
                Triptyque Architecture
            </h2>
            <p class="text-sm">
                Com foco em uma arquitetura global, a Triptyque Architecture explora as ferramentas que servem a um mundo contemporâneo e sustentável. É assim desde 2000, ano em que a brasileira Carolina Bueno e os franceses Greg Bousquet, Olivier Raffaelli e Guillaume Sibaud aterrissaram no Rio de Janeiro e mesclaram a bossa brasileira e a energia tropical à bagagem histórica adquirida no velho continente. 
            </p>
          </div>
          <figure className={Styles.figure + " col-6"}>
            <img src="../../images/arquitetura/triptyque.jpg"/>
          </figure>
        </section>

        <section className={Styles.detail}>
          <div class="col-6" data-aos="fade-in">
            <h2>
              Plantas
            </h2>
            <span class="text-sm">
            Duas torres independentes  (Home e Studio) com unidades modernas e funcionais e áreas comuns que trazem o urbano e a natureza para dentro.
            </span>
          </div>
          <div class="col-6">
            <ol data-aos="fade-in">
              <p class="text-sm">
                <b>Residenciais</b>
              </p>
              <li>
                <div>
                  <span>
                    Studio 27m²<br/>
                    <b>Disponível para comprar</b>
                  </span>
                </div>
                <img src="../../images/icon/plus.svg" class="icon list"/>
              </li>
              <li>
                <div>
                  <span>
                    Apartamento 42m² · 1 suíte<br/>
                    <b>Disponível para comprar</b>
                  </span>
                </div>
                <img src="../../images/icon/plus.svg" class="icon list"/>
              </li>
              <li>
                <div>
                  <span>
                    Apartamento 127m² · 2 suítes<br/>
                    <b>Disponível para comprar</b>
                  </span>
                </div>
                <img src="../../images/icon/plus.svg" class="icon list"/>
              </li>
              <li>
                <div>
                  <span>
                    Apartamento 179m² · 2 suítes<br/>
                    <b>Sem unidades disponíveis</b>
                  </span>
                </div>
                <img src="../../images/icon/plus.svg" class="icon list"/>
              </li>
            </ol>
            
          </div>
        </section>

        <section className={Styles.detail}>

          <div class="col-6" data-aos="fade-in">
            <h2>
              Detalhamento
            </h2>
            <span class="text-sm">
            As transparências preservam a vista da praça em frente e trazem o verde para dentro. No rooftop tem piscina, spa, academia, sala de ginástica, sala de massagem, salão de festas, salão gourmet, lavanderia. E vistas extraordinárias.
            </span>
          </div>

          <div className={Styles.fichaTecnica + " col-6"}>
            <ol data-aos="fade-in">
              <li>
                <div>
                  <span>
                  Piscina com vista panorâmica
                  </span>
                </div>
              </li>    
              <li>
                <div>
                  <span>
                  Spa, academia, sala de ginástica e de massagem
                  </span>
                </div>
              </li> 
              <li>
                <div>
                  <span>
                  Arquitetura Triptyque
                  </span>
                </div>
              </li> 
              <li>
                <div>
                  <span>
                  Paisagismo de Rodrigo Oliveira
                  </span>
                </div>
                
              </li> 
              <li>
                <div>
                  <span>
                  243 unidades com 1 a 3 suítes
                  </span>
                </div>
                
              </li>
              <div class="btn ghost list">
                <img src="../../images/icon/plus.svg" class="icon"/> Ver todos os diferenciais e ficha técnica
              </div>         
            </ol>
          </div>

        </section>


      </div>
      
      <Footer/>

  </div>
  )
}



