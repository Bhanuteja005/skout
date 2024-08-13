import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Skout Features
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="https://cdn.dribbble.com/userupload/4961779/file/original-a797d53542faba403ef7e5af4237c72e.png?resize=1200x900"
                    title="Career Explorer"
                    description="Skout's Career Explorer helps students navigate through diverse career options, providing detailed information, trends, and the skills required for each profession."
                    link=""
                />
                <ProjectCard
                    src="https://cdn.dribbble.com/userupload/3829638/file/original-d2b131b42bf7f4638dec3c9bd1373e81.png?resize=1200x900"
                    title="Interactive Tools"
                    description="Engage with interactive tools like quizzes, assessments, and simulations that match your interests and strengths with potential career paths."
                    link=""
                />
                <ProjectCard
                    src="https://cdn.dribbble.com/users/440947/screenshots/4090527/media/27960692f3d5f253bbcdf145fdd54733.png?resize=800x600&vertical=center"
                    title="Expert Insights"
                    description="Gain access to insights from industry experts, career coaches, and real-world professionals to guide your career journey."
                    link=""
                />
            </div>
        </div>
    );
};

export default Projects;