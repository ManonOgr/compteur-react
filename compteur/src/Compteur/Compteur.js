import React, { useState } from 'react';
import styles from './Compteur.css';

const InputCompteur = () => {

    const [count, setCount] = useState(0);
    const onUpdate = (number)=>{
setCount(count + number)
    };

    return (
        <div>
         <div className="stepper horizontal">
    < button className="arrow top" onClick={(event)=>onUpdate(- 1)}> - </button>
    <div className="box">
        <div className="numbers1">{count}</div>
    </div>
    < button className="arrow bottom" onClick={(event)=>onUpdate( 1)}> + </button>
</div>    
        </div>
    );
};

export default InputCompteur;