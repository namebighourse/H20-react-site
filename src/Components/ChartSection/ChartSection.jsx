import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MONTHS = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export const ChartSection = ({ data }) => {
  const chartData = {
    labels: MONTHS,
    datasets: [
      {
        label: 'Расходы',
        data: data.filter(d => d.type === 'expanses').map(d => d.amount),
        borderColor: '#f87171',
        backgroundColor: '#fecaca',
      },
      {
        label: 'Доходы',
        data: data.filter(d => d.type === 'income').map(d => d.amount),
        borderColor: '#34d399',
        backgroundColor: '#d1fae5',
      }
    ]
  };

  return (
    <div className="chart-problems-wrapper">
      <div className="chart-container">
        <div className="chart-title">График по месяцам</div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

// components/ProblemZones.jsx
const getRandomPercentage = () => Math.floor(Math.random() * 41 - 20);

export const ProblemZones = () => (
  <div className="problem-zones-container">
    <div className="problem-title">Проблемные зоны</div>
    {['Доставка', 'Склад', 'Закупки', 'Клиенты'].map((label, idx) => {
      const percent = getRandomPercentage();
      return (
        <div key={idx} className="problem-zone-item">
          <span>{label}</span>
          <span className={percent >= 0 ? 'text-green' : 'text-red'}>
            {percent >= 0 ? '▲' : '▼'} {Math.abs(percent)}%
          </span>
        </div>
      );
    })}
  </div>
);
