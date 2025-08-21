export async function getBrands() {
  const res = await fetch('https://fipe.parallelum.com.br/api/v2/cars/brands');
  return res.json();
}

export async function getModels(brandCode: string) {
  const res = await fetch(`https://fipe.parallelum.com.br/api/v2/cars/brands/${brandCode}/models`);
  return res.json();
}

export async function getYears(brandCode: string, modelCode: string) {
  const res = await fetch(`https://fipe.parallelum.com.br/api/v2/cars/brands/${brandCode}/models/${modelCode}/years`);
  return res.json();
}

export async function getVehicleDetails(brandCode: string, modelCode: string, yearCode: string) {
  const res = await fetch(`https://fipe.parallelum.com.br/api/v2/cars/brands/${brandCode}/models/${modelCode}/years/${yearCode}`);
  return res.json();
}
