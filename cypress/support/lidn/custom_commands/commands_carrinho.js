
        import { elementoCarregamento } from "../custom_elements/elementosCompartilhados";

        //ATENDER NOVO CLIENTE
        const novoCliente = ".main-action qa-print-new-client-button-click";

        //TIPO DE ENTREGA
        const editEntrega = ".qa-cart-edit-item-click";
        const selecionarEnd = ".qa-cart-delivery-selection-click";
        const confirmarEdicao = ".qa-cart-apply-product-modifications-click";
        const confirmarBotaogerarPedido = { seletor: ".qa-cart-payment-footer-delivery-cart-submit-payment-click", texto: 'Gerar Pedido' };

        //DINHEIRO
        const tituloFormaPgto = ".qa-core-filters-click";
        const campoValorDinheiro = ".qa-cart-payment-cash-write";
        const botaoPreencherRestanteDinheiro = ".qa-cart-payment-cash-fill-remaining-value-click";
        const botaoConfirmarPgtoDinheiro = ".qa-cart-payment-cash-submit-click";
        const confirmacaoValorPgtodinheiro = "#payment-method-cash-value-0";
        const GerarPedidoDinheiro = ".qa-cart-payment-footer-delivery-cart-submit-payment-click";
        const ConcluirPedidodinheiro = ".qa-basket-footer-conclude-button-click";
        const SucessoPedidodinheiro = ".qa-print-same-client-button-click";
        //CARTÃO BAHIA
        const tituloPagtoCCB = ".qa-core-filters-click";
        const PrivateLabelCb = "label[for='input-bin-0']";
        const PreencherPagtoCb = "#fill-remaining-value-private-label-0";
        const EscolherParcelaCB = ".qa-cart-payment-credit-private-select-payment-click";
        const ConfirmarParcelaCcb = ".qa-cart-payment-credit-private-label-submit-click";
        const GerarPedidoCcb = ".qa-cart-payment-footer-delivery-cart-submit-payment-click";
        const ConcluirPedidoCcb = ".qa-basket-footer-conclude-button-click";
        const SucessoPedidoCcb = ".qa-print-same-client-button-click";

        //CARTÃO DE CRÉDITO
        const tituloPagtoCc = ".qa-core-filters-click";
        const Privatelabelcc = ".qa-cart-payment-credit-input-value-write";
        const PreencherValorRestante = "#fill-remaining-value-credit-0";
        const EscolherParcelaCC = ".qa-cart-payment-credit-payment-select";
        const ConfirmarparcelaCc = ".qa-cart-payment-credit-payment-submit-button-click";
        const GerarPedidoCc = ".qa-cart-payment-footer-delivery-cart-submit-payment-click";
        const ConcluirPedidoCc = ".qa-basket-footer-conclude-button-click";
        const SucessoPedidoCc = ".qa-print-same-client-button-click";

        //CARTÃO DE DEBITO
        const tituloPagtoDebito = ".qa-core-filters-click";
        const PrivatelabelDebito = ".qa-cart-payment-debit-write has-value";
        const PreencherValorTotalDebito = "#fill-remaining-value-6-0";
        const ConfirmarparcelaDebito = ".qa-cart-payment-debit-submit-click";
        const GerarPedidoDebito = ".qa-cart-payment-footer-delivery-cart-submit-payment-click";
        const ConcluirPedidoDebito = ".qa-basket-footer-conclude-button-click";
        const SucessoPedidoDebito = ".qa-print-new-client-button-click";
        const impressão = "#select-impressora";

        //OUTRAS FORMAS DE PAGAMENTO
        const tituloOutrasFormasPagto = ".qa-core-filters-click"

        //DEPOSITOiDENTIFICADO
        const tituloPagtoDepIdentificado = ".qa-core-filters-click";
        const PreencherValorTotalDepIdentificado = "#fill-remaining-value-9-0";
        const ConfirmarparcelaDepIdentificado = ".qa-cart-payment-deposit-identified-submit-click";
        const GerarPedidoDepIdentificado = ".qa-cart-payment-footer-delivery-cart-submit-payment-click";
        const ConcluirPedidoDepIdentificado = ".qa-basket-footer-conclude-button-click";
        const SucessoPedidoDepIdentificado = ".qa-print-same-client-button-click";

        //BANRRICOMPRAS
        const tituloPagtoBanrricompras = ".qa-core-filters-click";
        const PreencherValorTotalBanrricompras = "#fill-remaining-value-banrisul-0";
        const EscolherParcelaBanrricompras = ".qa-cart-payment-banrisul-select";
        const ConfirmarparcelaBanrricompras = ".qa-cart-payment-banrisul-submit-click";
        const GerarPedidoBanrricompras = ".qa-cart-payment-footer-delivery-cart-submit-payment-click";
        const ConcluirPedidoBanrricompras = ".qa-basket-footer-conclude-button-click";
        const SucessoPedidoBanrricompras = ".qa-print-same-client-button-click";

        //CDC
        const tituloPagtoCdc = ".qa-core-filters-click";
        const trintaDiasCdc = { seletor: "label.qa-cart-cdc-30-days-label", texto: '30 dias', pegaSeletor: () => { return trintaDiasCdc.seletor }, pegaTexto: () => { return trintaDiasCdc.texto } };
        const EscolherParcelaCdc = ".qa-cart-carne-select-payment-conditions";
        const ConfirmarparcelaCdc = ".qa-cart-carne-select-payment-conditions-confirm";
        const ConsultarProposta = { seletor: ".qa-basket-cdc-proposal-consult-button-click", texto: 'Consultar' };
        const ConcluirPedidoCdc = ".qa-basket-footer-conclude-button-click";
        const SucessoPedidoCdc = ".qa-print-same-client-button-click";
        const notificacaoCarrinho_Vermelha = "vnd-cart-notification"
        const acaoNotificacao = `${notificacaoCarrinho_Vermelha} div.actions`;



        Cypress.Commands.add(
            "selecionarEndereco",
            (objetoMercadoria) => {
                // Abrindo edição de Carrinho
                cy.get(editEntrega).should("be.visible").click();
                cy.get(elementoCarregamento).should("not.exist");
                // Validação de posicionamento na aba de entrega
                cy.wait(1000)
                cy.get(elementoCarregamento).should("not.exist");
                cy.wait(1000);
                cy.get(elementoCarregamento).should("not.exist");
                cy.wait(1000);
                cy.get(selecionarEnd).should("be.visible").select('Retira nesta loja');
                cy.get(elementoCarregamento).should("not.exist");
                cy.wait(1000);
                cy.get(elementoCarregamento).should("not.exist");
                // Fechando edição de SKU
                cy.get(`${confirmarEdicao}.${objetoMercadoria.sku}`).should("be.visible").click();
                cy.get(elementoCarregamento).should("not.exist");
            }
        );
        Cypress.Commands.add(
            "formasPagtoDinheiroRestante",
            () => {
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(tituloFormaPgto).should("be.visible");
                cy.get(`${tituloFormaPgto}.dinheiro`).click();
                cy.get(elementoCarregamento).should("not.exist");
                // cy.get(botaoConfirmarPgtoDinheiro).should("be.visible").should("have.attr", "disabled");
                cy.wait(1000);
                cy.get(botaoPreencherRestanteDinheiro).should("be.visible").click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(botaoPreencherRestanteDinheiro).should("have.attr", "disabled");
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(botaoConfirmarPgtoDinheiro).should("not.have.attr", "disabled");
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(botaoConfirmarPgtoDinheiro).click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.wait(1000);
              
            }
        );
        Cypress.Commands.add(
            "formasPagtoDinheiroArbitrario",
            (valor) => {
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(tituloFormaPgto).should("be.visible");
                cy.get(`${tituloFormaPgto}.dinheiro`).click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(botaoConfirmarPgtoDinheiro).should("be.visible").should("have.attr", "disabled");
                cy.get(campoValorDinheiro).should("be.visible").click().type(valor);
                cy.get(campoValorDinheiro).should("be.visible").click().type(valor);
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(botaoConfirmarPgtoDinheiro).should("not.have.attr", "disabled");
                cy.get(botaoConfirmarPgtoDinheiro).click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(confirmacaoValorPgtoDinheiro).should("be.visible");
            }
        );
        Cypress.Commands.add(
            "formasPagtoCCB",
            (Bins) => {
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(tituloPagtoCCB).should("be.visible");
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(`${tituloPagtoCCB}.cartao-casas-bahia`).click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(PrivateLabelCb).should("be.visible").click().type('541465');
                cy.get(PreencherPagtoCb).click();
                cy.get(EscolherParcelaCB).select("4: Object");
                cy.get(ConfirmarParcelaCcb).click();
                cy.get(GerarPedidoCcb).click();
                cy.get(ConcluirPedidoCcb).click();
                cy.get(SucessoPedidoCcb).click();
            }
        );
        Cypress.Commands.add(
            "formasPagtoCC",
            () => {
                
                cy.get(`${tituloPagtoCc}.cartao-de-credito`).click();
                cy.get(Privatelabelcc).click();
                cy.get(Privatelabelcc).type('10,00');
                cy.get(PreencherValorRestante).should("be.visible");
                cy.get(PreencherValorRestante).click();
                cy.get(PreencherValorRestante).should("exist"); 
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(EscolherParcelaCC).first().should("be.visible").select('16: Object');
                cy.get(ConfirmarparcelaCc).should("be.visible").click();
                cy.get(GerarPedidoCc).should("be.visible").click();
                cy.get(ConcluirPedidoCc).should("be.visible").click();
                cy.get(SucessoPedidoCc).should("be.visible").click();

                
            }
        );
        Cypress.Commands.add(
            "formasPagtoDebito",
            () => {
            
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(`${tituloPagtoDebito}.cartao-de-debito`).click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.wait(1000)
                cy.get(PreencherValorTotalDebito).should("be.visible").click();
                cy.get(ConfirmarparcelaDebito).click();
                cy.wait(1000)
                cy.get(GerarPedidoDebito).should("be.visible").click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.wait(1000)
             
            }
        );

        Cypress.Commands.add(
            "formasPagtoOutrasFormas",
            () => {
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(tituloPagtoCCB).should("be.visible");
                cy.get(`${tituloOutrasFormasPagto}.outras-formas-de-pagamento`).click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(`${tituloPagtoDepIdentificado}.deposito-identificado`).click();
                cy.get(PreencherValorTotalDepIdentificado).click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(ConfirmarparcelaDepIdentificado).click();
                cy.get(GerarPedidoDepIdentificado).click();
                cy.get(ConcluirPedidoDepIdentificado).click();
                cy.get(SucessoPedidoDepIdentificado).click();
            }
        );
        Cypress.Commands.add(
            "formasPagtoOutrasBanrricompras",
            () => {
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(tituloPagtoCCB).should("be.visible");
                cy.get(`${tituloOutrasFormasPagto}.outras-formas-de-pagamento`).click();
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(`${tituloPagtoBanrricompras}.banricompras`).click();
                cy.get(PreencherValorTotalBanrricompras).click();
                cy.get(EscolherParcelaBanrricompras).select("1: Object");
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(ConfirmarparcelaBanrricompras).click();
                cy.get(GerarPedidoBanrricompras).should("be.visible").click();
                cy.get(ConcluirPedidoBanrricompras).click();
                cy.get(SucessoPedidoBanrricompras).click();
            }
        );
        Cypress.Commands.add(
            "formasPagtoCDC",
            () => {
                const processo = () => {
                    cy.get(elementoCarregamento).should("not.exist");
                    cy.get(tituloPagtoCCB).should("be.visible");
                    cy.get(elementoCarregamento).should("not.exist");
                    cy.get(`${tituloPagtoCdc}.carne`).click();
                    cy.get(elementoCarregamento).should("not.exist");
                    cy.get(trintaDiasCdc.pegaSeletor()).should("exist").click();
                    cy.get(elementoCarregamento).should("not.exist");
                    cy.get(EscolherParcelaCdc).select('2: Object');
                    cy.get(elementoCarregamento).should("not.exist");
                    cy.get(ConfirmarparcelaCdc).should("be.visible").click();
                    cy.get(elementoCarregamento).should("not.exist");
                    return cy.contains(confirmarBotaogerarPedido.texto).should("exist").click();
                };

                const verificacao = (processe, iterationLimit = 10, iteration = 0) => {
                    return processe().then((resultado) => {
                        cy.get('body').then(($body) => {
                            if (iteration < iterationLimit) {
                                // synchronously query from body
                                // to find which element was created
                                if ($body.find(acaoNotificacao).length) {
                                    // input was found, do something else here
                                    return verificacao(processe, iterationLimit, iteration + 1)
                                } else {
                                    return true;
                                }
                            }

                            // else assume it was textarea
                            return false;
                        });
                    });
                }

                verificacao(processo);
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(ConsultarProposta.seletor).contains(ConsultarProposta.texto).should("be.visible").click();
                cy.get(ConcluirPedidoCdc).should("be.visible").should("be.visible").click();
                cy.get(SucessoPedidoCdc).click();
            }
        );

        Cypress.Commands.add(
            "gerarPedido",
            () => {
                cy.get(elementoCarregamento).should("not.exist");
                cy.wait(1000);
                cy.get(".qa-cart-payment-footer-delivery-cart-submit-payment-click").click();
              
            }
        );

        Cypress.Commands.add(
            "concluirPedido",
            () => {
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(".qa-basket-footer-conclude-button-click").click();
                cy.get(".qa-print-same-client-button-click").click();
            }
        );

        Cypress.Commands.add(
            "valorParcialDinheiro",
            () => {
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(inputValor).type();

            });

        Cypress.Commands.add(
            "novaVenda",
            () => {
                cy.get(elementoCarregamento).should("not.exist");
                cy.get(novoCliente).click();

            });



