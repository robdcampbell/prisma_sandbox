# Crash course on Prisma ORM

### Learning environment for using Prisma in a node.js based environment connnecting with Postgresql.

- https://www.youtube.com/watch?v=RebA5J-rlwg
- https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres

1. npm init -y (create json file)

2. install dependecies: npm i --save-dev prisma typescript ts-node @types/node nodemon

3. Create a TS config file: tsconfig.json

4. Initialize Prisma: npx prisma init --datasource-provider postgresql

5. In VS Code, install Prisma extension

6. Migrate schema information:

   - npx prisma migrate dev --name init (when working in a dev env)

7. Install Prisma CLient:

   - npm i @prisma/client

8. Manually re-generate the client: (will generate based on provide in schema.prisma)
   - npx prisma generate
