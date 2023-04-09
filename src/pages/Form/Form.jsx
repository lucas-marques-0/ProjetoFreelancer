import './Form.css'
function Form() {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className="col-1"></div>
        <form >
          <i class="fa fa-thermometer-quarter" aria-hidden="true"></i>
          <div className="card col-10 mt-2">
            <div className="card-header bg-p">
              DADOS PESSOAIS
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6 mt-2">
                  <label htmlFor="nome">Nome Completo</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor="nome">CPF</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor="nome">Qual seu estado civil?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="Solteira">Solteira</option>
                    <option value="Casada">Casada</option>
                    <option value="Viúva">Viúva</option>
                    <option value="Divorciada">Divorciada</option>
                  </select>
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor="nome">CPF Com restrição?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="SIM">Sim</option>
                    <option value="NÂO">Não</option>
                  </select>
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor="nome">Data de Nascimento</label>
                  <input name="nome" type="date" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-10 mt-5">
            <div className="card-header bg-p mb-2">
              ENDEREÇO
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="nome">CEP</label>
                  <input name="nome" type="text" className="form-control" mask="00000-000" />
                </div>
                <div className="col-6">
                  <label htmlFor="nome">Logradouro</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <label htmlFor="nome">Numero</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
                <div className="col-3">
                  <label htmlFor="nome">Cidade</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
                <div className="col-3">
                  <label htmlFor="nome">Estado</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>

          <div className="card col-10 mt-5">
            <div className="card-header bg-p mb-2">
              PERGUNTAS
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="nome">Sua casa é própria ou alugada?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="PROPRIA">Própira</option>
                    <option value="ALUGADA">Alugada</option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="nome">Quantos filhos você tem?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="+3">+3</option>
                    <option value="0">Nenhum</option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="nome">Você ja trabalhou com vendas?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="Já trabalhei">Já trabalhei</option>
                    <option value="Nunca trabalhei">Nunca trabalhei</option>
                    <option value="Trabalho na área atualmente">Trabalho na área atualmente</option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="nome">Em qual Segmento de vendas ?</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
                <div className="col-6">
                  <label htmlFor="nome">COLOQUE AQUI A EMPRESA QUE TRABALHOU.</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
                <div className="col-6">
                  <label htmlFor="nome">ATUALMENTE TRABALHA EM QUAL EMPRESA?</label>
                  <input name="nome" type="text" className="form-control" />
                </div>

              </div>
            </div>
          </div>
          <div className="card col-10 mt-5">
            <div className="card-header bg-p mb-2">
              PERGUNTAS
            </div>
            <div className="card-body">
              <div className="col-12 mt-3">
                <p>Atualmente estou...</p>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    Me encontro desempregada, mas quero mudar minha situação atual
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Trabalho meio turno, pretendo vender para complementar o meu salário
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Estou trabalhando, mas gostaria de vender semijoias para mudar o meu caminho,ter liberdade financeira e correr atrás dos meus objetivos.
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Me encontro em um trabalho estável, quero revender para comprar itens pessoais /realizar uma viagem.
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Revendo outros tipos de semijoias e acredito que revendendo VALOIS ACESSÓRIOS irei faturar muito mais.
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Sou aposentada, acredito que este é o momento para fazer algo que me dê prazer.
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Sou resolvida financeiramente, mas quero aproveitar meu potencial para vendas, pois tenho muitas conhecidas.
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Sou nova, entrei no mercado de trabalho a pouco, mas quero muito crescer profissionalmente e vejo que conseguiria conciliar a minha paixão por semijoias com a profissão de vendas.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-10 mt-5">
            <div className="card-header bg-p mb-2">
              QUAL A SUA PRETENSÃO MENSAL VENDENDO SEMIJOIAS?
            </div>
            <div className="card-body">
              <div className="col-6">
                <label htmlFor="nome">SEJA SINCERA NA SUA PRETENSÃO</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Selecione...</option>
                  <option value="1">Até R$ 500,00</option>
                  <option value="2">De R$ 500,00 a R$ 1.000,00</option>
                  <option value="3">De R$ 1.000,00 a R$ 2.000,00</option>
                  <option value="3"> De R$ 3.000,00 a R$ 4.000,00</option>
                  <option value="3"> Mais que R$ 4.000,00</option>
                </select>
              </div>
            </div>
          </div>
          <div className="card col-10 mt-5">
            <div className="card-header bg-p mb-2">
              ONDE VOCÊ PRETENDE VENDER SEMIJOIAS?
            </div>
            <div className="card-body">
              <div className="col-12 mt-3">
                <p>Atualmente estou...</p>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    Clube de mães
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Na igreja que frequento

                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    WhatsApp
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Instagram
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Facebook
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Escola de cursos variados
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Escola de ensino fundamental, básico ou médio
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Na empresa onde trabalho
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    No projeto social que faço parte
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Escola de educação infantil
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Outro
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-10 mt-5">
            <div className="card-header bg-p mb-2">
              QUANTAS CLIENTES VOCÊ ACHA QUE CONSEGUE ATENDER MENSALMENTE
            </div>
            <div className="card-body">
              <div className="col-12 mt-3">
                <p>Prentendo vender para...</p>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    5 clientes por mês
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    6 a 10 clientes por mês
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    11 a 20 clientes por mês
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    21 a 30 clientes por mês
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    31 a 50 clientes por mês
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Escola de cursos variados
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Acima de 50 clientes por mês
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-10 mt-5">
            <div className="card-header bg-p mb-2">
              MAIS SOBRE VOCÊ
            </div>
            <div className="card-body">
              <div className="row">

                <div className="col-6 mt-3">
                  <label htmlFor="nome"> CASO VOCÊ SEJA SELECIONADA E VENHA FAZER PARTE DO NOSSO TIME DE REVENDEDORAS, VOCÊ FICARÁ INCOMODADA EM RECEBER FEEDBACKS E SUGESTÕES PARA MELHORAR SUAS VENDAS?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="1">Adoro receber opiniões e críticas, pois sei que só assim irei evoluo e obtenho melhores resultados.</option>
                    <option value="2">Aceito opiniões e críticas, desde que me faça vender mais.</option>
                    <option value="3">Aceito o feedback, mas não consigo trabalhar com metas.</option>
                  </select>
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="nome"> VOCÊ ESTARIA DISPOSTA A APRENDER MAIS SOBRE O RAMO DE SEMIJOIAS SE COMPROMETERIA A PARTICIPAR DE UM TREINAMENTO E SE ESFORÇAR A PRATICAR O QUE SERÁ ENSINADO?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                  </select>
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="nome"> VOCÊ TRABALHA BEM EM EQUIPE?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="1">Sim, gosto de trabalhar em equipe e acredito que assim alcançamos nossos objetivos.</option>
                    <option value="2">Prefiro trabalhar sozinha e não me adapto bem ao trabalho em equipe.</option>
                    <option value="3">Gosto de trabalhar em equipe, mas levo mais jeito para liderar.</option>
                  </select>
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="nome"> VOCÊ COSTUMA FAZER CURSO DE APERFEIÇOAMENTO PROFISSIONAL?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                  </select>
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="nome">PERIODICAMENTE, TEMOS UMA REUNIÃO COM AS REVENDEDORAS DA VALOIS ACESSÓRIOS, VOCÊ SE COMPROMETE A PARTICIPAR?</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                  </select>
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="nome">PORQUE SER UMA REVENDEDORA DA VALOIS ACESSÓRIOS É UMA OPORTUNIDADE IDEAL PARA VOCÊ?</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="nome">A EQUIPE DA VALOIS ACESSÓRIOS É RESTRITA E BEM SELECIONADAS. AS VAGAS SÃO LIMITADAS, ESCREVA ABAIXO PORQUE DEVEMOS SELECIONAR VOCÊ DENTRE AS CANDIDATAS?</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-10 mt-5">
            <div className="card-header bg-p mb-2">
              FINALIZANDO
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6 mt-3">
                  <label htmlFor="nome">PORQUE DEVEMOS SELECIONAR VOCÊ DENTRE AS DEMAIS CANDIDATAS?</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="nome">QUAL SERÁ SEU NÍVEL DE COMPROMETIMENTO COM A VALOIS ACESSÓRIOS?</label>
                  <input name="nome" type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <footer className='mt-2 footer'>

      </footer>
    </>
  );
}

export default Form
