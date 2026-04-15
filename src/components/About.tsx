import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-avatar">
          <img src="/images/avatar.svg" alt="K C Darshan" className="avatar-img" />
        </div>
        <div className="about-text">
          <h3 className="title">About Me</h3>
          <p className="para">
            Computer Science graduate (VTU, 2025 · CGPA 7.5) building production-grade
            systems — Spring Boot REST APIs with JWT, GenAI pipelines with LangChain &
            LangGraph, and end-to-end ML models. Interned at Finmo (fintech) shipping
            real features, and at Bhrigu Academy delivering an ML pipeline with 92%
            accuracy. Strong in <strong>Java, Spring Boot, Python & GenAI</strong> —
            with a track record of shipping real systems that work in production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
