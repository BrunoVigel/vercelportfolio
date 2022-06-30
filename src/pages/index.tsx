import Head from 'next/head'
import {SkillCard} from '../../skills'
import styles from '../components/SkillsCards/styles.module.scss'



export default function Home() {

  return(
    <>
      <Head>
        <title>Home | Portfolio</title>
      </Head>
      
      {/* <h1>Homepage</h1> */}
      
      {/* <div className={styles.cards}>
          {Object.entries(SkillCard).map(([key, value]) => {
            if(value.title === 'React' || value.title === 'NodeJS' || value.title === 'SASS') {
              return(
                <div className={styles.card} key={key}>
                 <img src={value.image.source} alt="" />
                  <dl>{value.title}</dl>
                  <dd>
                   {value.definition}
                 </dd>
                </div>
              )
            }
          })}
        </div> */}
    </>
    
  )
}
