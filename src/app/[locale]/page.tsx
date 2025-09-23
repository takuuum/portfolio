import Image from 'next/image';
import { User, Code, FileText, Award, MicVocal, Trophy, Calendar, TrendingUp, Cpu, ExternalLink } from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  description,
  href,
  color = 'blue'
}: {
  title: string;
  value: string | number;
  icon: any;
  description: string;
  href?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow';
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400',
    yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400'
  };

  const CardContent = () => (
    <div className={`rounded-lg p-6 border transition-all hover:shadow-lg ${colorClasses[color]}`}>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>{title}</p>
          <p className='text-2xl font-bold text-gray-900 dark:text-gray-100'>{value}</p>
          <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>{description}</p>
        </div>
        <Icon className='h-8 w-8' />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link prefetch={true} href={href} className='block'>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

const QuickActionCard = ({
  title,
  description,
  href,
  icon: Icon,
  external = false
}: {
  title: string;
  description: string;
  href: string;
  icon: any;
  external?: boolean;
}) => (
  <Link prefetch={true}
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className='block'
  >
    <div className='bg-white dark:bg-gray-800 rounded-lg p-4 border hover:shadow-lg transition-all'>
      <div className='flex items-center gap-3'>
        <Icon className='h-5 w-5 text-blue-600 dark:text-blue-400' />
        <div className='flex-1'>
          <h3 className='font-semibold text-gray-900 dark:text-gray-100'>{title}</h3>
          <p className='text-sm text-gray-600 dark:text-gray-300'>{description}</p>
        </div>
        {external && <ExternalLink className='h-4 w-4 text-gray-400' />}
      </div>
    </div>
  </Link>
);

export default function HomePage() {
  const t = useTranslations('Dashboard');
  return (
    <>
      <div className='flex flex-1 flex-col gap-6 p-6'>
        <div className='max-w-6xl mx-auto space-y-8'>

          {/* Welcome Section */}
          <section className='text-center space-y-4'>
            <div className='w-24 h-24 mx-auto rounded-full'>
              <Image src='/profile.webp' alt='Takumi Mizuno' width={96} height={96} className='rounded-full' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>{t('welcome')}</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 mt-2'>
                {t('description')}
              </p>
            </div>
          </section>

          {/* Key Metrics */}
          <section>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('keyMetrics')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <DashboardCard
                title={t('experience')}
                value="4+"
                icon={Calendar}
                description={t('experienceDesc')}
                href="/skills"
                color="blue"
              />
              <DashboardCard
                title={t('projects')}
                value="10+"
                icon={Code}
                description={t('projectsDesc')}
                href="/projects"
                color="green"
              />
              <DashboardCard
                title={t('articles')}
                value="8"
                icon={FileText}
                description={t('articlesDesc')}
                href="/articles"
                color="purple"
              />
              <DashboardCard
                title={t('talks')}
                value="12"
                icon={MicVocal}
                description={t('talksDesc')}
                href="/talks"
                color="orange"
              />
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('recentAchievements')}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <DashboardCard
                title={t('2025')}
                value={t('googleCloudPartner')}
                icon={Trophy}
                description={t('individualAward')}
                href="/awards"
                color="yellow"
              />
              <DashboardCard
                title={t('2024')}
                value={t('goodDesignAward')}
                icon={Award}
                description={t('productDesign')}
                href="/awards"
                color="red"
              />
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('quickActions')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <QuickActionCard
                title={t('aboutMe')}
                description={t('aboutMeDesc')}
                href="/about"
                icon={User}
              />
              <QuickActionCard
                title={t('technicalSkills')}
                description={t('technicalSkillsDesc')}
                href="/skills"
                icon={Cpu}
              />
              <QuickActionCard
                title={t('viewResume')}
                description={t('viewResumeDesc')}
                href="https://storage.googleapis.com/takumi-mizuno/resume.pdf"
                icon={FileText}
                external
              />
            </div>
          </section>
        </div>
      </div>

      {/* AI Chat Bot */}
      {/* <ChatBot /> */}
    </>
  );
}