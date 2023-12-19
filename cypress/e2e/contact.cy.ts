/// <reference types="cypress" />

describe("ContactComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders the ContactComponent correctly", () => {
    cy.get("#contact").should("exist");

    cy.contains("Contato").should("exist");

    cy.get("form").should("exist");
    cy.get("input#name").should("exist");
    cy.get("input#email").should("exist");
    cy.get("textarea#message").should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("submits the form correctly", () => {
    cy.visit("http://localhost:3000");

    cy.get("input#name").type("John Doe");
    cy.get("input#email").type("john@example.com");
    cy.get("textarea#message").type("This is a test message.");

    cy.get('button[type="submit"]').click();
  });
});
