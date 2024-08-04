import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Dashboard.module.css';
import Modal from '../components/Modal'; 
import { apiData } from '../JSON/data';

const Dashboard = () => {
  const [prices, setPrices] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
        try {
            setPrices(apiData);
            const response = await axios.get('http://localhost:3030/getPrices');
            const data =  response?.data;
            setPrices(data);    
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };
    fetchPrices();
  }, []);

  const handleRowClick = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedData(null);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((item, index) => (
            <tr key={index} onClick={() => handleRowClick(item)}>
              <td>{item.name}</td>
              <td>{item.price.length > 0 ? item.price[item.price.length - 1].price.toFixed(2) : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedData && (
        <Modal show={showModal} onClose={handleCloseModal} data={selectedData} />
      )}
    </div>
  );
};

export default Dashboard;
