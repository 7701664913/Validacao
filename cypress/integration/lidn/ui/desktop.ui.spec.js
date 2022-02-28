        /// <reference types="cypress" />

        let massaEnderecos;
        let massaVendedores;
        let massaClientes;
        let ambiente;
        let massaMercadoria;
        let massaValor;
        let massaBins;
        let catalogo;


        context("Template 2.0 - Cypress Desktop", () => {
            describe('Via Mais - Casas Bahia', () => {
                before(() => {
                    ambiente = Cypress.env("ENV");

                    cy.fixture(`lidn/${ambiente}/enderecos`).then((enderecosCarregados) => {
                        massaEnderecos = enderecosCarregados;
                    });

                    cy.fixture(`lidn/${ambiente}/vendedores`).then((dados) => {
                        massaVendedores = dados;
                    });
                    cy.fixture(`lidn/${ambiente}/clientes`).then((clientesCarregados) => {
                        massaClientes = clientesCarregados;
                    });
                    cy.fixture(`lidn/${ambiente}/mercadoria`).then((mercadoriasCarregadas) => {
                        massaMercadoria = mercadoriasCarregadas;
                    });
                });

                it('Dinheiro', () => {
                    const mercadoriaCenario = massaMercadoria.mercadoria_secador;
                   
                    cy.mercadoriaViaMais(mercadoriaCenario);
                    cy.selecionarEndereco(mercadoriaCenario);
                    cy.formasPagtoDinheiroRestante();
                    cy.gerarPedido();
                    cy.concluirPedido();
                });

                it('Debito', () => {
                    const mercadoriaCenario = massaMercadoria.mercadoria_secador;

                    cy.mercadoriaViaMais(mercadoriaCenario);
                    cy.selecionarEndereco(mercadoriaCenario);
                    cy.formasPagtoDebito();
                    cy.gerarPedido();
                    cy.concluirPedido();
                  
                });

         });

    });

        beforeEach(() => {
            //cy.visit(massaEnderecos.casas_bahia);
            cy.comecarTeste(massaEnderecos.casas_bahia);
            cy.loginViaMais(massaVendedores.vendedor_casas_bahia);
            cy.identificarClienteTeste(massaClientes.cliente_cb);

        });
