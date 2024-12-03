/// <reference types="cypress" />

describe("Teste na lista de contanto", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
  it("add contato", () => {
    cy.get('input[type="text"]').type("Francisco Carter");
    cy.get('input[type="email"]').type("fajomu@ip.kw");
    cy.get('input[type="tel"]').type("00 12345-6789");
    cy.get('button[type="submit"]').click();
    cy.get("header > h2").should("have.text", "4 contatos na agenda");
  });
  it("editar contato", () => {
    cy.get(".edit").first().click();
    cy.get('input[type="text"]').clear().type("Sallie Moss");
    cy.get('input[type="email"]').clear().type("cemesjok@pibhaniw.gt");
    cy.get('input[type="tel"]').clear().type("00 12345-6789");
    cy.get(".alterar").click();
    cy.get(".contato li").first().should("have.text", "Sallie Moss");
  });
  it("remover contato", () => {
    cy.get(".delete").last().click();
    cy.get("header > h2").should("have.text", "3 contatos na agenda");
  });
});
