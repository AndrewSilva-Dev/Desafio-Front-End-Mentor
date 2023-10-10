import Card from './components/Card';
import Container from './components/Container';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Thanks from './components/Thanks';
import { useState } from 'react';
import Btn from './components/Btn';
import styles from './components/Card.module.css'
import star from './img/icon-star.svg'



function App() {
  const [data, setData] = useState()


  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<div className={styles.card}>
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
                <Btn nota={1} x={() => setData(1)} />
                <Btn nota={2} x={() => setData(2)} />
                <Btn nota={3} x={() => setData(3)} />
                <Btn nota={4} x={() => setData(4)} />
                <Btn nota={5} x={() => setData(5)} />
              </div>
              <Link to={'/thanks'} ><input type="submit" value="Submit" /></Link>
            </div>
          </div>}>
          </Route>

        </Routes>
        <Routes>
          <Route path='/thanks' element={<Thanks nota={data} />}></Route>
        </Routes>


      </Container>
    </Router>
  );
}

export default App;
