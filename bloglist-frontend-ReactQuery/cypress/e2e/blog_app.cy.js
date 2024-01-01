describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Matti Luukkainen',
      username: 'mluukkai',
      password: 'salainen',
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)

    const user2 = {
      name: 'test user',
      username: 'test',
      password: 'test',
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user2)
    cy.visit('http://localhost:3002')
  })

  it('Login form is shown', function () {
    // cy.visit('http://localhost:3002')
    cy.contains('Log in to application')
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      // cy.visit('http://localhost:3002')
      // cy.contains('log in').click()
      // cy.get('input:first').type('test')
      // cy.get('input:last').type('test')
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('salainen')
      cy.get('#login-button').click()

      cy.contains('Matti Luukkainen logged-in')
    })

    it('fails with wrong credentials', function () {
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('wrong')
      cy.get('#login-button').click()

      cy.contains('Wrong credentials')

      cy.get('.error')
        .should('contain', 'Wrong credentials')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
        .and('have.css', 'border-style', 'solid')

      cy.get('html').should('not.contain', 'Matti Luukkainen logged-in')
    })
  })

  describe('When logged in', function () {
    beforeEach(function () {
      cy.get('input:first').type('mluukkai')
      cy.get('input:last').type('salainen')
      cy.get('#login-button').click()
    })

    it('A blog can be created', function () {
      cy.contains('new blog').click()
      cy.get('#title').type('title created by cypress')
      cy.get('#author').type('author created by cypress')
      cy.get('#url').type('url created by cypress')
      cy.get('#create').click()
      cy.contains('title created by cypress')
    })

    it('Test like function', function () {
      cy.contains('new blog').click()
      cy.get('#title').type('title created by cypress')
      cy.get('#author').type('author created by cypress')
      cy.get('#url').type('url created by cypress')
      cy.get('#create').click()
      cy.contains('title created by cypress')

      cy.contains('view').click()

      cy.get('.like').click()
      cy.contains('likes 1')
    })

    it('Check remove blog function', function () {
      cy.contains('new blog').click()
      cy.get('#title').type('title created by cypress')
      cy.get('#author').type('author created by cypress')
      cy.get('#url').type('url created by cypress')
      cy.get('#create').click()
      cy.contains('title created by cypress')

      cy.contains('view').click()

      cy.contains('remove').click()
      // cy.get('html').should('not.contain', 'title created by cypress')
      cy.contains('title created by cypress').should('not.exist')
    })

    it('A different user cant see the remove option or delete the blog', function () {
      cy.contains('new blog').click()
      cy.get('#title').type('title created by cypress')
      cy.get('#author').type('author created by cypress')
      cy.get('#url').type('url created by cypress')
      cy.get('#create').click()
      cy.contains('title created by cypress')

      cy.contains('view').click()
      cy.contains('remove')
      cy.contains('logout').click()

      cy.get('#username').type('test')
      cy.get('#password').type('test')
      cy.get('#login-button').click()

      cy.contains('view').click()
      // cy.get('html').should('not.contain', 'remove')
      cy.contains('remove').should('not.exist')
    })

    it('Checks that the blogs are ordered according to likes ', function () {
      cy.contains('new blog').click()
      cy.get('#title').type('The title with the second most likes=0')
      cy.get('#author').type('author created by cypress')
      cy.get('#url').type('url created by cypress')
      cy.get('#create').click()

      cy.get('.view').eq(0).click()
      //   cy.get('.like').click()

      cy.get('#title').type('The title with the most likes=2')
      cy.get('#author').type('2nd author created by cypress')
      cy.get('#url').type('2nd url created by cypress')
      cy.get('#create').click()

      cy.get('.view').eq(1).click()
      cy.get('.like').eq(1).click()
      cy.contains('likes 1')
      cy.get('.like').eq(0).click()

      cy.get('.blog').eq(0).should('contain', 'The title with the most likes=2')
      cy.get('.blog')
        .eq(1)
        .should('contain', 'The title with the second most likes=0')
    })
  })
})
