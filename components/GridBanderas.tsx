const GridBanderas = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 rounded-lg shadow-lg p-4">
          <div className="flex justify-center">
            <img
              src="/images/demo/banderas/alemania.jpg"
              alt="Estados Unidos"
              className="w-24 h-24"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Estados Unidos</h3>
            <p className="text-gray-500">Inglés</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBanderas;
