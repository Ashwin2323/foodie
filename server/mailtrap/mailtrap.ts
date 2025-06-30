import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();
 
export const client = new MailtrapClient({token: process.env.MAILTRAP_API_TOKEN! });

export const sender = {
  email: "ashwinworkspace2525@gmail.com",
  name: "foodie",
};