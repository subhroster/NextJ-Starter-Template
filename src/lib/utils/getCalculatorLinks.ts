"use server"
import fs from 'fs'
import path from 'path'

export async function getCalculatorLinks() {
  const calculatorsDir = path.join(process.cwd(), 'src/app/calculators')
  const directories = fs.readdirSync(calculatorsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({
      path: `/calculators/${dirent.name}`,
      title: dirent.name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      id: dirent.name
    }))

  return directories
}
