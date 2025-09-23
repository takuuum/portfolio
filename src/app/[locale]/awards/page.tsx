import { Trophy, Award, ExternalLink, Calendar, Building2, FileText, GraduationCap, Cloud, Code } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { PageNavigation } from '@/components/page-navigation';

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
            <Link prefetch={true}
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

  const awards = [
    {
      title: "Google Cloud Partner Top Engineer 2025",
      year: "2025",
      organization: "Google Cloud",
      description: "Google Cloud パートナー企業の中で選出されるトップエンジニアとしての個人表彰。この賞は、卓越した技術的専門知識、革新性、Google Cloud エコシステムへの貢献を認定するものであり、技術スキル、顧客への影響、コミュニティへの参加に基づいて選出される。",
      link: "https://cloud.google.com/blog/ja/topics/partners/2025-google-cloud-partner-top-engineer-award-program",
      color: "blue" as const
    },
    {
      title: "2024年度グッドデザイン賞",
      year: "2024",
      organization: "公益財団法人日本デザイン振興会",
      description: "プロダクトマネージャーとエンジニア両方の役割を担当したサービスでの受賞。グッドデザイン賞は、デザインの優秀性、革新性、ユーザーエクスペリエンスを通じて社会の向上に貢献する優れたデザインを表彰する。サービスのデザイン性と社会性が評価され受賞に至った。",
      link: "https://www.g-mark.org/gallery/winners/21878",
      color: "orange" as const
    },
    {
      title: "Zenn記事投稿キャンペーン「Google Cloud」特別賞",
      year: "2024",
      organization: "Zenn（クラスメソッド株式会社）",
      description: "Zenn初の記事投稿キャンペーン「Google Cloud」にて特別賞（ユニークな取り組みの記事）を受賞。オライリーの書籍「オブザーバビリティ・エンジニアリング」でも紹介されているOpenTelemetryを、Go言語とGoogle Cloudを例に実践的に導入する記事として評価された。",
      link: "https://zenn.dev/contests/gc24?tab=overview",
      color: "blue" as const
    }
  ];

  const technicalCertifications = [
    {
      title: "Google Certified Professional Cloud Developer",
      issuer: "Google Cloud",
      icon: Code,
      color: "blue" as const
    },
    {
      title: "Google Certified Professional Cloud Architect",
      issuer: "Google Cloud",
      icon: Cloud,
      color: "blue" as const
    },
    {
      title: "Google Certified Professional Data Engineer",
      issuer: "Google Cloud",
      icon: Cloud,
      color: "blue" as const
    },
    {
      title: "Certified Kubernetes Application Developer",
      issuer: "Cloud Native Computing Foundation",
      icon: Code,
      color: "purple" as const
    },
    {
      title: "基本情報技術者試験合格",
      issuer: "情報処理推進機構 (IPA)",
      icon: FileText,
      color: "green" as const
    }
  ];

  const otherCertifications = [
    {
      title: "小学校教諭免許",
      issuer: "文部科学省",
      icon: GraduationCap,
      color: "red" as const
    },
    {
      title: "特別支援学校教諭免許",
      issuer: "文部科学省",
      icon: GraduationCap,
      color: "red" as const
    },
    {
      title: "社会教育士",
      issuer: "文部科学省",
      icon: GraduationCap,
      color: "red" as const
    }
  ];

  return (
    <>
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
              {awards.map((award, index) => (
                <AwardCard
                  key={index}
                  title={award.title}
                  year={award.year}
                  organization={award.organization}
                  description={award.description}
                  link={award.link}
                  color={award.color}
                />
              ))}
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
                {technicalCertifications.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    title={cert.title}
                    issuer={cert.issuer}
                    icon={cert.icon}
                    color={cert.color}
                  />
                ))}
              </div>
            </div>

            {/* Other Certifications */}
            <div>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>{t('otherCertifications')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {otherCertifications.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    title={cert.title}
                    issuer={cert.issuer}
                    icon={cert.icon}
                    color={cert.color}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <PageNavigation currentPath="/awards" />
    </>
  );
}