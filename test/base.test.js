// describe('Initial Test', () => {
//     it('should test that 1 + 1 === 2', () => {
//       expect(1+1).toBe(2)
//     })
//   })
const request = require('supertest')
const app = require('../server') 
describe('User API', () => {
    it('should show all users', async () => {
        const {body, statusCode}= await request(app).get('/usergame')
        expect(statusCode).toEqual(500)
        expect(body.message).toEqual('error')
       
    }),
    it('should show a user', async () => {
        const {body, statusCode} = await request(app).get('/usergame/3')
        expect(statusCode).toEqual(500)
        expect(body.message).toEqual('tidak ada data');
    })
  
})
       
