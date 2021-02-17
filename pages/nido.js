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

        <section className={Styles.heroTeste3} id="hero" data-aos="fade-in">

            <div className={Styles.imgHero}>
                <img src="../../images/nido/nido-cover.jpg"/>
            </div>

            <div className={Styles.heroContainer}>
                
                <div className={Styles.intro}>
                    
                    <div className={Styles.info}>
                        <h1>NIDO</h1>
                        <br/>
                        <span className={Styles.claim}>
                            Um apartamento que nasceu para ser casa.    
                        </span>
                        <p class="text-sm">
                        Em obras · Vila Ipojuca<br/>
                        <b>
                            Rua Capitão Alceu Vieira, 44<br/>
                            Brasil Arquitetura
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
                                    <span>Apartamento 92m²</span><br/>
                                    <b>Disponível para comprar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Apartamento 96m² · Planta 1</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Apartamento 96m² · Planta 2</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Apartamento 138m² · Planta 1</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Apartamento 138m² · Planta 2</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Apartamento 143m²</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Apartamento 190m² · Planta 1</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Apartamento 190m² · Planta 2</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Cobertura 265m² · Planta 1</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Cobertura 265m² · Planta 2</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Casa 212m²</span><br/>
                                    <b>Disponível para alugar</b>
                                    </span>
                                </div>
                                <img src="../../images/icon/plus.svg" class="icon list"/>
                            </li>
                            <li>
                                <div>
                                    <span>
                                    <span>Casa 241m²</span><br/>
                                    <b>Disponível para alugar</b>
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
            Uma casa que Otavio Zarvos construiu para a família em seu sítio foi o ponto de partida para esse projeto do escritório Brasil Arquitetura. Uma ideia tão simples quanto inteligente: uma suíte em cada lado, sala e cozinha no centro. Nenhum espaço desperdiçado com circulação. Ao redor, amplas janelas, muita luz natural. 
            </h2>
            <div class="btn filled teaser">
              <img src="../../images/icon/tour.svg" class="icon"/>Tour virtal
            </div>
            <div class="btn outline teaser">
              <img src="../../images/icon/play.svg" class="icon"/>Assista ao teaser
            </div>
            <p>
            Assim é o Nido, que não por acaso significa ninho em espanhol: um prédio composto por casas gostosas, acolhedoras, empilhadas uma sobre a outra. Apartamentos de 92 a 241m², com duas ou três suítes e duas a três vagas na garagem. Salas espaçosas com caixilhos do chão ao teto e terraço.
            </p>
            <div class="btn ghost readmore">
              <img src="../../images/icon/plus.svg" class="icon"/> Leia mais
            </div>
          </section>

          <section>
            <div className={Styles.mosaic3b} data-aos="fade-in">
              <img src="../../images/nido/nido-01.jpg"/>
              <img src="../../images/nido/nido-02.jpg"/>
              <img src="../../images/nido/nido-03.jpg"/>
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
            <div className={Styles.mosaic3}>
              <img src="../../images/nido/nido-04.jpg"/>
              <img src="../../images/nido/nido-05.jpg"/>
              <img src="../../images/nido/nido-06.jpg"/>
            </div>
            <div class="btn outline">
              <img src="../../images/icon/gallery.svg" class="icon"/>Galeria de imagens
            </div>
          </section>

          <section data-aos="fade-in"  className={Styles.video}>
            <h2>
                A inspiração do Nido 
            </h2>
            <p>
                Otavio Zarvos comenta sobre o projeto
            </p>
            <div>
                <div className={Styles.btn}>Play</div>
                <img src="../../images/nido/nido-video.jpg"/>
            </div>
          </section>

          <section className={Styles.imgContainer} data-aos="fade-in">
            <div class="col-6">
              <h3>
                <b>Arquitetura</b><br/>
                Triptyque Architecture
              </h3>
              <span class="text-sm">
                Com foco em uma arquitetura global, a Triptyque Architecture explora as ferramentas que servem a um mundo contemporâneo e sustentável. É assim desde 2000, ano em que a brasileira Carolina Bueno e os franceses Greg Bousquet, Olivier Raffaelli e Guillaume Sibaud aterrissaram no Rio de Janeiro e mesclaram a bossa brasileira e a energia tropical à bagagem histórica adquirida no velho continente. 
              </span>
            </div>
            <figure className={Styles.figure + " col-6"}>
              <img src="../../images/arquitetura/brasilarquitetura.jpg"/>
            </figure>
          </section>

          <section className={Styles.detail}>
            <div class="col-6" data-aos="fade-in">
              <h3>
                Plantas
              </h3>
              <span class="text-sm">
              Apartamentos de 92 a 241m², com duas ou três suítes e duas a três vagas na garagem. Salas espaçosas com caixilhos do chão ao teto e terraço.
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
                    Apartamento 92m² a 143m²<br/>
                      <b>Disponível para comprar</b>
                    </span>
                  </div>
                  <img src="../../images/icon/plus.svg" class="icon list"/>
                </li>
                <li>
                  <div>
                    <span>
                    Coberturas de 190m² a 284m²<br/>
                      <b>Disponível para comprar</b>
                    </span>
                  </div>
                  <img src="../../images/icon/plus.svg" class="icon list"/>
                </li>
                <li>
                  <div>
                    <span>
                      Casas de 212m² a  241m²<br/>
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
              <h3>
                Detalhamento
              </h3>
              <span class="text-sm">
              A sensação de estar em casa continua nas áreas comuns: um agradável pátio central, piscinas para adultos e crianças, salão de festas, academia e brinquedoteca. 
              </span>
            </div>

            <div className={Styles.fichaTecnica + " col-6"}>
              <ol data-aos="fade-in">
                <li>
                  <div>
                    <span>
                    Depósitos para todos os apartamentos
                    </span>
                  </div>
                  
                </li>    
                <li>
                  <div>
                    <span>
                    Arquitetura Brasil Arquitetura
                    </span>
                  </div>
                  
                </li> 
                <li>
                  <div>
                    <span>
                    Paisagismo Rodrigo Oliveira
                    </span>
                  </div>
                  
                </li> 
                <li>
                  <div>
                    <span>
                    58 unidades
                    </span>
                  </div>
                  
                </li> 
                <li>
                  <div>
                    <span>
                    2 a 3 dormitórios
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
                Estúdio Penha fala sobre o projeto funcional e acolhedor para o decorado do POP Grafite
              </h3>
              <span class="text-sm">
              Localizado na loja pop-up da Idea!Zarvos, o decorado do POP Grafite é assinado pelo Estúdio Penha. As arquitetas aplicaram ao projeto soluções que tornaram o studio um ambiente superacolhedor e funcional.
              </span>
              <div class="btn">
                Ler no Magazine
              </div>
            </div>
            <figure className={Styles.figure + " col-6"} data-aos="fade-in">
              <img src="../../images/nido/nido-mag.jpg"/>
            </figure>
          </section>

      </div>
      
      <Footer/>
    </div>
  )
}



