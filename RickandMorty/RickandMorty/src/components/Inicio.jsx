/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import rickandmorty from '../assets/img/rickandmortyportal.png'
import logo from '../assets/img/logo.png'
import rick from '../assets/img/rick.png'
import morty from '../assets/img/morty.png'
import rickcarcel1 from '../assets/img/Rickcarcel1.jpg'
import portal from '../assets/img/portal.png'
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import ListaPersonajes from './ListaPersonajes'
// eslint-disable-next-line no-unused-vars
import About from './About'

export default function Inicio() {
    
    return (
            <div className="fondo">
            <div className="container text-center">
            <div className="row">
            <div className="col-8">
                <img src={rickandmorty} alt="rickandmortyportal"/>
            </div>
            <div className="col-4 botonstyle ">
                <img className="w-100" src={logo} alt="logo"/>
                <Link to="/ListaPersonajes" > 
              <button className="btn btn-outline-info" type="submit"> Personajes </button>
            </Link>
                
            </div>
            </div>
            </div>
            <main className='container'>
            <section  className='text-white'>
                <h2>Acerca de Serie </h2>
                <p>Rick y Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.<br />Rick Sánchez es un ejemplo del típico científico loco. Es un genio, pero es irresponsable, alcohólico, egoísta, un poco depresivo y con poca cordura. Rick por diferentes razones termina mudándose a la casa de su hija Beth y en ese momento se encuentra con su nieto Morty; un chico de 14 años de edad, tímido y no muy listo. Al juntarse con su nieto, Rick y Morty viven una variedad de aventuras a lo largo del cosmos y universos paralelos. Y es mediante tantas vivencias y reflexiones que Rick busca que su nieto Morty no acabe como su padre, Jerry, un hombre muy poco exitoso que a pesar de tener buenas intenciones resulta ser bastante inútil en muchas ocasiones y depende mucho de su esposa, Beth, hija de Rick.
                <br /> A pesar de estar muy apegados, Rick y su nieto experimentan momentos en los que Summer, hermana de Morty, se une en ocasiones a las pintorescas aventuras provocadas por Rick.</p>
            </section>
            <section className="py-5">
            <div id="carouselExampleCaptions" className="carousel slide">
    
            <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="row g-0 text-center">
            <div className="col-sm-5 col-md-6">
            <img src={rick} className="w-50" alt="rick" />
            </div>
            <div className="col-sm-7 col-md-5 text-white">
            <h5>RICK SANCHEZ</h5>
            <div className="justified-text">
            <p className="">Es un viejo científico que acostumbra a hablar de manera vulgar y entre eructos, y la mayoría de las veces tiene un rastro de saliva en la boca. Es padre de Beth Sánchez y es el abuelo materno de Summer y Morty. Es un hombre que ha pasado gran parte de su vida viajando a través de diversas galaxias. Para él, la Tierra se llama Planeta Tierra del Universo C-137. Es irresponsable, asocial, chiflado, ambicioso y desconsiderado ante su propia familia, criticando en numerosas ocasiones a su yerno por ser un inútil. Suele llevar a Morty a sus aventuras para usarlo en sus viajes, llegando al punto de no distinguir el bien del mal.</p>
            </div>
            </div>
            </div>
            </div>
            <div className="carousel-item">
            <div className="row g-0 text-center">
            <div className="col-sm-5 col-md-6">
            <img src={morty} className="w-25" alt="morty" />
            </div>
            <div className="col-sm-7 col-md-5 text-white">
            <h5>MORTY SMITH</h5>
            <div className="justified-text">
            <p className="">Es un chico de 14 años, nieto de Rick, quien lo usa frecuentemente en sus aventuras. Posee una inteligencia pobre, es de estatura baja para su edad y está enamorado de una compañera de escuela llamada Jessica. Al avanzar la serie, toma más valor a la hora de enfrentar situaciones peligrosas. Con su bajo nivel de inteligencia sirve como contrapunto a la de su abuelo Rick, lo cual hace que sea el compañero de aventuras ideal.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
            </div>
            </section>

        <section>
        <div>
        <h3 className=" text-center text-white">Creadores</h3>
        </div>
        <div className="d-flex text-center">
        <div className="flex-fill">
            <img className="edit-photos" src={rickcarcel1} alt=""/>
        </div>
        <div className="flex-fill">
            <img className="edit-photos" src={rickcarcel1} alt=""/>
        </div>
        <div className="flex-fill">
            <img className="edit-photos" src={rickcarcel1} alt=""/>
        </div>
        
        </div>
        <div className="text-center p-4">
            <Link to="/About">
            <button className="btn btn-outline-info" type="submit">Acerca de Nosotros</button>
            </Link>
        </div>
        </section>
        </main>
        <footer className="p-3">
        <div className="d-flex justify-content-center" >
        <img className="foter-img" src={portal} alt=""/>
        </div>
        </footer>
        </div>
        
    )
}
