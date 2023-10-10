import styles from './Circulo.module.css'

function Circulo(props,{x}){    


    return <div id='x' className={styles.fundo_nota}>{props.children}</div> 
    
}

export default Circulo