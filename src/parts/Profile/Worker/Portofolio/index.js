import { apiHost } from "config";
import React from "react";

import "./index.scss";

export default function Portofolio({ data }) {
  return (
    <div className="row portofolio">
      {!data.length ? (
        <p className="text-center">Tidak ada portfolio</p>
      ) : (
        data.map((item) => (
          <div className="col-md-4 portofolio__content" key={item.id}>
            <img
              src={
                item.image
                  ? `${apiHost}/uploads/portofolio/${item.image}`
                  : null
              }
              alt="poto portfolio"
            />
            <p>{item.nama_applikasi}</p>
          </div>
        ))
      )}
    </div>
  );
}
