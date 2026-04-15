import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Bhrigu Academy of E-Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and delivered an end-to-end Prices Predictor ML pipeline
              using scikit-learn and MLflow — data ingestion, feature engineering,
              model training, and experiment tracking — achieving 92% accuracy
              on held-out test data.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Finmo · Bengaluru</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Owned development of an email broadcast system within a NestJS +
              TypeScript production codebase, shipping the feature within the
              internship window alongside senior engineers at an early-stage
              fintech startup.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Full Stack Trainee</h4>
                <h5>J Spiders · Bengaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Executing intensive Advanced Java Full Stack curriculum — Spring Boot 3
              REST APIs, JWT auth flows, MySQL persistence layers, and React frontends.
              Practising DSA and system design daily alongside production-pattern
              project deliverables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
