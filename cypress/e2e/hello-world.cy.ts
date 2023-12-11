describe("Hello World", () => {
  it("passes", () => {
    cy.visit("localhost:3000");
    cy.get("h1").contains("Hello World");
  });
});
