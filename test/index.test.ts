import server from '../src/index';
import request from 'supertest';

describe(' Get(`/`)', () => {
    before('server listen', () => {
        server.listen(3000, '127.0.0.1');
    });

    it('should get message hello world', () => {
        return request(server).get('/').expect(200);
    });
});
