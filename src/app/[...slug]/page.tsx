import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug?: string[] }
}

// generateStaticParams is required when using `output: export` for dynamic routes.
export async function generateStaticParams() {
  const publicDir = path.join(process.cwd(), 'public')
  let entries: string[] = []
  try {
    entries = await fs.promises.readdir(publicDir, { withFileTypes: true }).then(list =>
      list
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
    )
  } catch (e) {
    return []
  }

  // map each directory to a params object for the catch-all route
  const params = entries.map((name) => ({ slug: [name] }))
  return params
}

export default async function CatchAllPage({ params }: Props) {
  const slugArr = params?.slug || []
  // if root (no slug) let the index route handle it
  if (slugArr.length === 0) return null

  const slugPath = slugArr.join('/')
  const publicPath = path.join(process.cwd(), 'public', slugPath)

  // check if the folder exists and has an index.html
  try {
    const stat = await fs.promises.stat(publicPath)
    if (!stat.isDirectory()) {
      // if it's a file (e.g., public/foo.html), abort to next
      return notFound()
    }
  } catch (e) {
    return notFound()
  }

  // ensure index.html exists
  const indexPath = path.join(publicPath, 'index.html')
  try {
    const idxStat = await fs.promises.stat(indexPath)
    if (!idxStat.isFile()) return notFound()
  } catch (e) {
    return notFound()
  }

  // Build the iframe src. Use a leading slash so it serves from public.
  const iframeSrc = `/${slugPath}/index.html`

  // Render a minimal page that embeds the static site in an iframe.
  return (
    <div style={{height: '100vh', width: '100vw', margin: 0, padding: 0}}>
      <iframe
        src={iframeSrc}
        title={slugPath}
        style={{border: 0, width: '100%', height: '100%'}}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  )
}
