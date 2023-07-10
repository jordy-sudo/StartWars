import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { getSwapi } from '../api/apiSwapi';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const StarWars = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const itemsPerPage = 3; // Cantidad de elementos por página

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSwapi('people');
        setData(result.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(data); // Inicialmente, mostrar todos los datos sin filtrar
  }, [data]);

  const handleSearch = (query) => {
    const filtered = data.filter((item, index) => {
      const found = item.name.toLowerCase().includes(query.toLowerCase());
      if (found) {
        item.position = index; // Capturar la posición en el array original
      }
      return found;
    });
    setFilteredData(filtered);
    setCurrentPage(1); // Reiniciar la página actual al realizar una búsqueda
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calcula los índices de inicio y fin de los elementos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-3">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <Spinner />
            </div>
          ) : (
            currentItems.map((item, index) => (
              <div className="w-full" key={index}>
                <Card index={item.position != null ? item.position : index+ indexOfFirstItem} item={item} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredData.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default StarWars;
