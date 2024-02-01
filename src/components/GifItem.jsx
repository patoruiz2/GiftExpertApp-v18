import PropTypes from "prop-types";

const GifItem = ({ title, url, id }) => {
  return (
    <div className="shadow-md bg-white border-violet-400 w-fit rounded my-auto">
      <img className="object-contain" src={url} alt={title} />
      <p className="p-2">{title}</p>
    </div>
  );
};

GifItem.propType = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default GifItem;
