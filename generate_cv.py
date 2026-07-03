import os
from weasyprint import HTML

# Let's create a beautiful, professional, exactly 1-page A4 CV for Qaswar Abbas based on his portfolio context.
html_content = """
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
    @page {
        size: A4;
        margin: 12mm 15mm;
        background-color: #ffffff;
    }
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        color: #2D3748;
        line-height: 1.35;
        font-size: 10pt;
    }
    .header {
        text-align: center;
        border-bottom: 2px solid #2B6CB0;
        padding-bottom: 8px;
        margin-bottom: 12px;
    }
    .name {
        font-size: 20pt;
        font-weight: bold;
        color: #1A365D;
        text-transform: uppercase;
        margin: 0 0 2px 0;
        letter-spacing: 0.5px;
    }
    .subtitle {
        font-size: 11pt;
        font-weight: bold;
        color: #4A5568;
        margin: 0 0 6px 0;
    }
    .contact {
        font-size: 9pt;
        color: #718096;
    }
    .contact span {
        margin: 0 8px;
    }
    .section-title {
        font-size: 12pt;
        font-weight: bold;
        color: #1A365D;
        text-transform: uppercase;
        border-left: 4px solid #2B6CB0;
        padding-left: 6px;
        margin: 12px 0 6px 0;
        letter-spacing: 0.3px;
        page-break-after: avoid;
    }
    .summary-text {
        text-align: justify;
        margin: 0 0 8px 0;
    }
    .skills-grid {
        display: table;
        width: 100%;
        margin-bottom: 6px;
    }
    .skills-row {
        display: table-row;
    }
    .skills-cell {
        display: table-cell;
        padding: 3px 0;
        font-size: 9.5pt;
    }
    .skills-label {
        font-weight: bold;
        color: #2B6CB0;
        width: 25%;
    }
    .item {
        margin-bottom: 8px;
        page-break-inside: avoid;
    }
    .item-header {
        font-weight: bold;
        color: #2D3748;
        font-size: 10.5pt;
        margin-bottom: 2px;
    }
    .item-meta {
        font-style: italic;
        color: #4A5568;
        font-size: 9pt;
        float: right;
    }
    .item-title-row {
        overflow: hidden;
    }
    .item-desc {
        margin: 2px 0 0 0;
        padding-left: 14px;
        font-size: 9.5pt;
        color: #4A5568;
    }
    .item-desc li {
        margin-bottom: 1px;
    }
    .clear {
        clear: both;
    }
</style>
</head>
<body>

    <div class="header">
        <div class="name">Qaswar Abbas</div>
        <div class="subtitle">Artificial Intelligence Student & Full-Stack Developer</div>
        <div class="contact">
            Email: qaswarali675@gmail.com <span>|</span> Phone: +92 322 5486211 <span>|</span> Muzaffargarh, Punjab<br>
            GitHub: github.com/qaswarali675-prog <span>|</span> LinkedIn: linkedin.com/in/qaswar-abbas
        </div>
    </div>

    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
        Motivated Artificial Intelligence student and Full-Stack Developer with strong expertise in building intelligent web applications, automated solutions, and modern cross-platform mobile systems. Experienced in frontend development with React.js, backend infrastructure using Python, and cloud databases. Adept at turning complex UI designs and functional architectures into optimized, highly-responsive production-ready code.
    </p>

    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
        <div class="skills-row">
            <div class="skills-cell skills-label">Core Tech Stack:</div>
            <div class="skills-cell">Python (FastAPI), Dart, Flutter, JavaScript, React.js</div>
        </div>
        <div class="skills-row">
            <div class="skills-cell skills-label">Databases & Tools:</div>
            <div class="skills-cell">MongoDB, MongoDB Atlas, Git, GitHub, VS Code</div>
        </div>
        <div class="skills-row">
            <div class="skills-cell skills-label">Platforms & Deploy:</div>
            <div class="skills-cell">Vercel, Railway, Windows 10 Environment Automation</div>
        </div>
    </div>

    <div class="section-title">Key Projects</div>
    
    <div class="item">
        <div class="item-title-row">
            <span class="item-meta">React.js & Vercel</span>
            <span class="item-header">Full-Stack Personal Portfolio Website</span>
        </div>
        <ul class="item-desc">
            <li>Designed and successfully deployed a fully responsive, pixel-perfect dynamic portfolio interface.</li>
            <li>Configured secure client-side script integrations for optimized asset loading and continuous integration pipeline via GitHub.</li>
        </ul>
    </div>

    <div class="item">
        <div class="item-title-row">
            <span class="item-meta">Python (FastAPI) & React</span>
            <span class="item-header">Jarvis AI Agent for System Automation</span>
        </div>
        <ul class="item-desc">
            <li>Engineered a local system-level automation assistant utilizing a structured FastAPI backend decoupled from the main React architecture.</li>
            <li>Implemented native script executions allowing the conversational model to safely interact with local operating system components.</li>
        </ul>
    </div>

    <div class="item">
        <div class="item-title-row">
            <span class="item-meta">Academic Project</span>
            <span class="item-header">AI-Integrated Human Resource Management System (HRMS)</span>
        </div>
        <ul class="item-desc">
            <li>Architected core components for payroll automation, smart tracking analytics, and attendance control mechanisms.</li>
            <li>Collaborated with team experts to manage data flows and complex query indexing strategies.</li>
        </ul>
    </div>

    <div class="section-title">Experience & Internships</div>
    <div class="item">
        <div class="item-title-row">
            <span class="item-meta">Jan 2026 – Present</span>
            <span class="item-header">Web Development Intern — Geeks Kepler</span>
        </div>
        <ul class="item-desc">
            <li>Acquired hands-on experience in full-stack components, industry coding patterns, and structural optimization.</li>
            <li>Successfully managed modular UI code blocks and linked API payloads for internal testing pipelines.</li>
        </ul>
    </div>

    <div class="section-title">Education</div>
    <div class="item">
        <div class="item-title-row">
            <span class="item-meta">2023 – Current</span>
            <span class="item-header">BS in Computer Science (Specialization in Artificial Intelligence)</span>
        </div>
        <div style="font-size: 9.5pt; color: #4A5568; padding-left: 14px; margin-top: 2px;">
            6th Semester Student | Core Focus: Neural Networks, Genetic Algorithms, A* Search, Numerical Computing.
        </div>
    </div>

    <div class="section-title">Certifications & Honors</div>
    <ul class="item-desc" style="margin-bottom: 0;">
        <li><strong>Honhaar Student Card Certification</strong> – Selected based on academic performance, Government of Punjab initiative.</li>
        <li><strong>Cisco Networking Academy Training Modules</strong> – Specialized coursework in Cyber Security and Networking Essentials.</li>
    </ul>

</body>
</html>
"""

output_path = "Qaswar_Abbas_CV.pdf"
with open("cv.html", "w") as f:
    f.write(html_content)

HTML("cv.html").write_pdf(output_path)
print(f"File generated successfully: {output_path}")
