import { SidebarTrigger } from '@/components/ui/sidebar';
import { Code, ExternalLink, User, Layers, Tag } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const ProjectCard = ({
  title,
  description,
  role,
  techStack,
  labels,
  url,
  type = 'project'
}: {
  title: string;
  description: string;
  role: string;
  techStack: string[];
  labels: string[];
  url?: string;
  type?: 'project' | 'product';
}) => {
  const t = useTranslations('Projects');
  const labelColors: { [key: string]: string } = {
    'ToC': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
    'ToB': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
    'Frontend': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
    'Backend': 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200',
    'Infra': 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',
    'SRE': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border hover:shadow-lg transition-all'>
      <div className='flex items-start gap-4'>
        <Code className='h-6 w-6 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0' />
        <div className='flex-1'>
          <div className='flex items-start justify-between mb-3'>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight'>
                {title}
              </h3>
              <div className='flex flex-wrap gap-2 mb-3'>
                {labels.map((label) => (
                  <span
                    key={label}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${labelColors[label] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            {url && (
              <Link
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm flex-shrink-0 ml-4'
              >
                {t('viewProject')}
                <ExternalLink className='h-4 w-4' />
              </Link>
            )}
          </div>

          <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-4'>
            {description}
          </p>

          <div className='space-y-3'>
            <div className='flex items-start gap-2'>
              <User className='h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0' />
              <div>
                <span className='text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide'>{t('role')}</span>
                <p className='text-sm text-gray-900 dark:text-gray-100'>{role}</p>
              </div>
            </div>

            <div className='flex items-start gap-2'>
              <Layers className='h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0' />
              <div className='flex-1'>
                <span className='text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide'>{t('techStack')}</span>
                <div className='flex flex-wrap gap-1 mt-1'>
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className='px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const t = useTranslations('Projects');
  return (
    <>
      <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
        <SidebarTrigger className='-ml-1' />
        <h1 className='text-lg font-semibold'>{t('title')}</h1>
      </header>
      <div className='flex flex-1 flex-col gap-6 p-6'>
        <div className='max-w-4xl mx-auto space-y-8'>

          {/* Header Section */}
          <section className='text-center space-y-4'>
            <div className='flex justify-center'>
              <Code className='h-16 w-16 text-blue-600' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>{t('title')}</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 mt-2'>
                {t('subtitle')}
              </p>
            </div>
          </section>

          {/* Projects List */}
          <section className='space-y-6'>
            <ProjectCard
              title="AI Text Editor Platform"
              description="A sophisticated AI-powered text editing platform that provides intelligent writing assistance, real-time collaboration, and advanced document processing capabilities. Built with modern web technologies and integrated with multiple AI services for optimal user experience."
              role="Frontend Developer, Product Manager"
              techStack={['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL']}
              labels={['ToC', 'Frontend', 'Backend']}
              url="https://example.com"
            />

            <ProjectCard
              title="Cloud Infrastructure Management System"
              description="Enterprise-grade cloud infrastructure management platform designed for Toyota Motor Corporation. Provides automated deployment, monitoring, and scaling capabilities across multiple cloud providers with robust security and compliance features."
              role="Cloud Architect, SRE"
              techStack={['Google Cloud', 'Kubernetes', 'Go', 'Terraform', 'Grafana', 'Prometheus']}
              labels={['ToB', 'Infra', 'SRE', 'Backend']}
            />

            <ProjectCard
              title="Microservices Architecture Platform"
              description="A comprehensive microservices platform built for high-scale enterprise applications. Features service mesh integration, distributed tracing, and automated testing pipelines. Designed to handle millions of requests per day with 99.9% uptime."
              role="Application Architect, Tech Lead"
              techStack={['Docker', 'Kubernetes', 'Java', 'Spring Boot', 'Redis', 'Apache Kafka']}
              labels={['ToB', 'Backend', 'Infra']}
            />

            <ProjectCard
              title="Real-time Analytics Dashboard"
              description="Interactive real-time analytics dashboard for business intelligence and data visualization. Processes streaming data from multiple sources and provides customizable charts, reports, and alerting capabilities for business stakeholders."
              role="Full Stack Developer, Project Leader"
              techStack={['React', 'D3.js', 'Python', 'FastAPI', 'Apache Spark', 'BigQuery']}
              labels={['ToB', 'Frontend', 'Backend']}
            />
          </section>

          {/* Project Stats */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2'>
              <Tag className='h-5 w-5 text-blue-600' />
              {t('projectOverview')}
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>4+</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>{t('majorProjects')}</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>10+</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>{t('technologiesUsed')}</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2'>3</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>{t('companies')}</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2'>100%</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>{t('successRate')}</div>
              </div>
            </div>

            <div className='mt-6 space-y-4'>
              <h4 className='font-semibold text-gray-900 dark:text-gray-100'>{t('technologyCategories')}</h4>
              <div className='flex flex-wrap gap-2'>
                <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm'>
                  Frontend
                </span>
                <span className='px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm'>
                  Backend
                </span>
                <span className='px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm'>
                  Infrastructure
                </span>
                <span className='px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm'>
                  SRE
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}