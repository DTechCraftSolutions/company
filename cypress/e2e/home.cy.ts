describe("HomeComponent", () => {
  it('should render the HomeComponent and click the "Teste Agora" button', () => {
    cy.visit("http://localhost:3000");

    cy.get("#home").should("exist");

    cy.get('img[alt="logo"]').should("exist");

    cy.contains("Transforme Seu Negócio Com Nossos Sistemas").should("exist");

    cy.contains(
      "Descubra a eficiência em soluções para delivery, agendamentos e automações em geral."
    ).should("exist");

    cy.contains("Teste Agora").click();

    cy.url().should("include", "/#home");

    cy.get("#home").should("exist");
  });
});
