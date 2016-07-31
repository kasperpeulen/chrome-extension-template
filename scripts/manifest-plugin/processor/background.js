import script from './lib/script'
import html from './lib/html'

export default function(manifest, {buildPath, port}) {
  const {background} = manifest

  // Skip when there is no background property
  if(!background)
    return

  const scripts = []

  // Process background scripts
  if(background.scripts) {
    background.scripts.forEach((scriptPath) => {
      script(scriptPath, buildPath, port)
      scripts.push(scriptPath)
    })
  }

  // Background page
  if(background.page) {
    scripts.push(html(background.page, buildPath, port))
  }

  return {manifest, scripts}
}
