/// <reference types="cypress" />
it("visits todoMVC app", () => {
  cy.visit("localhost:3000");
});

it("finds the h1 tag", () => {
  cy.findByRole("h1");
});

it("finds an input", () => {
  cy.get("#add-todo");
});
