import express, { response } from "express";
import usersRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import articlesRoute from "./routes/article.js";
import homeRoute from "./routes/home.js";
import { IntroEle } from "./models/intro.js";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { sendEmail } from "./Emails/Emails.js";
import { User } from "./models/User.js";
import aboutRoute from "./routes/about.js";
const port = process.env.PORT || 5000;
const app = express();

config();
connectDB(app, port);

app.use(cors());
app.use(express.json());
app.get("/introduction", async (req, res) => {
  const intro = await IntroEle.findOne();
  res.send(intro);
});

app.post("/forgetPassword", async (req, res, next) => {
  let checkEmail = await User.findOne({ email: req.body.email });
  if (checkEmail) {
  await sendEmail({ email:checkEmail.email },checkEmail.password);
  res.json({message:'send email successfully'})}
  else{
    res.json({message:' email not exsit'})}
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads/"));
app.use(aboutRoute);
app.use(homeRoute);
app.use(usersRoute);
app.use(authRoute);
app.use(articlesRoute);
app.get('/questions', (req, res) => {
  res.json([
    {
      illness: "Depression",
      question:
        "Have you experienced a loss of interest or pleasure in activities that you used to enjoy?",
    },
    {
      illness: "Depression",
      question: "Have you experienced a decrease in energy or motivation?",
    },
    {
      illness: "Depression",
      question: "Have you experienced feelings of worthlessness or guilt?",
    },
    {
      illness: "Depression",
      question:
        "Have you experienced difficulty concentrating or making decisions?",
    },
    {
      illness: "Anxiety disorders",
      question: "Haveyou experienced excessive worry or fear?",
    },
    {
      illness: "Anxiety disorders",
      question: "Have you experienced restlessness or feeling on edge?",
    },
    {
      illness: "Anxiety disorders",
      question: "Have you experienced difficulty sleeping or staying asleep?",
    },
    {
      illness: "Anxiety disorders",
      question:
        "Have you experienced physical symptoms such as sweating, trembling or a racing heart?",
    },
    {
      illness: "PTSD",
      question:
        "Have you experienced intrusive thoughts or memories related to a traumatic event?",
    },
    {
      illness: "PTSD",
      question:
        "Have you experienced avoidance of places, people or things that remind you of a traumatic event?",
    },
    {
      illness: "PTSD",
      question:
        "Have you experienced hypervigilance or an exaggerated startle response?",
    },
    {
      illness: "PTSD",
      question:
        "Have you experienced negative changes in mood or thoughts since the traumatic event?",
    },
    {
      illness: "BPD",
      question: "Have you experienced intense and unstable emotions or moods?",
    },
    {
      illness: "BPD",
      question:
        "Have you experienced a fear of abandonment or unstable relationships?",
    },
    {
      illness: "BPD",
      question:
        "Have you experienced impulsivity in areas such as spending, sex, substance use or recklessdriving?",
    },
    {
      illness: "BPD",
      question: "Have you experienced a distorted sense of self or identity?",
    },
  ])
});

// error handling
//! Not Found Page
app.use((request, response, next) => {
  const error = new Error(`Not found - ${request.originalUrl}`);
  error.status = 404;
  next(error);
});

//! to catch any error
app.use((error, request, response, next) => {
  response.status(error.status || 500).json({
    message: error + "",
  });
});
//running server
