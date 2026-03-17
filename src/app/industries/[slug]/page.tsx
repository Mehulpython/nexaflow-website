import { Zap, ArrowLeft, CheckCircle, Phone, ArrowRight, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getIndustryById, industries } from '@/data/industries'
import IndustryClient from './IndustryClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const industry = getIndustryById(slug)
  
  if (!industry) {
    return { title: 'Industry Not Found | NexaFlow AI' }
  }
  
  return {
    title: `${industry.name} | NexaFlow AI - AI Solutions`,
    description: industry.shortDescription,
  }
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params
  const industry = getIndustryById(slug)

  if (!industry) {
    notFound()
  }

  // Get related industries (same category, excluding current)
  const relatedIndustries = industries
    .filter(i => i.category === industry.category && i.id !== industry.id)
    .slice(0, 3)

  return <IndustryClient industry={industry} relatedIndustries={relatedIndustries} />
}
