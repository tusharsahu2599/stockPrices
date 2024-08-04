import React from 'react';
import styles from '../styles/modal.module.css'; 

const Modal = ({ show, onClose, data }) => {
  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>{data.name} ({data.symbol || 'N/A'})</h2>
        <table className={styles.priceTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.price.map((p, index) => (
              <tr key={index}>
                <td>{new Date(p.createdAt).toLocaleString()}</td>
                <td>{p.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;
