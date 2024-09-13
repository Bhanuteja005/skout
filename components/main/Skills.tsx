"use client"
import SkillText from "../sub/SkillText";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Skout is a groundbreaking social impact venture designed to tackle the widespread challenge of career uncertainty among Indian youth. With an ever-growing demand for guidance in an evolving job market, Skout offers a personalized career exploration platform that empowers students to make informed decisions about their future. By providing access to a vast database of diverse career options, along with interactive tools and expert insights, Skout equips young individuals with the resources they need to discover their true passions and strengths. The platform’s user-friendly interface makes it easier for students to explore multiple career paths, giving them the confidence to choose a direction that aligns with their skills and aspirations.

 At its core, Skout aims to bridge the gap between traditional education and the professional world, ensuring that young people are better prepared for the complexities of the modern workforce. In addition to exploring career opportunities, students can benefit from mentorship programs, tailored advice, and step-by-step guides to building a successful career. By offering a holistic approach to career development, Skout fosters a sense of empowerment among its users, enabling them to chart their own unique journeys. With a focus on long-term impact, Skout strives to create a future where every student has the tools and confidence to pursue meaningful careers.


`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
            style={{ transform: "scale(0.9" }}
        >
            <SkillText />

            <TextGenerateEffectDemo />

            
            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;