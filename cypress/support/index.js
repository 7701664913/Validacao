// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Você pode importar código usando a sintaxe do ES2015:
// import "nome-do-modulo";
// Ou, alternativamente, você pode usar a sintaxe do CommonJS:
// require("nome-do-modulo");

require('@shelex/cypress-allure-plugin');
require('cypress-xpath');
//require('./cypress/support/custom_commands/general_commands');
import './lidn/custom_commands/commands_login';
import './lidn/custom_commands/commands_catalogo';
import './lidn/custom_commands/commands_carrinho';
import './lidn/custom_commands/commands_mercadoria';
import './lidn/custom_commands/commands_servicos';