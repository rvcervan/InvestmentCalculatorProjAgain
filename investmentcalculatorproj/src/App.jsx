import Header from "./Components/Header/Header.jsx";
import SubmitForm from "./Components/UserForm/SubmitForm.jsx";
import ItemList from "./Components/ItemList/ItemList.jsx";
import { useState } from 'react';
function App() {
  const [contents, setContents] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"].value; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"].value; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"].value / 100;
    const duration = +userInput["duration"].value;

    // The below code calculates yearly results (total savings, interest etc)
    let prevVal = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalInterest: yearlyInterest + prevVal,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
      prevVal = yearlyData[i].totalInterest;
    }

    // do something with yearlyData...
    setContents(yearlyData);
    //Save yearlyData in to a useState to update the page
  };

  const resetData = () => {
    setContents([]);
  }

  return (
    <div>
      <Header />
      <SubmitForm resetHandler={resetData} dataCalculator={calculateHandler} />
      <ItemList contentList={contents} />
    </div>
  );
}

export default App;
