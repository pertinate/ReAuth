import redis from 'redis';

export const client = redis.createClient({
    host: process.env.REDISHOST,
    port: Number(process.env.REDISPORT)
});
