// Every project rendered on the site comes from this file.
// Add a new object here to add a new project — no component changes required.
import airflowCover from '../assets/projects/airflow/cover.png'
import airflowDag from '../assets/projects/airflow/dag.png'
import airflowGraph from '../assets/projects/airflow/graph.png'
import airflowOutput from '../assets/projects/airflow/output.png'

import sqlCover from '../assets/projects/sql/cover.png'
import sqlArchitecture from '../assets/projects/sql/architecture.png'
import sqlBronze from '../assets/projects/sql/bronze.png'
import sqlGold from '../assets/projects/sql/gold.png'
import sqlOutput from '../assets/projects/sql/output.png'

import snowflakeCover from '../assets/projects/snowflake/cover.png'
import snowflakeArchitecture from '../assets/projects/snowflake/architecture.png'
import snowflakePythonETL from '../assets/projects/snowflake/python-etl.png'
import snowflakeDashboard1 from '../assets/projects/snowflake/dashboard1.png'
import snowflakeDashboard2 from '../assets/projects/snowflake/dashboard2.png'

import salesCover from '../assets/projects/powerbi/sales-cover.png'
import salesDashboard1 from '../assets/projects/powerbi/sales-dashboard1.png'
import salesDashboard2 from '../assets/projects/powerbi/sales-dashboard2.png'
import salesDashboard3 from '../assets/projects/powerbi/sales-dashboard3.png'

import callCenterCover from '../assets/projects/powerbi/callcenter-cover.png'
import callCenterDashboard1 from '../assets/projects/powerbi/callcenter-dashboard1.png'
import callCenterDashboard2 from '../assets/projects/powerbi/callcenter-dashboard2.png'

import bikeCover from '../assets/projects/excel/bike-cover.png'
import bikeDashboard from '../assets/projects/excel/bike-dashboard.png'

import vrindaCover from '../assets/projects/excel/vrinda-cover.png'
import vrindaDashboard from '../assets/projects/excel/vrinda-dashboard.png'

import urduCover from '../assets/projects/scraping/urdu-cover.png'
import urduOutput from '../assets/projects/scraping/urdu-output.png'

import yellowCover from '../assets/projects/scraping/yellow-cover.png'
import yellowOutput from '../assets/projects/scraping/yellow-output.png'

export const categories = [
  "All",
  "Data Engineering",
  "Cloud Data Engineering",
  "Business Intelligence",
  "Data Automation",
]

export const projects = [
  {
  id: 'airflow-stock-market-etl',

  featured: true,

  title: 'Automated Stock Market ETL Pipeline',

  slug: 'automated-stock-market-etl-pipeline',

  category: 'Data Engineering',

  shortDescription:
    'Production-style ETL pipeline that automatically extracts stock market data, transforms datasets, and loads analytics-ready information using Apache Airflow, Python, Docker, and Pandas.',

  overview:
    'This project demonstrates a complete end-to-end ETL workflow designed using Apache Airflow. The pipeline automates the process of collecting stock market information, transforming raw datasets into structured data, and preparing analytics-ready outputs through scheduled orchestration.',

  businessProblem:
    'Financial datasets change continuously, making manual collection and processing unreliable and time-consuming. Businesses require automated workflows that consistently collect, validate, and transform market data for reporting and analysis.',

  solution:
    'Developed a scalable ETL pipeline orchestrated with Apache Airflow inside Docker containers. The workflow automatically extracts stock market information, applies transformation logic using Python and Pandas, validates the processed data, and generates clean datasets ready for downstream analytics.',

  architecture: [
    'Extract stock market data',
    'Transform & clean datasets',
    'Validate data quality',
    'Generate analytics-ready output',
    'Automate scheduling with Apache Airflow',
  ],

  technologies: [
    'Python',
    'Apache Airflow',
    'Docker',
    'Pandas',
    'Requests',
    'Git',
    'GitHub',
  ],

  keyFeatures: [
    'Automated ETL workflow',
    'Workflow scheduling with Apache Airflow',
    'Dockerized development environment',
    'Data cleaning & transformation',
    'Modular pipeline architecture',
    'Production-style project structure',
    'Analytics-ready output generation',
  ],

  challenges: [
    'Designing reusable ETL tasks',
    'Managing Airflow DAG dependencies',
    'Containerizing the complete workflow',
    'Ensuring clean and reliable output datasets',
  ],

  learnings: [
    'Workflow orchestration',
    'Pipeline scheduling',
    'Production ETL architecture',
    'Docker fundamentals',
    'Scalable project organization',
  ],

  github:
    'https://github.com/yousafumer/airflow-stock-market-etl',

  demo: null,

images: [
  airflowCover,
  airflowDag,
  airflowGraph,
  airflowOutput,
],
},
{
  id: 'enterprise-sql-data-warehouse',

  featured: true,

  title: 'Enterprise SQL Data Warehouse',

  slug: 'enterprise-sql-data-warehouse',

  category: 'Data Engineering',

  shortDescription:
    'Designed a modern Bronze, Silver, and Gold SQL data warehouse architecture that transforms raw operational datasets into clean, analytics-ready business models.',

  overview:
    'A production-inspired SQL Server data warehouse project implementing the Medallion Architecture. The solution organizes raw data into Bronze, Silver, and Gold layers, enabling reliable reporting, simplified analytics, and scalable future data integration.',

  businessProblem:
    'Business data often exists across multiple raw source files with inconsistent formats, duplicate records, and missing values. Direct reporting from raw data creates unreliable dashboards and poor business decisions.',

  solution:
    'Designed and implemented a layered SQL Server Data Warehouse where raw datasets are first ingested into the Bronze layer, standardized inside the Silver layer, and finally transformed into dimensional business models within the Gold layer for reporting and analytics.',

  architecture: [
    'Raw Source Data',
    'Bronze Layer (Raw Ingestion)',
    'Silver Layer (Data Cleaning & Standardization)',
    'Gold Layer (Business-ready Models)',
    'Reporting & Analytics',
  ],

  technologies: [
    'SQL Server',
    'T-SQL',
    'SQL Server Management Studio',
    'Data Warehouse',
    'Star Schema',
    'Dimensional Modeling',
  ],

  keyFeatures: [
    'Bronze / Silver / Gold Architecture',
    'Data Cleaning & Standardization',
    'Fact & Dimension Modeling',
    'SQL Data Validation',
    'Reusable SQL Scripts',
    'Analytics-ready Data Models',
    'Production-inspired Warehouse Design',
  ],

  challenges: [
    'Designing scalable warehouse architecture',
    'Maintaining consistency between multiple layers',
    'Building reusable SQL scripts',
    'Designing efficient dimensional models',
  ],

  learnings: [
    'Enterprise Data Warehouse Design',
    'Medallion Architecture',
    'Dimensional Modeling',
    'Data Transformation',
    'SQL Performance Optimization',
  ],

  github:
    'https://github.com/yousafumer/Data-Warehouse-Project-by-SQL-Server',

  demo: null,

images: [
  sqlCover,
  sqlArchitecture,
  sqlBronze,
  sqlGold,
  sqlOutput,
],
},
{
  id: 'smart-city-air-quality-platform',

  featured: true,

  title: 'Smart City Air Quality Analytics Platform',

  slug: 'smart-city-air-quality-analytics-platform',

  category: 'Cloud Data Engineering',

  shortDescription:
    'Built an end-to-end cloud data pipeline that collects live air quality data, processes it using Python, stores it in Snowflake, and delivers interactive Power BI dashboards for environmental analytics.',

  overview:
    'This project demonstrates a modern cloud-based data engineering workflow that automates the collection, transformation, storage, and visualization of environmental data. The pipeline simulates how smart city platforms continuously monitor air quality and transform raw API responses into meaningful business insights.',

  businessProblem:
    'Environmental data arrives continuously from external APIs and is often unstructured, making it difficult to analyze trends or build reliable dashboards for decision-makers.',

  solution:
    'Developed a modular ETL pipeline that automatically retrieves air quality data, validates and transforms the datasets using Python, loads structured information into Snowflake, and presents interactive dashboards in Power BI for real-time analysis.',

  architecture: [
    'Air Quality API',
    'Python ETL Pipeline',
    'Data Validation & Transformation',
    'Snowflake Cloud Warehouse',
    'Power BI Dashboard',
  ],

  technologies: [
    'Python',
    'Snowflake',
    'Power BI',
    'REST API',
    'Pandas',
    'SQL',
  ],

  keyFeatures: [
    'Cloud-based ETL Pipeline',
    'Automated API Data Collection',
    'Data Cleaning & Validation',
    'Snowflake Data Warehouse',
    'Interactive Power BI Dashboard',
    'Modular Python Architecture',
    'Analytics-ready Data Models',
  ],

  challenges: [
    'Handling inconsistent API responses',
    'Designing scalable ETL modules',
    'Preparing clean datasets for cloud storage',
    'Building reliable reporting datasets',
  ],

  learnings: [
    'Cloud Data Engineering',
    'Snowflake Fundamentals',
    'REST API Integration',
    'ETL Pipeline Design',
    'Business Intelligence Reporting',
  ],

  github:
    'https://github.com/yousafumer/smart-city-air-quality-data-pipeline',

  demo: null,

  images: [
  snowflakeCover,
  snowflakeArchitecture,
  snowflakePythonETL,
  snowflakeDashboard1,
  snowflakeDashboard2,
],
},
  
{
  id: 'sales-performance-analytics-dashboard',

  featured: false,

  title: 'Sales Performance Analytics Dashboard',

  slug: 'sales-performance-analytics-dashboard',

  category: 'Business Intelligence',

  shortDescription:
    'Interactive Power BI dashboard that transforms raw sales data into executive-level KPIs, trends, and actionable business insights.',

  overview:
    'Designed a professional business intelligence dashboard using Power BI to analyze sales performance across products, customers, and regions. The solution enables decision-makers to monitor KPIs, identify sales trends, and evaluate business performance through interactive visualizations.',

  businessProblem:
    'Large sales datasets make it difficult for management to identify trends, monitor KPIs, and make informed business decisions using spreadsheets alone.',

  solution:
    'Developed an interactive Power BI dashboard that transforms raw transactional sales data into dynamic reports using Power Query, DAX measures, and interactive filters, allowing stakeholders to explore business performance efficiently.',

  architecture: [
    'Raw Sales Dataset',
    'Power Query Data Cleaning',
    'Data Modeling',
    'DAX Measures & KPIs',
    'Interactive Dashboard',
  ],

  technologies: [
    'Power BI',
    'Power Query',
    'DAX',
    'Excel',
    'Data Modeling',
  ],

  keyFeatures: [
    'Interactive KPI Dashboard',
    'Sales Trend Analysis',
    'Product Performance Analysis',
    'Customer Insights',
    'Regional Sales Analysis',
    'Dynamic Filtering',
    'Executive Summary KPIs',
  ],

  challenges: [
    'Cleaning inconsistent sales records',
    'Building efficient data models',
    'Designing user-friendly dashboards',
    'Creating reusable DAX calculations',
  ],

  learnings: [
    'Business Intelligence Reporting',
    'Power BI Data Modeling',
    'DAX Calculations',
    'Interactive Dashboard Design',
    'Data Visualization Best Practices',
  ],

  github:
    'https://github.com/yousafumer/power-bi-sales-data',

  demo: null,

 images: [
  salesCover,
  salesDashboard1,
  salesDashboard2,
  salesDashboard3,
],
},
  {
  id: 'call-center-performance-analytics',

  featured: false,

  title: 'Call Center Performance Analytics Dashboard',

  slug: 'call-center-performance-analytics-dashboard',

  category: 'Business Intelligence',

  shortDescription:
    'Built an operational analytics dashboard using Power BI and MySQL to monitor agent performance, customer satisfaction, call handling efficiency, and service quality KPIs.',

  overview:
    'Designed a comprehensive operational dashboard that enables managers to monitor call center performance through real-time KPIs, agent productivity metrics, customer satisfaction scores, and issue resolution analysis. The project demonstrates how business intelligence can improve operational efficiency and decision-making.',

  businessProblem:
    'Call centers generate thousands of customer interactions every day. Without centralized reporting, managers struggle to evaluate agent productivity, customer satisfaction, response efficiency, and operational performance.',

  solution:
    'Developed a Power BI dashboard connected to MySQL that transforms raw operational data into interactive reports using Power Query, DAX measures, and KPI visualizations. The dashboard enables stakeholders to identify performance trends and improve service quality.',

  architecture: [
    'Call Center Dataset',
    'MySQL Database',
    'Power Query Data Preparation',
    'Data Modeling & DAX',
    'Interactive Power BI Dashboard',
  ],

  technologies: [
    'Power BI',
    'MySQL',
    'Power Query',
    'DAX',
    'SQL',
    'Excel',
  ],

  keyFeatures: [
    'Agent Performance Monitoring',
    'Customer Satisfaction Analysis',
    'Call Resolution KPIs',
    'Average Response Time',
    'Interactive Dashboard Filters',
    'Operational Performance Reporting',
    'Executive KPI Summary',
  ],

  challenges: [
    'Designing an efficient relational data model',
    'Building reusable DAX measures',
    'Creating meaningful operational KPIs',
    'Improving dashboard usability',
  ],

  learnings: [
    'Operational Analytics',
    'Power BI Data Modeling',
    'Business KPI Design',
    'DAX Optimization',
    'MySQL Integration',
  ],

  github:
    'https://github.com/yousafumer/data-analytics-portfolio/tree/main/powerbi-call-center-mysql',

  demo: null,

  images: [
  callCenterCover,
  callCenterDashboard1,
  callCenterDashboard2,
],
},
{
  id: 'bike-sales-performance-dashboard',

  featured: false,

  title: 'Bike Sales Performance Dashboard',

  slug: 'bike-sales-performance-dashboard',

  category: 'Business Intelligence',

  shortDescription:
    'Designed an interactive Excel dashboard that transforms raw sales records into executive-level business insights through KPI tracking, trend analysis, and customer segmentation.',

  overview:
    'Developed a dynamic Excel dashboard to analyze bike sales performance across multiple business dimensions. The project demonstrates how spreadsheet-based reporting can support business decision-making through interactive visualizations, slicers, KPIs, and automated calculations.',

  businessProblem:
    'Raw sales spreadsheets make it difficult for businesses to identify customer purchasing trends, regional performance, and overall sales growth without manual analysis.',

  solution:
    'Built an interactive Excel dashboard using Pivot Tables, Pivot Charts, Slicers, Conditional Formatting, and calculated metrics to convert raw transactional data into meaningful business insights for faster decision-making.',

  architecture: [
    'Raw Sales Dataset',
    'Data Cleaning',
    'Pivot Tables',
    'Interactive Dashboard',
    'Business Insights',
  ],

  technologies: [
    'Microsoft Excel',
    'Pivot Tables',
    'Pivot Charts',
    'Slicers',
    'Conditional Formatting',
  ],

  keyFeatures: [
    'Interactive Dashboard',
    'Sales KPI Tracking',
    'Customer Segmentation',
    'Regional Performance Analysis',
    'Dynamic Filtering',
    'Business Trend Analysis',
    'Executive Summary',
  ],

  challenges: [
    'Cleaning inconsistent spreadsheet data',
    'Designing an intuitive dashboard layout',
    'Building reusable Pivot Tables',
    'Presenting KPIs effectively',
  ],

  learnings: [
    'Excel Dashboard Design',
    'Business Reporting',
    'Data Visualization',
    'Spreadsheet Automation',
    'Analytical Thinking',
  ],

  github:
    'https://github.com/yousafumer/Excel-Bike-Sales-Dashboard',

  demo: null,

 images: [
  bikeCover,
  bikeDashboard,
],
},
  {
  id: 'retail-sales-intelligence-dashboard',

  featured: false,

  title: 'Retail Sales Intelligence Dashboard',

  slug: 'retail-sales-intelligence-dashboard',

  category: 'Business Intelligence',

  shortDescription:
    'Developed an interactive Excel dashboard that provides retail sales insights through KPI tracking, customer segmentation, order analysis, and executive reporting.',

  overview:
    'This project focuses on transforming retail sales data into meaningful business intelligence using Microsoft Excel. The dashboard enables users to monitor sales performance, analyze customer purchasing behavior, identify top-performing product categories, and support data-driven business decisions.',

  businessProblem:
    'Retail businesses generate large volumes of transactional data, making it difficult to identify sales trends, customer behavior, and business performance using spreadsheets alone.',

  solution:
    'Designed an interactive Excel dashboard using Pivot Tables, Pivot Charts, Slicers, Conditional Formatting, and business KPIs to convert raw retail sales data into clear, actionable insights for business stakeholders.',

  architecture: [
    'Raw Retail Dataset',
    'Data Cleaning',
    'Pivot Tables',
    'Interactive Dashboard',
    'Business Insights',
  ],

  technologies: [
    'Microsoft Excel',
    'Pivot Tables',
    'Pivot Charts',
    'Slicers',
    'Conditional Formatting',
  ],

  keyFeatures: [
    'Retail Sales KPIs',
    'Customer Analysis',
    'Product Category Performance',
    'Order Trend Analysis',
    'Interactive Filtering',
    'Executive Dashboard',
    'Business Insights',
  ],

  challenges: [
    'Preparing clean retail datasets',
    'Designing user-friendly dashboard layouts',
    'Creating meaningful KPIs',
    'Presenting business insights effectively',
  ],

  learnings: [
    'Retail Analytics',
    'Business Intelligence',
    'Excel Dashboard Design',
    'Interactive Reporting',
    'Data Storytelling',
  ],

  github:
    'https://github.com/yousafumer/excel_sales_dashboard_varinda_store',

  demo: null,

  images: [
  vrindaCover,
  vrindaDashboard,
],
},
  {
  id: 'automated-urdu-news-aggregation-platform',

  featured: false,

  title: 'Automated Urdu News Aggregation Platform',

  slug: 'automated-urdu-news-aggregation-platform',

  category: 'Data Automation',

  shortDescription:
    'Developed an automated news aggregation platform that continuously collects Urdu news articles, extracts structured content, and prepares machine-readable datasets for downstream applications.',

  overview:
    'This project automates the collection of Urdu news articles from multiple news websites using Python-based web scraping. The pipeline extracts, cleans, and structures news data into JSON format, creating a reliable dataset that can be consumed by mobile applications, APIs, or AI-powered summarization systems.',

  businessProblem:
    'News websites publish large volumes of articles every day, making manual collection inefficient and unsuitable for applications that require continuously updated datasets.',

  solution:
    'Designed a modular web scraping pipeline that automatically collects Urdu news from multiple trusted news sources, processes the extracted content, removes unnecessary information, and exports structured JSON datasets suitable for automation and future AI applications.',

  architecture: [
    'News Websites',
    'Python Web Scraper',
    'Data Cleaning',
    'Structured JSON Dataset',
    'Application Ready Output',
  ],

  technologies: [
    'Python',
    'BeautifulSoup',
    'Requests',
    'JSON',
    'GitHub',
    'GitHub Actions',
  ],

  keyFeatures: [
    'Multi-source News Collection',
    'Automated Data Extraction',
    'JSON Dataset Generation',
    'Content Cleaning',
    'Structured Output',
    'Reusable Scraper Architecture',
    'Automation-ready Pipeline',
  ],

  challenges: [
    'Handling different website structures',
    'Extracting clean Urdu text',
    'Designing reusable scraping modules',
    'Generating consistent JSON output',
  ],

  learnings: [
    'Web Scraping',
    'Data Extraction',
    'Automation',
    'JSON Processing',
    'Pipeline Design',
  ],

  github:
    'https://github.com/yousafumer/news-scraper-project',

  demo: null,

  images: [
  urduCover,
  urduOutput,
],
},{
  id: 'business-directory-data-extraction-engine',

  featured: false,

  title: 'Business Directory Data Extraction Engine',

  slug: 'business-directory-data-extraction-engine',

  category: 'Data Automation',

  shortDescription:
    'Built an automated data extraction solution that collects structured business directory information from the web and exports clean datasets for business analysis and lead generation.',

  overview:
    'This project demonstrates a scalable web scraping workflow designed to extract structured business information from online directories. The scraper automatically collects company details, validates the extracted records, and exports clean datasets that can be used for business intelligence, market research, and lead generation.',

  businessProblem:
    'Business directory websites contain valuable company information, but manually collecting hundreds of records is time-consuming, repetitive, and prone to human error.',

  solution:
    'Developed a Python-based web scraping solution that automates business directory data extraction, processes the collected information, removes inconsistencies, and exports structured datasets in Excel format for downstream business use.',

  architecture: [
    'Business Directory Website',
    'Python Scraper',
    'Data Cleaning',
    'Excel Dataset',
    'Business-ready Output',
  ],

  technologies: [
    'Python',
    'BeautifulSoup',
    'Requests',
    'Pandas',
    'Excel',
    'Data Cleaning',
  ],

  keyFeatures: [
    'Automated Business Data Extraction',
    'Structured Excel Output',
    'Scalable Scraping Workflow',
    'Data Validation',
    'Duplicate Handling',
    'Business-ready Dataset',
    'Reusable Scraper Architecture',
  ],

  challenges: [
    'Handling different HTML structures',
    'Extracting structured business information',
    'Cleaning inconsistent records',
    'Exporting standardized datasets',
  ],

  learnings: [
    'Advanced Web Scraping',
    'Data Cleaning',
    'Data Validation',
    'Automation',
    'Dataset Preparation',
  ],

  github:
    'https://github.com/yousafumer/yello-jobs-details-web-scraping',

  demo: null,

 images: [
  yellowCover,
  yellowOutput,
],
}
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
