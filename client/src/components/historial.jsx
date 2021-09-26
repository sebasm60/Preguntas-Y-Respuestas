import React from 'react';
import axios from 'axios';
import './styles/historial.css'

export class Historial extends React.Component {

    state = {
        historial : [],
    };

    async componentDidMount(){
        const historial = await axios.get(`http://localhost:5000/historial`);
        this.setState({historial : historial.data});
    }
    
    render() {
        return (
            <>
            <div className="contaier">
                <div className="form_wrapper_ordenes">
                        <table className="">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>puntos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.historial.map((historial, index) => (
                                    <tr key={index}>
                                        <th>{historial.nombre}</th>
                                        <th>{historial.puntos}</th>                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
                <a href='./'> Back</a>
            </div>
        </>
        )
    }
}