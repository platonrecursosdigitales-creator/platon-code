const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const filesToDelete = [
  'portfolio_mockup.png',
  'portfolio_medina.png',
  'portfolio_caballero.png',
  'portfolio_solec.png',
  'portfolio_dental.png',
  'statue.png.asset.json',
];

// Add all statue_feature_*.png
const allFiles = fs.readdirSync(assetsDir);
allFiles.forEach(file => {
  if (file.startsWith('statue_feature_') && file.endsWith('.png')) {
    filesToDelete.push(file);
  }
});

filesToDelete.forEach(file => {
  const filePath = path.join(assetsDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted ${file}`);
  }
});

const landingPath = path.join(__dirname, 'src', 'pages', 'LandingSitioWeb.tsx');
let landing = fs.readFileSync(landingPath, 'utf-8');

// Remove unused imports
const importsToRemove = [
  'import mockupImg from "@/assets/portfolio_mockup.png";',
  'import feat1 from "@/assets/statue_feature_1_1782446390064.png";',
  'import feat2 from "@/assets/statue_feature_2_1782446396960.png";',
  'import feat3 from "@/assets/statue_feature_3_1782446407391.png";',
  'import feat4 from "@/assets/statue_feature_4_1782446416347.png";',
  'import feat5 from "@/assets/statue_feature_5_1782446422681.png";',
  'import feat6 from "@/assets/statue_feature_6_1782446438896.png";',
  'import feat7 from "@/assets/statue_feature_7_1782446447372.png";',
  'import feat8 from "@/assets/statue_feature_8_1782446455249.png";',
  'import feat9 from "@/assets/statue_feature_9_1782446463174.png";',
  'import feat10 from "@/assets/statue_feature_10_1782446472623.png";',
  'import feat11 from "@/assets/statue_feature_11_1782446488110.png";'
];

importsToRemove.forEach(imp => {
  landing = landing.replace(imp + '\n', '');
  landing = landing.replace(imp, '');
});

// Remove duplicate SocialStatue import
const socialStatueImport = 'import { SocialStatue } from "@/components/site/SocialStatue";\n';
let importCount = landing.split(socialStatueImport).length - 1;
if (importCount > 1) {
  landing = landing.replace(socialStatueImport, '');
}

fs.writeFileSync(landingPath, landing, 'utf-8');
console.log('Cleaned up LandingSitioWeb.tsx');
