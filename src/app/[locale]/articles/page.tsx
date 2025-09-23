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
              <h3 className='text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 mr-8 leading-tight'>
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
            <Link prefetch={true}
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

  const technicalArticles = [
    {
      title: "どのレイヤー（層）でトランザクションを実装すべきか",
      platform: "Zenn",
      url: "https://zenn.dev/cloud_ace/articles/transaction-architecture",
      description: "アプリケーションアーキテクチャの異なる層におけるトランザクション実装パターンの建築的な深掘り。サービス層、リポジトリ層、ユースケース層でのトランザクション実装のトレードオフを、実践的な例と複雑なアプリケーションでのデータ一貫性を維持するベストプラクティスとともに探求。"
    },
    {
      title: "OpenTelemetry+Go 計装サンプル大全 with Cloud Trace ~意外なつまづきポイントを添えて~",
      platform: "Zenn",
      url: "https://zenn.dev/cloud_ace/articles/opentelemetry-go",
      description: "Google Cloud Trace統合を使ったGoアプリケーションにおけるOpenTelemetry計装の包括的なガイド。よくある落とし穴、ベストプラクティス、実践的な実装パターンをカバー。本番環境での分散トレーシングの実例とトラブルシューティングのヒントを含む。",
      award: "Zenn Special Award"
    },
    {
      title: "「ランニングコストゼロ」で稼働する Web アプリケーションの技術構成",
      platform: "Zenn",
      url: "https://zenn.dev/cloud_ace/articles/free-web-architecture",
      description: "継続的な運用コストをゼロにしたWebアプリケーションの構築とデプロイのための詳細な技術アーキテクチャ。クラウドサービスの無料枠、サーバーレスアーキテクチャ、静的サイト生成を活用して、パフォーマンスとスケーラビリティを維持しながらインフラ費用を最小化する方法を探求。"
    },
    {
      title: "Firebase Auth で作る認証アーキテクチャパターン",
      platform: "Zenn",
      url: "https://zenn.dev/cloud_ace/articles/firebase-auth-guide",
      description: "Firebase AuthenticationのClient SDKとAdmin SDKを適切に使い分けた認証システムの実装パターンを詳細に解説。ログイン、ログアウト、トークン検証、ユーザー管理など、実際のユースケースごとの実装方法とセキュリティ考慮事項を実践的なサンプルコードとともに紹介。"
    },
    {
      title: "CI/CD 手軽改善！DORA metrics × Cloud Deploy 実践例",
      platform: "Zenn",
      url: "https://zenn.dev/cloud_ace/articles/cicd-clouddeploy",
      description: "DORA metricsとGoogle Cloud Deployを使用してCI/CDパイプラインを改善する実践的な実装ガイド。デプロイ頻度、リードタイム、変更失敗率、復旧時間を実際の例と実行可能な戦略で測定・最適化する方法を実演。"
    },
    {
      title: "1秒も保持できないCookieを永久的に保持する方法（ITP2.3対応）",
      platform: "Qiita",
      url: "https://qiita.com/takuuuum/items/ad445844eb131d5e59cb",
      description: "SafariのIntelligent Tracking Prevention（ITP）2.3によって導入されたCookie永続化の課題に対する技術的解決策。プライバシー重視のブラウジング環境でユーザーセッションデータを維持するための回避策と代替アプローチを提供。"
    }
  ];

  const personalArticles = [
    {
      title: "2024年の「エンジニア活動」を振り返る",
      platform: "note",
      url: "https://note.com/mizutaku0705/n/naa875063e177",
      description: "2024年を通じての専門的成長、技術的成果、学習体験の包括的な振り返り。急速に進歩するソフトウェアエンジニアリング分野で克服した課題、身につけたスキル、学んだ教訓について反省。"
    },
    {
      title: "ジャッジしない、カテゴライズしない",
      platform: "note",
      url: "https://note.com/mizutaku0705/n/ne9663e965121",
      description: "性別、ジェンダー、情報のカテゴライズについての深い思索。シンプル化された情報やカテゴライズによって削ぎ落とされるもの、無かったことにされるマイノリティの存在について考察。多角的な情報収集と判断の重要性を探求。"
    },
    {
      title: "「好きなことを仕事にする」ではなく「嫌いなことを仕事にしない」",
      platform: "note",
      url: "https://note.com/mizutaku0705/n/nb61178496061",
      description: "キャリア選択における新しい視点の提案。「好きなことを仕事に」という一般的なアドバイスに対し、「嫌いなことを避ける」というアプローチの方が現実的で持続可能である理由を考察。仕事への満足度を高めるための実践的な思考法について。"
    },
    {
      title: "できないことを「できない」と言う勇気",
      platform: "note",
      url: "https://note.com/mizutaku0705/n/nafbca7b3635f",
      description: "仕事で自分の限界を正直に伝えることの大切さについて。無理をして引き受けるよりも、できないことは「できない」と素直に言う方が、結果的にチーム全体にとってプラスになる理由を実体験を交えて考察。健全な職場環境を作るためのコミュニケーションについて。"
    }
  ];

  const writingStats = [
    { value: "8", color: "text-blue-600 dark:text-blue-400", label: t('technicalArticlesCount') },
    { value: "6", color: "text-purple-600 dark:text-purple-400", label: t('notTechnicalArticlesCount') },
    { value: "1", color: "text-yellow-600 dark:text-yellow-400", label: t('awardReceived') }
  ];

  return (
    <>
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
                {technicalArticles.map((article, index) => (
                  <ArticleCard
                    key={index}
                    title={article.title}
                    platform={article.platform}
                    url={article.url}
                    description={article.description}
                    award={article.award}
                    type="tech"
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="personal" className="mt-6">
              <div className='space-y-6'>
                {personalArticles.map((article, index) => (
                  <ArticleCard
                    key={index}
                    title={article.title}
                    platform={article.platform}
                    url={article.url}
                    description={article.description}
                    type="other"
                  />
                ))}
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
              {writingStats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>{stat.label}</div>
                </div>
              ))}
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