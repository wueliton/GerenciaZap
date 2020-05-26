import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavPanel,LeftNav } from '../../components/Nav'
import '../../panelGlobal.css'

function Panel() {
    const [title, setTitle] = useState('Mensagens - GerenciaZap')
    const [ changeLayout, setChangeLayout ] =  useState(false)

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
                                        <td><a href="">Alexandre</a></td>
                                        <td><a href="">alexandre@example.com.br</a></td>
                                        <td><a href="">11 90000-0000</a></td>
                                        <td>Olá, poderia nos informar...</td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Alexandre</a></td>
                                        <td><a href="">alexandre@example.com.br</a></td>
                                        <td><a href="">11 90000-0000</a></td>
                                        <td>Olá, poderia nos informar...</td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Alexandre</a></td>
                                        <td><a href="">alexandre@example.com.br</a></td>
                                        <td><a href="">11 90000-0000</a></td>
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
        </>
    )
}

export default Panel