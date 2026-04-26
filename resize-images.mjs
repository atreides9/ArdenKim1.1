import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

const targets = [
  'petbulance/jangpyo',
  'petbulance/screendesign'
];
const MAX_PX = 1800;

for (const folder of targets) {
  const outDir = join(folder, 'optimized');
  mkdirSync(outDir, { recursive: true });

  const files = readdirSync(folder).filter(f => f.endsWith('.png'));

  for (const file of files) {
    await sharp(join(folder, file))
      .resize(MAX_PX, MAX_PX, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .png({ quality: 85 })
      .toFile(join(outDir, file));

    console.log(`✓ ${folder}/${file}`);
  }
}
