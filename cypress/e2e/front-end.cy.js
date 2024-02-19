// npm run cypress:open


//1
describe('it connects to the front end', () => {
  it('loads the home page', () => {
    cy.visit('/')

    cy.contains('Account')
    cy.contains('Quiz Generation')
    cy.contains('Quiz Generation').click()
    
  })
})

//2
describe('it loads the quiz generation page', () => {
  it('clicks on the quiz generation page', () => {
    cy.visit('/')
    cy.contains('Quiz Generation').click()

    cy.url().should('include', '/quiz-generation')

  })


//3
describe('it tests the quiz generation page', () => {
  it('checks for options on the quiz form', () => {
    cy.visit('/quiz-generation')

    cy.get('select[name=topic]').select('golang').should('have.value','golang')
    cy.get('select[name=expertise]').select(`expert`).should('have.value','expert')
    cy.get('select[name=numQuestions]').select('5').should('have.value','5')
    cy.get('select[name=style]').select('jedi').should('have.value','jedi')
    // .should('have.value','golang')

  }) 
})


})


//4
describe('it loads the account page', () => {
    it('loads the account page', () => {
      cy.visit('/account')
      cy.contains('Account')
      cy.get('.h3').contains('Streak')
      cy.get('.h3').contains('Platinum Quizzes')
      cy.get('.h3').contains('Lrnr Level')

    })
  })
