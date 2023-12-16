describe("Prices Component", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });
    it("should display the carousel with content", () => {
        cy.get("#prices").should("exist");

        cy.get(".carousel-prices").should("exist");

    });
    it("should have 4 cards of prices", () => {
        for (let i = 0; i < 4; i++) {
            cy.get('.priceCard').eq(i).within(() => {
                // Verifica se o componente Card está presente e tem seu conteúdo preenchido
                cy.get('.priceCardTitle').should('exist');

                cy.get('.priceCardAmount').should('exist');

                cy.get('.priceCardContent').should('exist');
            });
        }
    });
    it("should exist image Tocumfome", () => {
        cy.get('.imageToCumFome').should('exist');
    })
})


