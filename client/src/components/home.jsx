import React from 'react';

import "./styles/styles.css"; 

export class Home extends React.Component {
    render() {
        return (
            <>
               <div className="container_index">
                   <h1>Jairo Sebastian</h1>
                   <p>Jimenez Taborda</p>
                   <p>Preguntas y respuestas</p>
                   <a href="/preguntas">Play</a>
                   <a href="./historial">Scores</a>
               </div>
            </>
        );
    };
};