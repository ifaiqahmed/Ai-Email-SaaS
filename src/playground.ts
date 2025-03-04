import { log } from "console";
import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'testt@gmail.com',
        firstName: 'faiq',
        lastName: 'ahmed'
    }
})

console.log("Hello");
