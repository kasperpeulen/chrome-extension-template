import html from './lib/html'

const process = function({action: {default_popup} = {}, buildPath, scripts}, port) {
  if(!default_popup) return

  scripts.push(html(default_popup, buildPath, port))

  return true
}

export default function(manifest, {buildPath, port}) {

  const {browser_action, page_action} = manifest

  const scripts = []

  // Browser action
  process({action: browser_action, buildPath, scripts}, port)

  // Page action
  process({action: page_action, buildPath, scripts}, port)

  return {scripts}
}
