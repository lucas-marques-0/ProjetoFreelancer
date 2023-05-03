import React from "react";
import './Home.css'
import logo1 from '../../assets/logo1.jpeg';
import logo2 from '../../assets/logo2.jpeg';
import logo3 from '../../assets/logo3.jpeg';
import { FaMoneyBill, FaHandshake, FaChartLine, FaSuitcase, FaEdit, FaTag, FaChartBar, FaMobileAlt, FaBox } from 'react-icons/fa'

function Home() {
  return (
    <div>
      <div className="cabecalho">
        <img src={logo1} alt="logo" className="logoImg" />
      </div>

      <div className="content1">
        <p>SEJA UMA REVENDEDORA VALOIS</p>
        <div className="gridInfos">
          <div className="cardInfo">
            <span><FaMoneyBill className="icon"></FaMoneyBill></span>
            <p>ZERO INVESTIMENTO</p>
          </div>
          <div className="cardInfo">
            <span><FaHandshake className="icon"></FaHandshake></span>
            <p>TREINAMENTO E SUPORTE DA EQUIPE</p>
          </div>
          <div className="cardInfo">
            <span><FaChartLine className="icon"></FaChartLine></span>
            <p>PLANO DE CARREIRA COMPLETO</p>
          </div>
        </div>
      </div>

      <div className="content2">
        <div className="c2Textos">
          <p>Revenda semijoias sem investir nada e lucre até 40%</p>
          <div>
            <p id="c2txt2">Faça seus próprios horários revendendo as semijoias da Valois Acessórios.</p>
            <ul id="c2list">
              <li>Você receberá um kit em consignação.</li>
              <li>Treinamentos gratuitos.</li>
              <li>Suporte durante todo o processo.</li>
              <li>Planos de carreira completos.</li>
            </ul>
          </div>
        </div>
        <div className="c2Video">
          <iframe src="https://www.youtube.com/embed/Ctun6bn8wac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </div>
      </div>
      <div className="c2Btn">
        <button className="btn">QUERO ME CANDIDATAR!</button>
      </div>

      <div className="content3">
        <p className="c3txt1">O QUE VOCÊ IRÁ RECEBER?</p>
        <div className="c3Grid">
          <div className="gridComponent">
            <div className="pt1">
              <span><FaSuitcase className="icon2"></FaSuitcase></span>
            </div>
            <div className="pt2">
              <p className="pt2t1">KIT DE PEÇAS</p>
              <p className="pt2t2">Você receberá um kit de semijoias em consignação. As peças são de alta qualidade e com 1 ano de garantia.</p>
            </div>
          </div>
          <div className="gridComponent">
            <div className="pt1">
              <span><FaEdit className="icon2"></FaEdit></span>
            </div>
            <div className="pt2">
              <p className="pt2t1">TREINAMENTO</p>
              <p className="pt2t2">Treinamento gratuito de como vender semijoias.</p>
            </div>
          </div>
          <div className="gridComponent">
            <div className="pt1">
              <span><FaTag className="icon2"></FaTag></span>
            </div>
            <div className="pt2">
              <p className="pt2t1">MATERIAL GRÁFICO</p>
              <p className="pt2t2">Tags, embalagens e sacolas sem custo adicional.</p>
            </div>
          </div>
          <div className="gridComponent">
            <div className="pt1">
              <span><FaChartBar className="icon2"></FaChartBar></span>
            </div>
            <div className="pt2">
              <p className="pt2t1">VALORIZAÇÃO</p>
              <p className="pt2t2">Seu esforço será reconhecido com comissão crescente dependendo do volume de vendas, podendo chegar até 40% de comissão.</p>
            </div>
          </div>
        </div>

        <div className="c3cont">
          <p className="c3contTxt1">Simples, Fácil e Poderoso</p>
          <p className="c3contTxt2">COMO FAÇO PARA ME TORNAR UMA REVENDEDORA VALOIS?</p>
          <div className="c3contGrid">
            <div className="c3GridComp">
              <span><FaEdit className="icon3"></FaEdit></span>
              <p className="pt3t1">PREENCHA O CADASTRO</p>
              <p className="pt3t2">Aperte no botão "quero me candidatar" e preencha o formulário de incrição.</p>
            </div>
            <div className="c3GridComp">
              <span><FaMobileAlt className="icon3"></FaMobileAlt></span>
              <p className="pt3t1">CONTATO DA REPRESENTANTE</p>
              <p className="pt3t2">Após o efetuar no cadastro, uma de nossas representantes Valois entrará em contato com a candidata.</p>
            </div>
            <div className="c3GridComp">
              <span><FaBox className="icon3"></FaBox></span>
              <p className="pt3t1">RECEBIMENTO DO KIT</p>
              <p className="pt3t2">Após a aprovação, a revendedora Valois irá agendar um horário para o recebimento do kit.</p>
            </div>
          </div>
        </div>

        <div className="content4">
          <div className="c4component">
            <div><img src={logo2} alt="logo" className="c4img" /></div>
            <div className="c4txts">
              <h3>Valois Acessórios</h3>
              <h5>MISSÃO:</h5>
              <p>Torna-se uma empresa competitiva e comprometida com o bem-estar de nossas clientes, bem como elevar sua autoestima e potencializar sua beleza e confiança em si.</p>
              <br />
              <h5>VISÃO:</h5>
              <p>Ser referência no mercado, principalmente na construção de confiabilidade e bom relacionamento.</p>
              <br />
              <h5>VALORES:</h5>
              <p>
                - Desenvolvimento pessoal <br />
                - Confiabilidade <br />
                - Agilidade <br />
                - Comprometimento <br />
                - Ética <br />
              </p>
            </div>
          </div>
        </div>

        <div className="c4Btn">
          <button className="btn">QUERO ME CANDIDATAR!</button>
        </div>

        <div className="footer">
          <div className="footerContent">
            <div className="fImg">
              <img src={logo3} alt="logo" className="logoImg" />
            </div>
            <div className="fInfos">
              <p>Instagram: @valois_acessorios</p>
              <p>Contato: +55 (81) 9.8121-7374</p>
            </div>
          </div>
        </div>

        <div className="infosFinais">
          <p>VALOIS ACESSORIOS CNPJ: 28.262.979/0001-95, OLINDA /PE</p> 
          <p>Tel: (81) 9.8121-7374 Whatsapp) Atendimento telefônico em horário comercial.</p>
        </div>



      </div>
    </div>
  );
}

export default Home
