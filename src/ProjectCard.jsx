import { useNavigate } from "react-router-dom";

let ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projectDetails", { state: { project } });
  };

  return (
    <div className="border p-6 rounded-lg shadow bg-white hover:scale-105 transition">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Details
      </button>
    </div>
  );
};

export default ProjectCard;
