// eslint-disable-next-line no-unused-vars
import React from 'react'
import alisson from '../assets/img/IMG_6763.jpg'
import jonathan from '../assets/img/jonathan.jpg'
import rafael from '../assets/img/rafa.jpg'

export default function about() {
    return (
    <div className='fondo'>
    <header className="container">
    <div className="text-center p-3 border-bottom ">
    <h1 className="font-monospace text-info">NOSOTROS</h1>
    </div>
    </header>

    <main className="container">
    <section>
    <div className="row g-5 p-2 border-bottom d-flex align-items-center">
    <div className="col-12 col-md-5 col-lg-6">
    <div className="row">
    <div className="col-md-8 order-md-2">
    <h3 className='font-monospace natural'>Alisson Lisbeth Serpas Martinez</h3>
    <h6 className="text-info font-monospace">Frontend Developer, Web Designer</h6>
    <p className='font-monospace text-white'>
        Hola! soy Alisson, Estudiante de Kodigo del Bootcamp FSJ17, soy una apasionada programdora full stack y diseñadora web con una solida experiencia en la creacion de sitios web dinamicos y funcionales. <br />
        Tengo un amplio conocimiento de lenguajes y tecnologias web, como HTML, CSS, JAVASCRIPT y Frameworks como REACT y Frameworks de diseño como BOOTSTRAP y TAILWINDCSS y tengo conocimiento de programas de diseños como ILLUSTRATOR, PHOTOSHOP, FIGMA, entre otros. <br />
    <span className="fw-semibold">En este proyecto mis tareas fueron hacer la maquetacion en figma y hacer todo el diseño del proyecto.</span>
    </p>
    </div>
    <div className="col-md-4 order-md-1 ">
    <img className="w-100  rounded-5 " src={alisson} alt="integrante 1"/>
    </div>
    </div>
    </div>

    <div className="col-12 col-md-5 col-lg-6">
    <div className="row">
    <div className="col-md-8 order-md-2">
    <h3 className='font-monospace natural'>Jonathan Isaac Alfaro Merino</h3>
    <h6 className="text-info font-monospace">Frontend Developer</h6>
    <p className='font-monospace text-white'>
        ¡Hola! Soy Jonathan, un apasionado estudiante de programación frontend con experiencia en el desarrollo de proyectos utilizando React. Mi principal enfoque se encuentra en la creación de experiencias de usuario atractivas y funcionales a través de la implementación de tecnologías web modernas. <br />
        Con un conocimiento sólido en HTML, CSS y JavaScript, he trabajado en diversos proyectos que involucran la creación de interfaces interactivas y responsivas. Además, tengo experiencia en el uso de frameworks como Bootstrap para agilizar el proceso de desarrollo y mejorar la estética de mis proyectos. <br />
    <span className="fw-semibold">En el proyecto, me encargué de crear los enlaces y el menú de navegación utilizando ReactRouter.</span>
    </p>
    </div>
    <div className="col-md-4 order-md-1">
    <img className="w-100 rounded-5" src={jonathan} alt="integrante 2"/>
    </div>
    </div>
    </div>
    </div>

    <div className="row g-5 p-2 border-bottom d-flex align-items-center">
    <div className="col-12 col-md-5 col-lg-6">
    <div className="row">
    <div className="col-md-8 order-md-2">
    <h3 className='font-monospace natural'>Rafael Ernesto Revolorio Reyes</h3>
    <h6 className="text-info font-monospace">Frontend Developer</h6>
    <p className='font-monospace text-white'>
    Hola! soy Rafael , un apasionado estudiante de programación frontend con experiencia en el desarrollo de proyectos utilizando React.Mi principal enfoque se encuentra en la creación de experiencias de usuario atractivas y funcionales a través de la implementación de tecnologías web modernas.   <br />Tengo un amplio conocimiento de lenguajes y tecnologias web, como HTML, CSS, JAVASCRIPT y Frameworks como REACT y Frameworks de diseño como BOOTSTRAP, tengo conocimiento de programas de diseños como ILLUSTRATOR, PHOTOSHOP, PREMIERE PRO, además, tengo conocimientos en el uso de herramientas como Auth0 para la autenticación y autorización de usuarios en aplicaciones web.
    <span className="fw-semibold ">En el proyecto, fui responsable de crear el código de la API y el sistema de perfiles de usuario. Además, colaboré en el diseño  y personalicé el servicio de autenticación Auth0.</span>
    </p>
    </div>
    <div className="col-md-4 order-md-1">
    <img className="w-100 rounded-5" src={rafael} alt="integrante 3"/>
    </div>
    </div>
    </div>

    <div className="col-12 col-md-5 col-lg-6">
    <div className="row">
    <div className="col-md-8 order-md-2">
    <h3 className='font-monospace'>NOMBRE</h3>
    <h6 className="text-info font-monospace">Frontend Developer</h6>
    <p className='font-monospace'>
                            INFOR
    <span className="fw-semibold">LO QUE HICISTE EN EL PROYECTO</span>
    </p>
    </div>
    <div className="col-md-4 order-md-1">
    <img className="w-100 rounded-5" src="" alt="integrante 4"/>
    </div>
    </div>
    </div>
    </div>

    <div className="row g-5 p-2 border-bottom d-flex align-items-center">
    <div className="col-12 col-md-5 col-lg-6">
    <div className="row">
    <div className="col-md-8 order-md-2">
    <h3 className='font-monospace'>NOMBRE</h3>
    <h6 className="text-info font-monospace">Frontend Developer</h6>
    <p className='font-monospace'>
                            INFOR
    <span className="fw-semibold">LO QUE HICISTE EN EL PROYECTO</span>
    </p>
    </div>
    <div className="col-md-4 order-md-1">
    <img className="w-100 rounded-5" src="" alt="integrante 5"/>
    </div>
    </div>
    </div>

    <div className="col-12 col-md-5 col-lg-6">
    <div className="row">
    <div className="col-md-8 order-md-2">
    <h3 className='font-monospace'>NOMBRE</h3>
    <h6 className="text-info font-monospace">Frontend Developer</h6>
    <p className='font-monospace'>
                            INFOR
    <span className="fw-semibold">LO QUE HICISTE EN EL PROYECTO</span>
    </p>
    </div>
    <div className="col-md-4 order-md-1">
    <img className="w-100 rounded-5" src="" alt="integrante 6"/>
    </div>
    </div>
    </div>
    </div>

    <div className="row g-5 p-2 border-bottom d-flex align-items-center">
    <div className="col-12 col-md-5 col-lg-6">
    <div className="row">
    <div className="col-md-8 order-md-2">
    <h3 className='font-monospace'>NOMBRE</h3>
    <h6 className="text-info font-monospace">Frontend Developer</h6>
    <p className='font-monospace'>
                            INFOR
    <span className="fw-semibold">LO QUE HICISTE EN EL PROYECTO</span>
    </p>
    </div>
    <div className="col-md-4 order-md-1">
    <img className="w-100 rounded-5" src="" alt="integrante 7"/>
    </div>
    </div>
    </div>

    </div>

    </section>
    </main>

    </div>
    )
}
