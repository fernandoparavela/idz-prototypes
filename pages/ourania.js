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
        document.getElementById("accordion-pd").classList.add(Styles.estoqueOpenStateNido);     
        document.getElementById("chevron-list").style.transform = "rotate(-180deg)"   
      }else{
        document.getElementById("accordion-pd").classList.remove(Styles.estoqueOpenStateNido);
        document.getElementById("chevron-list").style.transform = "rotate(0deg)"  
      }
  }

  
  return (

    <div>

      <Head>
        <title>Nido · Idea!Zarvos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no"></meta>
      </Head>

      <Header/>


      <div className="container-fluid">

        <section className={Styles.heroTeste3 + " heroEmpreendimento"} id="hero" data-aos="fade-in">

            <div className={Styles.imgHero}>
                <img src="../../images/ourania/ourania-cover.jpg"/>
            </div>

            <div className={Styles.heroContainer}>
                
            <div className={Styles.intro}>
                    
                    <div className={Styles.info}>
                        <h1>OURÂNIA<sup> 231</sup></h1>
                        <br/>
                        <span className={Styles.claim}>
                            O apartamento que mora em você.    
                        </span>
                        <p class="text-sm">
                        Em obras · Alto de Pinheiros<br/>
                        <b>
                            Rua Ourânia, 231<br/>
                            Arquitetura Marcio Kogan
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
                                    <span>Apartamento 280m² a 469m²</span><br/>
                                    <b>Disponível para comprar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
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
          
        </section>

      </div>

      <div class="container">

      <section class="col-8" data-aos="fade-in">
            <h2>
            Quem nunca encontrou o apartamento ideal, que atendesse a todas as expectativas, pode realizar esse sonho no Ourânia 231.
            </h2>
            <div class="btn filled teaser">
              <img src="../../images/icon/tour.svg" class="icon"/>Tour virtal
            </div>
            <div class="btn outline teaser">
              <img src="../../images/icon/play.svg" class="icon"/>Assista ao teaser
            </div>
            <p>
            Sua planta totalmente flexível permite a cada morador definir a distribuição do espaço, configurando os ambientes de acordo com necessidades e desejos.
            </p>
            <p>
            O resultado dessa liberdade é uma fachada viva, dinâmica, composta pelas diferentes divisões de cada apartamento – apenas oito – com metragens de 280 a 469m² e possibilidade de até 5 suítes.
            </p>
            <div class="btn ghost readmore">
              <img src="../../images/icon/plus.svg" class="icon"/> Leia mais
            </div>
          </section>

          <section>
            <div className={Styles.mosaic3} data-aos="fade-in">
              <img src="../../images/ourania/ourania-01.jpg"/>
              <img src="../../images/ourania/ourania-02.jpg"/>
              <img src="../../images/ourania/ourania-03.jpg"/>
            </div>
            <div class="btn outline">
              <img src="../../images/icon/gallery.svg" class="icon"/>Galeria de imagens
            </div>
          </section>

          <section class="col-8" data-aos="fade-in">
            <h2>
              A sensação de estar em casa continua nas áreas comuns: um agradável pátio central, piscinas para adultos e crianças, salão de festas, academia e brinquedoteca. 
            </h2>
            <p>
                Lojas no andar térreo reforçam uma importante crença da Idea!Zarvos, de que a diversidade de usos de um prédio faz dele um lugar melhor para o morador e um catalisador de mudança para o bairro.
            </p>
            <div class="btn ghost readmore">
              <img src="../../images/icon/plus.svg" class="icon"/> Leia mais
            </div>
          </section>

          <section data-aos="fade-in">

            <div>
              <img src="../../images/ourania/ourania-04.jpg"/>
            </div>

            <div class="btn outline">
              <img src="../../images/icon/gallery.svg" class="icon"/>Galeria de imagens
            </div>
          </section>

          <section className={Styles.imgContainer} data-aos="fade-in">
            <div class="col-6">
              <h3>
                <b>Arquitetura</b><br/>
                MK27
              </h3>
              <span class="text-sm">

                  O Studio MK27 foi fundado no final dos anos 70 pelo arquiteto Marcio Kogan e hoje é composto por 35 integrantes e vários colaboradores pelo mundo afora. Os arquitetos da equipe, grandes admiradores da geração do modernismo brasileiro, procuram cumprir a tarefa de repensar e dar continuidade a esse icônico movimento arquitetônico. Os projetos do Studio MK27 valorizam a simplicidade formal e são elaborados com extrema atenção aos detalhes e acabamentos. 

              </span>
            </div>
            <figure className={Styles.figure + " col-6"}>
              <img src="../../images/arquitetura/mk27.jpg"/>
            </figure>
          </section>

          <section className={Styles.detail}>
            <div class="col-6" data-aos="fade-in">
              <h3>
                Plantas
              </h3>
              <span class="text-sm">
              Plantas totalmente flexíveis que permitem a cada morador definir a distribuição do espaço, configurando os ambientes de acordo com necessidades e desejos.
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
                        Apartamento 280m² a 469m²<br/>
                      <b>Disponível para comprar</b>
                    </span>
                  </div>
                  <img src="../../images/icon/plus.svg" class="icon list"/>
                </li>
                
              </ol>
            </div>
          </section>

          <section className={Styles.detail}>

            <div class="col-6" data-aos="fade-in">
              <h3>
                Detalhamento
              </h3>
              <span class="text-sm">Além de aumentar a entrada de luz natural nos apartamentos, os imensos caixilhos valorizam a vista incrível para a Praça Pôr do sol.
              </span>
            </div>

            <div className={Styles.fichaTecnica + " col-6"}>
              <ol data-aos="fade-in">
                <li>
                  <div>
                    <span>
                        Piscina aquecida com raia de 25 metros
                    </span>
                  </div>
                  <img src="../../images/icon/feat-01.svg"/>
                </li>    
                <li>
                  <div>
                    <span>
                    Academia com acabamento em madeira
                    </span>
                  </div>
                  
                </li> 
                <li>
                  <div>
                    <span>
                    Arquitetura Marcio Kogan
                    </span>
                  </div>
                  
                </li> 
                <li>
                  <div>
                    <span>
                    Estética minimalista e atemporal
                    </span>
                  </div>
                  
                </li> 
                <li>
                  <div>
                    <span>
                    Fachada viva e dinâmica
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



