import axios from 'axios';
import Swal from 'sweetalert2';
import React, { Component } from 'react';

class Preguntas extends Component {

    state = {
        Deportes: [],
        Arte: [],
        Historia: [],
        Geografia: [],
        Ciencias: [],
        Respuestas: []
    }

    async componentDidMount(){

        //Obtengo las preguntas desde la bd y las guaro en el state.
        const preguntas = await axios.get('http://localhost:5000/preguntas');
        for(let i = 0; i < preguntas.data.length; i++){
            if(preguntas.data[i].categoria === 'Deportes/Pasatiempos'){
                this.setState({Deportes: [ ...this.state.Deportes , preguntas.data[i]]});
            } else if (preguntas.data[i].categoria === 'Arte y literatura'){
                this.setState({Arte: [ ...this.state.Arte , preguntas.data[i]]});
            } else if (preguntas.data[i].categoria === 'Historia'){
                this.setState({Historia: [ ...this.state.Historia , preguntas.data[i]]});
            } else if (preguntas.data[i].categoria === 'Geografia'){
                this.setState({Geografia: [ ...this.state.Geografia , preguntas.data[i]]});
            } else{
                this.setState({Ciencias: [ ...this.state.Ciencias , preguntas.data[i]]});
            }
        }

        /*Envio el state con las preguntas de cada categoria y escojo una de forma aleatoria, de esta forma cuando se carga la pagina ya tengo
        cargadas las preguntas desde la bd y en local storage estan asignadas las que se escojieron de forma aleatoria*/
        this.obtenerpregunta(this.state.Deportes, 1, 6, 'Deportes');
        this.obtenerpregunta(this.state.Arte, 6, 11, 'Arte');
        this.obtenerpregunta(this.state.Historia, 11, 16, 'Historia');
        this.obtenerpregunta(this.state.Geografia, 16, 21, 'Geografia');
        this.obtenerpregunta(this.state.Ciencias, 21, 26, 'Ciencias');

        const respuestas = await axios.get('http://localhost:5000/respuestas');
        this.setState({Respuestas: [...this.state.Respuestas , respuestas.data]});

        this.obtenerRespuestas(this.state.Respuestas[0], JSON.parse(localStorage.getItem('Deportes')).id, 'RespuestasDeportes');
        this.obtenerRespuestas(this.state.Respuestas[0], JSON.parse(localStorage.getItem('Arte')).id, 'RespuestasArte');
        this.obtenerRespuestas(this.state.Respuestas[0], JSON.parse(localStorage.getItem('Historia')).id, 'RespuestasHistoria');
        this.obtenerRespuestas(this.state.Respuestas[0], JSON.parse(localStorage.getItem('Geografia')).id, 'RespuestasGeografia');
        this.obtenerRespuestas(this.state.Respuestas[0], JSON.parse(localStorage.getItem('Ciencias')).id, 'RespuestasCiencias');
    }

    obtenerpregunta(categoria, inicio, fin, catLocalStorage){

        let numeroAleatorio = Math.floor(Math.random() * (fin - inicio) + inicio)
        for(let j = 0; j < categoria.length; j++){
            if(numeroAleatorio === categoria[j].id){
                localStorage.setItem(catLocalStorage, JSON.stringify(categoria[j]));
            };
        };
    };

    obtenerRespuestas(preguntas, idPregunta, catLocalStorage){
        let vectorRespuestas = [];
        for (let j = 0; j < preguntas.length; j++) {
            if(preguntas[j].id_pregunta === idPregunta){
                vectorRespuestas.push(preguntas[j]);                
            };
        };
        localStorage.setItem(catLocalStorage, JSON.stringify(vectorRespuestas));
    };

    async play() {   
            
        const deporte = JSON.parse(localStorage.getItem('Deportes'));
        const arte = JSON.parse(localStorage.getItem('Arte'));
        const historia = JSON.parse(localStorage.getItem('Historia'));
        const geografia = JSON.parse(localStorage.getItem('Geografia'));
        const ciencias = JSON.parse(localStorage.getItem('Ciencias'));

        const resDeporte = JSON.parse(localStorage.getItem('RespuestasDeportes'));
        const resArte = JSON.parse(localStorage.getItem('RespuestasArte'));
        const resHistoria = JSON.parse(localStorage.getItem('RespuestasHistoria'));
        const resGeografia = JSON.parse(localStorage.getItem('RespuestasGeografia'));
        const resCiencia = JSON.parse(localStorage.getItem('RespuestasCiencias'));

        let puntos = 0;

        await Swal.fire({
            title: 'Deportes',
            text: deporte.pregunta,
            icon: 'question',
            input: 'select',
            inputOptions: {
                a: resDeporte[0].respuesta,
                b: resDeporte[1].respuesta,
                c: resDeporte[2].respuesta,
                d: resDeporte[3].respuesta
            }
        }).then(isCofirmed => {
            if(isCofirmed.value === 'd'){
                puntos += 100;
                Swal.fire({
                    title: 'Success',
                    icon: 'success'
                }).then( isCofirmed => {
                    Swal.fire({
                        title: 'Arte',
                        text: arte.pregunta,
                        icon: 'question',
                        input: 'select',
                        inputOptions: {
                            a: resArte[0].respuesta,
                            b: resArte[1].respuesta,
                            c: resArte[2].respuesta,
                            d: resArte[3].respuesta
                        }
                    }).then(isCofirmed =>{
                        if(isCofirmed.value ==='a'){
                            puntos += 100;
                            Swal.fire({
                                title: 'success',
                                icon: 'success'
                            })
                            .then(isCofirmed =>{
                                Swal.fire({
                                    title: 'Historia',
                                    text: historia.pregunta,
                                    icon: 'question',
                                    input: 'select',
                                    inputOptions: {
                                        a: resHistoria[0].respuesta,
                                        b: resHistoria[1].respuesta,
                                        c: resHistoria[2].respuesta,
                                        d: resHistoria[3].respuesta
                                    }
                                })
                                .then(isCofirmed => {
                                    if(isCofirmed.value === 'c'){
                                        puntos += 100;
                                        Swal.fire({
                                            title: 'success',
                                            icon: 'success'
                                        })
                                        .then(isCofirmed => {
                                            Swal.fire({
                                                title: 'Geografia',
                                                text: geografia.pregunta,
                                                icon: 'question',
                                                input: 'select',
                                                inputOptions: {
                                                    a: resGeografia[0].respuesta,
                                                    b: resGeografia[1].respuesta,
                                                    c: resGeografia[2].respuesta,
                                                    d: resGeografia[3].respuesta
                                                }
                                            })
                                            .then(isCofirmed => {
                                                if(isCofirmed.value === 'b'){
                                                    puntos+=100
                                                    Swal.fire({
                                                        title: 'success',
                                                        icon: 'success'
                                                    })
                                                    .then(isCofirmed => {
                                                        Swal.fire({
                                                            title: 'Ciencias',
                                                            text: ciencias.pregunta,
                                                            icon: 'question',
                                                            input: 'select',
                                                            inputOptions: {
                                                                a: resCiencia[0].respuesta,
                                                                b: resCiencia[1].respuesta,
                                                                c: resCiencia[2].respuesta,
                                                                d: resCiencia[3].respuesta
                                                            }
                                                        })
                                                        .then(isCofirmed =>{
                                                            if(isCofirmed.value === 'd'){
                                                                puntos += 100;
                                                                Swal.fire({
                                                                    title: 'Felicidades, has ganado!',
                                                                    icon: 'success',
                                                                    inputLabel: 'Ingresa tu nombre',
                                                                    input: 'text'
                                                                })
                                                                .then(isCofirmed => {
                                                                    
                                                                     axios.post('http://localhost:5000/guardar', {
                                                                        nombre : isCofirmed.value,
                                                                        puntos : puntos
                                                                    });
                                                                })
                                                            }else{
                                                                Swal.fire({
                                                                    title: 'failure',
                                                                    icon: 'error'
                                                                })
                                                                
                                                            }
                                                        })
                                                    })
                                                }else{
                                                    Swal.fire({
                                                        title: 'failure',
                                                        icon: 'error'
                                                    })
                                                }
                                            })
                                        })
                                    } else {
                                        Swal.fire({
                                            title: 'failure',
                                            icon: 'error'
                                        })
                                    }
                                })
                            })
                        } else {
                            Swal.fire({
                                title: 'failure',
                                icon: 'error'
                            })
                        }
                    })
                })
            } else {
                Swal.fire({
                    title: 'Wrong',
                    icon: 'error'
                })
            }
        })

    };

    render() {
        return(
            <div className='container_index'>
                <button onClick={this.play}>New game</button>
                <a href='./'>Back</a>
            </div>
        )
    }
};

export default Preguntas;