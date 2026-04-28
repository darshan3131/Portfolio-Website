import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-avatar">
          <img src="/images/avatar.png" alt="K C Darshan" className="avatar-img" />
        </div>
        <div className="about-text">
          <h3 className="title">About Me</h3>
          <p className="para">
            Computer Science graduate (JSS ATE, VTU · 2025 · CGPA 7.5) with hands-on
            Java Full Stack internship experience. Built 5+ production-grade systems —
            fintech payment platforms, Spring Boot REST APIs, and enterprise backends.
            Interned at Finmo (fintech) shipping an email broadcast system, and at
            Bhrigu Academy delivering an ML pipeline with 92% accuracy. Strong in{" "}
            <strong>Java 17, Spring Boot 3, React, Kafka & Redis</strong> — focused on
            backend engineering and scalable system design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
