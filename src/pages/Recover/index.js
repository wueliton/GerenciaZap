import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Nav } from '../../components/Nav'
import '../../global.css'

function Recover() {
	const [title, setTitle] =  useState('Recuperação de Senha - GerenciaZap')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [alert, setAlert] = useState(false)
    const [textAlert, setTextAlert] = useState(null)

	let history = useHistory()

	async function handleSignin(e){
		e.preventDefault()

		const response = await axios.post(`${process.env.REACT_APP_BACK_DOMAIN}/auth/signin`, {
			username,
			password
		})
	
		if(response.data.error){
			setAlert(true)
            setTextAlert(response.data.error)
			return setTimeout(() => {
				setAlert(false)
                setTextAlert(null)
			}, 3000)
		}
		
		localStorage.setItem('usertoken', response.data)

		history.push('/panel')

		return

	}

	return (
        <>
            <Helmet>
                <title>{ title }</title>
            </Helmet>
            <Nav login />
            <div class="fluid-container bg-comments">
                <div class="container login">
                    <h1>Recuperar Senha</h1>
                    <form action="">
                        <p><input type="email" name="email" id="email" placeholder="E-mail" required /></p>
                        <p><button>RECUPERAR SENHA</button></p>
                    </form>
                </div>
            </div>
            <div class="alertSistem">
                {textAlert}
            </div>
        </>
	)
}

export default Recover