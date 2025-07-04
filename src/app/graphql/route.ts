import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { buildSchema } from "type-graphql";

import { MeResolver } from "../../apollo/resolvers";

const schema = await buildSchema({
    resolvers: [MeResolver],
});
const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    introspection: true,
});
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async (req, _res) => ({ req }),
});

export async function GET(request: NextRequest) {
    return handler(request);
}

export async function POST(request: NextRequest) {
    return handler(request);
}
