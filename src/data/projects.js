// Every project rendered on the site comes from this file.
// Add a new object here to add a new project — no component changes required.

export const categories = [
  'All',
  'Data Engineering',
  'Data Analysis',
  'SQL',
  'Web Scraping',
  'Excel',
  'Power BI',
]

export const projects = [
  {
    slug: 'sql-data-warehouse',
    title: 'SQL Data Warehouse (Bronze / Silver / Gold)',
    category: 'Data Engineering',
    tags: ['SQL', 'Data Engineering'],
    image: '/projects/sql-warehouse.svg',
    summary:
      'A multi-layer SQL Server data warehouse organizing raw data into Bronze, Silver, and Gold layers for analytics-ready reporting.',
    stack: ['SQL Server', 'T-SQL', 'Dimensional Modeling'],
    github: 'https://github.com/yousafumer',
    demo: null,
    overview:
      'Designed and implemented a multi-layer SQL Data Warehouse to take raw, disconnected source data and turn it into clean, business-ready tables for reporting.',
    businessProblem:
      'Raw operational data was scattered, inconsistent, and not structured for analysis — making reporting slow and error-prone.',
    solution:
      'Built a Bronze → Silver → Gold architecture: Bronze holds raw loaded data, Silver cleans and standardizes it, and Gold exposes dimensional, business-ready tables. Wrote SQL scripts for schema creation, bulk loading, and validation at every layer.',
    architecture: [
      'Bronze Layer — raw ingestion, minimal transformation',
      'Silver Layer — cleaning, standardization, deduplication',
      'Gold Layer — star-schema dimensional models for reporting',
    ],
    screenshots: [],
    technologiesUsed: ['SQL Server', 'T-SQL', 'Bulk Insert', 'Dimensional Modeling', 'Star Schema'],
    challenges: [
      'Designing a schema flexible enough to support multiple downstream reports without rework.',
      'Keeping data validation consistent across three separate layers.',
    ],
    lessonsLearned:
      'Layered warehouse design pays off quickly — separating raw, cleaned, and business-ready data makes debugging and extending reports far easier.',
    futureImprovements: [
      'Automate the layer-to-layer loading with a scheduler.',
      'Add incremental loading instead of full reloads.',
    ],
  },
  {
    slug: 'airflow-etl-pipeline',
    title: 'Apache Airflow ETL Pipeline',
    category: 'Data Engineering',
    tags: ['Airflow', 'Python', 'Docker', 'ETL'],
    image: '/projects/airflow-pipeline.svg',
    summary:
      'An automated ETL pipeline orchestrated with Apache Airflow that extracts, transforms, and loads S&P 500 company data on a schedule.',
    stack: ['Apache Airflow', 'Python', 'Pandas', 'Docker'],
    github: 'https://github.com/yousafumer',
    demo: null,
    overview:
      'An end-to-end ETL pipeline that automates extraction, transformation, and loading of stock market company data, orchestrated with Airflow DAGs.',
    businessProblem:
      'Manually pulling and cleaning stock data on demand doesn\'t scale and is easy to forget or get wrong.',
    solution:
      'Built Airflow DAGs with defined task dependencies and scheduling to automate the entire extract → transform → load cycle, containerized with Docker for reproducibility.',
    architecture: [
      'Extract — pull raw company data on a schedule',
      'Transform — clean and reshape with Python/Pandas',
      'Load — store processed data for downstream analysis',
    ],
    screenshots: [],
    technologiesUsed: ['Apache Airflow', 'Python', 'Pandas', 'Docker', 'DAG Scheduling'],
    challenges: [
      'Managing task dependencies so failures in one step don\'t silently corrupt downstream data.',
      'Containerizing the environment so the pipeline runs the same way everywhere.',
    ],
    lessonsLearned:
      'Orchestration tools like Airflow turn a fragile script into a pipeline you can actually trust to run unattended.',
    futureImprovements: [
      'Add data quality checks as their own DAG tasks.',
      'Migrate storage to a cloud data warehouse.',
    ],
  },
  {
    slug: 'smart-city-air-quality',
    title: 'Smart City Air Quality Monitoring',
    category: 'Data Engineering',
    tags: ['Snowflake', 'Python', 'Power BI'],
    image: '/projects/air-quality.svg',
    summary:
      'A cloud data engineering pipeline combining simulated IoT sensor data with the OpenAQ API, warehoused in Snowflake and visualized in Power BI.',
    stack: ['Snowflake', 'Python', 'SQL', 'Power BI', 'OpenAQ API'],
    github: 'https://github.com/yousafumer',
    demo: null,
    overview:
      'An end-to-end cloud pipeline that simulates IoT air-quality sensors and blends that with real OpenAQ data, warehoused in Snowflake using a Bronze → Silver → Gold model.',
    businessProblem:
      'City-level air quality data is fragmented across sources and hard to compare across regions in real time.',
    solution:
      'Integrated simulated sensor data with the OpenAQ API, cleaned and modeled it in Snowflake, and built interactive Power BI dashboards to surface AQI, PM2.5 trends, and health risk by city.',
    architecture: [
      'Bronze — raw sensor + OpenAQ ingestion',
      'Silver — cleaning and unit normalization',
      'Gold — city-wise AQI and PM2.5 aggregates',
    ],
    screenshots: [],
    technologiesUsed: ['Snowflake', 'Python', 'SQL', 'Power BI', 'DAX', 'OpenAQ API'],
    challenges: [
      'Reconciling simulated sensor data with real API data on a consistent schema.',
      'Modeling AQI health-risk bands accurately in DAX.',
    ],
    lessonsLearned:
      'Cloud warehouses like Snowflake make it much easier to separate compute-heavy transformation from lightweight reporting.',
    futureImprovements: [
      'Connect to live sensor hardware instead of simulation.',
      'Add anomaly detection for sudden AQI spikes.',
    ],
  },
  {
    slug: 'powerbi-sales-analysis',
    title: 'Power BI — Sales Analysis Dashboard',
    category: 'Power BI',
    tags: ['Power BI', 'DAX'],
    image: '/projects/sales-dashboard.svg',
    summary:
      'A multi-page interactive dashboard covering sales performance, budget vs. actual analysis, and AI-driven insights.',
    stack: ['Power BI', 'DAX', 'Power Query'],
    github: 'https://github.com/yousafumer',
    demo: null,
    overview:
      'A multi-page Power BI dashboard analyzing revenue trends, customer demographics, product performance, and regional sales.',
    businessProblem:
      'Sales performance was reviewed in static spreadsheets, making it hard to spot trends or compare budget vs. actual quickly.',
    solution:
      'Built DAX measures for revenue trends, variance analysis, and profit margins, with interactive slicers so stakeholders can drill into any region or product line.',
    architecture: [
      'Data model — star schema built in Power Query',
      'DAX measures — revenue, variance, margin, YoY growth',
      'Report pages — overview, budget vs. actual, regional detail',
    ],
    screenshots: [],
    technologiesUsed: ['Power BI', 'DAX', 'Power Query', 'Data Modeling'],
    challenges: [
      'Building variance measures that stayed accurate across changing filter contexts.',
    ],
    lessonsLearned:
      'A clean star-schema model upstream makes downstream DAX dramatically simpler.',
    futureImprovements: ['Publish to Power BI Service with scheduled refresh.'],
  },
  {
    slug: 'powerbi-call-center',
    title: 'Power BI — Call Center Performance Analysis',
    category: 'Power BI',
    tags: ['Power BI', 'MySQL', 'DAX'],
    image: '/projects/call-center.svg',
    summary:
      'An end-to-end dashboard integrating MySQL with Power BI to analyze 5,000+ call records and agent performance.',
    stack: ['Power BI', 'MySQL', 'DAX'],
    github: 'https://github.com/yousafumer',
    demo: null,
    overview:
      'Integrated a MySQL database directly with Power BI to analyze over 5,000 call center records and surface agent-level performance.',
    businessProblem:
      'Call center leadership had no unified view of answer rates, resolution performance, or agent standouts.',
    solution:
      'Built DAX-based KPIs tracking an 80%+ answer rate, issue resolution performance, and a 3.4/5 customer satisfaction score, then identified top-performing agents and peak call periods through trend analysis.',
    architecture: [
      'MySQL — source call log database',
      'Power BI — live/import connection and modeling',
      'DAX KPIs — answer rate, resolution rate, CSAT',
    ],
    screenshots: [],
    technologiesUsed: ['Power BI', 'MySQL', 'DAX', 'Trend Analysis'],
    challenges: [
      'Connecting and refreshing a live MySQL source reliably inside Power BI.',
    ],
    lessonsLearned:
      'KPI dashboards are most useful when they point straight at an action — e.g., which agent or time slot needs support.',
    futureImprovements: ['Add predictive staffing recommendations based on peak-period trends.'],
  },
  {
    slug: 'excel-bike-sales',
    title: 'Excel — Bike Sales Dashboard',
    category: 'Excel',
    tags: ['Excel', 'Pivot Tables'],
    image: '/projects/bike-sales.svg',
    summary:
      'A clean Excel dashboard using pivot tables, charts, and slicers to surface sales trends and customer segments.',
    stack: ['Excel', 'Pivot Tables', 'Power Query'],
    github: 'https://github.com/yousafumer',
    demo: null,
    overview:
      'Built a self-contained Excel dashboard to explore bike sales data without needing a BI tool.',
    businessProblem:
      'Sales trends and customer segments were buried in a raw, uncleaned transaction sheet.',
    solution:
      'Cleaned and transformed the raw data, then built an interactive dashboard using pivot tables, charts, and slicers to identify sales trends and customer segments.',
    architecture: ['Raw data sheet', 'Cleaned staging table', 'Pivot-driven dashboard sheet'],
    screenshots: [],
    technologiesUsed: ['Excel', 'Pivot Tables', 'Slicers', 'Charts'],
    challenges: ['Keeping the dashboard fully interactive without any external tooling.'],
    lessonsLearned: 'A well-structured pivot model can rival a lightweight BI dashboard.',
    futureImprovements: ['Migrate the model to Power BI for sharing and scheduled refresh.'],
  },
  {
    slug: 'urdu-news-scraper',
    title: 'Urdu News Scraper — Python',
    category: 'Web Scraping',
    tags: ['Python', 'BeautifulSoup', 'Selenium'],
    image: '/projects/urdu-scraper.svg',
    summary:
      'A Python scraper that pulls daily Urdu news from ARY and BBC Urdu, handling pagination and structured JSON export.',
    stack: ['Python', 'BeautifulSoup', 'Requests'],
    github: 'https://github.com/yousafumer',
    demo: null,
    overview:
      'A tool that automatically scrapes daily-updated Urdu news articles from ARY and BBC Urdu, extracting titles, URLs, and full article text.',
    businessProblem:
      'Tracking daily Urdu news across multiple outlets manually is slow and easy to miss updates on.',
    solution:
      'Used BeautifulSoup and Requests to extract structured article data, implemented pagination handling to walk across multiple pages, and saved the output as structured JSON, uploaded to GitHub.',
    architecture: ['Request layer — fetch pages', 'Parse layer — BeautifulSoup extraction', 'Export — structured JSON output'],
    screenshots: [],
    technologiesUsed: ['Python', 'BeautifulSoup', 'Requests', 'JSON'],
    challenges: ['Handling inconsistent HTML structure across two different news sites.', 'Reliable pagination across dozens of pages.'],
    lessonsLearned: 'Resilient scraping means designing for the site\'s inconsistency, not its happy path.',
    futureImprovements: ['Schedule the scraper to run daily and store history over time.'],
  },
  {
    slug: 'selenium-automation-project',
    title: 'Selenium Automation — Client Project',
    category: 'Web Scraping',
    tags: ['Selenium', 'Automation'],
    image: '/projects/selenium-automation.svg',
    summary:
      'A small client project using Selenium IDE for basic web automation — recording actions and building repeatable scraping flows.',
    stack: ['Selenium IDE'],
    github: 'https://github.com/yousafumer',
    demo: null,
    overview:
      'Assisted on a small client project automating repetitive web actions using Selenium IDE.',
    businessProblem:
      'A client needed a repeated set of manual web actions automated to save time.',
    solution:
      'Recorded and refined automation flows in Selenium IDE, focused on selecting the right elements, testing flow reliability, and handling repeated steps.',
    architecture: ['Recorded action flow', 'Element selection & waits', 'Repeatable playback'],
    screenshots: [],
    technologiesUsed: ['Selenium IDE'],
    challenges: ['Making the recorded flow reliable across page-load timing differences.'],
    lessonsLearned: 'Good element selectors matter more than clever automation logic.',
    futureImprovements: ['Convert the flow into a Selenium WebDriver Python script for more control.'],
  },
  {
    slug: 'hospital-kpi-reporting',
    title: 'Hospital Operational KPI Reporting',
    category: 'Data Analysis',
    tags: ['Excel', 'Power BI', 'Data Cleaning'],
    image: '/projects/hospital-kpi.svg',
    summary:
      'KPI dashboards and reporting workflows built during a 6-month Data Analyst role at Darul Sehat Hospital, Karachi.',
    stack: ['Excel', 'Power BI', 'Data Validation'],
    github: 'https://github.com/yousafumer',
    demo: null,
    overview:
      'Cleaned and transformed hospital operational datasets, then built KPI dashboards to support quality and operational decisions.',
    businessProblem:
      'Operational data across hospital departments was inconsistent, making it hard to track KPIs reliably.',
    solution:
      'Standardized and validated the underlying data, then built KPI dashboards in Excel and Power BI so leadership could track performance at a glance.',
    architecture: ['Raw operational exports', 'Cleaned & validated dataset', 'KPI dashboard layer'],
    screenshots: [],
    technologiesUsed: ['Excel', 'Power BI', 'Data Validation', 'Data Cleaning'],
    challenges: ['Maintaining reporting consistency as source data formats varied month to month.'],
    lessonsLearned: 'In healthcare reporting, data validation is as important as the dashboard itself.',
    futureImprovements: ['Automate the monthly data validation checks.'],
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
