import * as fs from 'fs';
import * as path from 'path';

export function getTestData() {
  const filePath = path.resolve(__dirname, '../../testdata.csv');

  const file = fs.readFileSync(filePath, 'utf-8');

  const lines = file.split('\n');

  const headers = lines[0].split(',');

  const values = lines[1].split(',');

  const data: any = {};

  headers.forEach((header, index) => {
    data[header.trim()] = values[index].trim();
  });

  console.log('CSV Data:', data);

  return data;
}