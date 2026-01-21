import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const project = location.state?.project;

  // Agar koi project na ho to home redirect
  if (!project) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl max-w-3xl w-full">
        <button
          onClick={() => navigate("/")}
          className="mb-4 text-blue-600"
        >
          ← Back
        </button>

        <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <p><b>Technologies:</b> {project.technologies}</p>
        <p><b>Features:</b> {project.features}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
