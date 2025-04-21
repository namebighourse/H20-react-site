export const Header = ({ division, onDivisionChange }) => (
    <div className="header">
      <div className="header-title">Статистика</div>
      <div className="header-right">
        <select value={division} onChange={onDivisionChange} className="division-select">
          <option value="B2B">B2B</option>
          <option value="B2C">B2C</option>
        </select>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="avatar"
          className="avatar"
        />
      </div>
    </div>
  );