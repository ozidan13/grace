const eles = [
  {
    header: "Depression",
    body: "Depression is a common mental illness characterized by persistent feelings of sadness, hopelessness, and loss of interest in activities. It can interfere with daily life and lead to physical symptoms such as fatigue and changes in appetite and sleep patterns.",
  },
  {
    header: "PTSD",
    body: "PTSD is a mental illness that can occur after experiencing or witnessing a traumatic event, such as a natural disaster, violent attack, or military combat. Symptoms can include flashbacks, nightmares, and hyperarousal, and can interfere with daily life.",
  },
  {
    header: "Anxiety Disorders",
    body: "Anxiety disorders are a group of mental illnesses characterized by excessive fear or worry. They can interfere with daily activities and cause physical symptoms such as sweating, trembling, and rapid heart rate. Examples include generalized anxiety disorder, panic disorder, and social anxiety disorder.",
  },
  {
    header: "BPD",
    body: "Borderline Personality Disorder (BPD) is a mental illness characterized by unstable moods, behavior, and relationships. People with BPD may have intense and unstable emotions, difficulty regulating their emotions, and a fear of abandonment.",
  },
];

const introduction = {
  header: "What are we seeking to",
  body: " Therapy website is an online platform dedicated to providing access to mental health services. It offers various services,including counseling, psychotherapy, and life coaching. With its user-friendly interface, it is easy to find the right therapist for any individual. The website also has a range of resources and articles for those seeking self-help. We conducted all sessions in a safe environment, ensuring clients have complete privacy and confidentiality. Therapy website is the perfect platform for anyone seeking to take control of their mental health.",
};
const { IntroEle } = require("./models/intro");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const { HomeElement } = require("./models/Home");
connectDB();

// save home elements to database
HomeElement.insertMany(eles)
  .then((docs) => {
    console.log(docs);
  })
  .catch((err) => {
    console.log(err);
  });

// save introduction to database
IntroEle.create(introduction)
  .then((docs) => {
    console.log("intro saved");
  })
  .catch((err) => {
    console.log(err);
  });
