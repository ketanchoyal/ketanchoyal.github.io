import { useEffect, useState } from 'react'
import { Project } from '@/types/github'
import { CodingStats } from '@/types/wakatime'
import { getFeaturedProjects } from '@/utils/github'
import { getWakaTimeStats } from '@/utils/wakatime'

interface DataProviderProps {
  children: (data: {
    projects: Project[]
    codingStats: CodingStats | null
    loading: boolean
    error: string | null
  }) => React.ReactNode
}

export default function DataProvider ({ children }: DataProviderProps) {
  const [projects, setProjects] = useState<Project[]>()
  const [codingStats, setCodingStats] = useState<CodingStats | null>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const [freshProjects, freshStats] = await Promise.all([
          getFeaturedProjects(),
          getWakaTimeStats()
        ])
        setProjects(freshProjects)
        setCodingStats(freshStats)
      } catch (err) {
        console.error('Error fetching data:', err)
        setError('Failed to load latest data. Using cached data.')
      } finally {
        setLoading(false)
      }
    }

    // Only fetch if we don't have initial data
    if (!projects || !codingStats) {
      fetchData()
    }
  }, [projects, codingStats])

  return children({
    projects: projects || [],
    codingStats: codingStats || null,
    loading,
    error
  })
}
