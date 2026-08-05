import {
  SiPython, SiPandas, SiNumpy, SiMysql, SiSnowflake, SiApacheairflow,
  SiSelenium, SiGit, SiGithub, SiJupyter, SiDocker,
} from 'react-icons/si'
import {
  FaDatabase, FaChartBar, FaCode, FaFileExcel, FaCalculator,
  FaTable, FaSitemap, FaServer, FaFileCode,
} from 'react-icons/fa'

// Scalable skill data — add a new object to add a new skill, no component changes needed.
export const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    skills: [
      { name: 'Python', icon: SiPython, level: 90 },
      { name: 'Pandas', icon: SiPandas, level: 85 },
      { name: 'NumPy', icon: SiNumpy, level: 80 },
      { name: 'Regex', icon: FaCode, level: 75 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & SQL',
    skills: [
      { name: 'SQL', icon: FaDatabase, level: 90 },
      { name: 'SQL Server', icon: FaServer, level: 85 },
      { name: 'MySQL', icon: SiMysql, level: 80 },
      { name: 'Snowflake', icon: SiSnowflake, level: 65 },
    ],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    skills: [
      { name: 'ETL Pipelines', icon: FaSitemap, level: 85 },
      { name: 'Apache Airflow', icon: SiApacheairflow, level: 65 },
      { name: 'Docker', icon: SiDocker, level: 55 },
      { name: 'Data Warehousing', icon: FaDatabase, level: 80 },
    ],
  },
  {
    id: 'visualization',
    title: 'Visualization & Reporting',
    skills: [
      { name: 'Power BI', icon: FaChartBar, level: 90 },
      { name: 'Excel', icon: FaFileExcel, level: 88 },
      { name: 'DAX', icon: FaCalculator, level: 78 },
      { name: 'Pivot Tables', icon: FaTable, level: 85 },
    ],
  },
  {
    id: 'automation',
    title: 'Web Scraping & Automation',
    skills: [
      { name: 'Selenium', icon: SiSelenium, level: 78 },
      { name: 'BeautifulSoup', icon: SiPython, level: 82 },
      { name: 'Requests', icon: FaFileCode, level: 80 },
    ],
  },
  {
    id: 'tools',
    title: 'Version Control & Tools',
    skills: [
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'GitHub', icon: SiGithub, level: 85 },
      { name: 'Jupyter Notebook', icon: SiJupyter, level: 85 },
    ],
  },
]
