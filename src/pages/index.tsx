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
              <Typewriter words={['Olá, eu sou o Bruno, Desenvolvedor Front-end']} cursor cursorStyle='|' />
            </h1>
            <div className={styles.socials}>
              <a href=""><FaLinkedin fontSize={48}/></a>
              <a href=""><FaGithub  fontSize={48}/></a>
            </div>
          </div>
        <Image className={styles.img} src={HeroSVG}/>
      </div>

      <div className="container">
        <div className={styles.projectsHome} id="projetos">
          <p>Projetos</p>
          <div className={styles.swiperContainer}>
            <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
              <SwiperSlide>
                <img src="/images/print1.png" alt="Imagem do projeto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/print1.png" alt="Imagem do projeto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/print1.png" alt="Imagem do projeto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/print1.png" alt="Imagem do projeto" />
              </SwiperSlide>
            </Swiper>
            <div className={styles.descricaoProjeto}>
              <p>ReactStore</p>
              <p>Projeto para ecommerce desenvolivdo com:</p>
              <ul>
                <li>- React</li>
                <li>- React Hooks</li>
                <li>- Redux</li>
                <li>- Bootstrap</li>
              </ul>
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
