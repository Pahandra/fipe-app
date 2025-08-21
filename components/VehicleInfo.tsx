interface VehicleInfoProps {
  data: any;
}

export default function VehicleInfo({ data }: VehicleInfoProps) {
  return (
    <div className="mt-6 border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">{data.model}</h2>
      <p><strong>Marca:</strong> {data.brand}</p>
      <p><strong>Ano:</strong> {data.modelYear}</p>
      <p><strong>Combustível:</strong> {data.fuel}</p>
      <p><strong>Preço:</strong> {data.price}</p>
      <p><strong>Código FIPE:</strong> {data.codeFipe}</p>
      <p><strong>Referência:</strong> {data.referenceMonth}</p>
    </div>
  );
}
