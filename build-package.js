const { exec } = require('child_process')
const fs = require('fs').promises
const path = require('path')

async function buildAndPackage() {
  try {
    // 1. Ejecutar npm run build
    console.log('Ejecutando build...')
    await new Promise((resolve, reject) => {
      exec('npm run build', (error, stdout) => {
        if (error) {
          console.error(`Error en el build: ${error}`)
          reject(error)
          return
        }
        console.log(stdout)
        resolve()
      })
    })

    // 2. Crear directorio downloads si no existe
    const downloadsDir = path.join(__dirname, 'public', 'downloads')
    try {
      await fs.access(downloadsDir)
    } catch {
      await fs.mkdir(downloadsDir, { recursive: true })
    }

    // 3. Crear ZIP usando el comando del sistema operativo
    console.log('Creando archivo ZIP...')
    await new Promise((resolve, reject) => {
      const zipCommand =
        process.platform === 'win32'
          ? `powershell Compress-Archive -Path "${path.join(
              __dirname,
              'dist',
              '*',
            )}" -DestinationPath "${path.join(
              downloadsDir,
              'material.zip',
            )}" -Force`
          : `cd "${path.join(__dirname, 'dist')}" && zip -r "${path.join(
              downloadsDir,
              'material.zip',
            )}" .`

      exec(zipCommand, error => {
        if (error) {
          console.error(`Error creando ZIP: ${error}`)
          reject(error)
          return
        }
        resolve()
      })
    })

    console.log('¡Proceso completado con éxito!')
    console.log(
      `El archivo ZIP se guardó en: ${path.join(downloadsDir, 'material.zip')}`,
    )
  } catch (error) {
    console.error('Error en el proceso:', error)
    process.exit(1)
  }
}

buildAndPackage()
