describe('Benefit Component E2E Test', () => {
  beforeEach(() => {
    // Visita a URL antes de cada teste
    cy.visit('http://localhost:3000');
  });

  it('Exibe os benefícios corretamente', () => {
    cy.contains('Descubra os Benefícios').should('exist');
    cy.contains('Descubra por que nossos sistemas são a escolha ideal para o seu negócio.').should('exist');

    // Verifica se os quatro cartões estão presentes
    cy.get('.flex.flex-col.h-80.py-12.items-center').should('have.length', 4);

    // Verifica o conteúdo de cada cartão
    for (let i = 0; i < 4; i++) {
      cy.get('.flex.flex-col.h-80.py-12.items-center').eq(i).within(() => {
        // Verifica se o componente Card está presente
        cy.get('.CardTitle').should('exist');

        // Verifica se o componente CardTitle está presente
        cy.get('.CardContent').should('exist');
      });
    }
  });
});
