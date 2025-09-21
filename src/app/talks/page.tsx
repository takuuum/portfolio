import { SidebarTrigger } from '@/components/ui/sidebar';
import { MicVocal, Calendar, Users, ExternalLink, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

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
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border transition-all hover:shadow-lg'>
      <div className='flex items-start gap-4'>
        <MicVocal className='h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0' />
        <div className='flex-1'>
          <div className='flex items-start justify-between mb-3'>
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
                    <span>{month} {year}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <MapPin className='h-4 w-4' />
                    <span>{venue}</span>
                  </div>
                  {attendees && (
                    <div className='flex items-center gap-1'>
                      <Users className='h-4 w-4' />
                      <span>{attendees.toLocaleString()} attendees</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Link
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm flex-shrink-0'
            >
              View Talk
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
  return (
    <>
      <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
        <SidebarTrigger className='-ml-1' />
        <h1 className='text-lg font-semibold'>Event Talks</h1>
      </header>
      <div className='flex flex-1 flex-col gap-6 p-6'>
        <div className='max-w-4xl mx-auto space-y-8'>
          
          {/* Header Section */}
          <section className='text-center space-y-4'>
            <div className='flex justify-center'>
              <MicVocal className='h-16 w-16 text-blue-600' />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>Event Talks</h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 mt-2'>
                Speaking engagements at technical conferences and events
              </p>
              <div className='mt-4 inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg'>
                <Users className='h-5 w-5 text-blue-600 dark:text-blue-400' />
                <span className='text-blue-800 dark:text-blue-200 font-semibold'>
                  12 talks • 3,342 total attendees
                </span>
              </div>
            </div>
          </section>

          {/* Featured Talks */}
          <section>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2'>
              <MicVocal className='h-6 w-6 text-blue-600' />
              Featured Talks
            </h3>
            <div className='space-y-6'>
              <TalkCard
                title="Why Domain-Driven Design (DDD)? - Necessity and Applicability in Modern Software Development"
                event="Developers Summit 2023 Summer"
                year="2023"
                month="July"
                description="An in-depth exploration of Domain-Driven Design (DDD) and its critical importance in modern software development. This talk covered the necessity and applicability of DDD principles, discussing how they address complex business requirements and improve software maintainability. Presented real-world examples and practical implementation strategies for teams looking to adopt DDD."
                link="https://codezine.jp/devonline/archive/session/157"
                attendees={2000}
                venue="Tokyo"
              />
              
              <TalkCard
                title="Start CI/CD Casually with DORA Metrics - What You Can Do Right Now!"
                event="DevOpsDays Tokyo 2024"
                year="2024"
                month="April"
                description="A practical guide to implementing CI/CD using DORA metrics as a foundation. This presentation demonstrated how teams can start their DevOps journey with measurable outcomes using the four key DORA metrics: deployment frequency, lead time, change failure rate, and recovery time. Included hands-on examples and tooling recommendations for immediate implementation."
                link="https://confengine.com/conferences/devopsdays-tokyo-2024/proposal/19720/dora-metrics-cicd"
                attendees={500}
                venue="Tokyo"
              />
              
              <TalkCard
                title="Is Cloud Native Really Necessary? Migration Patterns and Success Points"
                event="CloudNative Days Summer 2024"
                year="2024"
                month="July"
                description="A critical examination of cloud-native transformation initiatives, questioning when and why organizations should pursue cloud-native architectures. Presented various migration patterns, success factors, and common pitfalls. Shared insights from real transformation projects and provided a framework for decision-making around cloud-native adoption."
                link="https://event.cloudnativedays.jp/cnds2024/talks/2261"
                attendees={800}
                venue="Tokyo"
              />
              
              <TalkCard
                title="OpenTelemetry for Go Complete Guide - Can You Instrument Tracing as Naturally as Breathing?"
                event="Cloud Operator Days Tokyo 2024"
                year="2024"
                month="July"
                description="A comprehensive guide to OpenTelemetry instrumentation in Go applications. This technical deep-dive covered best practices for implementing distributed tracing, metrics, and logging using OpenTelemetry. Demonstrated how to make observability instrumentation as natural as breathing for Go developers, with practical code examples and performance considerations."
                link="https://event2024.cloudopsdays.com/2024/07/06/12/"
                attendees={42}
                venue="Tokyo"
              />
            </div>
          </section>

          {/* Speaking Experience */}
          <section className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2'>
              <Users className='h-5 w-5 text-blue-600' />
              Speaking Experience
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>12</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>Total Talks</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>3,342</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>Total Attendees</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2'>4+</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>Major Conferences</div>
              </div>
            </div>
            
            <div className='mt-6 space-y-4'>
              <h4 className='font-semibold text-gray-900 dark:text-gray-100'>Topics Covered</h4>
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
    </>
  );
}