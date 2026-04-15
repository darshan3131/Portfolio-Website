import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "PayLedger",
              category: "Enterprise Payment System",
              tools: "Java 17 · Spring Boot 3 · Kafka · Redis · TiDB · React 18 · Twilio",
              link: "",
              image: "/images/proj-payledger.svg",
            },
            {
              name: "Task Management API",
              category: "Backend · REST API",
              tools: "Java 17 · Spring Boot 3 · Spring Security · JWT · MySQL · Swagger",
              link: "",
              image: "/images/proj-taskapi.svg",
            },
            {
              name: "Drafter AI",
              category: "GenAI · RAG Pipeline",
              tools: "Python · LangChain · FastAPI · OpenAI API · RAG",
              link: "https://github.com/darshan3131/Drafter-AI",
              image: "/images/proj-drafter.svg",
            },
            {
              name: "LangGraph AI Agents",
              category: "GenAI · Agent Orchestration",
              tools: "Python · LangGraph · FastAPI · OpenAI API",
              link: "https://github.com/darshan3131/langgraph-ai-agents",
              image: "/images/proj-langgraph.svg",
            },
            {
              name: "Employee Management System",
              category: "Full Stack · CRUD",
              tools: "Java 17 · Spring Boot · Hibernate/JPA · MySQL · Lombok · Swagger",
              link: "",
              image: "/images/proj-ems.svg",
            },
            {
              name: "Prices Predictor",
              category: "ML · Data Science",
              tools: "Python · scikit-learn · MLflow · Pandas · NumPy",
              link: "https://drive.google.com/file/d/1NiD21-Ug8oYwrih0zY4SvLCZVIUovfCa/view?usp=share_link",
              image: "/images/proj-prices.svg",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-view-link"
                  >
                    View Project →
                  </a>
                )}
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link || undefined} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
