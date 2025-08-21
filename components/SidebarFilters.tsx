'use client';

import { useEffect, useState } from 'react';
import Select from './Select';
import { getBrands, getModels, getYears } from '../lib/api';

interface Props {
  onSelection: (brand: string, model: string, year: string) => void;
}

export default function SidebarFilters({ onSelection }: Props) {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    getBrands().then(setBrands).catch(() => console.error("Erro ao carregar marcas"));
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      setModels([]);
      setSelectedModel('');
      setSelectedYear('');
      getModels(selectedBrand).then(setModels).catch(() => console.error("Erro ao carregar modelos"));
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      setYears([]);
      setSelectedYear('');
      getYears(selectedBrand, selectedModel).then(setYears).catch(() => console.error("Erro ao carregar anos"));
    }
  }, [selectedModel]);

  useEffect(() => {
    if (selectedBrand && selectedModel && selectedYear) {
      onSelection(selectedBrand, selectedModel, selectedYear);
    }
  }, [selectedYear]);

  return (
    <div className="space-y-4">
      <Select label="Marca" options={brands} value={selectedBrand} onChange={setSelectedBrand} />
      {models.length > 0 && (
        <Select label="Modelo" options={models} value={selectedModel} onChange={setSelectedModel} />
      )}
      {years.length > 0 && (
        <Select label="Ano" options={years} value={selectedYear} onChange={setSelectedYear} />
      )}
    </div>
  );
}
