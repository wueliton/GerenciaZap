import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavPanel,LeftNav } from '../../components/Nav'
import '../../panelGlobal.css'

function Panel() {
    const [title, setTitle] = useState('Painel - GerenciaZap')
    const [ changeLayout, setChangeLayout ] =  useState(false)

    return(
        <>
            <Helmet>
			    <title>{ title }</title>
		    </Helmet>
            <NavPanel>
                <button className="toggle-nav" onClick={() => setChangeLayout(!changeLayout)}><img src="/images/open-menu.svg" alt="Abrir Menu" title="Abrir Menu" /></button>
            </NavPanel>
            <div className="painelLayout">
                <div className={`${changeLayout ? 'active slideLayout' : 'slideLayout'}`}>
                    <LeftNav home />
                    <div>
                        <div className="homeOptions">
                            <a href="#edit" className="option">
                                <h2>Wule</h2>
                                <p>https://wule.com.br</p>
                                <span className="statusOk">Instalado!</span>
                            </a>
                            <a href="#edit" className="option">
                                <h2>Rabelo</h2>
                                <p>https://rabelo.com.br</p>
                                <span className="statusPendente">Gere seu Código!</span>
                            </a>
                            <a href="#edit" className="addOption">
                                <p>Crie mais botões</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Panel