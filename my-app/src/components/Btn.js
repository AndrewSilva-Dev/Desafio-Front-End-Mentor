import { useState } from 'react';
import style from './Btn.module.css'
import Card from './Card';

function Btn({nota,x}){
        
    return (<button onClick={x}>{nota}</button>)
}

export default Btn
