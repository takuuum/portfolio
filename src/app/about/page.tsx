import { SidebarTrigger } from '@/components/ui/sidebar';
import { User, Award, Building2, Users, Trophy, FileText, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
        <SidebarTrigger className='-ml-1' />
        <h1 className='text-lg font-semibold'>About Me</h1>
      </header>
      <div className='flex flex-1 flex-col gap-6 p-6'>
        <div className='max-w-4xl mx-auto space-y-8'>
          {/* Profile Header */}
          <section className='text-center space-y-4'>
            <div className='w-32 h-32 mx-auto rounded-full'>
              <Image src='/profile.webp' alt='Takumi Mizuno' width={128} height={128} className='rounded-full' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>Takumi Mizuno</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300'>Web Application Engineer</p>
            </div>
          </section>

          {/* Introduction */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
              <User className='h-5 w-5' />
              Profile
            </h3>
            <div className='prose dark:prose-invert'>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                Web Application Engineer with experience in backend development and SRE at SI companies and Toyota Motor Corporation. Currently working on frontend development for AI text editors at a startup company.
              </p>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed mt-4'>
                Responsible for a wide range of development processes including client negotiation, requirements definition, design, implementation, and testing. Specialized in client communication, requirements definition, and application architecture (DDD, Microservices, etc.).
              </p>
            </div>
          </section>

          {/* Career Path */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold mb-6 flex items-center gap-2'>
              <Building2 className='h-5 w-5' />
              Job Summary
            </h3>
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='border-b border-gray-200 dark:border-gray-700'>
                    <th className='text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100'>Position</th>
                    <th className='text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100'>Company</th>
                    <th className='text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100'>Duration</th>
                    <th className='text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100'>Employment Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'>
                    <td className='py-3 px-2 text-gray-900 dark:text-gray-100'>Application Architect / Developer<br />
                      <span className='text-sm text-gray-600 dark:text-gray-400'>Product Manager</span>
                    </td>
                    <td className='py-3 px-2'>
                      <Link
                        href='https://studioeurygraph.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 dark:text-blue-400 hover:underline'
                      >
                        STUDIO EURYGRAPH
                      </Link>
                    </td>
                    <td className='py-3 px-2 text-gray-700 dark:text-gray-300'>2022/3 - Present</td>
                    <td className='py-3 px-2 text-gray-700 dark:text-gray-300'>Outsourcing (full-time from 2025/4)</td>
                  </tr>
                  <tr className='border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'>
                  <td className='py-3 px-2 text-gray-900 dark:text-gray-100'>
                      Application Architect / Developer<br />
                      <span className='text-sm text-gray-600 dark:text-gray-400'>Cloud Architect / Developer</span>
                    </td>
                    <td className='py-3 px-2'>
                      <Link
                        href='https://global.toyota'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 dark:text-blue-400 hover:underline'
                      >
                        Toyota Motor Corporation
                      </Link>
                    </td>
                    <td className='py-3 px-2 text-gray-700 dark:text-gray-300'>2022/9 - 2023/2</td>
                    <td className='py-3 px-2 text-gray-700 dark:text-gray-300'>Permanent (full-time, 在籍出向)</td>
                  </tr>
                  <tr className='hover:bg-gray-50 dark:hover:bg-gray-700/50'>
                    <td className='py-3 px-2 text-gray-900 dark:text-gray-100'>
                      Application Architect / Developer<br />
                      <span className='text-sm text-gray-600 dark:text-gray-400'>Cloud Architect / Developer<br />Tech Lead / Project Leader</span>
                    </td>
                    <td className='py-3 px-2'>
                      <Link
                        href='https://cloud-ace.jp'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 dark:text-blue-400 hover:underline'
                      >
                        Cloud Ace
                      </Link>
                    </td>
                    <td className='py-3 px-2 text-gray-700 dark:text-gray-300'>2021/4 - 2025/3</td>
                    <td className='py-3 px-2 text-gray-700 dark:text-gray-300'>Permanent (full-time)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Expertise */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
              <Users className='h-5 w-5' />
              Expertise
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                <h4 className='font-semibold text-blue-900 dark:text-blue-100'>Client Communication</h4>
                <p className='text-sm text-blue-700 dark:text-blue-300'>Smooth communication with clients</p>
              </div>
              <div className='p-4 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                <h4 className='font-semibold text-green-900 dark:text-green-100'>Requirements Definition</h4>
                <p className='text-sm text-green-700 dark:text-green-300'>Converting business requirements to technical specifications</p>
              </div>
              <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
                <h4 className='font-semibold text-purple-900 dark:text-purple-100'>Application Design</h4>
                <p className='text-sm text-purple-700 dark:text-purple-300'>Architecture design including DDD, Microservices</p>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
              <FileText className='h-5 w-5' />
              Documents
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Link
                href='https://storage.googleapis.com/takumi-mizuno/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors'
              >
                <div className='flex items-center gap-3'>
                  <FileText className='h-6 w-6 text-blue-600 dark:text-blue-400' />
                  <div>
                    <h4 className='font-semibold text-blue-900 dark:text-blue-100'>Resume</h4>
                    <p className='text-sm text-blue-700 dark:text-blue-300'>View PDF</p>
                  </div>
                </div>
                <ExternalLink className='h-5 w-5 text-blue-600 dark:text-blue-400' />
              </Link>
              <Link
                href='https://storage.googleapis.com/takumi-mizuno/job-history.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors'
              >
                <div className='flex items-center gap-3'>
                  <FileText className='h-6 w-6 text-green-600 dark:text-green-400' />
                  <div>
                    <h4 className='font-semibold text-green-900 dark:text-green-100'>Job History</h4>
                    <p className='text-sm text-green-700 dark:text-green-300'>View PDF</p>
                  </div>
                </div>
                <ExternalLink className='h-5 w-5 text-green-600 dark:text-green-400' />
              </Link>
            </div>
          </section>

          {/* Awards */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
              <Award className='h-5 w-5' />
              Awards
            </h3>
            <div className='space-y-4'>
              <div className='flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>
                <Trophy className='h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-gray-100'>Google Cloud Partner Top Engineer 2025</h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>Individual Award</p>
                </div>
              </div>
              <div className='flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg'>
                <Trophy className='h-6 w-6 text-orange-600 dark:text-orange-400 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-gray-100'>Good Design Award 2024</h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>Awarded for service where I served as both Product Manager and Engineer</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}