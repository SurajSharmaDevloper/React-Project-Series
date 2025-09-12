export default function FrontendGrid() {
  const skills = [
    {
      title: "Web Development",
      desc: "Building responsive, fast, and accessible websites using HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      title: "UI/UX Implementation",
      desc: "Turning designs into pixel-perfect, interactive interfaces with React, Tailwind CSS, and modern styling tools.",
    },
    {
      title: "Performance & Optimization",
      desc: "Writing clean, maintainable code and ensuring smooth performance across devices and browsers.",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
