import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Nav } from '../../components/Nav'
import '../../global.css'

function Join() {
    const [title, setTitle] = useState('Cadastre-se - GerenciaZap')

    return (
        <>
            <Helmet>
                <title>{ title }</title>
            </Helmet>
            <Nav login/>
            <div className="fluid-container bg-comments">
                <div className="container login">
                    <h1>Crie sua Conta</h1>
                    <form action="getstart">
                        <p><input type="text" name="nome" id="nome" placeholder="Seu Nome" /></p>
                        <p><input type="email" name="email" id="email" placeholder="Seu melhor E-mail" /></p>
                        <p><input type="text" name="whatsapp" id="whatsapp" placeholder="Seu WhatsApp" /></p>
                        <p><button>CADASTRAR</button></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Join