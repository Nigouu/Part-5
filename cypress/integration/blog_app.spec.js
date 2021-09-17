describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'ManYes',
      username: 'YesMan',
      password: 'yess'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  // it.only('login fails with wrong password', function() {
  //   cy.contains('log in').click()
  //   cy.get('#username').type('YesMan')
  //   cy.get('#password').type('wrong')
  //   cy.get('#login-button').click()
  //   cy.get('.error')
  //     .should('contain', 'wrong credentials')
  //     .and('have.css', 'color', 'rgb(255, 0, 0)')
  //     .and('have.css', 'border-style', 'solid')
  //   cy.get('html').should('not.contain', 'ManYes logged in')
  // })

  // it('front page can be opened', function() {
  //   cy.contains('Blogs')
  // })

  // it('login form can be opened', function() {
  //   cy.contains('log in').click()
  //   cy.get('#username').type('YesMan')
  //   cy.get('#password').type('yess')
  //   cy.get('#login-button').click()
  //   cy.contains('ManYes logged in')
  // })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.contains('log in').click()
      cy.get('#username').type('YesMan')
      cy.get('#password').type('yess')
      cy.get('#login-button').click()
      cy.request('POST', 'http://localhost:3003/api/login', {
        username: 'YesMan', password: 'yess'
      }).then(response => {
        localStorage.setItem('loggedBlogappUser', JSON.stringify(response.body))
        cy.visit('http://localhost:3000')
      })

      // cy.login({ username: 'YesMan', password: 'yess' })
      // cy.createBlog({ title: 'first blog', author: 'first author', url:'www.first.com' })
      // cy.createBlog({ title: 'second blog', author: 'second author', url:'www.second.com' })
      // cy.createBlog({ title: 'third blog', author: 'third author', url:'www.third.com' })

      cy.contains('new blog').click()
      cy.get('#Btitle').type('a bloof')
      cy.get('#Bauthor').type('yaassmann')
      cy.get('#Burl').type('www.vvv.www')
      cy.contains('create').click()

      cy.contains('new blog').click()
      cy.get('#Btitle').type('scrump')
      cy.get('#Bauthor').type('scruuch')
      cy.get('#Burl').type('www.aaa.www')
      cy.contains('create').click()

      cy.contains('new blog').click()
      cy.get('#Btitle').type('a blog created by cypress')
      cy.get('#Bauthor').type('yaass')
      cy.get('#Burl').type('www.www.www')
      cy.contains('create').click()
    })

    // it('one of them can be liked', function () {
    //   cy.contains('a blog created by cypress')
    //   cy.contains('show').click()
    //   cy.contains('like').click()
    //   cy.contains('a blog created by cypress')
    //   cy.contains('show').click()
    //   cy.contains(1)
    // })

    // it('one of them can be removed', function () {
    //   cy.contains('a blog created by cypress')
    //   cy.contains('show').click()
    //   cy.contains('delete').click()
    //   cy.contains('a blog created by cypress').should('not.exist')
    // })

    // it('a new blog can be created', function() {
    //   cy.contains('new blog').click()
    //   cy.get('#Btitle').type('a blog')
    //   cy.get('#Bauthor').type('yaass')
    //   cy.get('#Burl').type('www.www.www')
    //   cy.contains('create').click()
    //   cy.contains('a blog')
    //   cy.contains('yaass')
    //   cy.contains('www.www.www')
    // })

    it('blogs are ordered', function() {
      // like the first blog
      cy.get('#blogs').contains('a bloof').contains('show').click()
      cy.get('#blogs').contains('a bloof').contains('like').click()
      cy.get('#blogs').contains('a bloof').contains('show').click()
      cy.get('#blogs').contains('a bloof').contains('like').click()
      cy.get('#blogs').contains('a bloof').contains('show').click()
      cy.get('#blogs').contains('a bloof').contains('like').click()
      // like the second blog
      cy.get('#blogs').contains('scrump').contains('show').click()
      cy.get('#blogs').contains('scrump').contains('like').click()
      cy.get('#blogs').contains('scrump').contains('show').click()
      cy.get('#blogs').contains('scrump').contains('like').click()
      cy.get('#blogs').contains('scrump').contains('show').click()
      cy.get('#blogs').contains('scrump').contains('like').click()
      cy.get('#blogs').contains('scrump').contains('show').click()
      cy.get('#blogs').contains('scrump').contains('like').click()
      cy.get('#blogs').contains('scrump').contains('show').click()
      cy.get('#blogs').contains('scrump').contains('like').click()
      // sort the blogs
      // cy.get('.blog').then(blogs => {
      //   // blogs = list of blogs
      //   // kato mapin avulla et ne on järjestyksessä
      //   blogs.map(blog => {
      //     console.log(blog)
      //     console.log(blogs)
      //   })
      // })
      cy.get('.blog').then(blogs => {
        console.log(blogs)
        blogs.map(b => {
          const y = cy.get('#likes')
          console.log(y)
          console.log(b)
        })
      })
    })
  })
})

// cy.get('#blogs').each((item, index, list) => {
//   expect(list).to.have.length(3)
// })