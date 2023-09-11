import styles from './ItemList.module.css';
import Item from './Item.jsx';

const ItemList = (props) => {
  //{/* Todo: Show below table conditionally (only once result data is available) */ }
  //{/* Show fallback text if no data is available */ }
  if (props.contentList.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No investments calculated yet.</h2>
      </div>
    );
  }



  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <Item contents={props.contentList} />
    </table>
  );

}

export default ItemList;