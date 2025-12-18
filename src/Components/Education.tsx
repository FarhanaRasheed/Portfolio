

const Education = () => {
  return (
    <div id="education" className="education-container">
      <h2>Education</h2>

      <div className="education-flex">
        <div className="edu-card">
          <h4>Master of Computer Applications (MCA)</h4>
          <span>2023 – 2025</span>
          <p className="college">MES AIMAT, Marampally</p>
          <p>
            Currently completed MCA with a focus on software development, data
            science, and modern web technologies, supported by hands-on projects.
          </p>
        </div>

        <div className="edu-card">
          <h4>Bachelor of Computer Applications (BCA)</h4>
          <span>2020 – 2023</span>
          <p className="college">K.M.M College, Thrikkakara</p>
          <p>
            Built a strong foundation in programming, databases, and software
            engineering, developing problem-solving skills.
          </p>
        </div>

        <div className="edu-card">
          <h4>Higher Secondary Education</h4>
          <span>2020</span>
          <p className="college">GHSS Elamakkara</p>
          <p>
            Strengthened analytical thinking, discipline, and academic
            fundamentals.
          </p>
        </div>
      </div>

      {/* Internal CSS */}
      <style>
        {`
          .education-container {
            padding: 30px;
            background-color: #f8fafc;
            border-radius: 16px;
          }

          .education-container h2 {
            text-align: center;
            color: #1e3a8a;
            margin-bottom: 35px;
            font-size: 2rem;
            letter-spacing: 1px;
          }

          .education-flex {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            justify-content: center;
          }

          .edu-card {
            background-color: #ffffff;
            border-left: 5px solid #2563eb;
            border-radius: 12px;
            padding: 22px;
            flex: 1 1 280px;
            max-width: 360px;
            box-shadow: 0 10px 25px rgba(30, 58, 138, 0.08);
            transition: all 0.3s ease;
          }

          .edu-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 35px rgba(30, 58, 138, 0.15);
          }

          .edu-card h4 {
            color: #2563eb;
            margin: 0;
            font-size: 1.1rem;
          }

          .edu-card span {
            display: block;
            font-size: 0.85rem;
            color: #64748b;
            margin: 6px 0;
          }

          .college {
            font-weight: 600;
            color: #1e293b;
          }

          .edu-card p {
            color: #334155;
            line-height: 1.6;
            margin-top: 8px;
          }
        `}
      </style>
    </div>
  );
};

export default Education;
