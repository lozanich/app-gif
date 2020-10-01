import React from "react";
import PropsTypes from "prop-types";

function GifGridItem({ id, title, url, deleteImageG }) {
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p>{title}</p>
      <button onClick={() => deleteImageG(id)} className="button-primary">
        Eliminar
      </button>
    </div>
  );
}

GifGridItem.propTypes = {
  id: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  url: PropsTypes.string.isRequired,
};

export default GifGridItem;
