import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import styles from './styles.module.scss'

export function Typewritter(){
    return(
        <div className={styles.typewritter}>
        <h1>
            <Typewriter words={['Olá, eu sou o Bruno']} cursor cursorStyle='|' />
        </h1>
        <p>
            Sou desenvolvedor Frontend apaixonado por aprender novas tecnologias e técnicas, pensando na
            funcionalidade das aplicações e na forma mais limpa de
            desenvolvê-las.
        </p>
        </div>
    )
}