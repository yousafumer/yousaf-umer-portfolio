import courseraPython from '../assets/certificates/coursera-python.jpg'

import snowflakeBadge1 from '../assets/badges/snowflake-badge-1.png'

import snowflakeBadge2 from '../assets/badges/snowflake-badge-2.png'

export const certificates = [

  {

    id: 1,

    title: 'Python for Everybody',

    organization: 'Coursera',

    image: courseraPython,

    link:
      'https://www.coursera.org/account/accomplishments/verify/MFE5DRQ8HGMD',

    description:
      'Completed the Python for Everybody specialization, covering Python fundamentals, data structures, functions, file handling and practical programming concepts that serve as the foundation for automation, ETL pipelines and data engineering.',

    skills: [
      'Python',
      'Programming',
      'Data Structures',
      'Functions',
      'File Handling',
      'Automation'
    ],

    featured: true

  },

  {

    id: 2,

    title: 'Snowflake Hands-on Essentials',

    organization: 'Snowflake',

    image: snowflakeBadge1,

    link:
      'https://achieve.snowflake.com/e60a9939-60a3-40fd-a3c6-a60dbd94782e#acc.qV6JpFBW',

    description:
      'Earned the official Snowflake Hands-on Essentials badge by completing practical exercises focused on cloud data warehousing, database objects, SQL workloads and the Snowflake platform.',

    skills: [
      'Snowflake',
      'Cloud Data Warehouse',
      'SQL',
      'Virtual Warehouses',
      'Database Objects'
    ],

    featured: true

  },
    {

    id: 3,

    title: 'Snowflake Data Warehousing Workshop',

    organization: 'Snowflake',

    image: snowflakeBadge2,

    link:
      'https://achieve.snowflake.com/639474f6-e1ff-4ecb-b331-b8a76fca13cc#acc.ZO60s1I4',

    description:
      'Successfully completed hands-on learning focused on building modern cloud data warehouses using Snowflake, understanding data loading strategies, SQL querying and scalable analytics workflows.',

    skills: [
      'Snowflake',
      'Data Warehousing',
      'Cloud Analytics',
      'SQL',
      'Data Loading'
    ],

    featured: true

  }

]