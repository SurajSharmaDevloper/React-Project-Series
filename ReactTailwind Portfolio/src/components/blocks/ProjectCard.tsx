const BaseUrl = "https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmb3Jlc3R8ZW58MHwwfHx8MTcyNjkxODYzNHww&ixlib=rb-4.0.3&q=80&w=1080";

const ProjectCard = ( {project} : any ) => {
  return (
    <>
      <div className="relative bg-neutral-200 dark:bg-neutral-800 rounded-xl">
        <a
          href="#_"
          className="block overflow-hidden group rounded-t-xl shadow-lg"
        >
          <img
            src={project.image || BaseUrl}
            className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
            alt="Adventure"
          />
        </a>
        <div className="relative mt-5 p-5">
          <p className="uppercase font-semibold text-xs mb-2.5 text-blue-500">
            {project.Date || "Set Date"}
          </p>
          <a href="#" className="block mb-3 hover:underline">
            <h2 className="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-sky-700 dark:hover:text-sky-700">
              {project.Title || "Project Title"}
            </h2>
          </a>
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            {project.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut."}
          </p>
          <a
            href="#_"
            className="font-medium underline text-blue-600 dark:text-blue-600"
          >
            Preview Live
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
