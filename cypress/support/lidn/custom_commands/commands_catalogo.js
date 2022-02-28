    import { elementoCarregamento } from "../custom_elements/elementosCompartilhados";

    //Elementos Catálogo
    const elementoAtendimentoAtivo = ".customer-section";
    const elementoAtendimentoInativo = ".qa-core-no-active-service-read";
    const popoverAtendimento = ".qa-core-service-popover-click";
    const classePopoverAberto = "is-active";
    const botaoEncerrarAtendimento = ".qa-core-cancel-service-click";
    const botaoConfirmarEncerramento = ".qa-core-interrupt-service-yes-click";
    const botaoIdentificarClienteCatalogo = { seletor: ".qa-core-id-client-click", texto: 'Identificar Cliente' };


    //Elementos Pop-Up Identificação
    const labelCampoDocumento = "label[for='input-document']";
    const inputCampoDocumento = ".qa-core-modal-identification-cpf-cnpj-write";
    const botaoIdentificarClientePopUp = ".qa-core-id-client-click";

    Cypress.Commands.add(
        "identificarClienteTeste",
        (objetoCliente) => {
            cy.get('body').then((corpoPagina) => {
                if (corpoPagina.find(elementoAtendimentoAtivo).length) {
                    cy.encerrarAtendimentoAtivo();

                }
            });

            cy.get(elementoAtendimentoInativo).should("exist");

            cy.get('body').then((corpoPagina) => {
                if (corpoPagina.find(`${popoverAtendimento}:not(.${classePopoverAberto})`).length) {
                    cy.get(popoverAtendimento).click().should("have.class", classePopoverAberto);
                }
            });

            cy.get(botaoIdentificarClienteCatalogo.seletor).contains(botaoIdentificarClienteCatalogo.texto).should("be.visible").click();
            cy.get(labelCampoDocumento).click();
            cy.get(elementoCarregamento).should("not.exist");
            cy.get(labelCampoDocumento).click();
            cy.get('#input-document').click();
            cy.get(inputCampoDocumento).type(objetoCliente.doc);
            cy.get(botaoIdentificarClientePopUp).first().click();
            // cy.get('.main-header').click();

        }
    );

    Cypress.Commands.add(
        "encerrarAtendimentoAtivo",
        () => {
            cy.get(`${popoverAtendimento}:not(.${classePopoverAberto})`).should("be.visible").click().should("have.class", classePopoverAberto);
            cy.get(botaoEncerrarAtendimento).should("be.visible").click();
            cy.get(botaoConfirmarEncerramento).should("be.visible").click();
            cy.get(elementoAtendimentoAtivo).should("not.exist");

        })
