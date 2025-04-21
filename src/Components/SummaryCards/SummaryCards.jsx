import { getRandomPercentage } from '../utils_node';

const CARD_LABELS = [
  { label: 'Расходы', key: 'expanses', color: 'bg-red', textColor: 'text-red' },
  { label: 'Доходы', key: 'income', color: 'bg-green', textColor: 'text-green' },
  { label: 'Выручка', key: 'revenue', color: 'bg-blue', textColor: 'text-blue' },
  { label: 'Долги', key: 'debt', color: 'bg-yellow', textColor: 'text-yellow' }
];

export const SummaryCards = ({ summary }) => (
  <div className="summary-cards">
    {CARD_LABELS.map(({ label, key, color, textColor }) => {
      const percent = getRandomPercentage();
      return (
        <div key={key} className={`summary-card ${color}`}>
          <div className="summary-label">{label}</div>
          <div className="summary-value">₽ {summary[key].toLocaleString()}</div>
          <div className={`summary-percent ${textColor}`}>
            {percent >= 0 ? '▲' : '▼'} {Math.abs(percent)}%
          </div>
        </div>
      );
    })}
  </div>
);

// components/ChartSection.jsx
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