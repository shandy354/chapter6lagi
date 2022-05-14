// describe('Initial Test', () => {
//     it('should test that 1 + 1 === 2', () => {
//       expect(1+1).toBe(2)
//     })
//   })
const request = require('supertest')
const app = require('../server')
describe('User API', () => {
    it('should show all users', async () => {
        const res = await request(app).get('/usergame')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('usergame')
    }),
    it('should show a user', async () => {
        const res = await request(app).get('/usergame/3')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('usergame')
    })
    done()
})
       
