import { MicVocal, Calendar, Users, ExternalLink, MapPin, Clock } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { PageNavigation } from '@/components/page-navigation';

const TalkCard = ({
  title,
  event,
  year,
  month,
  description,
  link,
  attendees,
  venue = "Online"
}: {
  title: string;
  event: string;
  year: string;
  month: string;
  description: string;
  link: string;
  attendees?: number;
  venue?: string;
}) => {
  const t = useTranslations('Talks');
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border transition-all hover:shadow-lg'>
      <div className='flex items-start gap-4'>
        <MicVocal className='h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0' />
        <div className='flex-1'>
          <div className='flex items-start justify-between mb-3 gap-4'>
            <div>
              <h3 className='text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight'>
                {title}
              </h3>
              <div className='space-y-1'>
                <div className='flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold'>
                  <Calendar className='h-4 w-4' />
                  <span>{event}</span>
                </div>
                <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
                  <div className='flex items-center gap-1'>
                    <Clock className='h-4 w-4' />
                    <span className='whitespace-nowrap'>{month} {year}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <MapPin className='h-4 w-4' />
                    <span>{venue}</span>
                  </div>
                  {attendees && (
                    <div className='flex items-center gap-1'>
                      <Users className='h-4 w-4' />
                      <span>{attendees.toLocaleString()}</span>
                      <span className='hidden md:inline'>
                        {t('attendees')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Link prefetch={true}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm flex-shrink-0'
            >
              <span className='hidden md:inline'>{t('viewEvent')}</span>
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

export default function TalksPage() {
  const t = useTranslations('Talks');

  const talks = [
    {
      title: "今すぐできる！ DORA metrics でカジュアルに始める CI/CD",
      event: "DevOpsDays Tokyo 2024",
      year: "2024",
      month: "April",
      description: "DORA metricsを基盤としたCI/CD実装の実践ガイド。この発表では、4つの主要なDORAメトリクス（デプロイ頻度、リードタイム、変更失敗率、復旧時間）を使用して、チームが測定可能な成果でDevOpsの旅を始める方法を実演。即座に実装できるハンズオンの例とツールの推奨事項を含む。",
      link: "https://confengine.com/conferences/devopsdays-tokyo-2024/proposal/19720/dora-metrics-cicd",
      attendees: 500,
      venue: "Tokyo"
    },
    {
      title: "クラウドネイティブ化は本当に必要なのか？ 移行パターンと成功のポイント",
      event: "CloudNative Days Summer 2024",
      year: "2024",
      month: "June",
      description: "クラウドネイティブ変革イニシアティブの批判的検討で、組織がクラウドネイティブアーキテクチャを追求すべきタイミングと理由を問い直す。様々なマイグレーションパターン、成功要因、よくある落とし穴を紹介。実際の変革プロジェクトからの洞察を共有し、クラウドネイティブ採用に関する意思決定のフレームワークを提供。",
      link: "https://event.cloudnativedays.jp/cnds2024/talks/2261",
      attendees: 800,
      venue: "Hokkaido"
    },
    {
      title: "なぜドメイン駆動設計（DDD）なのか？ - モダンソフトウェア開発における必要性と適用性",
      event: "Developers Summit 2023 Summer",
      year: "2023",
      month: "July",
      description: "ドメイン駆動設計（DDD）とモダンソフトウェア開発におけるその重要性の詳細な探求。この講演では、DDD原則の必要性と適用性について取り上げ、複雑なビジネス要件にどのように対処し、ソフトウェアの保守性を向上させるかを議論。DDDの採用を検討するチームに向けて、実世界の例と実践的な実装戦略を紹介。",
      link: "https://codezine.jp/devonline/archive/session/157",
      attendees: 2000,
      venue: "Tokyo"
    },
    {
      title: "OpenTelemetry for Go 計装大全 〜息をするようにトレース計装できていますか？〜",
      event: "Cloud Operator Days Tokyo 2024",
      year: "2024",
      month: "July",
      description: "GoアプリケーションにOpenTelemetry計装を実装するための包括的ガイド。この技術的深掘りでは、OpenTelemetryを使用した分散トレーシング、メトリクス、ログの実装に関するベストプラクティスをカバー。Go開発者が呼吸するように自然に可観測性計装を行えるようにする方法を、実践的なコード例とパフォーマンスの考慮事項とともに実演。",
      link: "https://event2024.cloudopsdays.com/2024/07/06/12/",
      attendees: 42,
      venue: "Tokyo"
    }
  ];

  const speakingStats = [
    { value: "12", color: "text-blue-600 dark:text-blue-400", label: t('totalTalks') },
    { value: "3,342", color: "text-green-600 dark:text-green-400", label: t('totalAttendees') },
    { value: "4+", color: "text-purple-600 dark:text-purple-400", label: t('majorConferences') }
  ];

  return (
    <>
      <div className='flex flex-1 flex-col gap-6 p-6'>
        <div className='max-w-4xl mx-auto space-y-8'>

          {/* Header Section */}
          <section className='text-center space-y-4'>
            <div className='flex justify-center'>
              <MicVocal className='h-16 w-16 text-blue-600' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>{t('eventTalks')}</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 mt-2'>
                {t('speakingEngagements')}
              </p>
              <div className='mt-4 inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg'>
                <Users className='h-5 w-5 text-blue-600 dark:text-blue-400' />
                <span className='text-blue-800 dark:text-blue-200 font-semibold'>
                  12 {t('totalTalksAndAttendees')} 3,342
                </span>
              </div>
            </div>
          </section>

          {/* Featured Talks */}
          <section>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2'>
              <MicVocal className='h-6 w-6 text-blue-600' />
              {t('featuredTalks')}
            </h3>
            <div className='space-y-6'>
              {talks.map((talk, index) => (
                <TalkCard
                  key={index}
                  title={talk.title}
                  event={talk.event}
                  year={talk.year}
                  month={talk.month}
                  description={talk.description}
                  link={talk.link}
                  attendees={talk.attendees}
                  venue={talk.venue}
                />
              ))}
            </div>
          </section>

          {/* Speaking Experience */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2'>
              <Users className='h-5 w-5 text-blue-600' />
              {t('speakingExperience')}
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {speakingStats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className='mt-6 space-y-4'>
              <h4 className='font-semibold text-gray-900 dark:text-gray-100'>{t('topicsCovered')}</h4>
              <div className='flex flex-wrap gap-2'>
                <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm'>
                  Domain-Driven Design
                </span>
                <span className='px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm'>
                  DevOps & CI/CD
                </span>
                <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm'>
                  Cloud Native
                </span>
                <span className='px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm'>
                  Observability
                </span>
                <span className='px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm'>
                  OpenTelemetry
                </span>
                <span className='px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm'>
                  Software Architecture
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <PageNavigation currentPath="/talks" />
    </>
  );
}