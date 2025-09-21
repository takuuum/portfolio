import { SidebarTrigger } from '@/components/ui/sidebar';
import { Trophy, Award, ExternalLink, Calendar, Building2, FileText, GraduationCap, Cloud, Code } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const AwardCard = ({
  title,
  year,
  organization,
  description,
  link,
  color = 'yellow'
}: {
  title: string;
  year: string;
  organization: string;
  description: string;
  link: string;
  color?: 'yellow' | 'orange' | 'blue';
}) => {
  const t = useTranslations('Awards');
  const colorClasses = {
    yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  };

  const iconColors = {
    yellow: 'text-yellow-600 dark:text-yellow-400',
    orange: 'text-orange-600 dark:text-orange-400',
    blue: 'text-blue-600 dark:text-blue-400'
  };

  return (
    <div className={`rounded-lg p-6 border-2 ${colorClasses[color]} transition-all hover:shadow-lg`}>
      <div className='flex items-start gap-4'>
        <Trophy className={`h-8 w-8 ${iconColors[color]} mt-1 flex-shrink-0`} />
        <div className='flex-1'>
          <div className='flex items-start justify-between mb-3'>
            <div>
              <h3 className='text-xl font-bold text-gray-900 dark:text-gray-100 mb-1'>
                {title}
              </h3>
              <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <span>{year}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Building2 className='h-4 w-4' />
                  <span>{organization}</span>
                </div>
              </div>
            </div>
            <Link
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm'
            >
              {t('viewAward')}
              <ExternalLink className='h-4 w-4' />
            </Link>
          </div>
          <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const CertificationCard = ({
  title,
  issuer,
  icon: Icon,
  color = 'blue'
}: {
  title: string;
  issuer: string;
  icon: React.ElementType;
  color?: 'blue' | 'green' | 'purple' | 'red';
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400'
  };

  return (
    <div className={`rounded-lg p-4 border ${colorClasses[color]} transition-all hover:shadow-md`}>
      <div className='flex items-center gap-3'>
        <Icon className={`h-6 w-6 ${colorClasses[color].split(' ').slice(-2).join(' ')} flex-shrink-0`} />
        <div>
          <h4 className='font-semibold text-gray-900 dark:text-gray-100 text-sm'>
            {title}
          </h4>
          <p className='text-xs text-gray-600 dark:text-gray-400'>
            {issuer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function AwardsPage() {
  const t = useTranslations('Awards');
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
              <Award className='h-16 w-16 text-yellow-500' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>{t('awardsAndCertifications')}</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 mt-2'>
                {t('recognitionForExcellence')}
              </p>
            </div>
          </section>

          {/* Awards List */}
          <section>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2'>
              <Trophy className='h-6 w-6 text-yellow-600' />
              {t('awards')}
            </h3>
            <div className='space-y-6'>
              <AwardCard
                title="Google Cloud Partner Top Engineer 2025"
                year="2025"
                organization="Google Cloud"
                description="Individual recognition as one of the top engineers among Google Cloud partners. This award recognizes exceptional technical expertise, innovation, and contribution to the Google Cloud ecosystem. Selected based on technical skills, customer impact, and community involvement."
                link="https://cloud.google.com/blog/ja/topics/partners/2025-google-cloud-partner-top-engineer-award-program"
                color="blue"
              />

              <AwardCard
                title="Good Design Award 2024"
                year="2024"
                organization="Japan Institute of Design Promotion"
                description="Awarded for a service where I served as both Product Manager and Engineer. The Good Design Award recognizes outstanding design that contributes to the betterment of society through design excellence, innovation, and user experience. This award acknowledges the comprehensive approach to product development from both technical and management perspectives."
                link="https://www.g-mark.org/gallery/winners/21878"
                color="orange"
              />

              <AwardCard
                title="Zenn記事投稿キャンペーン「Google Cloud」特別賞"
                year="2024"
                organization="Zenn（クラスメソッド株式会社）"
                description="Zenn初の記事投稿キャンペーン「Google Cloud」にて特別賞（ユニークな取り組みの記事）を受賞。OpenTelemetry+Go 計装サンプル大全 with Cloud Trace ~意外なつまづきポイントを添えて~ で、オライリーの書籍「オブザーバビリティ・エンジニアリング」でも紹介されているOpenTelemetryを、Go言語とGoogle Cloudを例に実践的に導入する記事として評価されました。読者がOpenTelemetryを取り入れるきっかけとなる記事として特別賞に選出されました。"
                link="https://zenn.dev/contests/gc24?tab=overview"
                color="blue"
              />
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2'>
              <FileText className='h-6 w-6 text-blue-600' />
              {t('certifications')}
            </h3>

            {/* Technical Certifications */}
            <div className='mb-6'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('technicalCertifications')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <CertificationCard
                  title="Google Certified Professional Cloud Architect"
                  issuer="Google Cloud"
                  icon={Cloud}
                  color="blue"
                />
                <CertificationCard
                  title="Google Certified Professional Cloud Developer"
                  issuer="Google Cloud"
                  icon={Code}
                  color="blue"
                />
                <CertificationCard
                  title="Google Certified Professional Data Engineer"
                  issuer="Google Cloud"
                  icon={Cloud}
                  color="blue"
                />
                <CertificationCard
                  title="Certified Kubernetes Application Developer"
                  issuer="Cloud Native Computing Foundation"
                  icon={Code}
                  color="purple"
                />
                <CertificationCard
                  title="基本情報技術者試験合格"
                  issuer="情報処理推進機構 (IPA)"
                  icon={FileText}
                  color="green"
                />
              </div>
            </div>

            {/* Other Certifications */}
            <div>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('otherCertifications')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <CertificationCard
                  title="小学校教諭免許"
                  issuer="文部科学省"
                  icon={GraduationCap}
                  color="red"
                />
                <CertificationCard
                  title="特別支援学校教諭免許"
                  issuer="文部科学省"
                  icon={GraduationCap}
                  color="red"
                />
                <CertificationCard
                  title="社会教育士"
                  issuer="文部科学省"
                  icon={GraduationCap}
                  color="red"
                />
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2'>
              <Trophy className='h-5 w-5 text-yellow-600' />
              {t('awardSignificance')}
            </h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>Google Cloud Partner Top Engineer 2025</h4>
                <p className='text-gray-700 dark:text-gray-300 text-sm'>
                  This prestigious recognition highlights technical leadership in the Google Cloud ecosystem,
                  demonstrating expertise in cloud architecture, implementation, and customer success.
                  The award emphasizes not only technical skills but also the ability to drive innovation
                  and deliver value to clients through Google Cloud technologies.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>Good Design Award 2024</h4>
                <p className='text-gray-700 dark:text-gray-300 text-sm'>
                  The Good Design Award is one of Japan's most prestigious design awards,
                  recognizing products and services that contribute to society through excellent design.
                  This award acknowledges the holistic approach to product development,
                  combining technical engineering excellence with product management vision.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>Zenn記事投稿キャンペーン「Google Cloud」特別賞</h4>
                <p className='text-gray-700 dark:text-gray-300 text-sm'>
                  Zenn初の記事投稿キャンペーンにおいて設けられた3つの賞のうちの1つ。
                  Google Cloudをテーマとした記事投稿キャンペーンで、投稿記事58本の中から
                  厳正な審査により選出される希少性の高い賞です。
                  技術記事を通じたエンジニアコミュニティへの貢献が評価されました。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}