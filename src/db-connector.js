import fastifyPlugin from 'fastify-plugin';
import fistifyMongo from '@fastify/mongodb';

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function dbConnector(fastify, options) {
  fastify.register(fistifyMongo, {
    url: 'mongodb://localhost:27017/test_database',
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector);
