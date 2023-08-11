import React from "react";
import iconDelete from "./images/icon-delete.png";
import btnLike from "./images/btn-like.png";

function Template() {
  return (
    <template id="card-template">
      <div className="elements__card-container">
        <button className="elements__card-container-btn-delete">
          <img
            className="elements__card-container-icon-delete"
            src={iconDelete}
            alt="icon eliminar imágen"
          />
        </button>
        <img className="elements__card-container-image" src=" " alt=" " />
        <div className="elements__card-container-footing">
          <h3 className="elements__card-container-footing-title"></h3>
          <img
            className="elements__card-container-footing-btn"
            src={btnLike}
            alt="like inactivo"
          />
          <span className="elements__like-counter"></span>
        </div>
      </div>
    </template>
  );
}

export default Template;
