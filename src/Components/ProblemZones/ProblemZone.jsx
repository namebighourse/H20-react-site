import { getRandomPercentage } from "../utils_node";

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