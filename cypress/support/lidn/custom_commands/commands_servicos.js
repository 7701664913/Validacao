import { elementoCarregamento } from "../custom_elements/elementosCompartilhados";

//Garantia
const editEntrega =  {seletor: ".qa-cart-edit-item-click", texto: 'Editar'};
const abaServicos = {seletor: ".qa-cart-edit-services-tab-click", texto: 'Serviços'};
const selecionarGarantia = {seletor: ".plans", texto: '12 meses'};
const abaEntrega = {seletor: ".qa-cart-edit-delivery-tab-click", texto: 'Entrega'};
const selecionarEnd = ".qa-cart-delivery-selection-click";
const confirmarEdicao = ".qa-cart-apply-product-modifications-click";

//FiqueSeguro
const selecionarFique = {seletor: ".service-info", texto: 'Fique Seguro'};
const opçoesFique = {seletor: ".plans", texto: 'Quebra Acidental'};
const confirmarFiqueselecionado = ".footer-btn-incluir";

Cypress.Commands.add(
    "ServicoGarantia",
    () => {
        cy.get(elementoCarregamento).should("not.exist");
        cy.get(editEntrega.seletor).contains(editEntrega.texto).should("be.visible").click();
        cy.get(elementoCarregamento).should("not.exist");
        cy.get(`${abaServicos.seletor}`).contains(abaServicos.texto).should("be.visible").click();
        cy.get(elementoCarregamento).should("not.exist");
        cy.get(selecionarGarantia.seletor).contains(selecionarGarantia.texto).should("be.visible").click();
        cy.get(abaEntrega.seletor).contains(abaEntrega.texto).should("be.visible").click();
        cy.get(selecionarEnd).should("be.visible").select('Retira nesta loja');
        cy.get(confirmarEdicao).click();
        

         
    }
)
Cypress.Commands.add(
    "ServicoFiqueSeguro",
    () => {
        cy.get(elementoCarregamento).should("not.exist");
        cy.get(editEntrega.seletor).contains(editEntrega.texto).should("be.visible").click();
        cy.get(elementoCarregamento).should("not.exist");
        cy.get(`${abaServicos.seletor}`).contains(abaServicos.texto).should("be.visible").click();
        cy.get(elementoCarregamento).should("not.exist");
        cy.get(selecionarFique.seletor).contains(selecionarFique.texto).should("be.visible").click();
        cy.get(opçoesFique.seletor).contains(opçoesFique.texto).should("be.visible").click();
        cy.get(confirmarFiqueselecionado).click();
        cy.get(abaEntrega.seletor).contains(abaEntrega.texto).should("be.visible").click();
        cy.get(selecionarEnd).should("be.visible").select('Retira nesta loja');
        cy.get(confirmarEdicao).click();


         
    }
)