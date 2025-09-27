import { Code, ExternalLink, User, Layers, Tag } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { PageNavigation } from '@/components/page-navigation';

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
    'Infrastructure': 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',
    'SRE': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
    'Data Pipeline': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200',
    'グッドデザイン賞受賞': 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200'
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border hover:shadow-lg transition-all'>
      <div className='flex items-start gap-4'>
        <Code className='h-6 w-6 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0' />
        <div className='flex-1'>
          <div className='flex items-start justify-between mb-3 gap-4'>
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
              <Link prefetch={true}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm flex-shrink-0'
              >
                <span className='hidden md:inline'>{t('viewProject')}</span>
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

  const projects = [
    {
      title: "AIテキストエディタ「Xaris」の開発/運用",
      description: "プロライター向けのテキスト編集プラットフォームの開発/運用を行いました。AIベースのライティング支援、文字起こし機能、Notionベースのドキュメント機能、リアルタイムの共同編集などを提供しています。私は主に開発ロードマップの策定、技術選定、SveltekitからNext.jsへのリプレイスなどを担当していました。",
      role: "Product Manager, Frontend Architect/Developer, Backend Architect/Developer",
      techStack: ['Next.js', 'React', 'Sveltekit', 'Node.js', 'Vercel AI SDK', 'PostgreSQL', 'Cloudflare'],
      labels: ['ToC', 'Frontend', 'Backend'],
      url: "https://zenn.dev/studioeurygraph/articles/e636fd44517aed"
    },
    {
      title: "某コンビニのネットプリントシステムのモダナイゼーション開発",
      description: "某コンビニのネットプリントサービス（約250万MAU）のモダナイゼーション案件にてテックリードを担当し、ビジネス要件見直し、JavaからGolangへのリプレイス、マイクロサービス化、サーバレス化、SRE改善などのリードを行いました。",
      role: "Tech Lead, Project Leader, Backend Architect/Developer, SRE Engineer",
      techStack: ['Golang', 'PostgreSQL', 'Google Cloud', 'DDD', 'Microservices'],
      labels: ['ToC', 'Backend', 'SRE'],
      url: "https://youtu.be/fC8E3cSdbFw?si=kq0NJL8ZfnlM1l_B&t=1032"
    },
    {
      title: "書店サービス「思い出書店」の開発/運用",
      description: "QRコードが印刷された帯とLINEアプリケーションによる、オンライン・オフライン連動型の古書交換サービスの開発/運用を行いました。 カフェや公民館などの交換拠点に設置された帯に、持ちこんだ本の思い出を書き、QRコードからシステムに登録。その本を寄付、または拠点の他の本と交換できる仕組みです。私は開発初期からジョインし、プロダクト設計から開発全般まで幅広く担当していました。",
      role: "Product Manager, Frontend Architect/Developer, Backend Architect/Developer",
      techStack: ['Nuxt', 'Vue.js', 'Node.js', 'NestJS', 'Golang', 'NoSQL', 'Google Cloud'],
      labels: ['ToC', 'Frontend', 'Backend', 'グッドデザイン賞受賞'],
      url: "https://www.g-mark.org/gallery/winners/21878"
    },
    {
      title: "トヨタ自動車の生産現場におけるデータの利活用とクラウド移行のPoC",
      description: "トヨタ自動車の工場現場において「現場で生成されるデータの利活用」や「オンプレミスからのクラウド移行」等ができないか、調査や検証を行いました。私は主に「工場カメラをストリーミングで転送しクラウドに保存する」データパイプライン構築のPoCを担当しました。",
      role: "Backend Architect/Developer, Cloud Architect/Developer",
      techStack: ['Python', 'Google Cloud'],
      labels: ['ToB', 'Backend', 'Infrastructure', 'Data Pipeline']
    },
    {
      title: "製造会社における価格管理システムの開発",
      description: "価格管理システムのAPI開発と複数システムデータを連携するデータパイプライン開発を行いました。",
      role: "Project Leader, Backend Architect/Developer",
      techStack: ['Python', 'MySQL', 'Google Cloud', 'DDD', 'Microservices'],
      labels: ['ToB', 'Backend', 'Data Pipeline']
    },
    {
      title: "勤怠管理システムの海外対応",
      description: "海外法人向けに提供する勤怠管理システムのAPI開発を行いました。",
      role: "Project Leader, Backend Architect/Developer, SRE Engineer",
      techStack: ['Golang', 'MySQL', 'Google Cloud', 'DDD'],
      labels: ['ToB', 'Backend', 'SRE']
    }
  ];

  const projectStats = [
    { value: "20+", color: "text-blue-600 dark:text-blue-400", label: t('majorProjects') },
    { value: "20+", color: "text-green-600 dark:text-green-400", label: t('technologiesUsed') },
    { value: "8", color: "text-teal-600 dark:text-teal-400", label: t('plProjects') }
  ];

  return (
    <>
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
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                role={project.role}
                techStack={project.techStack}
                labels={project.labels}
                url={project.url}
              />
            ))}
          </section>

          {/* Project Stats */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2'>
              <Tag className='h-5 w-5 text-blue-600' />
              {t('projectOverview')}
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
              {projectStats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>{stat.label}</div>
                </div>
              ))}
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
                <span className='px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm'>
                  Data Pipeline
                </span>
              </div>
            </div>
          </section>

          {/* Additional Projects Link */}
          <section className='text-center'>
            <div className='bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border-2 border-dashed border-gray-200 dark:border-gray-700'>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                {t('additionalProjectsDescription')}
              </p>
              <Link
                href="https://docs.google.com/spreadsheets/d/1qQ1XUhYZuMU4vNeciZP0nesUAZKYTTNkQbFMcNiqPXI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors'
              >
                {t('viewAdditionalProjects')}
                <ExternalLink className='h-4 w-4' />
              </Link>
            </div>
          </section>
        </div>
      </div>

      <PageNavigation currentPath="/projects" />
    </>
  );
}