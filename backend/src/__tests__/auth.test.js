import request from 'supertest';
import app from '../app.js';

describe('Auth API', () => {
  it('should return 404 for invalid signup route test placeholder', async () => {
    const res = await request(app).get('/api/auth/test');

    expect(res.statusCode).toBe(404);
  });
});
