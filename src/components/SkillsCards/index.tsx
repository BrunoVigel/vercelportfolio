import styles from './styles.module.scss'

import {SkillCard} from '../../../skills'

export default function SkillsCards() {
    return(
        <div className={styles.cards}>
          {Object.entries(SkillCard).map(([key, value]) => {
            return(
              <div className={styles.card} key={key}>
               <img src={value.image.source} alt="" />
                <dt>{value.title}</dt>
                <dd>
                 {value.definition}
               </dd>
              </div>
            )
          })}
        </div>
    )
}