const chai = require('chai')
const chaiHttp =  require('chai-http')
const { expect } = require('chai')

chai.use(chaiHttp)

describe('App', () => {
  it('should get 200', async () => {
    const resp = await chai.request('http://localhost:8080')
      .get('/')
    expect(resp).to.have.status(200)
  })
})