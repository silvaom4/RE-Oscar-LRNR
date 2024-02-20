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


  //5
  describe('it contains a button on the home page', () => {
    it('contains button with text begin journey', () => {
      cy.visit('/')
      cy.get('a').contains('Begin Journey')
      
    })
  })

  // 6

  describe('it contains personalized quizzes', () => {
    it('contains text that says personalized quizzes', () => {
      cy.visit('/')
      cy.contains('Personalized Quizzes')
    })
  })

  // 7
  describe('it contains rewarding', () => {
    it('contains text that says rewarding', () => {
      cy.visit('/')
      cy.contains('Rewarding')
    })
  })})
  
  // 8
  describe('it tests the quiz generation options', () => {
  it('checks for options expert, matthew mcconaughey, and aws', () => {
    cy.visit('/quiz-generation')

    cy.get('select[name=topic]').select('aws').should('have.value','aws')
    cy.get('select[name=expertise]').select(`expert`).should('have.value','expert')
    cy.get('select[name=style]').select('matthew mcconaughey').should('have.value','matthew mcconaughey')
  })

})