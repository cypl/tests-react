import React, { useState } from 'react';
import Button from './Button';
import Counter from './Counter';
import CounterMax from './CounterMax';

function ParentWrapper(){

    const [valeur, setValeur] = useState(0);

    function add(){
        setValeur(valeur + 1);
    }
    function sub(){
        setValeur(valeur - 1);
    }

    const max = 2

    return (
        <div className="wrapper_parent">
            {valeur > max || valeur < -max ? <CounterMax /> : <Counter valeur={valeur} />}
            <div className="wrapper">
                {valeur < -max ? <Button styleclass="red deactivate" label="Retirer"/> : <Button styleclass="red" label="Retirer" onClick={sub}/>}
                {valeur > max ? <Button styleclass="green deactivate" label="Ajouter"/> : <Button styleclass="green" label="Ajouter" onClick={add}/>}
            </div>
        </div>
    );

}

export default ParentWrapper;