import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Nav } from '../../components/Nav'
import axios from 'axios'
import './style.css'

function Login() {
    const [title, setTitle] = useState('Login - GerenciaZap')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
    
    const [ isDisabled, setIsDisabled ] = useState(true);

    useEffect(() => {
        function checkLenght() {
            console.log(username)
            if(username.length >= 8) {
                setIsDisabled(false)
            }
        }
        checkLenght()
    },[username])

	return (
        <>
            <Helmet>
                <title>{ title }</title>
            </Helmet>
            <Nav  />
            <div className="fluid-container bg-comments">
                <div className="container login">
                    <h1>Acesse sua Conta</h1>
                    <form action="panel">
                        <p><input type="input" name="username" placeholder="E-mail" onChange={e => setUsername(e.target.value)} /></p>
                        <p><input type="password" name="password" id="senha" placeholder="Senha" onChange={e => setPassword(e.target.value)}/><a href="recover" className="recover-bt" title="Esqueci minha Senha">Esqueci</a></p>
                        <p><button>ENTRAR</button></p>
                    </form>
                </div>
            </div>
        </>
	)
}

export default Login