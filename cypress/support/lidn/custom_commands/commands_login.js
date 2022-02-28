import { elementoCarregamento } from "../custom_elements/elementosCompartilhados";

const labelCampoFilial = "label[for='filial']";
const inputCampoFilial = "input#filial";
const labelNomeFilial = "span.app-login-filial";
const labelCampoEmpresa = "label[for='empresa']";
const inputCampoEmpresa = "input#empresa";
const labelCampoMatricula = "label[for='matricula']";
const inputCampoMatricula = "input#matricula";
const labelCampoSenha = "label[for='senha']";
const inputCampoSenha = "input#senha";
const botaoLogin = "button.qa-home-access-button-click";
const elementoConfirmacaoLogin = ".qa-core-product-search-write";
const hotjarWebsiteId = 2429995;

let ambiente = Cypress.env("ENV");

Cypress.Commands.add(
    "comecarTeste",
    { prevSubject : false },
    (urlTeste) => {
        cy.intercept(
            {
                method: 'GET',  
                url: '/home/package.json'
            },
            { 
                name: "vv-template-cypress",
                
            }
        ).as('apigw: package'); 
        
        cy.intercept(
            {
                method: 'GET',  
                url: '/carrinho/package.json'
            },
            { 
                name: "vv-template-cypress",
                
            }
        ).as('carrinho: package'); 
   
        cy.intercept(
            {
                method: 'GET',  
                url: '/uaa/bandeiras',  
            },
            { 
                statusCode: 204,
                fixture: `lidn/${ambiente}/intercept/fxtBandeiras.json`
            }
        ).as('apigw: bandeiras'); 

        cy.intercept(
            {
                method: 'GET',  
                url: '/launch-EN0fb6de0c533847b8ba9a4a5f816a37bc-staging.min.js',  
            },
            { 
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtStagin.json`
            }, 
        ).as('apigw: Staging'); 
        
        cy.intercept(
            {
                method: 'GET',  
                url: '/uaa/bandeiras/1/filiais',  
            },
            { 
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtFiliais.json`
            },
        ).as('apigw: filiais'); 

        cy.intercept(
            {
                method: "POST",
                url: `/j/collect?*`,
                hostname: "stats.g.doubleclick.net",
                https: true
            },
            {   
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtDoubleClickStat.json`
            }
        ).as('doubleclick: stat collect'); 
        
        
        cy.intercept(
            {
                method: "GET",
                url: `/vv-comunicacao/comunicacoes/vigentes?*`,
            },
            {
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtTipoexibicao.json`
            }  

        ).as('doubleclick: tipoexibicao');
            
   
        cy.intercept(
            {
                method: "GET",
                url: `/c/hotjar-${hotjarWebsiteId}*`,   //
                hostname: "static.hotjar.com",
                https: true
            },
            {   
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtStagin.json`
            }  
        ).as('Static: HotJar');

         cy.intercept(
            {
                method: "GET",
                url: `/vv-incentivo-app/colaborador/onelink/?*`,
            },
                      
        ).as('vv-incentivo: onelink'); 
                                   
        cy.visit(urlTeste);{
            
        }
    }
)

Cypress.Commands.add(
    "loginViaMais",
    (objetoVendedor) => {
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-atendimento/atendimentos/andamento',  
            },
            { 
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtConfiguracao.json`
      
            }, 
        ).as('vv-atendimento: andamento'); 
        
        cy.intercept(
            {
                method: 'GET',  
                url: 'vv-adm/filiais/1000',  
            },
            { 
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtConfiguracao.json`
                
            }, 
        ).as('vv-adm: filiais');
       
       cy.intercept(
            {
                method: 'GET',  
                url: '/uaa/bandeiras/1/filiais/*',  
            },
             { 
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtFiliais.json`
            } 
        ).as('apigw: filiais'); 
               
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-adm/filial/configuracao/1000',  
            },
            { 
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtConfiguracao.json`
                
            }, 
        ).as('vv-adm: configuracao'); 

        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-farol-adm/configuracao-filial/1000',  
            },
            { 
                statusCode: 200,
                fixture: `lidn/${ambiente}/intercept/fxtConfiguracao.json`
            }, 
        ).as('vv-farol: configuracao'); 
       
        cy.intercept(
            {
                method: 'GET',  
                url: '/catalogo/package.json',  
            },
            {   
                statusCode: 200,            
                fixture: `lidn/${ambiente}/intercept/fxtCatalogo.json`
            }, 
        ).as('catalogo: catalogo');
     
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-vitrine/catalogo/catalogo?page=0&per_page=10&fields=estruturasMercadologicas'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtVitrine.json` 
            },   

        ).as('vv-vitrine: catalogo-vitrine');
        
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-vitrine/campanhas/cupons/?slug=&quantidadeProdutos=0'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtVitrine.json`
            },  

        ).as('vv-vitrine: campanha'); 
        
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-vitrine/campanhas/banners/?'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtVitrine.json`
            },
        ).as('vv-vitrine: banner'); 
            
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-vitrine/campanhas/cupons/?slug=&page=0&quantidadeProdutos=0'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtVitrine.json`
            },
        ).as('vv-vitrine: campanhas'); 
                
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-crm/clientes/PF/v3/94994757100',
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtClientepf.json`
            },
               
        ).as('vv-crm: clintesPf');

        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-carrinho/carrinhos/6081c39c710f580001223f20/sacolas/61c33b42ee950e00010f52b3/desconto-maximo-vendedor'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCatalogo.json`
            },
          
        ).as('vv-farol: farol-carrinho-comissao'); 

        /* cy.intercept(
            {
                method: 'GET',  
                url: '/vv-catalogo-servicos/produto/MERCADORIA/3729885/tipoEstoque/PADRAO/combosAgrupados?codigoCliente=520178874'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCatalogo.json`
            },
          
        ).as('vv-catalogo: catalogo-servicos');  */
                
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-adm/parametros/viamais.qrcodeappbanqi.tipoHabilita'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtParametros.json` 
            }, 
        ).as('parametros: parametros'); 

        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-cupom/cupom/funcionalidadeCupom'
            },
            {  
                statusCode: 200,              
                fixture: `lidn/${ambiente}/intercept/fxtVitrine.json`
            },  
              
        ).as('vv-cupom: funcionalidadeCupom'); 
              
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-vitrine/campanhas/banners/?cpf=94994757100'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtVitrine.json` 
            }, 
        ).as('vv-vitrine: campanha'); 
 
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-vitrine/catalogo/catalogo?per_page=10&cpf=94994757100&filtros=EM_LINHA&fields=estruturasMercadologicas,filtros,totalProdutos,indiceRentabilidade,detalhe,produtos.sku,produtos.tipoProduto,produtos.nomeResumido,produtos.nomeCompleto,produtos.estado,produtos.estados,produtos.imagemPrincipal,produtos.tagVitrine,produtos.slugCategoria,produtos.canal,produtos.setor'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCupom.json` 
            },
        ).as('vv-vitrine: cupomVia'); 

        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-credito-cliente/creditoCliente/clientes/520178874/valorDisponivel?valorUtilizado=0'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCreditocliente.json` 
            }, 
        ).as('vv-credito: credito-cliente');

        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-cartao/cartao-casas-bahia/consultar-cartao-por-cliente/520178874/'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCartaocb.json` 
            }, 
        ).as('vv-cartao: cartao-cb'); 

        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-adm/parametros/viamais.qrcodeappbanqi.bandeira'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtParametros.json` 
            }, 
        ).as('vv-adm: parametros');
         
        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-vitrine/catalogo/catalogo?per_page=10&filtros=EM_LINHA&fields=estruturasMercadologicas,filtros,totalProdutos,indiceRentabilidade,detalhe,produtos.sku,produtos.tipoProduto,produtos.nomeResumido,produtos.nomeCompleto,produtos.estado,produtos.estados,produtos.imagemPrincipal,produtos.tagVitrine,produtos.slugCategoria,produtos.canal,produtos.setor'
            },
            {    
                statusCode: 200,            
                fixture: `lidn/${ambiente}/intercept/fxtVitrinecatalogo.json`
            }, 
        ).as('vv-vitrine: catalogo');

        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-catalogo-servicos/produto/MERCADORIA/4727681/tipoEstoque/PADRAO/servicos?codigoCliente=520178874&codigoLogradouro=308479&quantidadeMontagens=1&codigoCarrinho=60985b59faa48d000127d0d7&codigoSacola=61bc8cf77fc17a00012afb21&quantidadeProdutos=2&funcionario=false'
            },
        ).as('vv-catalogo: catalogo');
       
        cy.intercept(
            {
                method: "GET",
                url: `/vv-incentivo-app/colaborador/onelink/?*`,
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCatalogo.json`
            },
        ).as('vv-incentivo: vendedorchannel');

        cy.intercept(
            {
                method: "GET",
                url: `/vv-carrinho/carrinhos/?/*`
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCarrinhosacolas.json`
            },
        ).as('carrinho: sacolas');

        cy.intercept(
            {
                method: "GET",
                url: `/vv-crm/clientes/cb-vip/94994757100`
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCatalogo.json`
            },
        ).as('vv-crm: crm-cb-vip');

        cy.intercept(
            {
                method: "GET",
                url: `/vv-vitrine/campanhas/cupons/?slug=&quantidadeProdutos=0&cpf=94994757100`
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCatalogo.json`
            },
        ).as('vv-vitrine: campanha-cupoms-qtd');
       
        cy.intercept(
            {
                method: "POST",
                url: `/vv-crediario/clientes/consultar-perfil`,
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtCatalogo.json`
            },
        ).as('vv-crediario: consultar-perfil'); 
 
       /*  cy.intercept(
            {
                method: 'GET',  
                url: '/vv-catalogo-servicos/seguros?codigo=520178874&funcionario=false'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtServicos.json` 
            }, 
        ).as('vv-catalogo: servicos');  */

        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-viamais-negociacao-api/formas-pagamento-viamais'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtNegociacao.json` 
            }, 
        ).as('vv-viamais-negociacao: negociacao'); 

        cy.intercept(
            {
                method: 'GET',  
                url: '/vv-credito-cliente/voucher/clientes/520178874/simplificados'
            },
            {   
                statusCode: 200,             
                fixture: `lidn/${ambiente}/intercept/fxtAnalyticcollect.json` 
            }, 
        ).as('vv-credito-cliente: credito-voucher'); 

      /*    cy.wait('@catalogo: colaborador').then((intercept) => {
                    cy.log(JSON.stringify(intercept));
                     });   */
         
  
        cy.get(elementoCarregamento).should("not.exist");

        cy.get(labelCampoFilial).should("be.visible").click();
        cy.get(inputCampoFilial).type(objetoVendedor.filial).should("have.value", objetoVendedor.filial);
        cy.get(labelCampoEmpresa).click();
        cy.get(labelNomeFilial).should("exist");

        cy.get(labelCampoEmpresa).click();
        cy.get(inputCampoEmpresa).type(objetoVendedor.empresa).should("have.value", objetoVendedor.empresa);

        cy.get(labelCampoMatricula).click();
        cy.get(inputCampoMatricula).type(objetoVendedor.matricula).should("have.value", objetoVendedor.matricula);

        cy.get(labelCampoSenha).click();
        cy.get(inputCampoSenha).type(objetoVendedor.senha);

        cy.get(botaoLogin).click();

        cy.get(elementoCarregamento).should("not.exist");
        cy.get(elementoConfirmacaoLogin).should("be.visible");
    }
);