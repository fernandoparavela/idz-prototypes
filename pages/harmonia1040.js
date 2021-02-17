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
        <title>Harmonia 1040 · Idea!Zarvos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no"></meta>
      </Head>

      <Header/>
      

      <div className="container-fluid">
       
        <section className={Styles.heroTeste4} data-aos="fade-in">
          
          <div className={Styles.homeImgLeft}>
            <img src="../../images/harmonia1040/harmonia1040-cover.jpg"/>
          </div> 

          <div className={Styles.heroContainer}>
            
             <div className={Styles.intro}>
                
              <div className={Styles.info}>
                    <h1>HARMONIA <sup>1040</sup></h1>
                    <br/>
                    <span className={Styles.claim}>
                    Harmonia é a rua, o nome do prédio e a palavra-chave desse projeto.
                    </span>
                    <p class="text-sm">
                    Lançamento · Vila Madalena<br/>
                    <b>
                        Rua Harmonia, 1040<br/>
                        Arquitetura Carvalho Araújo
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
                            <span>Apartamento 333m² · 3 suítes</span><br/>
                            <b>Disponível para comprar</b>
                            </span>
                        </div>
                        <img src="../../images/icon/plus.svg" class="icon list"/>
                        </li>
                        <li>
                        <div>
                            <span>
                            <span>Apartamento 333m² · 4 suítes</span><br/>
                            <b>Disponível para alugar</b>
                            </span>
                        </div>
                        <img src="../../images/icon/plus.svg" class="icon list"/>
                        </li>
                        <li>
                        <div>
                            <span>
                            <span>Apartamento 333m² · 5 suítes</span><br/>
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
          </div> 
        </section>
      </div>

      <div class="container">

        <section class="col-8" data-aos="fade-in">
          <h2>
            Projeto do premiado escritório português Carvalho Araújo, o Harmonia 1040 equilibra com maestria a potência de um edifício de 28 andares, situado no ponto mais alto da Vila Madalena, com a elegância de linhas arquitetônicas atemporais.
          </h2>
          <div class="btn filled teaser">
            <img src="../../images/icon/tour.svg" class="icon"/>Tour virtal
          </div>
          <div class="btn outline teaser">
            <img src="../../images/icon/play.svg" class="icon"/>Teaser
          </div>
          <p>
            Utilizando recursos precisos para suavizar seu volume, os arquitetos projetaram um prédio que se insere com delicadeza (e harmonia!) numa região em plena transformação. 
          </p>
          <p>
            Essa contenção formal valoriza a qualidade do desenho, as proporções e os materiais escolhidos: concreto ripado, vidro e cerâmica esmaltada em tom de verde muito especial. A aparente simplicidade esconde raciocínios elaborados que serão descobertos aos poucos, como pequenas surpresas.
          </p>
          <div class="btn ghost readmore">
            <img src="../../images/icon/plus.svg" class="icon"/> Leia mais
          </div>
        </section>

        <section>
          <div className={Styles.mosaic2} data-aos="fade-in">
            <img src="../../images/harmonia1040/harmonia1040-01.jpg"/>
            <img src="../../images/harmonia1040/harmonia1040-02.jpg"/>
          </div>
          <div class="btn outline">
            <img src="../../images/icon/gallery.svg" class="icon"/>Galeria de imagens
          </div>
        </section>

        <section class="col-8" data-aos="fade-in">
          <h2>
            A sala possui amplos caixilhos e varanda generosa, que pode ser integrada, formando uma área social com mais de 21 metros lineares. 
          </h2>
          <p>
            São vinte apartamentos com 333m2, um por andar, e cobertura com 668m2. Todos com opções  de planta com 2 a 5 suítes. 
          </p>
          <div class="btn ghost readmore">
            <img src="../../images/icon/plus.svg" class="icon"/> Leia mais
          </div>
        </section>

        <section data-aos="fade-in">
          <div className={Styles.mosaic3}>
            <img src="../../images/harmonia1040/harmonia1040-03.jpg"/>
            <img src="../../images/harmonia1040/harmonia1040-04.jpg"/>
            <img src="../../images/harmonia1040/harmonia1040-05.jpg"/>
          </div>
          <div class="btn outline">
            <img src="../../images/icon/gallery.svg" class="icon"/>Galeria de imagens
          </div>
        </section>

        <section className={Styles.imgContainer} data-aos="fade-in">
          <div class="col-6">
            <h2>
              <b>Arquitetura</b><br/>
              Carvalho Araújo
            </h2>
            <p class="text-sm">
              Reconhecido internacionalmente por projetos que interagem em harmonia com o local onde se inserem, José Carvalho Araújo tem uma arquitetura que sintetiza conceitos complexos em desenhos simples e contemporâneos. Os projetos e produtos do arquiteto português caracterizam-se pela elegância, em uma atitude de contenção formal, valorizando a qualidade do desenho, das proporções e dos materiais. O desenho não é motivo para exibicionismo, mas antes um ato perfeitamente racional e simultaneamente poético.
            </p>
          </div>
          <figure className={Styles.figure + " col-6"}>
            <img src="../../images/arquitetura/caraujo.jpg"/>
          </figure>
        </section>

        <section className={Styles.detail}>
          <div class="col-6" data-aos="fade-in">
            <h2>
              Plantas
            </h2>
            <p class="text-sm">
            Salas com amplos caixilhos e varanda generosa, que pode ser integrada, formando uma área social com mais de 21 metros lineares.
            </p>
          </div>
          <div class="col-6">
            <ol data-aos="fade-in">
              <p class="text-sm">
                <b>Residenciais</b>
              </p>
              <li>
                <div>
                  <span>
                  Apartamento 333m² · 3 suítes<br/>
                    <b>Disponível para comprar</b>
                  </span>
                </div>
                <img src="../../images/icon/plus.svg" class="icon list"/>
              </li>
              <li>
                <div>
                  <span>
                  Apartamento 333m² · 4 suítes<br/>
                    <b>Disponível para comprar</b>
                  </span>
                </div>
                <img src="../../images/icon/plus.svg" class="icon list"/>
              </li>
              <li>
                <div>
                  <span>
                    Apartamento 333m² · 5 suítes<br/>
                    <b>Disponível para comprar</b>
                  </span>
                </div>
                <img src="../../images/icon/plus.svg" class="icon list"/>
              </li>
              <li>
                <div>
                  <span>
                  Cobertura 668m²<br/>
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
            <p class="text-sm">
              A aparente simplicidade esconde raciocínios elaborados que serão descobertos aos poucos, como pequenas surpresas.
            </p>
          </div>

          <div className={Styles.fichaTecnica + " col-6"}>
            <ol data-aos="fade-in">
              <li>
                <div>
                  <span>
                  Todos os apartamentos com face norte
                  </span>
                </div>
              </li>    
              <li>
                <div>
                  <span>
                  Arquitetura de Carvalho Araújo
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
                  Academia, piscina, sauna, sala de massagem e mais
                  </span>
                </div>
                
              </li> 
              <li>
                <div>
                  <span>
                  Apartamentos com 2 a 5 suítes
                  </span>
                </div>
                
              </li>
              <div class="btn ghost list">
                <img src="../../images/icon/plus.svg" class="icon"/> Ver todos os diferenciais e ficha técnica
              </div>         
            </ol>
          </div>

        </section>

        <section className={Styles.imgContainer}>
          <div class="col-6" data-aos="fade-in">
            <h3>
              <b>Magazine</b><br/>
              O arquiteto português Carvalho Araújo fala sobre o processo criativo do Harmonia 1040
            </h3>
            <div class="btn">
              Ler no Magazine
            </div>
          </div>
          <figure className={Styles.figure + " col-6"} data-aos="fade-in">
            <img src="../../images/harmonia1040/harmonia1040-mag.jpg"/>
          </figure>
        </section>

      </div>
      
      <Footer/>

  </div>
  )
}



