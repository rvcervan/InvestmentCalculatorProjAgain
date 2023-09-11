import styles from './SubmitForm.module.css';

const SubmitForm = (props) => {

  const submitHandler = (event) => {
    event.preventDefault();
    props.dataCalculator(event.target)
  }


  return (

    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.inputgroup} >
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
      <div className={styles.inputgroup}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div>
      <p className={styles.actions} >
        <button onClick={props.resetHandler}type="reset" className={styles.buttonAlt} >
            Reset
          </button>
        <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    
  );
}

export default SubmitForm;