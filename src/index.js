import Fastify from 'fastify';
import dbConnector from './db-connector';
import firstRoute from './first-route';

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
  logger: true,
});

fastify.register(dbConnector);
fastify.register(firstRoute);

const start = async () => {
  try {
    await fastify.listen({ port: 8000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
