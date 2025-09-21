import { SidebarTrigger } from '@/components/ui/sidebar';
import { Code, Users, Zap, MessageSquare, Star, TrendingUp, Database, Cloud, Cpu, Brain, BarChart3 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const StarRating = ({ level }: { level: number }) => {
  return (
    <div className='flex gap-1'>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= level
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300 dark:text-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

const SkillCard = ({ icon: Icon, title, level, description }: {
  icon: React.ElementType;
  title: string;
  level: number;
  description?: string;
}) => (
  <div className='bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border'>
    <div className='flex items-center gap-3 mb-3'>
      <Icon className='h-5 w-5 text-blue-600 dark:text-blue-400' />
      <h4 className='font-semibold text-gray-900 dark:text-gray-100'>{title}</h4>
    </div>
    <div className='flex items-center justify-between'>
      <StarRating level={level} />
      <span className='text-sm text-gray-500 dark:text-gray-400'>
        {level}/5
      </span>
    </div>
    {description && (
      <p className='text-sm text-gray-600 dark:text-gray-300 mt-2'>{description}</p>
    )}
  </div>
);

export default function SkillsPage() {
  const t = useTranslations('Skills');
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
              <Cpu className='h-16 w-16 text-blue-600' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>{t('title')}</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 mt-2'>
                {t('subtitle')}
              </p>
            </div>
          </section>
          
          {/* Soft Skills */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2'>
              <Users className='h-5 w-5' />
              {t('coreStrengths')}
            </h3>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Leadership */}
              <div className='space-y-4'>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5 text-blue-600' />
                  {t('leadership')}
                </h4>
                <ul className='space-y-2 text-sm text-gray-700 dark:text-gray-300'>
                  <li>" Tech Lead for 30-person project (3 stakeholder companies)</li>
                  <li>" Project Leader for up to 8-person teams (6 projects)</li>
                  <li>" Organized 48 internal study sessions (434 total participants)</li>
                  <li>" Student Vice President of 200-member NPO organization</li>
                </ul>
              </div>
              
              {/* Communication */}
              <div className='space-y-4'>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2'>
                  <MessageSquare className='h-5 w-5 text-green-600' />
                  {t('communication')}
                </h4>
                <ul className='space-y-2 text-sm text-gray-700 dark:text-gray-300'>
                  <li>" Client negotiation experience (7 projects)</li>
                  <li>" Pre-sales activities (4 projects)</li>
                  <li>" Event speaking (12 times, 3,342 total attendees)</li>
                </ul>
              </div>
              
              {/* Learning Speed */}
              <div className='space-y-4'>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2'>
                  <Zap className='h-5 w-5 text-purple-600' />
                  {t('learningSpeed')}
                </h4>
                <ul className='space-y-2 text-sm text-gray-700 dark:text-gray-300'>
                  <li>" Promoted to Senior Specialist (top 25% of ~300 engineers) as youngest member</li>
                  <li>" Mastered DDD in 2 weeks, spoke at 2,000+ attendee event after 2 months</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2'>
              <Code className='h-5 w-5' />
              {t('technicalSkills')}
            </h3>
            
            {/* Frontend */}
            <div className='mb-8'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('frontend')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <SkillCard icon={Code} title="HTML, CSS, TypeScript" level={3} />
                <SkillCard icon={Code} title="React, Next.js" level={3} />
                <SkillCard icon={Code} title="Vue, Nuxt" level={3} />
              </div>
            </div>
            
            {/* Backend */}
            <div className='mb-8'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('backend')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <SkillCard icon={Code} title="Golang" level={5} />
                <SkillCard icon={Code} title="Node.js, NestJS" level={3} />
                <SkillCard 
                  icon={Code} 
                  title="Python" 
                  level={3} 
                  description="Haven't used for 2 years, need to relearn"
                />
              </div>
            </div>
            
            {/* Infrastructure */}
            <div className='mb-8'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('infrastructure')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <SkillCard icon={Cloud} title="Google Cloud" level={4} />
                <SkillCard icon={Database} title="MySQL, PostgreSQL" level={3} />
                <SkillCard icon={Database} title="NoSQL" level={3} />
              </div>
            </div>
            
            {/* DevOps */}
            <div className='mb-8'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('devops')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <SkillCard icon={TrendingUp} title="CI/CD" level={4} />
                <SkillCard icon={TrendingUp} title="Observability" level={3} />
              </div>
            </div>
            
            {/* Architecture */}
            <div className='mb-8'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('architecture')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <SkillCard icon={Cpu} title="DDD" level={5} />
                <SkillCard icon={Cpu} title="Microservices" level={4} />
                <SkillCard icon={Cpu} title="Modular Monolith" level={4} />
              </div>
            </div>
            
            {/* AI */}
            <div className='mb-8'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('ai')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <SkillCard icon={Brain} title="GenAI Application" level={3} />
              </div>
            </div>
          </section>

          {/* Skill Level Legend */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2'>
              <BarChart3 className='h-5 w-5 text-blue-600' />
              {t('skillLevelGuide')}
            </h3>
            <div className='space-y-2 text-sm'>
              <div className='flex items-center gap-3'>
                <StarRating level={5} />
                <span className='text-gray-700 dark:text-gray-300'>{t('level5')}</span>
              </div>
              <div className='flex items-center gap-3'>
                <StarRating level={4} />
                <span className='text-gray-700 dark:text-gray-300'>{t('level4')}</span>
              </div>
              <div className='flex items-center gap-3'>
                <StarRating level={3} />
                <span className='text-gray-700 dark:text-gray-300'>{t('level3')}</span>
              </div>
              <div className='flex items-center gap-3'>
                <StarRating level={2} />
                <span className='text-gray-700 dark:text-gray-300'>{t('level2')}</span>
              </div>
              <div className='flex items-center gap-3'>
                <StarRating level={1} />
                <span className='text-gray-700 dark:text-gray-300'>{t('level1')}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}