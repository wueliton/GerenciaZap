import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavPanel,LeftNav,PanelModal } from '../../components/Nav'
import '../../panelGlobal.css'

function Panel() {
    const [title, setTitle] = useState('Painel - GerenciaZap')
    const [ changeLayout, setChangeLayout ] =  useState(false)
    const [ addNew, setAddNew ] = useState(false);
    const [ newTabs, setNewTabs ] = useState(0);

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
                            <a href="#edit" className="addOption" onClick={ () => setAddNew(!addNew) }>
                                <p>Crie mais botões</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${addNew ? 'windowAll active' : 'windowAll'}`}>
                <a href="#close" onClick={ () => setAddNew(!addNew) } className="closeAll">X</a>
                <div className="conteudoWindow">
                    <h1>Nova Empresa</h1>
                    <div className="tabs">
                        <a href="javascript:void(0)" className={`${newTabs==0 ? 'active' : ''}`} onClick={ () => setNewTabs(0)}>Dados da Empresa</a>
                        <a href="javascript:void(0)" className={`${newTabs==1 ? 'active' : ''}`} onClick={ () => setNewTabs(1)}>Tema</a>
                        <a href="javascript:void(0)" className={`${newTabs==2 ? 'active' : ''}`} onClick={ () => setNewTabs(2)}>Integração</a>
                    </div>
                    <div className={`${newTabs==0 ? 'formWindow tab active' : 'tab'}`}>
                        <div className="profileImage">
                            <img src="" class="profile" alt=""/>
                            <input type="file" id="profilePicture" hidden />
                            <a href="javascript:void(0)" class="sendPic">Enviar Foto de Perfil</a>
                        </div>
                        <div>
                            <label for="">
                                <span>* Nome da sua Empresa</span>
                                <input type="text" placeholder="Nome Empresa" />
                            </label>
                            <label for="">
                                <span>* Seu Site</span>
                                <input type="text" placeholder="www.example.com.br" />
                            </label>
                            <label for="">
                                <span>* WhatsApp</span>
                                <input type="text" placeholder="(19) 00000-0000" />
                            </label>
                        </div>
                        <p><a href="javascript:void(0)" className="btn-primary" onClick={ () => setNewTabs(newTabs+1) }>Próximo</a></p>
                    </div>
                    <div className={`${newTabs==1 ? 'tab active' : 'tab'}`}>
                        <div>
                            <div className="theme themeOne active">
                                <img src="/images/themeone.gif" alt="" />
                            </div>
                            <div className="theme themeTwo">
                                <img src="/images/themetwo.gif" alt="" />
                            </div>
                        </div>
                        <p>
                            <h3>Mensagem Personalizada</h3>
                            <textarea name="" className="persoMsg" placeholder="" id="" cols="30" rows="2">Olá, tudo bem?
        Como podemos ajudar?</textarea>
                        </p>
                        <p><a href="javascript:void(0)" className="btn-primary" onClick={ () => setNewTabs(newTabs+1) }>Próximo</a></p>
                    </div>
                    <div  className={`${newTabs==2 ? 'tab active' : 'tab'}`}>
                        <p>Seu botão está configurado, agora só falta adicionar em seu Site.</p><br/>
                        <h3>Copie o código abaixo</h3>
                        <div className="code">
                        <pre>
                            &lt;div id="gerenciazap" license-key="mivl8fiwvns" company="Wule"&gt;<br/>
                                &lt;script src="http://192.168.0.102:3000/scripts/theme1.js"&gt;&lt;/script&gt;<br/>
                            &lt;/div&gt;
                        </pre>
                        <a href="" className="copyCode"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iYm9sZCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtNCA2Ljc1YzAtMi42MTkgMi4xMzEtNC43NSA0Ljc1LTQuNzVoOS4xMzNjLS4zMjktMS4xNTEtMS4zNzgtMi0yLjYzMy0yaC0xMS41Yy0xLjUxNyAwLTIuNzUgMS4yMzMtMi43NSAyLjc1djE1LjVjMCAxLjUxNyAxLjIzMyAyLjc1IDIuNzUgMi43NWguMjV6IiBmaWxsPSIjMDAwMDAwIi8+PHBhdGggZD0ibTIwLjI1IDRoLTExLjVjLTEuNTE3IDAtMi43NSAxLjIzMy0yLjc1IDIuNzV2MTQuNWMwIDEuNTE3IDEuMjMzIDIuNzUgMi43NSAyLjc1aDExLjVjMS41MTcgMCAyLjc1LTEuMjMzIDIuNzUtMi43NXYtMTQuNWMwLTEuNTE3LTEuMjMzLTIuNzUtMi43NS0yLjc1em0tMiAxN2gtNy41Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXMuMzM2LS43NS43NS0uNzVoNy41Yy40MTQgMCAuNzUuMzM2Ljc1Ljc1cy0uMzM2Ljc1LS43NS43NXptMC00aC03LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1cy4zMzYtLjc1Ljc1LS43NWg3LjVjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1em0wLTMuNWgtNy41Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXMuMzM2LS43NS43NS0uNzVoNy41Yy40MTQgMCAuNzUuMzM2Ljc1Ljc1cy0uMzM2Ljc1LS43NS43NXptMC00aC03LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1cy4zMzYtLjc1Ljc1LS43NWg3LjVjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1eiIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPgo=" alt="Copiar" title="Copiar Código" /></a></div><br/>
                        <h2>Insira em seu Site</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Panel