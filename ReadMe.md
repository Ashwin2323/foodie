
# 🍔 foodie - Online Food Delivery App

foodie is a modern, full-stack web application that makes ordering delicious food from local restaurants quick, fun, and seamless.  
Built to learn, experiment, and showcase best practices in **Node.js**, **React**, **MongoDB**,  **Typescript** and modern CSS framework.

## ✨ Features

✅ User-friendly authentication & onboarding  
✅ Browse and search restaurants & menus  
✅ Add to cart and checkout flow  
✅ Responsive design — works on desktop & mobile  
✅ Beautiful email notifications for verification & welcome emails  
✅ Modern UI built with Tailwind CSS 
✅ Stripe webhook Integration for payments

## 📸 Screenshots

> screenshots or a short GIF/video of your app UI here_


## 🛠 Tech Stack

| Layer          | Details                                                                    |
|---------------------|----------------------------------------------------------------------------|
| Frontend       | React (with **TypeScript**), Tailwind CSS, **shadcn/ui** for UI components                                                    
| Backend        | Node.js, Express.js (**TypeScript**)                                                 
| Database       | MongoDB (Mongoose)                                                        
| Email Service  | Mailtrap Email Sending API 
|State Management| **Zustand**
| Authentication | JWT, bcrypt                                                          
| Other          | dotenv, nodemon, ESLint, etc.                                              

>##  Note (currently):
> Mailtrap is not working currently because of not using any owned domain so after signup, navigate again to login page to get in.
> Payment integration works till stripe webhook page after that the confirmation of order needs to be done manually.
> Similarly, for getting the access of creating restaurants is done directly from database.