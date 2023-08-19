import propTypes from 'prop-types';
import { Section, Title, StatsList, Item } from './Statistics.styled.js';
const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} $item={percentage}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </Item>
        ))}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      percentage: propTypes.number.isRequired,
      label: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    })
  ).isRequired,
};
export default Statistics;
