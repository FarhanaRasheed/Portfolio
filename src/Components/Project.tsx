import React from 'react';

const Project = () => {
  return (
    <div id="projects" className="projects-container">
      <h2>Academic & Personal Projects</h2>

      <div className="projects-flex">

        <section className="project-card">
          <h3>E-Commerce Application</h3>
          <p className="tech">
            C#, .NET Core Web API, Next.js, HTML, CSS, JavaScript
          </p>
          <p>
            Developed a module-based e-commerce application focusing on backend
            API development and frontend integration.
          </p>
          <p className="role">
            <strong>Role:</strong> API creation using stored procedures, backend
            logic, frontend integration, and API testing.
          </p>
        </section>

        <section className="project-card">
          <h3>Disease Prediction System</h3>
          <p className="tech">Python, Machine Learning</p>
          <p>
            Machine learning–based system that predicts diseases based on
            user-provided symptoms.
          </p>
          <p className="role">
            <strong>Role:</strong> Data preprocessing, model implementation,
            testing, and accuracy evaluation.
          </p>
        </section>

        <section className="project-card">
          <h3>Placement Management System</h3>
          <p className="tech">PHP, MySQL, HTML, CSS, JavaScript</p>
          <p>
            Automated campus placement platform where admins post company
            details and students can apply and receive shortlist notifications.
          </p>
          <p className="role">
            <strong>Role:</strong> Backend logic, database design, session
            handling, frontend integration.
          </p>
        </section>

        <section className="project-card">
          <h3>Charity Management System</h3>
          <p className="tech">PHP, MySQL</p>
          <p>
            Web application to efficiently manage charity activities and donor
            information.
          </p>
          <p className="role">
            <strong>Role:</strong> Full-stack development including database and UI.
          </p>
        </section>

        <section className="project-card">
          <h3>Rental Management System</h3>
          <p className="tech">Python, Django</p>
          <p>
            Rental application allowing users to view items, manage bookings,
            and handle admin operations.
          </p>
          <p className="role">
            <strong>Role:</strong> Backend development and database integration.
          </p>
        </section>

        <section className="project-card">
          <h3>Mini Applications</h3>
          <ul>
            <li>Calculator Application – Basic arithmetic operations</li>
            <li>To-Do List – Task management using React & TypeScript</li>
          </ul>
        </section>

      </div>

      {/* Internal CSS */}
      <style>
        {`
          .projects-container {
            padding: 20px;
          }

          .projects-container h2 {
            text-align: center;
            color: #1e3a8a;
            font-size: 1.9rem;
            margin-bottom: 30px;
          }

          .projects-flex {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            justify-content: center;
          }

          .project-card {
            background: #ffffff;
            border-radius: 12px;
            padding: 20px;
            flex: 1 1 300px;
            max-width: 380px;
            box-shadow: 0 8px 18px rgba(30, 58, 138, 0.12);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .project-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 28px rgba(30, 58, 138, 0.2);
          }

          .project-card h3 {
            color: #2563eb;
            margin-top: 0;
            margin-bottom: 8px;
          }

          .tech {
            font-size: 0.9rem;
            color: #475569;
            margin-bottom: 10px;
          }

          .project-card p {
            color: #334155;
            line-height: 1.6;
            margin-bottom: 10px;
          }

          .role {
            font-size: 0.9rem;
          }

          .project-card ul {
            padding-left: 18px;
            color: #334155;
          }

          .project-card li {
            margin-bottom: 6px;
          }
        `}
      </style>
    </div>
  );
};

export default Project;
