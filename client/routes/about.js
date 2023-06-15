import { Router } from "express";
const router = Router();
/*
 * @desc get all home elements
 * @route GET /articles
 * @access public
 */
router.get("/about", async (req, res) => {
    res.json({
        aboutSection: {
            title: "About Us",
            body: ` We are four motivated students who recently graduated from college and
          have come together to launch a therapy website that provides advice
          and support to people suffering from psychological problems and
          diseases. Our goal is to provide quality information and resources
          about mental health, as well as to spread awareness of the importance
          of seeking help for these conditions.`,
        },
        storySection: {
            title: "About Us",
            body1: `Our platform is dedicated to helping those living with mental health
            issues, such as depression, anxiety, bipolar disorder,
            schizoaffective disorder, and post-traumatic stress disorder (PTSD).
            We understand the struggle of living with these conditions, and
            believe that no one should have to suffer in silence. That’s why
            we’ve created this website, to provide resources that can help
            individuals to take charge of their mental health and wellbeing.`,
            body2: ` Our theraputic advisors are registered and qualified to provide
            quality psychological care, and we strive to provide a safe and
            secure environment for everyone to come together and learn from each
            other. We hope that this website can help to create a better future
            for those living with psychological issues, by providing knowledge
            and advice on how to treat and manage their conditions.`,
            body3: `  We welcome everyone, regardless of their mental health background,
            to join us in our journey and to share their stories and experiences
            with us. Together, we can work towards creating a more understanding
            and compassionate world for those living with psychological issues
            Thank you for visiting us. <br />
            <span>Sincerely,</span> <br />
            <span>The Team at Therapy Website.`,
        },
        whoWeSection: {
            title: "WHO WE ARE ?",
            body1: `The story started when 4 students in SADAT ACADEMY FOR MANAGEMENT
            SCIENCES faculty in Minya in Egypt, Osama, Ahmed, Mohamed, Mostafa
            want to create a creative thing!`,
            body2: `Helping people with mental health conditions including depression,
            anxiety, bipolar disorder, schizoaffective disorder, and
            post-traumatic stress disorder is the focus of our platform PTSD. We
            are aware of the difficulties associated with dealing with these
            disorders and think that nobody should have to endure suffering in
            silence. To assist people take control of their mental health and
            wellbeing, we built this website in order to offer resources.`,
        },
        personsSection: {
            title: "Persons",
            subTitle:
                "We are a team of four caring, experienced, and highly-qualified students who share a passion for helping others. Our names are Osama Zinhom, Mohamed Fouly, Mostafa Fathy , and Ahmed Dakroury and we each have our own unique style of therapy.",
        },
    });
});

export default router;