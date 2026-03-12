import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
const app = express();
app.use(express.json);
//@ts-ignore
const prisma = new PrismaClient();
app.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
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