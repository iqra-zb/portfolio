"use client";

import { useState } from "react";
import { projects, filterCategories } from "@/lib/data";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const visibleProjects = projects.filter(
    (p) => filter === "all" || p.categories.includes(filter)
  );

  return (
    <section id="projects" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <Reveal>
          <span className="section-label">// Case Studies</span>
          <h2 className="section-title">
            Proof, Not Promises: <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="section-subtitle">
            Each project is presented Problem → Action → Result. Here&apos;s how I deliver
            measurable value.
          </p>
        </Reveal>

        <Reveal className="project-filters">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn${filter === cat.key ? " active" : ""}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-2">
          {visibleProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 4) + 1}>
              <div className="project-card">
                <div className="project-header">
                  <div className={`project-logo ${project.logoClass}`}>{project.logo}</div>
                  <h3>{project.name}</h3>
                  <p className="project-type">{project.type}</p>
                </div>
                <div className="project-body">
                  <div className="project-section">
                    <div className="project-label problem">⚠ The Problem</div>
                    <p className="project-text">{project.problem}</p>
                  </div>
                  <div className="project-section">
                    <div className="project-label action">⚙ The Action</div>
                    <p className="project-text">{project.action}</p>
                  </div>
                  <div className="project-section">
                    <div className="project-label result">✓ The Result</div>
                    <p className="project-text">{project.result}</p>
                  </div>
                  <div className="project-stack">
                    {project.stack.map((tag) => (
                      <span className="stack-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
