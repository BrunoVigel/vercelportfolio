import styles from './styles.module.scss'
import Image from 'next/image'
import {SkillCard} from '../../../skills'


export default function SkillsCards() {
    return(
        <div className={styles.cards}>
          {Object.entries(SkillCard).map(([key, value]) => {
            return(
              <div className={styles.card} key={key}>
               <Image src={value.image.source} width={250} height={250} alt=''/>
                <dl>
                  <dt>{value.title}</dt>
                  <dd>
                   {value.definition}
                  </dd>
                </dl>
              </div>
            )
          })}
        </div>
    )
}