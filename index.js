const fastify = require('fastify')({
  logger: true,
});

fastify.get('/', function (req, reply) {
  reply.send({ hello: 'world' });
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`server listening on ${address}`);
});