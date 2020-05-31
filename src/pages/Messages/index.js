import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavPanel,LeftNav } from '../../components/Nav'
import '../../panelGlobal.css'

function Panel() {
    const [title, setTitle] = useState('Mensagens - GerenciaZap')
    const [ changeLayout, setChangeLayout ] =  useState(false)
    const [ details, setDetails ] = useState(false)

    return(
        <>
            <Helmet>
			    <title>{ title }</title>
		    </Helmet>
            <NavPanel>
            <button className="toggle-nav" onClick={() => setChangeLayout(!changeLayout)}><img src="/images/open-menu.svg" alt="Abrir Menu" title="Abrir Menu" /></button>
            </NavPanel>
            <div class="painelLayout">
                <div className={`${changeLayout ? 'active slideLayout' : 'slideLayout'}`}>
                    <LeftNav messages />
                    <div>
                        <div class="titleHeader">
                            <h1>Mensagens</h1>
                            <div class="tabs">
                                <a href="" class="active">Hoje</a>
                                <a href="">Todas</a>
                                <a href="">Exportar Relatório</a>
                            </div>
                        </div>
                        <div class="contentPage">
                            <div>
                                <input type="text" placeholder="Buscar" />
                            </div>
                            <div className="table-overFlow">
                                <table class="contatos">
                                    <tr>
                                        <td>Nome</td>
                                        <td>E-mail</td>
                                        <td>Celular</td>
                                        <td>Mensagem</td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0)" onClick={ () => setDetails(!details) }>Alexandre</a></td>
                                        <td><a href="javascript:void(0)" onClick={ () => setDetails(!details) }>alexandre@example.com.br</a></td>
                                        <td><a href="javascript:void(0)" onClick={ () => setDetails(!details) }>11 90000-0000</a></td>
                                        <td>Olá, poderia nos informar...</td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0)">Alexandre</a></td>
                                        <td><a href="javascript:void(0)">alexandre@example.com.br</a></td>
                                        <td><a href="javascript:void(0)">11 90000-0000</a></td>
                                        <td>Olá, poderia nos informar...</td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0)">Alexandre</a></td>
                                        <td><a href="javascript:void(0)">alexandre@example.com.br</a></td>
                                        <td><a href="javascript:void(0)">11 90000-0000</a></td>
                                        <td>Olá, poderia nos informar...</td>
                                    </tr>
                                    <tr class="numbers">
                                        <td colspan="4">
                                            Mostrando 3 de 3 Mensagens
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${details ? 'windowAll active' : 'windowAll'}`}>
                <a href="#close" onClick={ () => setDetails(!details) } className="closeAll">X</a>
                <div className="conteudoWindow">
                    <h1>Alexandre</h1>
                    <div className="contactDetails">
                        <a href="mailto:alexandre@example.com.br">alexandre@example.com.br</a> | <a href="tel:5511900000000">11 9 0000-0000</a>
                    </div>
                    <div className="msgBox">
                        Olá, poderia nos informar quanto ficaria uma maçã 3x4, e qual o frete para a região sul do Brasil?
                    </div>
                    <a href="" className="btn-primary">Responder Mensagem</a>
                </div>
            </div>
        </>
    )
}

export default Panel