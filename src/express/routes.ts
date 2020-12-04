import express from 'express';

const router = express.Router();

router.get('/test', (request, response) => {
    response.status(200).send({ test: 'hello' });
});

router.post('/user');

router.post('/user/login');

router.post('/user/logout');

router.post('/user/token/revoke');

router.post('/user/token/new');

router.post('/user/token/compare');

router.post('/game/user/token/new');

router.post('/game/user/token/revoke');

router.post('/game/user/token/compare');

export default router;
