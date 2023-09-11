import styles from './Item.module.css';

const Item = (props) => {

  //year: i + 1,
  //  yearlyInterest: yearlyInterest,
  //    savingsEndOfYear: currentSavings,
  //      yearlyContribution: yearlyContribution

  let prevVal = 0;

  return (
    <tbody>
      {
        props.contents.map((item) => 
          (
            <tr key={item.year}>
              <th>{item.year}</th>
              <th>${Number(item.savingsEndOfYear).toFixed(2)}</th>
              <th>${Number(item.yearlyInterest).toFixed(2)}</th>
              <th>${Number(item.totalInterest).toFixed(2)}</th>
              <th>${Number(item.savingsEndOfYear - item.totalInterest).toFixed(2)}</th>
            </tr>
          )
        )
      }
    </tbody>
  );


}

export default Item;