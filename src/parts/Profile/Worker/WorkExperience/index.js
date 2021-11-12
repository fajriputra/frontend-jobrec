import React from "react";
import work from "../../../../assets/images/workexperience.png";

import "./index.scss";

export default function WorkExperience({ data }) {
  let manipulateDateIn = "";
  let manipulateDateOut = "";
  let dateIn = "";
  let dateOut = "";
  const dataTanggal = data ? data : [];
  console.log(dataTanggal.length);
  if (dataTanggal.length > 0) {
    manipulateDateIn = dataTanggal[0].tgl_masuk.split("-");
    dateIn = `${manipulateDateIn[0]}, ${manipulateDateIn[1]}`;

    manipulateDateOut = data[0].tgl_keluar.split("-");
    dateOut = `${manipulateDateOut[0]}, ${manipulateDateOut[1]}`;
  }

  return (
    <div className="row work">
      <div className="row">
        {!data.length ? (
          <p className="text-center">Tidak ada pengalaman</p>
        ) : (
          data.map((item) => (
            <div key={item.id}>
              <div className="col work__image">
                <img src={work} alt="a" />
                <div className="col-10 ps-5 work__desc">
                  <h2>{item.posisi}</h2>
                  <h5>{item.nama_perusahaan}</h5>
                  <h6>{`${dateIn.replace(",", " -")} s/d ${dateOut.replace(
                    ",",
                    " -"
                  )} `}</h6>
                  <p>{item.deskripsi}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
