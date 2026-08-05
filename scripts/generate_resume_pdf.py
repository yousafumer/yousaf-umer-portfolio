from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT

styles = getSampleStyleSheet()
navy = colors.HexColor('#0A0E17')
blue = colors.HexColor('#3B82F6')
gray = colors.HexColor('#556077')

name_style = ParagraphStyle('Name', parent=styles['Title'], fontSize=22, textColor=navy, spaceAfter=2, alignment=TA_LEFT)
role_style = ParagraphStyle('Role', parent=styles['Normal'], fontSize=12, textColor=blue, spaceAfter=10)
contact_style = ParagraphStyle('Contact', parent=styles['Normal'], fontSize=9, textColor=gray, spaceAfter=14)
h2 = ParagraphStyle('H2', parent=styles['Heading2'], fontSize=13, textColor=blue, spaceBefore=14, spaceAfter=6)
body = ParagraphStyle('Body', parent=styles['Normal'], fontSize=9.5, leading=14, textColor=navy)
job_title = ParagraphStyle('JobTitle', parent=styles['Normal'], fontSize=10.5, textColor=navy, spaceBefore=8)
job_meta = ParagraphStyle('JobMeta', parent=styles['Normal'], fontSize=9, textColor=gray, spaceAfter=4)

doc = SimpleDocTemplate(
    '/home/claude/portfolio/public/resume/Yousaf-Umer-Resume.pdf',
    pagesize=letter, topMargin=0.6*inch, bottomMargin=0.6*inch,
    leftMargin=0.7*inch, rightMargin=0.7*inch,
)

story = []
story.append(Paragraph('Yousaf Umer', name_style))
story.append(Paragraph('Data Engineer &amp; Data Analyst', role_style))
story.append(Paragraph(
    'Karachi, Pakistan &nbsp;|&nbsp; yousafumer128@gmail.com &nbsp;|&nbsp; 0341-2876236 &nbsp;|&nbsp; '
    'github.com/yousafumer &nbsp;|&nbsp; linkedin.com/in/yousaf-umer-558102214', contact_style))

story.append(Paragraph('ABOUT', h2))
story.append(Paragraph(
    'Computer Science graduate with 6 months of professional experience as a Data Analyst and hands-on '
    'expertise in SQL, Python, Power BI, Excel, and Web Scraping. Experienced in cleaning, transforming, '
    'and analyzing structured and unstructured data, building interactive dashboards, developing ETL '
    'workflows, and generating actionable business insights. Growing focus on Data Engineering, workflow '
    'orchestration, and cloud data warehousing.', body))

story.append(Paragraph('SKILLS', h2))
skills_lines = [
    '<b>Programming:</b> Python, Pandas, NumPy, Regex',
    '<b>Databases &amp; SQL:</b> SQL, SQL Server, MySQL, Snowflake (basic)',
    '<b>Data Engineering:</b> ETL Workflows, Apache Airflow (basic), Docker (basic), Data Warehousing',
    '<b>Visualization:</b> Power BI (DAX, KPIs, Dashboards), Excel (Pivot Tables, VLOOKUP, XLOOKUP, Power Query)',
    '<b>Automation:</b> Selenium, BeautifulSoup, Requests, Pagination Handling',
    '<b>Tools:</b> Git, GitHub, Jupyter Notebook, VS Code',
]
for line in skills_lines:
    story.append(Paragraph(line, body))

story.append(Paragraph('WORK EXPERIENCE', h2))
story.append(Paragraph('Data Analyst — Darul Sehat Hospital, Karachi', job_title))
story.append(Paragraph('Jan 2026 – Jun 2026', job_meta))
story.append(ListFlowable([
    ListItem(Paragraph('Cleaned and transformed hospital operational datasets for reporting and analysis.', body)),
    ListItem(Paragraph('Developed KPI dashboards using Excel and Power BI.', body)),
    ListItem(Paragraph('Prepared reports to support quality and operational decision-making.', body)),
    ListItem(Paragraph('Validated data accuracy and maintained reporting consistency.', body)),
], bulletType='bullet', start='-', leftIndent=14))

story.append(Paragraph('Automation Assistant — Selenium IDE Project (Remote)', job_title))
story.append(Paragraph('2025', job_meta))
story.append(ListFlowable([
    ListItem(Paragraph('Helped with a small client project using Selenium IDE for basic web automation.', body)),
    ListItem(Paragraph('Recorded actions and created simple scraping flows under guidance.', body)),
], bulletType='bullet', start='-', leftIndent=14))

story.append(Paragraph('EDUCATION', h2))
story.append(Paragraph('BS Computer Science — Benazir Bhutto Shaheed University Lyari', job_title))
story.append(Paragraph('2022 – 2026', job_meta))
story.append(Paragraph('Relevant coursework: Data Mining, SQL, Machine Learning, Python Programming, Databases, Power BI.', body))

story.append(Paragraph('PROJECTS', h2))
projects_lines = [
    ('SQL Data Warehouse (SQL Server)', 'Multi-layer Bronze/Silver/Gold warehouse with ETL pipelines and dimensional modeling.'),
    ('Apache Airflow ETL Pipeline', 'Automated extraction, transformation, and loading of S&amp;P 500 data using Airflow DAGs and Docker.'),
    ('Smart City Air Quality Monitoring', 'Snowflake + Python + Power BI pipeline blending simulated IoT and OpenAQ API data.'),
    ('Power BI — Sales Analysis Dashboard', 'Multi-page dashboard covering sales performance, budget vs. actual, and DAX-driven insights.'),
    ('Power BI — Call Center Performance Analysis', 'MySQL-integrated dashboard analyzing 5,000+ call records and agent KPIs.'),
    ('Excel — Bike Sales Dashboard', 'Pivot table and slicer-driven dashboard identifying sales trends and customer segments.'),
    ('Urdu News Scraper (Python)', 'BeautifulSoup/Requests scraper for ARY &amp; BBC Urdu with pagination handling and JSON export.'),
]
for title, desc in projects_lines:
    story.append(Paragraph(f'<b>{title}</b> — {desc}', body))

story.append(Paragraph('CERTIFICATIONS', h2))
story.append(Paragraph('Big Data Analytics Techniques — IBA Karachi (2025): Hadoop, PySpark, SQL, distributed systems.', body))
story.append(Paragraph('Python for Everybody — University of Michigan, Coursera (2024).', body))

doc.build(story)
print('PDF generated')
