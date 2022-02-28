/// <reference types="cypress" />

import JsonPlaceholderService from "../../../support/cross/services/jsonPlaceholder/jsonPlaceholderAPI";
import getPostsSchema from "../../../support/cross/services/jsonPlaceholder/contracts/get.posts.contract";

context('JSON Placeholder Service', () => {
	let apiService;
    
    before(() => {
		apiService = new JsonPlaceholderService();
	});
	
	describe("Minha Primeira Funcionalidade", () => {
		it("@lidn - @contrato - Meu Primeiro Cenário", () => {
			apiService.getPosts().then((response) => {
				expect(response.status).to.eql(200);
				const resultadoValidacao = getPostsSchema.validate(response.body);
				expect(resultadoValidacao.error).to.eql(undefined);
			});
		});
	});
});
