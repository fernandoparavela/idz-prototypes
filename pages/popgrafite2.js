import Head from 'next/head'
import React, {useEffect} from "react";
import Header from '../components/header-global.js'
import Footer from '../components/footer-global.js'
import homeStyles from '../styles/home.module.css'
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
        document.getElementById("accordion-pd").classList.add(homeStyles.estoqueOpenState);     
        document.getElementById("chevron-list").style.transform = "rotate(-180deg)"
      }else{
        document.getElementById("accordion-pd").classList.remove(homeStyles.estoqueOpenState);
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


      <div className="container-fluid">
        <section className={homeStyles.heroTeste3} data-aos="fade-in">
        <div>
            <img src="../../images/pop/pop-cover.jpg"/>
          </div>
          <div className={homeStyles.heroContainer}>
            <div className={homeStyles.intro}>
                
                <div className={homeStyles.info}>
                    <h1>POP GRAFITE</h1>
                    <p class="text-sm">
                    Lançamento · Vila Madalena<br/>
                    <b>
                        Rua Padre João Gonçalves, 58<br/>
                        Arquitetura Triptyque
                    </b>
                    </p>
                    <p className={homeStyles.claim}>
                    O studio perfeito da Idea!Zarvos, com muita luz natural e arquitetura assinada por Tripiyque.
                    </p>
                    <div className={homeStyles.estoque} id="accordion-pd">
                    <div className={homeStyles.heading} onClick={toggleState} id="list-heading">
                        <span>
                        Plantas disponíveis
                        </span>
                        <img src="../../images/icon/chevron.svg" class="icon list" id="chevron-list"/>
                    </div> 
                    <ul>
                        <li>
                        <div>
                            <span>
                            <span>Studio 29m² final 1 · 1 dormitório</span><br/>
                            <b>Disponível para comprar</b>
                            </span>
                        </div>
                        <img src="../../images/icon/plus.svg" class="icon list"/>
                        </li>
                        <li>
                        <div>
                            <span>
                            <span>Loja de 1265m²</span><br/>
                            <b>Disponível para alugar</b>
                            </span>
                        </div>
                        <img src="../../images/icon/plus.svg" class="icon list"/>
                        </li>
                        <li className={homeStyles.seeMore}>
                        <div>
                            <span><span>Ver todas as plantas</span></span>
                        </div>
                        <img src="../../images/icon/plus.svg" class="icon list"/>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className={homeStyles.action}>
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

        <section class="col-9" data-aos="fade-in">
            <h2>
              Perfeito porque fica entre a Vila Madalena e Pinheiros. Perfeito porque tem studios de 27m² a 36m² com muita luz natural. Perfeito porque tem piscina e academia na cobertura, e porque tem arquitetura assinada por Triptyque.
            </h2>
            <div class="btn outline teaser">
              <img src="../../images/icon/play.svg" class="icon"/>Assista ao teaser
            </div>
            <p>
              Todas os studios têm caixilhos piso-teto e varandas privativas que aumentam a área útil e criam amplitude e conexão com o exterior. Os arquitetos buscaram valorizar os studios com amplas janelas e ventilação direta, natural.
            </p>
          </section>

          <section>
            <div className={homeStyles.mosaic3} data-aos="fade-in">
              <img src="../../images/pop/pop-01.jpg"/>
              <img src="../../images/pop/pop-02.jpg"/>
              <img src="../../images/pop/pop-03.jpg"/>
            </div>
            <div class="btn outline">
              <img src="../../images/icon/gallery.svg" class="icon"/>Galeria de imagens
            </div>
          </section>

          <section class="col-9" data-aos="fade-in">
            <h2>
              A fachada se torna arte através da dinâmica entre os painéis metálicos perfurados e a intervenção artística de Andrés Sandoval, num diálogo com os grafites do Beco do Aprendiz, que fica atrás do POP Grafite.
            </h2>
            <p>
              Cores vivas inspiradas na cena movimentada da Vila ampliam a percepção de volume nos halls de acesso aos elevadores. O paisagismo de Rodrigo Oliveira extrapola as áreas internas e leva a energia do verde também para a calçada, potencializando a integração do edifício com o entorno. A fachada ativa no térreo é mais uma voz na conversa do POP Grafite com a cidade, gerando movimento e encontros. 
            </p>
          </section>

          <section data-aos="fade-in">
            <div className={homeStyles.mosaic4}>
              <img src="../../images/pop/pop-04.jpg"/>
              <img src="../../images/pop/pop-05.jpg"/>
              <img src="../../images/pop/pop-06.jpg"/>
              <img src="../../images/pop/pop-07.jpg"/>
            </div>
            <div class="btn outline">
              <img src="../../images/icon/gallery.svg" class="icon"/>Galeria de imagens
            </div>
          </section>

          <section className={homeStyles.imgContainer} data-aos="fade-in">
            <div class="col-6">
              <h3>
                Arquitetura<br/>
                <b>Triptyque Architecture</b>
              </h3>
              <span class="text-sm">
                Com foco em uma arquitetura global, a Triptyque Architecture explora as ferramentas que servem a um mundo contemporâneo e sustentável. É assim desde 2000, ano em que a brasileira Carolina Bueno e os franceses Greg Bousquet, Olivier Raffaelli e Guillaume Sibaud aterrissaram no Rio de Janeiro e mesclaram a bossa brasileira e a energia tropical à bagagem histórica adquirida no velho continente. 
              </span>
            </div>
            <figure className={homeStyles.figure + " col-6"}>
              <img src="../../images/pop/pop-08.jpg"/>
            </figure>
          </section>

          <section className={homeStyles.detail}>
            <div class="col-6" data-aos="fade-in">
              <h3>
                Plantas
              </h3>
              <span class="text-sm">
                São 111 studios de 28m² a 36m² com janela piso-teto, muita ventilação e iluminação natural.
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
                      Studio 28m²<br/>
                      <b>Disponível para comprar</b>
                    </span>
                  </div>
                  <img src="../../images/icon/plus.svg" class="icon list"/>
                </li>
                <li>
                  <div>
                    <span>
                      Studio 29m² final 1 · 1 dormitório<br/>
                      <b>Disponível para comprar</b>
                    </span>
                  </div>
                  <img src="../../images/icon/plus.svg" class="icon list"/>
                </li>
                <li>
                  <div>
                    <span>
                      Studio 29m² final 2 · 1 dormitório<br/>
                      <b>Sem unidades disponíveis</b>
                    </span>
                  </div>
                  <img src="../../images/icon/plus.svg" class="icon list"/>
                </li>
              </ol>
              <ol data-aos="fade-in">
                <p class="text-sm">
                  <b>Comerciais</b>
                </p>
                <li>
                  <div>
                    <span>
                      Loja de 1265m²<br/>
                      <b>Disponível para alugar</b>
                    </span>
                  </div>
                  <img src="../../images/icon/plus.svg" class="icon list"/>
                </li>
              </ol>
            </div>
          </section>

          <section className={homeStyles.detail}>

            <div class="col-6" data-aos="fade-in">
              <h3>
                Detalhamento
              </h3>
              <span class="text-sm">
                Todas os studios têm caixilhos piso-teto e varandas privativas que aumentam a área útil e criam amplitude e conexão com o exterior.
              </span>
            </div>

            <div className={homeStyles.fichaTecnica + " col-6"}>
              <ol data-aos="fade-in">
                <li>
                  <div>
                    <span>
                      Paredes grauteadas
                    </span>
                  </div>
                  <img src="../../images/icon/feat-01.svg"/>
                </li>    
                <li>
                  <div>
                    <span>
                      Contrapiso flutuante acústico
                    </span>
                  </div>
                  <img src="../../images/icon/feat-02.svg"/>
                </li> 
                <li>
                  <div>
                    <span>
                      Lavanderia coletiva
                    </span>
                  </div>
                  <img src="../../images/icon/feat-03.svg"/>
                </li> 
                <li>
                  <div>
                    <span>
                      Arquitetura Triptyque
                    </span>
                  </div>
                  <img src="../../images/icon/plus.svg" class="icon list"/>
                </li> 
                <li>
                  <div>
                    <span>
                      Studios de 27m² a 36m² · 1 dormitório
                    </span>
                  </div>
                  
                </li>
                <div class="btn ghost list">
                  <img src="../../images/icon/plus.svg" class="icon"/> Ver todos os diferenciais e ficha técnica
                </div>         
              </ol>
            </div>

          </section>

          <section className={homeStyles.imgContainer}>
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
            <figure className={homeStyles.figure + " col-6"} data-aos="fade-in">
              <img src="../../images/pop/pop-09.jpg"/>
            </figure>
          </section>

      </div>
      
      <Footer/>
    </div>
  )
}



