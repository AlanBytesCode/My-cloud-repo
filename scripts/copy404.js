// scripts/copy404.js
import fs from 'fs'
import path from 'path'

const distDir = path.resolve('dist')
const indexPath = path.join(distDir, 'index.html')
const errorPath = path.join(distDir, '404.html')

fs.copyFile(indexPath, errorPath, (err) => {
  if (err) {
    console.error('❌ Failed to copy 404.html:', err)
  } else {
    console.log('✅ 404.html copied successfully.')
  }
})
