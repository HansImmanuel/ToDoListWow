## Project

This is a To-Do-List Project that we made. Login and register account features is there with a mySQL database and for now it only runs locally, The to-do-list will also be improved so that it can be stored in the database because right now we're still thinking and working about it.

## Getting Started

This is using next.js..
1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Use mySQL on XAMPP and make a new database with the name that you need to put on the `.env` file 
4. Set up your environment variables in the `.env` file :

DATABASE_URL="mysql://your root/databasename" - > you can change the database name but make sure it matches the mySQL database name
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=superdupersecretkey1234567890lulba

5. Keep your mySQL database up and ready
6. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

7. All is set and done




