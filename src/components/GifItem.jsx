const GifItem = ({ title, url }) => {
  return (
    <div className="shadow-md bg-white border-violet-400 w-fit rounded my-auto">
      <img className="object-contain" src={url} alt={title} />
      <p className="p-2">{title}</p>
    </div>
  );
};

export default GifItem;
