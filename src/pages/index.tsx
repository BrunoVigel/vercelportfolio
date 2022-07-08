import Head from "next/head";
import Link from "next/link";
import { SkillCard } from "../../skills";
import stylesSkills from "../components/SkillsCards/styles.module.scss";
import styles from "./styles.module.scss";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import HeroSVG from '../../public/images/svgs/hero.svg'
import AboutSVG from '../../public/images/svgs/aboutme.svg'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin } from "react-icons/fa";



export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Portfolio</title>
      </Head>

      <div className={`${styles.hero} container`}>
          <div className={styles.apresentacao}>
            <h1>
              <Typewriter words={['Bruno Vigel, Desenvolvedor Front-end']} cursor cursorStyle='|' />
            </h1>
            <div className={styles.socials}>
              <a target="_blank" href="https://www.linkedin.com/in/brunovigel/"><FaLinkedin fontSize={48}/></a>
              <a target="_blank" href="https://github.com/BrunoVigel"><FaGithub  fontSize={48}/></a>
            </div>
          </div>
        <Image className={styles.img} src={HeroSVG}/>
      </div>

      <div className={`${styles.aboutMe} container`}>
        <Image className={styles.img} src={AboutSVG}/>
        <div className={styles.text}>
          <p>Sobre mim</p>
          <p>Olá! Meu nome é Bruno, tenho 22 anos e sou desenvolvedor FrontEnd. Apaixonado por aprender novas tecnologias e técnicas, pensando na funcionalidade das aplicações e na forma mais limpa de desenvolvê-las.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.projectsHome}>
          <p>Projetos</p>
          <div className={styles.swiperContainer}>
            <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
              <SwiperSlide>
                <img src="/images/impulse/captura1.png" alt="Imagem do projeto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/impulse/captura2.png" alt="Imagem do projeto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/impulse/captura3.png" alt="Imagem do projeto" />
              </SwiperSlide>
            </Swiper>
            <div className={styles.descricaoProjeto}>
              <p>Impulse feedback</p>
              <p>Projeto de Widget de feedback utilizando React, Typescript e Tailwind CSS.</p>
            </div>
          </div>
          <Link href="/projetos">Ver todos os projetos</Link>
        </div>

        <div className={styles.SectionCardHome}>
          <p>Minha stack</p>
          <div className={stylesSkills.cards}>
            {Object.entries(SkillCard).map(([key, value]) => {
              if (
                value.title === "React" ||
                value.title === "Next.js" ||
                value.title === "Typescript"
              ) {
                return (
                  <div className={stylesSkills.card} key={key}>
                    <img src={value.image.source} alt="" />
                    <dl>{value.title}</dl>
                    <dd>{value.definition}</dd>
                  </div>
                );
              }
            })}
          </div>
          <Link href="/skills">Ver stack completa</Link>
        </div>
      </div>
    </>
  );
}
