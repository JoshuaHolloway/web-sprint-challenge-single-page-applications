function sum(a, b) {
  return a + b;
}


describe('Example Test', () => {
  it('example test', () => {
    expect(sum(5,5)).to.equal(10);
  });
});


describe('Test App', () => {
  it('renders properly', () => {
    cy.visit('http://localhost:3000/pizza');
    cy.get('#order-pizza').should('exist');
  });

  it('can add text to the box', () => {
    cy.get('#name-input').type('josh');
  });

  it('can select multiple toppings', () => {
    cy.get('#check-1').check();
    cy.get('#check-3').check();
  });

  it('can submit the form', () => {
    cy.get('#name-input').type(' holloway');
    cy.get('#pizza-form').submit();
  });
});