import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "components/Header";
import map from "../../assets/images/icons/icon-location.svg";
import call from "../../assets/images/icons/icon-phone.svg";
import Button from "components/UI/Button";
import Footer from "components/SiteInfo";
import { toast } from "react-toastify";
import axios from "helpers/axios";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";

export default function Hire(props) {
  const history = useHistory();
  const [form, setForm] = useState({
    tujuan: "Job",
    pesan: "",
    workerUsername: props.match.params.workerUsername,
  });
  const [thisWorker, setThisWorker] = useState({});
  const [thisWorkerSkill, setThisWorkerSkill] = useState([]);
  useScrollTop();
  useEffect(() => {
    getWorkerByUsername();
    getSkillByUsernameWorker();
    console.log("JALANIN WEB");
  }, []);

  const handleChange = (e) => {
    console.log(form);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleHireWorker = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/recruiter/hire-worker`, form);
      toast.success(res.data.msg);
      console.log(res);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    } catch (err) {
      // console.log(err.response);
      err.response.data.msg && toast.error(err.response.data.msg);
    }
  };
  const getWorkerByUsername = () => {
    axios
      .get(`/worker/get-worker/${form.workerUsername}`)
      .then((res) => {
        setThisWorker(res.data.data[0]);
      })
      .catch((err) => {
        console.log("EROR WORKER");
        err.response.data.msg && toast.error(err.response.data.msg);
        setTimeout(() => {
          history.push("/");
        }, 2000);
      });
  };
  const getSkillByUsernameWorker = () => {
    axios
      .get(`/skill/${form.workerUsername}`)
      .then((res) => {
        setThisWorkerSkill(res.data.data);
      })
      .catch((err) => {
        console.log("EROR WORKER Skill");
        console.log(err.response.data);
        err.response.data.msg && toast.error(err.response.data.msg);
        setTimeout(() => {
          history.push("/");
        }, 2000);
      });
  };
  return (
    <section className="hire">
      <Header className="mb-0" />
      <div className="hire__bg">
        <div className="container">
          <div className="row hire">
            <div className="col-xl-4 col-lg-12 hire__user mt-5 mb-5">
              <div className="hire__user--image">
                <img
                  src={thisWorker.avatar ? thisWorker.avatar : "/avatar.png"}
                  alt="profile"
                />
              </div>
              <div className="hire__user--content">
                <h2>{thisWorker.name}</h2>
                <h6>
                  {thisWorker.jobdesk}{" "}
                  {thisWorker.type == "fulltime" ? "Full Time" : "Freelance"}
                </h6>

                {thisWorker.domisili ? (
                  <div className="row">
                    <div className="col vector">
                      <img src={map} alt="map" />
                      <p>{thisWorker.domisili}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="row">
                  <div className="col vector">
                    <img src={call} alt="call" />
                    <p>{thisWorker.nohp}</p>
                  </div>
                </div>
                <p>{thisWorker.deskripsi}</p>
              </div>
              <div classNameName="skill">
                <h2>Skill</h2>
              </div>
              <div className="hire__user--skill">
                {thisWorkerSkill.map((element, index) => (
                  <button type="button" className="btn btn-warning">
                    {element.nama_skill}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 hire__desc mt-5">
              <div className="hire__desc--content">
                <h1>Hubungi {thisWorker.name}</h1>
                <h6>
                  Kamu bisa menghubungi {thisWorker.name} dengan cara mengisi
                  form berikut, {thisWorker.name} akan membalas email kamu
                  secara private. harap memasukkan contact yang bisa dihubungi
                </h6>
              </div>
              <div className="hire__desc--form">
                <form onSubmit={handleHireWorker}>
                  <div className="hire__desc--form--detail">
                    <span>Tujuan tentang pesan ini</span>
                    <div className="hire__desc--form--select">
                      <select
                        className="mb-4"
                        name="tujuan"
                        onChange={handleChange}
                      >
                        <option value="Project">Project</option>
                        <option value="Job">JOB</option>
                        <option value="Another">Another</option>
                      </select>
                    </div>
                    <span>Pesan</span>
                    <div className="hire__desc--form--textarea">
                      <textarea
                        cols="50"
                        rows="8"
                        onChange={handleChange}
                        name="pesan"
                        placeholder="Deskripsikan/jelaskan lebih detail tentang project yang anda tawarkan"
                      ></textarea>
                    </div>
                  </div>
                  <div className="hire__desc--form--button">
                    <Button>Kirim</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
