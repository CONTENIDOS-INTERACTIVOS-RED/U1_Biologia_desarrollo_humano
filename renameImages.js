const fs = require('fs').promises
const path = require('path')

async function renameImages() {
  const directory = 'src/assets/curso/unidad'

  try {
    // Obtener todos los archivos en el directorio
    const files = await fs.readdir(directory)

    // Filtrar solo archivos de imagen y obtener sus stats
    const imageFiles = await Promise.all(
      files
        .filter(file => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file))
        .map(async file => {
          const filePath = path.join(directory, file)
          const stats = await fs.stat(filePath)
          return {
            name: file,
            path: filePath,
            created: stats.birthtimeMs,
            extension: path.extname(file),
          }
        }),
    )

    // Ordenar por fecha de creación
    imageFiles.sort((a, b) => a.created - b.created)

    // Renombrar archivos
    for (let i = 0; i < imageFiles.length; i++) {
      const newName = `img-${i + 1}${imageFiles[i].extension}`
      const newPath = path.join(directory, newName)

      console.log(`Renombrando: ${imageFiles[i].name} -> ${newName}`)
      await fs.rename(imageFiles[i].path, newPath)
    }

    console.log('¡Proceso completado!')
    console.log(`Se renombraron ${imageFiles.length} imágenes.`)
  } catch (error) {
    console.error('Error:', error)
  }
}

renameImages()
