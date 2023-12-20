/// <reference types="cypress" />

describe("FooterComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders the FooterComponent correctly", () => {
    cy.get("#footer").should("exist");

    cy.get('img[alt="logo-home"]').should("exist");

    cy.contains("DtechCraftSolutions © 2023").should("exist");
    cy.contains("todos os direitos reservados.").should("exist");
    cy.contains("CNPJ:").should("exist");

    cy.contains("Produtos").should("exist");
    cy.contains("BarberHub").should("exist");
    cy.contains("To cum Fome").should("exist");

    cy.contains("Sobre").should("exist");

    cy.contains("Suporte").should("exist");
  });
});
