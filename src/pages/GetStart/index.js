import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavGetStart, NavModal } from '../../components/Nav'
import './style.css'

function GetStart() {
    const [title, setTitle] = useState('Vamos começar - GerenciaZap')
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <div className={isActive ? "conteudo active" : "conteudo"}>
                <Helmet>
                    <title>{ title }</title>
                </Helmet>
                <NavGetStart />
                <NavModal active={isActive} layout="plan"></NavModal>
                <div class="container">
                    <h1>Vamos começar</h1>
                    <h2>Dados de Login</h2>
                    <div class="passwordRg">
                        <div>
                            <p>E-mail de login: <strong>example@example.com.br</strong></p>
                        </div>
                        <div>
                            <label for="senha">
                                <span>* Senha</span>
                                <input type="password" placeholder="Sua Senha" id="senha" />
                            </label>
                        </div>
                        <div>
                            <label for="senhaConfirm">
                                <span>* Confirmação da Senha</span>
                                <input type="password" placeholder="Repita sua Senha" id="senhaConfirm" />
                            </label>
                        </div>
                    </div>
                    <h2>Dados de sua Empresa</h2>
                    <form action="">
                        <div class="profileInfo">
                            <div>
                                <img src="" class="profile" alt="" />
                                <input type="file" id="profilePicture" hidden />
                                <a href="javascript:void(0)" class="sendPic">Enviar Foto de Perfil</a>
                            </div>
                            <div>
                                <label for="site"><span>* Adicione seu Site</span>
                                    <input type="text" placeholder="https://www.exemplo.com.br" id="site" />
                                </label>
                                <label for="empresa"><span>* Nome da sua Empresa</span>
                                    <input type="text" placeholder="Minha Empresa" id="empresa" />
                                </label>
                                <label for="whatsapp"><span>* WhatsApp do Site</span>
                                    <input type="text" placeholder="(19) 00000-0000" id="whatsapp" />
                                </label>
                            </div>
                        </div>
                    </form>
                    <p class="text-center">
                        <a href="#plan" class="btn-primary" onClick={() => (setIsActive(!isActive))}>Escolher Plano</a>
                    </p>
                </div>
                <footer class="fluid-container">
                    <div class="container copyright">
                        Copyright @ 2020 - Todos os Direitos Reservados - Agência Digital Wule
                    </div>
                </footer>
            </div>
        </>
    )
}

export default GetStart