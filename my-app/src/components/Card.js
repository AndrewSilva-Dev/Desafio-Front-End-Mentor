import styles from './Card.module.css'
import star from '../img/icon-star.svg'
import { Link } from 'react-router-dom'
import Btn from './Btn'
import { useState } from 'react'



function Card(valor) {


    const [nota, setNota] = useState()
    function e (e){
        e.preventdefault()
    }
   
    return (

        <div className={styles.card}>
            <div className={styles.teste}>
                <div className={styles.circulo_star}>
                    <img className={styles.star} src={star} alt="" />
                </div>
            </div>
            <div className={styles.escrita}>
                <div className={styles.div_escrita}>
                    <h1>Como fizemos?</h1>
                    <p className={styles.cinza}>Informe-nos como nos saímos com sua solicitação de suporte.</p>
                    <p className={styles.cinza}>Todos os comentários são apreciados para nos ajudar a</p>
                    <p className={styles.cinza}>melhorar nossa oferta!</p>
                </div>
                <div className={styles.numbers_div}>
                    <Btn nota={1} x={() => setNota(1)} />
                    <Btn nota={2} x={() => setNota(2)} />
                    <Btn nota={3} x={() => setNota(3)} />
                    <Btn nota={4} x={() => setNota(4)} />
                    <Btn nota={5} x={() => setNota(5)} />
                </div>
                <Link  ><input type="submit" value="Submit" onClick={()=>{ valor = nota}} /></Link>
            </div>

        </div>

    )
}

export default Card