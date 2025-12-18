import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Education from '../Components/Education'
import Project from '../Components/Project'

const Homepage = () => {
  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #eef2ff, #f8fafc);
            color: #334155;
          }

          .home-container {
            max-width: 1100px;
            margin: auto;
            padding: 60px 20px;
          }

          .section {
            background-color: #ffffff;
            padding: 35px;
            margin-bottom: 40px;
            border-radius: 16px;
            box-shadow: 0 12px 30px rgba(30, 58, 138, 0.06);
            transition: all 0.3s ease;
            border-left: 5px solid #2563eb;
          }

          .section:hover {
            transform: translateY(-3px);
            box-shadow: 0 18px 40px rgba(30, 58, 138, 0.1);
          }
        `}
      </style>

      <Header />

      <div className="home-container">
        <section id="about" className="section">
          <About />
        </section>

        <section id="education" className="section">
          <Education />
        </section>

        <section id="projects" className="section">
          <Project />
        </section>
      </div>
    </>
  )
}

export default Homepage
