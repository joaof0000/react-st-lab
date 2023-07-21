import Score from "./Score";
import "./Student.css";

function Student({ students }) {
  const { name, bio, scores } = students;

  return (
    <div className="Student">
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>Scores:</h3>
      <ul>
        {scores.map((score, idx) => (
          <Score key={idx} score={score} />
        ))}
      </ul>
    </div>
  );
}

export default Student;
