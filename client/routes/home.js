import { Router } from "express";
const router = Router();
/*
 * @desc get all home elements
 * @route GET /articles
 * @access public
 */
router.get("/home", async (req, res) => {
  // const elements = await HomeElement.find({});
  res.json({
    IntroductionInfo: {
      title: "What are we seeking to",
      body: `Therapy website is an online platform dedicated to providing
              access to mental health services. It offers various services,
              including counseling, psychotherapy, and life coaching. With its
              user-friendly interface, it is easy to find the right therapist
              for any individual. The website also has a range of resources and
              articles for those seeking self-help. We conducted all sessions in
              a safe environment, ensuring clients have complete privacy and
              confidentiality. Therapy website is the perfect platform for
              anyone seeking to take control of their mental health.`,
    },
    MentalIllnessSectionInfo: {
      diseases: [
        {
          title: "Depression",
          body: "Depression is a common mental illness characterized by persistent feelings of sadness, hopelessness, and loss of interest in activities. It can interfere with daily life and lead to physical symptoms such as fatigue and changes in appetite and sleep patterns.",
        },
        {
          title: "Anxiety Disorders",
          body: "Anxiety disorders are a group of mental illnesses characterized by excessive fear or worry. They can interfere with daily activities and cause physical symptoms such as sweating, trembling, and rapid heart rate. Examples include generalized anxiety disorder, panic disorder, and social anxiety disorder.",
        },
        {
          title: "PTSD",
          body: "PTSD is a mental illness that can occur after experiencing or witnessing a traumatic event, such as a natural disaster, violent attack, or military combat. Symptoms can include flashbacks, nightmares, and hyperarousal, and can interfere with daily life.",
        },
        {
          title: "BPD",
          body: "Borderline Personality Disorder (BPD) is a mental illness characterized by unstable moods, behavior, and relationships. People with BPD may have intense and unstable emotions, difficulty regulating their emotions, and a fear of abandonment.",
        },
      ],
    },
    TherapymethodsSectionInfo: {
      TherapyCards: [
        {
          title: "CBT",
          content:
            "Cognitive Behavioral Therapy (CBT): CBT is a type of psychotherapy that focuses on examining and addressing negative thought patterns and behaviors. It works to identify and challenge such patterns in order to create healthier beliefs and behaviors",
          cardClass: "therapy-card-one",
        },
        {
          title: "IPT",
          content:
            "Interpersonal Therapy (IPT): IPT is a form of psychotherapy that focuses on interpersonal relationships and their impact on mental health. It works by helping people to identify, understand, and address patterns of behavior that are having a negative effect on their relationships.",
          cardClass: "therapy-card-two",
        },
        {
          title: "DBT",
          content:
            "Dialectical Behavioral Therapy (DBT): DBT is a form of psychotherapy that is based on CBT principles. It works by combining cognitive behavioral techniques with mindfulness and acceptance practices in order to help people develop the skills needed to manage difficult emotions and decrease their stress.",
          cardClass: "therapy-card-three",
        },
        {
          title: "ACT",
          content:
            "Acceptance and Commitment Therapy (ACT): ACT is a form of psychotherapy that focuses on increasing psychological flexibility. It works by helping people to identify and accept their thoughts and feelings without judgment, and to take action that is consistent with their values.",
          cardClass: "therapy-card-four",
        },
      ],
    },
    FocusOnSectionInfo: {
      cards: [
        {
          title: "Trauma-Informed Therapy",
          body: "Trauma-Informed Therapy: This type of therapy uses an understanding of trauma to help people who have experienced traumatic events. This type of therapy focuses on understanding the effects of trauma, developing coping skills, and creating a safe environment for healing.",
        },
        {
          title: "Mindfulness-Based Therapy API Ready",
          body: "Mindfulness-Based Therapy: This type of therapy utilizes mindfulness practices to help people become aware of their thoughts and feelings in the present moment. Through this, people can gain insight and understanding of their emotions, ultimately helping them cope with the difficulties they face.",
        },
        {
          title: "EMDR",
          body: "Eye Movement Desensitization and Reprocessing (EMDR): This type of therapy is used to treat trauma, anxiety, and other psychological issues. It uses bilateral stimulation, such as eye movements, to help people process and emotionally respond to traumatic memories and other disturbing experiences.",
        },
        {
          title: "Psychodynamic Therapy",
          body: "Psychodynamic Therapy: This type of therapy seeks to understand the unconscious processes that cause and maintain mental health problems. Through this, the therapist can help the client gain insight into their issues and help them make positive changes.",
        },
        {
          title: "DBT",
          body: "Dialectical Behavioral Therapy (DBT): This type of therapy focuses on developing skills to help people manage intense emotions, regulate their behavior, and improve relationships. DBT is commonly used to treat borderline personality disorder, as well as eating disorders and substance abuse.",
        },
        {
          title: "CBT",
          body: "Cognitive Behavioral Therapy (CBT): This type of therapy aims to help people change their thoughts, behaviors, and emotions to better manage the challenges they face. CBT can be used to treat a variety of mental health issues, such as anxiety, depression, and addiction.",
        },
      ],
    },
  });
});

export default router;