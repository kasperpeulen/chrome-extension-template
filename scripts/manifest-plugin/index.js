import SingleEntryPlugin from "webpack/lib/SingleEntryPlugin"
import MultiEntryPlugin from "webpack/lib/MultiEntryPlugin"
import * as Remove from '../utils/remove'
import Manifest from "./manifest";

export default class ManifestPlugin {
  constructor(manifestPath, buildPath, port) {
    this.port = port;
    this.Manifest = new Manifest(manifestPath, buildPath, port);
    this.isDevelopment = process.env.NODE_ENV != "production"
  }

  apply(compiler) {
    this.Manifest.scripts.forEach((script) => {
      // name
      const name = Remove.extension(script)

      // item
      let item
      if(this.isDevelopment) {
        item = [
          `webpack-dev-server/client?https://localhost:${this.port}`,
          'webpack/hot/only-dev-server',
          script
        ]
      } else {
        item = script
      }

      const entryClass = this.itemToPlugin(item, name)

      compiler.apply(entryClass)
    })
  }

  itemToPlugin(item, name) {
    if(Array.isArray(item)) {
      return new MultiEntryPlugin(null, item, name);
    } else {
      return new SingleEntryPlugin(null, item, name);
    }
  }
}
