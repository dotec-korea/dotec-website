import PropTypes from 'prop-types';

export default function SectionSeparator({ width }) {
  return <hr className={`border-dotec border-2 w-${width} mt-10 mb-10`} />;
}

SectionSeparator.propTypes = {
  width: PropTypes.string,
};
