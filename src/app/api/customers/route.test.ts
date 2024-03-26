//const getallcustomer = require('./route');
//import { NextRequest, NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import mockdata from './MOCK_DATA.json';
import { GET, POST } from './route';
import { createMocks, createRequest } from 'node-mocks-http';
import { request } from 'http';
describe('list of customers', () => {
  test('returns a list of customers', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });
    const response = await GET();
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(mockdata);
  });
});

// describe('Add a new customer', () => {
//   test('Add a new customer', async () => {
//     let a = {
//       first_name: 'ssa',
//       last_name: 'sss',
//       email: 'lstefanovic0@acquirethisname.com',
//       gender: 'Male',
//     };
//     const req = createMocks(a);
//     const req1: any = JSON.stringify(a);
//     console.log(req);
//     const response = await POST(req);
//     //expect(response.status).toBe(200);
//     expect(await response.json()).toEqual(mockdata);
//   });
// });
