import { SidebarTrigger } from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, ExternalLink, Award, Calendar, Code, Heart } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const ArticleCard = ({
  title,
  platform,
  url,
  description,
  award,
  type = 'tech'
}: {
  title: string;
  platform: string;
  url: string;
  description: string;
  award?: string;
  type?: 'tech' | 'other';
}) => {
  const t = useTranslations('Articles');
  const typeColors = {
    tech: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    other: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  };

  const platformColors: { [key: string]: string } = {
    'Zenn': 'text-blue-600 dark:text-blue-400',
    'Qiita': 'text-green-600 dark:text-green-400',
    'note': 'text-purple-600 dark:text-purple-400'
  };

  return (
    <div className={`rounded-lg p-6 border ${typeColors[type]} transition-all hover:shadow-lg`}>
      <div className='flex items-start gap-4'>
        <FileText className='h-6 w-6 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0' />
        <div className='flex-1'>
          <div className='flex items-start justify-between mb-3'>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight'>
                {title}
              </h3>
              <div className='flex items-center gap-2 mb-2'>
                <span className={`text-sm font-semibold ${platformColors[platform] || 'text-gray-600 dark:text-gray-400'}`}>
                  {platform}
                </span>
                {award && (
                  <div className='flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-xs'>
                    <Award className='h-3 w-3' />
                    <span>{award}</span>
                  </div>
                )}
              </div>
            </div>
            <Link
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm flex-shrink-0'
            >
              {t('readArticle')}
              <ExternalLink className='h-4 w-4' />
            </Link>
          </div>
          <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-sm'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function ArticlesPage() {
  const t = useTranslations('Articles');
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
              <FileText className='h-16 w-16 text-blue-600' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>{t('title')}</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 mt-2'>
                {t('subtitle')}
              </p>
            </div>
          </section>

          {/* Articles Tabs */}
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="technical" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                {t('technicalArticles')}
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                {t('notTechnicalArticles')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="mt-6">
              <div className='space-y-6'>
                <ArticleCard
                  title="Which Layer Should Implement Transactions?"
                  platform="Zenn"
                  url="https://zenn.dev/cloud_ace/articles/transaction-architecture"
                  description="An architectural deep-dive into transaction implementation patterns across different layers of application architecture. Explores the trade-offs between implementing transactions at the service layer, repository layer, or use case layer, with practical examples and best practices for maintaining data consistency in complex applications."
                  type="tech"
                />

                <ArticleCard
                  title="OpenTelemetry+Go Instrumentation Sample Collection with Cloud Trace"
                  platform="Zenn"
                  url="https://zenn.dev/cloud_ace/articles/opentelemetry-go"
                  description="A comprehensive guide to OpenTelemetry instrumentation in Go applications with Google Cloud Trace integration. Covers common pitfalls, best practices, and practical implementation patterns. Includes real-world examples and troubleshooting tips for distributed tracing in production environments."
                  award="Zenn Special Award"
                  type="tech"
                />

                <ArticleCard
                  title="Zero Running Cost Web Application Technical Architecture"
                  platform="Zenn"
                  url="https://zenn.dev/cloud_ace/articles/free-web-architecture"
                  description="Detailed technical architecture for building and deploying web applications with zero ongoing operational costs. Explores leveraging free tiers of cloud services, serverless architectures, and static site generation to minimize infrastructure expenses while maintaining performance and scalability."
                  type="tech"
                />

                <ArticleCard
                  title="Easy CI/CD Improvement: DORA Metrics × Cloud Deploy Practical Example"
                  platform="Zenn"
                  url="https://zenn.dev/cloud_ace/articles/cicd-clouddeploy"
                  description="Practical implementation guide for improving CI/CD pipelines using DORA metrics and Google Cloud Deploy. Demonstrates how to measure and optimize deployment frequency, lead time, change failure rate, and recovery time with real-world examples and actionable strategies."
                  type="tech"
                />

                <ArticleCard
                  title="How to Permanently Store Cookies That Cannot Be Held for Even 1 Second (ITP2.3 Compatible)"
                  platform="Qiita"
                  url="https://qiita.com/takuuuum/items/ad445844eb131d5e59cb"
                  description="Technical solution for cookie persistence challenges introduced by Safari's Intelligent Tracking Prevention (ITP) 2.3. Provides workarounds and alternative approaches for maintaining user session data in privacy-focused browsing environments."
                  type="tech"
                />
              </div>
            </TabsContent>

            <TabsContent value="personal" className="mt-6">
              <div className='space-y-6'>
                <ArticleCard
                  title="Looking Back on My 2024 Engineering Activities"
                  platform="note"
                  url="https://note.com/mizutaku0705/n/naa875063e177"
                  description="A comprehensive retrospective of professional growth, technical achievements, and learning experiences throughout 2024. Reflects on challenges overcome, skills developed, and lessons learned in the rapidly evolving field of software engineering."
                  type="other"
                />

                <ArticleCard
                  title="Not 'Making Your Passion Your Job' but 'Not Making What You Hate Your Job'"
                  platform="note"
                  url="https://note.com/mizutaku0705/n/nb61178496061"
                  description="A thoughtful perspective on career satisfaction and professional fulfillment. Explores the difference between pursuing passion and avoiding dissatisfaction in career choices, with practical insights on building a sustainable and enjoyable professional path."
                  type="other"
                />

                <ArticleCard
                  title="The Courage to Say You Cannot Do What You Cannot Do"
                  platform="note"
                  url="https://note.com/mizutaku0705/n/nafbca7b3635f"
                  description="An honest reflection on the importance of acknowledging limitations and setting healthy boundaries in professional environments. Discusses the value of transparency, the courage to admit when something is beyond your current capabilities, and how this honesty can lead to better outcomes for both individuals and teams."
                  type="other"
                />
              </div>
            </TabsContent>
          </Tabs>

          {/* Writing Stats */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2'>
              <Calendar className='h-5 w-5 text-blue-600' />
              {t('writingOverview')}
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>5</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>{t('technicalArticlesCount')}</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2'>3</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>{t('notTechnicalArticlesCount')}</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2'>1</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>{t('awardReceived')}</div>
              </div>
            </div>

            <div className='mt-6 space-y-4'>
              <h4 className='font-semibold text-gray-900 dark:text-gray-100'>{t('platforms')}</h4>
              <div className='flex flex-wrap gap-2'>
                <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm'>
                  Zenn
                </span>
                <span className='px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm'>
                  Qiita
                </span>
                <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm'>
                  note
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}