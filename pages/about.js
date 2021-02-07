import Head from 'next/head'
import Header from '../components/header-global.js'
import Footer from '../components/footer-global.js'
import aboutStyles from '../styles/about.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import React, {useEffect} from "react";
import Helmet from 'react-helmet'

export default function About() {

  //scroll transition lib
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 40,
      easing: 'ease-in-out',
    })
  },);

  return (
    <div>
      <div id="about" className="container">

        {/* Reusable React component to manage changes to the document head. */}
        <Helmet bodyAttributes={{style: 'background-color : #697976; color:#fff; transition: 0.2s ease-in-out'}}/>

        <Head>
          <title>Sobre nós · Try</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>

        <section className={aboutStyles.content + ' col-6'} data-aos="fade-in">
          <div className="col-4"> 
          </div>
          <h2>
            Pioneiros em experiência do usuário. De ponta a ponta.
          </h2>
          <p>
            O modelo tradicional de negócios está quebrado. Divisões entre produto, marketing, vendas e canais não existem mais.  Propostas de negócio e demandas de consumo precisam ser pensadas de forma integrada, numa narrativa contínua que apaga as fronteiras entre produto, marca e serviço.  
          </p>
          <p>
          Desenhamos experiências de ponta a ponta, partindo da pesquisa e estratégia até o último detalhe do design. Se o seu negócio já está estruturado, podemos diagnosticar os gain points e redesenhar onde necessário para aumentar o valor das interações e atingir seu potencial máximo.
          </p>
        </section>

        <section data-aos="fade-in">
          <img src="../images/about/about-img01.jpg" className="imgFull"/>
        </section>

        <section className={aboutStyles.content + ' col-6'}>
          <div className="col-4"> 
          </div>
          <h2 data-aos="fade-in">
          Estratégia.<br/>Experiência.<br/>Design.
          </h2>
          <p data-aos="fade-in">
          À medida que o cenário comunicação vai se transformando, a interação primária das pessoas com marcas acontece mais e mais no digital. Assim as ferramentas de experiência do usuário e design de serviço passam a ocupar o centro da construção de marca.
          </p> 
        </section>

        <section className={aboutStyles.content + ' col-6'}>
          <img src="../images/about/about-img02.png" className="imgFull" data-aos="fade-in"/>
        </section>

        <section className={aboutStyles.content + ' col-6'} data-aos="fade-in">
          <p>
            Serviços
          </p>
          <div className={aboutStyles.services}>
            <ul className="col2">
              <li>UX and Business Strategy</li>
              <li>Research &#38; User Testing</li>
              <li>Digital Product Design</li>
              <li>UI &#38; Design Systems</li>
              <li>Experience vision</li>
              <li>Concept Design</li>
            </ul>
            <ul className="col2">
              <li>Service Design</li>
              <li>Customer Journeys</li>
              <li>Branding: Strategy &#38; Design</li>
              <li>Content Strategy &#38; UX Writing</li>
              <li>Web &#38; Mobile Development</li>
            </ul>
          </div>
        </section>

        <section className="macroSection">

          <section className={aboutStyles.content + ' col-6'}>
          <div className="col-4"> 
          </div>
          <h2 data-aos="fade-in">
            80 pessoas.<br/>
            8 cidades.<br/>
            4 países.
          </h2>
          <p data-aos="fade-in">
          Times pequenos, talentosos e experientes. Rápidos e autônomos. Multidisciplinares e diversos, formados pelos melhores talentos espalhados pelo globo e prontos para descobrir juntos com você como hackear seu próprio negócio, libertando valor em todos os pontos da cadeia.
          </p>
        </section>

          <section className={aboutStyles.leadershipPics}>

            <div data-aos="fade-in">
              <img src="../images/about/team.jpg"/>
              <span className={aboutStyles.leadershipName}>Maria Ercilia Galvão Bueno</span>
              <span className={aboutStyles.leadershipRole}>CEO</span>
            </div>
            <div data-aos="fade-in">
              <img src="../images/about/team.jpg"/>
              <span className={aboutStyles.leadershipName}>Maria Ercilia Galvão Bueno</span>
              <span className={aboutStyles.leadershipRole}>CEO</span>
            </div>
            <div data-aos="fade-in">
              <img src="../images/about/team.jpg"/>
              <span className={aboutStyles.leadershipName}>Maria Ercilia Galvão Bueno</span>
              <span className={aboutStyles.leadershipRole}>CEO</span>
            </div>
            <div data-aos="fade-in">
              <img src="../images/about/team.jpg"/>
              <span className={aboutStyles.leadershipName}>Maria Ercilia Galvão Bueno</span>
              <span className={aboutStyles.leadershipRole}>CEO</span>
            </div>
            <div data-aos="fade-in">
              <img src="../images/about/team.jpg"/>
              <span className={aboutStyles.leadershipName}>Maria Ercilia Galvão Bueno</span>
              <span className={aboutStyles.leadershipRole}>CEO</span>
            </div>
            <div data-aos="fade-in">
              <img src="../images/about/team.jpg"/>
              <span className={aboutStyles.leadershipName}>Maria Ercilia Galvão Bueno</span>
              <span className={aboutStyles.leadershipRole}>CEO</span>
            </div>
            <div data-aos="fade-in">
              <img src="../images/about/team.jpg"/>
              <span className={aboutStyles.leadershipName}>Maria Ercilia Galvão Bueno</span>
              <span className={aboutStyles.leadershipRole}>CEO</span>
            </div>
            <div data-aos="fade-in">
              <img src="../images/about/team.jpg"/>
              <span className={aboutStyles.leadershipName}>Maria Ercilia Galvão Bueno</span>
              <span className={aboutStyles.leadershipRole}>CEO</span>
            </div>
            <div data-aos="fade-in">
              <img src="../images/about/team.jpg"/>
              <span className={aboutStyles.leadershipName}>Maria Ercilia Galvão Bueno</span>
              <span className={aboutStyles.leadershipRole}>CEO</span>
            </div>
        
          </section>
          
        </section>


        <section className="macroSection">
          <section className={aboutStyles.leadershipList + ' col-8'}>
              <p data-aos="fade-in">
                  Lideranças
              </p>
              <ul data-aos="fade-in">
                <li>
                  <span>Caetano Sevilla</span>
                  <span>Design Lead</span>
                </li>
                <li>
                  <span>Claudia Scire</span>
                  <span>Research Lead</span>
                </li>
                <li>
                  <span>Daniela Parra</span>
                  <span>Senior Product Designer</span>
                </li>
                <li>
                  <span>Heron Dias</span>
                  <span>UX Lead</span>
                </li>
                <li>
                  <span>João Guardini</span>
                  <span>UX Lead</span>
                </li>
                <li>
                  <span>Juliana Gonçalves</span>
                  <span>Head de Produto</span>
                </li>
                <li>
                  <span>Marcelo Prati</span>
                  <span>Design Lead</span>
                </li>
                <li>
                  <span>Rafael Lepritiê</span>
                  <span>UX Lead</span>
                </li>
                <li>
                  <span>Rafael Santos</span>
                  <span>UX Lead</span>
                </li>              
                <li>
                  <span>Viktor Eisenmann</span>
                  <span>Senior UX Designer</span>
                </li>
              </ul>              
                              
          </section>
        </section>
        
      </div>
      <Footer/>
    </div>
    
  )
}
