import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './styles.module.scss'
import Head from 'next/head';

export default function projetos() {
    return (
        <>
            <Head>
                <title>Projetos | Skills</title>
            </Head>
            <section className={`${styles.section} container`}>
                <div className={styles.swiperContainer}>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        >
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

                <div className={styles.swiperContainer}>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        >
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
            </section>
        </>
    )
}