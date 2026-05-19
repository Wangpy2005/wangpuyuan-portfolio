import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const inputDir = './public/images';

async function compressImages() {
  try {
    const files = await readdir(inputDir);
    const pngFiles = files.filter(f => f.endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG files`);

    for (const file of pngFiles) {
      const inputPath = join(inputDir, file);
      const outputPath = join(inputDir, 'comp_' + file);

      // More aggressive compression - resize to max 1920px width, 70% quality
      await sharp(inputPath)
        .resize(1920, null, { withoutEnlargement: true })
        .png({ quality: 70, compressionLevel: 9 })
        .toFile(outputPath);

      console.log(`Compressed: ${file}`);
    }

    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
}

compressImages();
