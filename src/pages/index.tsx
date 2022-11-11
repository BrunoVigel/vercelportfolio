import Head from "next/head";
import { SkillCard } from "../../skills";
import stylesSkills from "../components/SkillsCards/styles.module.scss";
import styles from "./styles.module.scss";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import HeroSVG from '../../public/images/svgs/hero.svg'
import AboutSVG from '../../public/images/svgs/aboutme.svg'
import { Typewriter} from 'react-simple-typewriter'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ButtonLink } from "../components/ButtonLink";
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <meta name="author" content="Bruno Vigel"/>
        <meta name="description" content="Bruno Vigel Desenvolvedor Front-End"/>
        <title>Home | Portfolio</title>
      </Head>

      {/* 
      
      Seção Hero
      
      */}

      <div className={`${styles.hero} container`}>
          <div className={styles.apresentacao}>
            <h1>
              <Typewriter words={['Bruno Vigel, Desenvolvedor Front-end']} cursor cursorStyle='|' />
            </h1>
            <div className={styles.socials}>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brunovigel/" aria-label="Linkedin"><FaLinkedin fontSize={48}/></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/BrunoVigel" aria-label="Github"><FaGithub  fontSize={48}/></a>
            </div>
          </div>
        <Image className={styles.img} src={HeroSVG} alt="Imagem hero"/>
      </div>


      {/* 
      
      Seção AboutMe

      */}

      <div className={`${styles.aboutMe} container`}>
        <Image className={styles.img} src={AboutSVG} alt="Imagem sobre mim"/>
        <div className={styles.text}>
          <p>Sobre mim</p>
          <p>Olá! Meu nome é Bruno, tenho 22 anos e sou desenvolvedor FrontEnd. Apaixonado por aprender novas tecnologias e técnicas, pensando na funcionalidade das aplicações e na forma mais limpa de desenvolvê-las.</p>
        </div>
      </div>

      {/* 
      
      Seção de Projetos
      
      */}

      <div className="container">
        <div className={styles.projectsHome}>
          <p>Projetos</p>
          <div className={styles.swiperContainer}>
            <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
              <SwiperSlide>
                <Image src="/images/impulse/captura1.png" alt="Imagem do projeto" width={668} height={335}/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/impulse/captura2.png" alt="Imagem do projeto" width={668} height={335}/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/impulse/captura3.png" alt="Imagem do projeto" width={668} height={335}/>
              </SwiperSlide>
            </Swiper>
            <div className={styles.descricaoProjeto}>
              <p>Impulse feedback</p>
              <p>Projeto de Widget de feedback utilizando React, Typescript e Tailwind CSS.</p>
            </div>
          </div>
          <ButtonLink href='/projetos' variant='primary' title='Ver todos os projetos'/>
          
        </div>


        {/* 
        
        Seção de cards de Skills

        */}
        <div className={styles.SectionCardHome}>
          <p>Minha skills</p>
          <div className={stylesSkills.cards}>
            {Object.entries(SkillCard).map(([key, value]) => {
              if (
                value.title === "React" ||
                value.title === "Next.js" ||
                value.title === "Typescript"
              ) {
                return (
                  <div className={stylesSkills.card} key={key}>
                    <Image src={value.image.source} width={250} height={250} alt=''/>
                    <dl>
                      <dt>{value.title}</dt>
                      <dd>{value.definition}</dd>
                    </dl>
                  </div>
                );
              }
            })}
          </div>
          <ButtonLink href='/skills' variant='primary' title='Ver todas skills'/>
        </div>
      </div>
    </>
  );
}
