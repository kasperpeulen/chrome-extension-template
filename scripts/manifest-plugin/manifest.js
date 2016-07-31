import fs from 'fs-extra'
import path from 'path'
import processors from './processors'
import * as log from './log'

export default class Manifest {
  constructor(manifest, build, port) {
    this.manifestPath = manifest;
    this.buildPath = build;
    this.port = port
    this.run()
  }

  run() {
    this.prepareBuildDir();
    this.processManifest();
    this.writeManifest();
  }


  prepareBuildDir() {
    // Prepare clear build
    fs.removeSync(this.buildPath)
    fs.mkdirSync(this.buildPath)
  }

  writeManifest() {
    const manifestPath = path.join(this.buildPath, "manifest.json");
    log.pending(`Making 'build/manifest.json'`);
    fs.writeFileSync(manifestPath, JSON.stringify(this.manifest, null, 2), {encoding: 'utf8'})
    log.done()
  }

  loadManifest() {
    return JSON.parse(fs.readFileSync(this.manifestPath, 'utf8'))
  }

  processManifest() {
    this.scripts = [];
    this.manifest = this.loadManifest();

    // Iterate over each processor and process manifest with it
    processors.forEach((processor) => {
      this.applyProcessorResult(
          processor(this.manifest, this)
      )
    });

    return true
  }

  applyProcessorResult({manifest, scripts} = {}) {
    if (manifest)
      this.manifest = manifest;

    if (scripts) {
      scripts.forEach((script) => {
        this.scripts.push(script)
      })
    }
  }
}
