import { getCachedContributions } from '@/lib/get-cached-contributions'
import HomeContent from './components/home-content'

const GITHUB_USERNAME = 'skrodrigo'

export default async function HomePage() {
  const contributions = await getCachedContributions(GITHUB_USERNAME)

  return <HomeContent contributions={contributions} />
}
