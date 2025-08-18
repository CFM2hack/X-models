// This is the final, correct, and stable code for NextAuth v4 in the App Router.

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

// The authOptions object is defined as before.
const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // You can add other NextAuth options here if needed
};

// THIS IS THE FIX:
// We call NextAuth() once to create a handler.
// This handler is an object that contains the GET and POST functions that the App Router needs.
const handler = NextAuth(authOptions);

// We then export those functions using the required names.
export { handler as GET, handler as POST };
