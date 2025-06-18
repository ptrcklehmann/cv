import 'reflect-metadata';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import { buildSchema } from 'type-graphql';

import { MeResolver } from '../../apollo/resolvers';

const schema = await buildSchema({
    resolvers: [MeResolver],
});
const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    introspection: true,
});
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async (req) => ({ req }),
});
export { handler as GET, handler as POST };
