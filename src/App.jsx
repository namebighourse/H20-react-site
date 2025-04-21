import { Sidebar } from './Components/Sidebar/Sidebar.jsx';
import { Header } from './Components/Header/Header.jsx';
import { SummaryCards } from './Components/SummaryCards/SummaryCards.jsx';
import { ChartSection } from './Components/ChartSection/ChartSection.jsx';
import { ProblemZones } from './Components/ProblemZones/ProblemZone.jsx';
import React, { useState, useMemo } from 'react';

const generateRandomData = (division) => {
  return Array.from({ length: 12 }, (_, i) => ({
    date: new Date(2024, i, 1).toISOString(),
    amount: Math.floor(Math.random() * 100000),
    type: ['expanses', 'income'][Math.floor(Math.random() * 2)],
    division
  }));
};

const App = () => {
  const [division, setDivision] = useState('B2B');
  const data = useMemo(() => generateRandomData(division), [division]);

  const summary = useMemo(() => {
    const result = { expanses: 0, income: 0, revenue: 0, debt: 0 };
    data.forEach(({ amount, type }) => {
      result[type] += amount;
    });
    result.revenue = result.income - result.expanses;
    result.debt = Math.floor(result.expanses * 0.3);
    return result;
  }, [data]);

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Header division={division} onDivisionChange={(e) => setDivision(e.target.value)} />
        <SummaryCards summary={summary} />
        <div className="chart-problems-wrapper">
          <ChartSection data={data} />
          <ProblemZones />
        </div>
      </main>
    </div>
  );
};

export default App;