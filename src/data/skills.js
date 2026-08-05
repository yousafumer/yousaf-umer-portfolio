import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiSnowflake,
  SiApacheairflow,
  SiSelenium,
  SiGit,
  SiGithub,
  SiJupyter,
  SiDocker,
} from 'react-icons/si'

import {
  FaDatabase,
  FaChartBar,
  FaCode,
  FaFileExcel,
  FaCalculator,
  FaTable,
  FaSitemap,
  FaServer,
  FaFileCode,
} from 'react-icons/fa'

export const skills = [

  {

    id: 'programming',

    title: 'Programming & Data Processing',

    description:
      'Building reliable automation scripts, ETL logic and scalable data processing solutions using Python.',

    icon: SiPython,

    skills: [

      {

        name: 'Python',

        icon: SiPython,

        level: 'Advanced',

        description:
          'Core programming, automation, ETL development and scripting.'

      },

      {

        name: 'Pandas',

        icon: SiPandas,

        level: 'Advanced',

        description:
          'Data cleaning, transformation and analytical processing.'

      },

      {

        name: 'NumPy',

        icon: SiNumpy,

        level: 'Intermediate',

        description:
          'Numerical computing and array operations.'

      },

      {

        name: 'Regular Expressions',

        icon: FaCode,

        level: 'Intermediate',

        description:
          'Pattern matching and text processing.'

      }

    ]

  },
    {

    id: 'databases',

    title: 'Databases & Data Warehousing',

    description:
      'Designing relational databases, SQL solutions and modern analytics-ready data warehouse architectures.',

    icon: FaDatabase,

    skills: [

      {

        name: 'SQL',

        icon: FaDatabase,

        level: 'Advanced',

        description:
          'Writing complex queries, joins, CTEs, window functions and data analysis.'

      },

      {

        name: 'SQL Server',

        icon: FaServer,

        level: 'Advanced',

        description:
          'Database development and enterprise data warehouse implementation.'

      },

      {

        name: 'MySQL',

        icon: SiMysql,

        level: 'Intermediate',

        description:
          'Database design, querying and data management.'

      },

      {

        name: 'Snowflake',

        icon: SiSnowflake,

        level: 'Intermediate',

        description:
          'Cloud data warehouse, virtual warehouses and analytics workloads.'

      }

    ]

  },

  {

    id: 'engineering',

    title: 'Data Engineering',

    description:
      'Building scalable ETL workflows, orchestration pipelines and modern data engineering solutions.',

    icon: FaSitemap,

    skills: [

      {

        name: 'ETL Pipelines',

        icon: FaSitemap,

        level: 'Advanced',

        description:
          'End-to-end extraction, transformation and loading workflows.'

      },

      {

        name: 'Apache Airflow',

        icon: SiApacheairflow,

        level: 'Intermediate',

        description:
          'Workflow orchestration, scheduling and DAG development.'

      },

      {

        name: 'Docker',

        icon: SiDocker,

        level: 'Intermediate',

        description:
          'Containerized development environments for data projects.'

      },

      {

        name: 'Data Warehousing',

        icon: FaDatabase,

        level: 'Advanced',

        description:
          'Bronze, Silver and Gold layer architecture with dimensional modeling.'

      }

    ]

  },
    {

    id: 'analytics',

    title: 'Business Intelligence & Analytics',

    description:
      'Transforming business data into interactive dashboards, KPIs and decision-ready reports.',

    icon: FaChartBar,

    skills: [

      {

        name: 'Power BI',

        icon: FaChartBar,

        level: 'Advanced',

        description:
          'Interactive dashboards, DAX, Power Query and business reporting.'

      },

      {

        name: 'Microsoft Excel',

        icon: FaFileExcel,

        level: 'Advanced',

        description:
          'Advanced formulas, Pivot Tables, dashboards and reporting.'

      },

      {

        name: 'DAX',

        icon: FaCalculator,

        level: 'Intermediate',

        description:
          'Calculated columns, measures and business calculations.'

      },

      {

        name: 'Pivot Tables',

        icon: FaTable,

        level: 'Advanced',

        description:
          'Summarizing and analyzing large datasets efficiently.'

      }

    ]

  },

  {

    id: 'automation',

    title: 'Automation & Web Scraping',

    description:
      'Automating repetitive workflows and collecting structured data from websites using Python.',

    icon: SiSelenium,

    skills: [

      {

        name: 'Selenium',

        icon: SiSelenium,

        level: 'Intermediate',

        description:
          'Browser automation and dynamic website scraping.'

      },

      {

        name: 'BeautifulSoup',

        icon: SiPython,

        level: 'Advanced',

        description:
          'HTML parsing and structured data extraction.'

      },

      {

        name: 'Requests',

        icon: FaFileCode,

        level: 'Advanced',

        description:
          'REST API integration and HTTP data collection.'

      }

    ]

  },
    {

    id: 'tools',

    title: 'Development Tools & Version Control',

    description:
      'Using modern development tools for collaboration, version control and reproducible data engineering workflows.',

    icon: SiGithub,

    skills: [

      {

        name: 'Git',

        icon: SiGit,

        level: 'Advanced',

        description:
          'Version control, branching strategies and collaborative development.'

      },

      {

        name: 'GitHub',

        icon: SiGithub,

        level: 'Advanced',

        description:
          'Repository management, portfolio hosting and project collaboration.'

      },

      {

        name: 'Jupyter Notebook',

        icon: SiJupyter,

        level: 'Advanced',

        description:
          'Interactive data exploration, experimentation and analysis.'

      }

    ]

  }

]