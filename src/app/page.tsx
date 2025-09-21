import Image from 'next/image';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Home, User, Code, FileText, Award, MicVocal, Trophy, Calendar, TrendingUp, Cpu, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ChatBot } from '@/components/chat-bot';

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
      <Link href={href} className='block'>
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
  <Link
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
  return (
    <>
      <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
        <SidebarTrigger className='-ml-1' />
        <h1 className='text-lg font-semibold'>Portfolio Dashboard</h1>
      </header>
      <div className='flex flex-1 flex-col gap-6 p-6'>
        <div className='max-w-6xl mx-auto space-y-8'>

          {/* Welcome Section */}
          <section className='text-center space-y-4'>
            <div className='w-24 h-24 mx-auto rounded-full'>
              <Image src='/profile.webp' alt='Takumi Mizuno' width={96} height={96} className='rounded-full' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>Welcome to My Portfolio</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 mt-2'>
                Web Application Engineer specialized in full-stack development and cloud architecture
              </p>
            </div>
          </section>

          {/* Key Metrics */}
          <section>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>Key Metrics</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <DashboardCard
                title="Experience"
                value="4+"
                icon={Calendar}
                description="Years in software engineering"
                color="blue"
              />
              <DashboardCard
                title="Projects"
                value="10+"
                icon={Code}
                description="Major projects completed"
                href="/projects"
                color="green"
              />
              <DashboardCard
                title="Articles"
                value="8"
                icon={FileText}
                description="Technical articles published"
                href="/articles"
                color="purple"
              />
              <DashboardCard
                title="Talks"
                value="12"
                icon={MicVocal}
                description="Event presentations given"
                href="/talks"
                color="orange"
              />
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>Recent Achievements</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <DashboardCard
                title="Google Cloud Partner"
                value="Top Engineer 2025"
                icon={Trophy}
                description="Individual recognition award"
                href="/awards"
                color="yellow"
              />
              <DashboardCard
                title="Good Design Award"
                value="2024"
                icon={Award}
                description="Product design excellence"
                href="/awards"
                color="red"
              />
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>Quick Actions</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <QuickActionCard
                title="About Me"
                description="Learn about my background and experience"
                href="/about"
                icon={User}
              />
              <QuickActionCard
                title="Technical Skills"
                description="Explore my technical expertise"
                href="/skills"
                icon={Cpu}
              />
              <QuickActionCard
                title="View Resume"
                description="Download my detailed resume"
                href="https://storage.googleapis.com/takumi-mizuno/resume.pdf"
                icon={FileText}
                external
              />
            </div>
          </section>

          {/* Latest Activities */}
          <section>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>Latest Activities</h3>
            <div className='bg-white dark:bg-gray-800 rounded-lg p-6 border'>
              <div className='space-y-4'>
                <div className='flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                  <Award className='h-5 w-5 text-blue-600 dark:text-blue-400' />
                  <div>
                    <p className='font-medium text-gray-900 dark:text-gray-100'>Google Cloud Partner Top Engineer 2025 Award</p>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>Received individual recognition for cloud architecture excellence</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                  <FileText className='h-5 w-5 text-green-600 dark:text-green-400' />
                  <div>
                    <p className='font-medium text-gray-900 dark:text-gray-100'>Published: OpenTelemetry+Go Article</p>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>Technical article about distributed tracing with special recognition</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
                  <TrendingUp className='h-5 w-5 text-purple-600 dark:text-purple-400' />
                  <div>
                    <p className='font-medium text-gray-900 dark:text-gray-100'>Career Transition</p>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>Started new role focusing on AI text editor development</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* AI Chat Bot */}
      {/* <ChatBot /> */}
    </>
  );
}