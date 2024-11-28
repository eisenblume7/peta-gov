import { notFound } from "next/navigation";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  progress: number;
  status: string;
  image: string;
}

const ProjectDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch the project data from the JSON file or API
  try {
    const res = await fetch("http://localhost:3000/data/projects.json");
    const projects: Project[] = await res.json();

    // Find the project by ID
    const project = projects.find((project) => project.id.toString() === id);

    // If project is not found, return a 404 page
    if (!project) {
      return notFound();
    }

    return (
      <div className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Layout Container with Flex */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side: Project Image */}
            <div className="flex-1">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </div>

            {/* Right Side: Project Information */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                {project.description}
              </p>

              {/* Project Details */}
              <div className="mt-8 space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Tanggal
                  </h2>
                  <p className="text-lg text-gray-600">{project.date}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Lokasi
                  </h2>
                  <p className="text-lg text-gray-600">{project.location}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Kemajuan
                  </h2>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <p className="text-lg text-gray-600 mt-2">
                    {project.progress}% Selesai
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Status
                  </h2>
                  <p className="text-lg text-gray-600">{project.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching project data:", error);
    return <div>There was an error fetching the project data.</div>;
  }
};

export default ProjectDetailPage;
