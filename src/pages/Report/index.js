import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavPanel,LeftNav } from '../../components/Nav'
import '../../panelGlobal.css'

function Panel() {
    const [title, setTitle] = useState('Relatórios - GerenciaZap')
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
                    <LeftNav report />
                    <div>
                        <div class="titleHeader">
                            <h1>Relatórios</h1>
                            <div class="tabs">
                                <a href="" class="active">Este Mês</a>
                                <a href="">Exportar Relatórios</a>
                            </div>
                        </div>
                        <div class="contentPage">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Panel