# SOFTWARE

docker
tableplus
VSCode

# Downloads

https://tableplus.com/download

# API end points

http://localhost:3000/api/hello

# DEVELOPMENT

steps to work with development

1. raise the db

```
docker compose up -d
```

2. rename the .env.template to .env
3. replace the .env variables
4. execute the command `npm install`
5. execute the command of `npm run dev`
6. execute the commands of prisma

```
npx prisma migrate dev
npx prisma generate
```

7. execute the SEED [to create the db local](localhost:3000/api/seed)

# What's Primsa

Primsa is an open_source next-generation ORM:
*Prisma Client
*Prisma Migrate
\*Prisma Studio

```
npx prisma init
```

basic commands:
-> npm install @prisma/client
-> prisma generate

npx prisma migrate dev
npx prisma generate

```
##YUP##
npm install yup
```

yup is a validation schema
