import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
const app = express();
app.use(express.json);
const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
});
app.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.send("hello");
    res.json({
        users
    });
});
app.post("/", async (req, res) => {
    await prisma.user.create({
        data: {
            name: Math.random().toString(),
            username: Math.random().toString(),
            password: Math.random().toString(),
        }
    });
    res.json({
        "message": "post endpoint"
    });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`app is listning on port ${PORT}`);
});
//# sourceMappingURL=index.js.map