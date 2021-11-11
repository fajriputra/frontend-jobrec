import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import { ReactComponent as IconSearch } from "assets/images/icons/icon-search.svg";
import { ReactComponent as IconPolygon } from "assets/images/icons/icon-polygon.svg";
import { ReactComponent as IconLocation } from "assets/images/icons/icon-location.svg";
import { ReactComponent as IconList } from "assets/images/icons/icon-list.svg";
import InputText from "components/UI/Form/InputText";
import { useHistory } from "react-router-dom";
import Button from "components/UI/Button";
import Card from "components/Card";
import Image from "components/Image";
import Pagination from "react-paginate";
import { toast } from "react-toastify";
import axios from "helpers/axios";

import useClickout from "hooks/useClickout";

import "./index.scss";

export default function SearchTallent(props) {
  const { handleClick, click, refClick } = useClickout();
  const history = useHistory();
  const parsed = queryString.parse(history.location.search);

  const [allWorker, setAllWorker] = useState([]);
  const [pagination, setPagination] = useState({});
  const [paginationHandle, setpaginationHandle] = useState({
    page: parsed.page ? parsed.page : 1,
    skillName: parsed.skillName ? parsed.skillName : "",
    sort: parsed.sort ? parsed.sort : "",
    sortType: parsed.sortType ? parsed.sortType : "",
  });
  const [form, setForm] = useState({
    skillName: parsed.skillName,
  });

  useEffect(() => {
    getAllWorker();
  }, []);

  useEffect(() => {
    console.log(paginationHandle.skillName);
    getAllWorker();
  }, [paginationHandle.skillName]);

  const getAllWorker = () => {
    axios
      .get(
        `/worker/?page=${paginationHandle.page}&skillName=${paginationHandle.skillName}&sort=${paginationHandle.sort}&sortType=${paginationHandle.sortType}`
      )
      .then((res) => {
        console.log(
          `/worker/?page=${paginationHandle.page}&skillName=${paginationHandle.skillName}&sort=${paginationHandle.sort}&sortType=${paginationHandle.sortType}`
        );
        setAllWorker(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const handlePagination = (event) => {
    const selected = event.selected + 1;
    setpaginationHandle({ ...paginationHandle, page: selected });
    history.push(
      `?page=${selected}${form.skillName ? `&skillName=${form.skillName}` : ""}`
    );
  };
  const handleSearch = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClickSearch = () => {
    const skillName = form.skillName;
    setpaginationHandle({
      ...paginationHandle,
      skillName: skillName,
      page: 1,
    });
    getAllWorker();
    // history.push(`?page=1&skillName=${namaSkill}`);
    // history.push(
    //   `?page=${1}&sort=${paginationHandle.sort}&sortType=${
    //     paginationHandle.sortType
    //   }`
    // );
  };
  const handleSort = (sort, sortType) => {
    setpaginationHandle({ ...paginationHandle, sort, sortType });
  };
  return (
    <section className="search__tallent">
      <div className="container">
        <div className="row justify-content-center px-0">
          <div className="form-group position-relative">
            <InputText
              append={
                <div className="input__column--2">
                  <li className="drop_nav" onClick={handleClick} ref={refClick}>
                    <Button className="btn d-block d-md-none p-0">
                      <IconList width={20} height={20} />
                    </Button>
                    <Button className="btn px-md-4 btn__sort d-none d-md-block">
                      Sort
                      <IconPolygon
                        width={20}
                        className={
                          click ? "polygon clicked" : "polygon not-clicked"
                        }
                      />
                    </Button>
                    <ul className={click ? "dropdown clicked" : "dropdown"}>
                      <li className="nav-item">
                        <Button
                          onClick={() => handleSort("name", "ASC")}
                          className="btn nav-link"
                        >
                          Sortir berdasarkan Nama Alfabet A-Z
                        </Button>
                      </li>
                      <li className="nav-item">
                        <Button
                          onClick={() => handleSort("name", "DESC")}
                          className="btn nav-link"
                        >
                          Sortir berdasarkan Nama Alfabet Z-A
                        </Button>
                      </li>
                      <li className="nav-item">
                        <Button
                          onClick={() => handleSort("skill", "ASC")}
                          className="btn nav-link"
                        >
                          Sortir berdasarkan Skill Terbanyak
                        </Button>
                      </li>
                      <li className="nav-item">
                        <Button
                          onClick={() => handleSort("skill", "DESC")}
                          className="btn nav-link"
                        >
                          Sortir berdasarkan Skill Terkecil
                        </Button>
                      </li>

                      <li className="nav-item">
                        <Button
                          onClick={() => handleSort("domisili", "DESC")}
                          className="btn nav-link"
                        >
                          Sortir berdasarkan Lokasi
                        </Button>
                      </li>
                      <li className="nav-item">
                        <Button
                          onClick={() => handleSort("type", "ASC")}
                          className="btn nav-link"
                        >
                          Sortir berdasarkan Freelance
                        </Button>
                      </li>
                      <li className="nav-item">
                        <Button
                          onClick={() => handleSort("type", "DESC")}
                          className="btn nav-link"
                        >
                          Sortir berdasarkan Fulltime
                        </Button>
                      </li>
                    </ul>
                  </li>
                  <Button
                    onClick={handleClickSearch}
                    className="btn btn__search d-none d-md-block"
                  >
                    Search
                  </Button>
                </div>
              }
              placeholder="Search for any skill & Press Enter"
              inputTextClassName="input__sort"
              onChange={handleSearch}
              name="skillName"
              // value="ASd"
              value={form.skillName ? form.skillName : ""}
            />
            <IconSearch width={20} height={20} className="icon__search" />
          </div>
          {allWorker.map((element) => (
            <Card className="card__content">
              <div className="card__content--profile">
                <div className="profile__data--wrapper">
                  <Image
                    srcImage={element.avatar ? element.avatar : "/avatar.png"}
                    className="profile__image"
                    altImage="Profile Image"
                    imageClass="img-cover rounded-circle"
                  />
                  <div className="profile__data">
                    <h5 className="profile__data--name">{element.name}</h5>
                    <p className="profile__data--job">
                      {element.type === "fulltime" ? "Full Time" : "Freelance"}{" "}
                      - {element.jobdesk ? element.jobdesk : "Jobdesk"}
                    </p>

                    <span className="profile__data--location">
                      <IconLocation
                        width={15}
                        height={15}
                        className="icon__location"
                      />
                      {element.domisili ? element.domisili : "Indonesia"}
                    </span>

                    <div className="skills__wrapper">
                      {element.skill.map((element) => (
                        <Button className="btn btn__skills">{element}</Button>
                      ))}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/hire/${element.username}`}
                  className="btn btn__profile"
                >
                  Lihat Profile
                </Link>
              </div>
              <div className="line w-100"></div>
            </Card>
          ))}

          <Pagination
            previousLabel={false}
            nextLabel={false}
            breakLabel={"..."}
            pageCount={pagination.totalPage}
            onPageChange={handlePagination}
            containerClassName={"pagination justify-content-center p-0"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </section>
  );
}
