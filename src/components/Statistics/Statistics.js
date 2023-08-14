import propTypes from 'prop-types';
import { Section, Title, StatsList, Item } from './Statistics.styled.js';
const Statistics = ({ items }) => {
  return (
    <Section>
      <Title>Upload stats</Title>

      <StatsList>
        {items.map(({ id, label, percentage }) => (
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
  items: propTypes.arrayOf(
    propTypes.shape({
      percentage: propTypes.number.isRequired,
      label: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    })
  ),
};
export default Statistics;
