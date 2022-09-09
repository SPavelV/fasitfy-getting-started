const fastify = require('fastify')({
  logger: true,
});

const fastifyEnv = require('@fastify/env');

const options = {
  confKey: 'config',
  schema: {
    type: 'object',
    required: ['PORT'],
    properties: {
      PORT: {
        type: 'string',
        default: 1000,
      },
    },
  },
};

fastify.register(fastifyEnv, options).ready((err) => {
  if (err) console.error(err);
  console.log('fastify.config ', fastify.config);
});

fastify.get('/', function (req, reply) {
  reply.send({ hello: 'world' });
});

const blogRoutes = require('./routes/blogs');
blogRoutes.forEach((route) => {
  fastify.route(route);
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`server listening on ${address}`);
});
