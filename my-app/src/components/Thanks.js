import styles from './Thanks.module.css'
import imgThanks from '../img/illustration-thank-you.svg'


function Thanks({ nota }) {
    return (
        <div className={styles.card}>
            <img src={imgThanks} alt="" />
            <div className={styles.nota}>
                <p>Sua nota Foi {nota} de 5</p>

            </div>
            <div className={styles.agradecimento}>
                <h1>Obrigado!</h1>
                <p>Agradecemos por dedicar seu tempo para avaliar.</p>
                <p>Se precisar de mais suporte,</p>
                <p>não hesite em entrar em contato</p>
            </div>
        </div>
    )
}

export default Thanks
