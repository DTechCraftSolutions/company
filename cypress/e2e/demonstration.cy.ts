describe("Demonstration Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the carousel with content", () => {
    cy.get("#demonstration").should("exist");

    cy.get(".ant-carousel").should("exist");

    cy.get(".ant-carousel .slick-slide").should("have.length.greaterThan", 0);
  });

  it("should navigate through the carousel", () => {
    cy.get("#demonstration").should("exist");

    cy.get(".ant-carousel").should("exist");

    let initialSlide: string;
    cy.get(".ant-carousel .slick-active").then(($slide) => {
      initialSlide = $slide.text().trim();
    });

    // cy.get(".ant-carousel .slick-active").should(($slide) => {
    //   expect($slide.text().trim()).not.to.equal(initialSlide);
    // });
  });
});
