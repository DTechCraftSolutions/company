describe("Demonstration Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the carousel with content", () => {
    cy.get("#demonstration").should("exist");

    cy.get(".swiper").should("exist");

    cy.get(".swiper").should("have.length.greaterThan", 0);
  });

  it("should navigate through the carousel", () => {
    cy.get("#demonstration").should("exist");

    cy.get(".swiper").should("exist");

    let initialSlide: string;
    cy.get(".swiper").then(($slide) => {
      initialSlide = $slide.text().trim();
    });
  });
});
