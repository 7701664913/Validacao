import { elementoCarregamento } from "../custom_elements/elementosCompartilhados";

const imagemDaVitrine = ".qa-catalog-product-image-read";
const addAoCarrinho = ".qa-catalog-description-footer-addcart-button-click";

Cypress.Commands.add(
    "mercadoriaViaMais",
    (objetoMercadoria) => {
        // Selecionar Imagem de SKU na Catalogo 
        cy.wait(1000);
        cy.get(`${imagemDaVitrine}.${objetoMercadoria.sku}`).should("be.visible").click();
        cy.get(elementoCarregamento).should("not.exist"); 
               
        // Adicionar objeto ao carrinho na PDP
        cy.get(addAoCarrinho).should("be.visible").click();
        
        }

);