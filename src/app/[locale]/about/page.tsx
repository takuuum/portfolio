import { User, Award, Building2, Users, Trophy, FileText, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { PageNavigation } from '@/components/page-navigation';

// Career data
const careerData = [
  {
    position: 'Application Architect / Developer',
    subPosition: 'Product Manager',
    company: 'STUDIO EURYGRAPH',
    companyUrl: 'https://studioeurygraph.com',
    duration: '2022/3 - Present',
    employmentType: 'Outsourcing (full-time from 2025/4)'
  },
  {
    position: 'Application Architect / Developer',
    subPosition: 'Cloud Architect / Developer',
    company: 'Toyota Motor Corporation',
    companyUrl: 'https://global.toyota',
    duration: '2022/9 - 2023/2',
    employmentType: 'Permanent (full-time, 在籍出向)'
  },
  {
    position: 'Application Architect / Developer',
    subPosition: 'Cloud Architect / Developer\nTech Lead / Project Leader',
    company: 'Cloud Ace',
    companyUrl: 'https://cloud-ace.jp',
    duration: '2021/4 - 2025/3',
    employmentType: 'Permanent (full-time)'
  }
];

// Section Header Component
interface SectionHeaderProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}

function SectionHeader({ icon: Icon, title }: SectionHeaderProps) {
  return (
    <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
      <Icon className='h-5 w-5' />
      {title}
    </h3>
  );
}

// Career Table Row Component
interface CareerRowProps {
  career: typeof careerData[0];
  isLast?: boolean;
}

function CareerTableRow({ career, isLast }: CareerRowProps) {
  const rowClass = isLast
    ? 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
    : 'border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50';

  return (
    <tr className={rowClass}>
      <td className='py-3 px-2 text-gray-900 dark:text-gray-100'>
        {career.position}
        <br />
        <span className='text-sm text-gray-600 dark:text-gray-400'>
          {career.subPosition.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < career.subPosition.split('\n').length - 1 && <br />}
            </span>
          ))}
        </span>
      </td>
      <td className='py-3 px-2'>
        <Link
          prefetch={true}
          href={career.companyUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 dark:text-blue-400 hover:underline'
        >
          {career.company}
        </Link>
      </td>
      <td className='py-3 px-2 text-gray-700 dark:text-gray-300'>{career.duration}</td>
      <td className='py-3 px-2 text-gray-700 dark:text-gray-300'>{career.employmentType}</td>
    </tr>
  );
}

// Career Card Component
function CareerCard({ career }: { career: typeof careerData[0] }) {
  const t = useTranslations('About');

  return (
    <div className='border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors'>
      <div className='space-y-3'>
        <div>
          <h4 className='font-semibold text-gray-900 dark:text-gray-100'>{career.position}</h4>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            {career.subPosition.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < career.subPosition.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className='text-sm font-medium text-gray-700 dark:text-gray-300'>{t('company')}</p>
          <Link
            prefetch={true}
            href={career.companyUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 dark:text-blue-400 hover:underline'
          >
            {career.company}
          </Link>
        </div>
        <div className='flex justify-between items-start gap-4'>
          <div>
            <p className='text-sm font-medium text-gray-700 dark:text-gray-300'>{t('duration')}</p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>{career.duration}</p>
          </div>
          <div>
            <p className='text-sm font-medium text-gray-700 dark:text-gray-300'>{t('employmentType')}</p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>{career.employmentType}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Document Link Component
interface DocumentLinkProps {
  href: string;
  title: string;
  description: string;
  colorClass: string;
}

function DocumentLink({ href, title, description, colorClass }: DocumentLinkProps) {
  const baseColorClasses = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
      icon: 'text-blue-600 dark:text-blue-400',
      title: 'text-blue-900 dark:text-blue-100',
      desc: 'text-blue-700 dark:text-blue-300'
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      hover: 'hover:bg-green-100 dark:hover:bg-green-900/30',
      icon: 'text-green-600 dark:text-green-400',
      title: 'text-green-900 dark:text-green-100',
      desc: 'text-green-700 dark:text-green-300'
    }
  };

  const colors = baseColorClasses[colorClass as keyof typeof baseColorClasses];

  return (
    <Link
      prefetch={true}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`flex items-center justify-between p-4 ${colors.bg} rounded-lg ${colors.hover} transition-colors`}
    >
      <div className='flex items-center gap-3'>
        <FileText className={`h-6 w-6 ${colors.icon}`} />
        <div>
          <h4 className={`font-semibold ${colors.title}`}>{title}</h4>
          <p className={`text-sm ${colors.desc}`}>{description}</p>
        </div>
      </div>
      <ExternalLink className={`h-5 w-5 ${colors.icon}`} />
    </Link>
  );
}

// Award Item Component
interface AwardItemProps {
  title: string;
  description: string;
  colorClass: string;
}

function AwardItem({ title, description, colorClass }: AwardItemProps) {
  const baseColorClasses = {
    yellow: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      icon: 'text-yellow-600 dark:text-yellow-400'
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      icon: 'text-orange-600 dark:text-orange-400'
    }
  };

  const colors = baseColorClasses[colorClass as keyof typeof baseColorClasses];

  return (
    <div className={`flex items-start gap-4 p-4 ${colors.bg} rounded-lg`}>
      <Trophy className={`h-6 w-6 ${colors.icon} mt-1`} />
      <div>
        <h4 className='font-semibold text-gray-900 dark:text-gray-100'>{title}</h4>
        <p className='text-sm text-gray-600 dark:text-gray-400'>{description}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const t = useTranslations('About');
  return (
    <>
      <div className='flex flex-1 flex-col gap-6 p-6'>
        <div className='max-w-4xl mx-auto space-y-8'>
          {/* Profile Header */}
          <section className='text-center space-y-4'>
            <div className='w-32 h-32 mx-auto rounded-full'>
              <Image src='/profile.webp' alt='Takumi Mizuno' width={128} height={128} className='rounded-full' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>{t('name')}</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300'>{t('job')}</p>
            </div>
          </section>

          {/* Introduction */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <SectionHeader icon={User} title={t('profile')} />
            <div className='prose dark:prose-invert'>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                {t('description1')}
              </p>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed mt-4'>
                {t('description2')}
              </p>
            </div>
          </section>

          {/* Career Path */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <div className='mb-6'>
              <SectionHeader icon={Building2} title={t('jobSummary')} />
            </div>

            {/* Desktop Table */}
            <div className='hidden md:block overflow-x-auto'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='border-b border-gray-200 dark:border-gray-700'>
                    <th className='text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100'>{t('position')}</th>
                    <th className='text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100'>{t('company')}</th>
                    <th className='text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100'>{t('duration')}</th>
                    <th className='text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100'>{t('employmentType')}</th>
                  </tr>
                </thead>
                <tbody>
                  {careerData.map((career, index) => (
                    <CareerTableRow
                      key={index}
                      career={career}
                      isLast={index === careerData.length - 1}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className='md:hidden space-y-4'>
              {careerData.map((career, index) => (
                <CareerCard key={index} career={career} />
              ))}
            </div>
          </section>

          {/* Expertise */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <SectionHeader icon={Users} title={t('expertise')} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                <h4 className='font-semibold text-blue-900 dark:text-blue-100'>{t('clientCommunication')}</h4>
                <p className='text-sm text-blue-700 dark:text-blue-300'>{t('clientCommDesc')}</p>
              </div>
              <div className='p-4 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                <h4 className='font-semibold text-green-900 dark:text-green-100'>{t('requirementsDefinition')}</h4>
                <p className='text-sm text-green-700 dark:text-green-300'>{t('reqDefDesc')}</p>
              </div>
              <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
                <h4 className='font-semibold text-purple-900 dark:text-purple-100'>{t('applicationDesign')}</h4>
                <p className='text-sm text-purple-700 dark:text-purple-300'>{t('appDesignDesc')}</p>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <SectionHeader icon={FileText} title={t('documents')} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <DocumentLink
                href='https://storage.googleapis.com/takumi-mizuno/resume.pdf'
                title={t('resume')}
                description={t('viewPdf')}
                colorClass='blue'
              />
              <DocumentLink
                href='https://storage.googleapis.com/takumi-mizuno/job-history.pdf'
                title={t('jobHistory')}
                description={t('viewPdf')}
                colorClass='green'
              />
            </div>
          </section>

          {/* Awards */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <SectionHeader icon={Award} title={t('awards')} />
            <div className='space-y-4'>
              <AwardItem
                title='Google Cloud Partner Top Engineer 2025'
                description={t('individualAward')}
                colorClass='yellow'
              />
              <AwardItem
                title='Good Design Award 2024'
                description={t('productDesign')}
                colorClass='orange'
              />
            </div>
          </section>
        </div>
      </div>

      <PageNavigation currentPath="/about" />
    </>
  );
}