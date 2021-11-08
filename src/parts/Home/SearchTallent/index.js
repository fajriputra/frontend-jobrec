import React from "react";

import ProfileImage from "assets/images/opini1.png";

import { ReactComponent as IconSearch } from "assets/images/icons/icon-search.svg";
import { ReactComponent as IconPolygon } from "assets/images/icons/icon-polygon.svg";
import { ReactComponent as IconLocation } from "assets/images/icons/icon-location.svg";
import { ReactComponent as IconList } from "assets/images/icons/icon-list.svg";

import InputText from "components/UI/Form/InputText";
import Button from "components/UI/Button";
import Card from "components/Card";
import Image from "components/Image";
import Pagination from "react-paginate";

import useClickout from "hooks/useClickout";

import "./index.scss";

export default function SearchTallent(props) {
  const { handleClick, click, refClick } = useClickout();

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
                        <Button className="btn nav-link">
                          Sortir berdasarkan Nama
                        </Button>
                      </li>
                      <li className="nav-item">
                        <Button className="btn nav-link">
                          Sortir berdasarkan Skill
                        </Button>
                      </li>
                      <li className="nav-item">
                        <Button className="btn nav-link">
                          Sortir berdasarkan Lokasi
                        </Button>
                      </li>
                      <li className="nav-item">
                        <Button className="btn nav-link">
                          Sortir berdasarkan Freelance
                        </Button>
                      </li>
                      <li className="nav-item">
                        <Button className="btn nav-link">
                          Sortir berdasarkan Fulltime
                        </Button>
                      </li>
                    </ul>
                  </li>
                  <Button className="btn btn__search d-none d-md-block">
                    Search
                  </Button>
                </div>
              }
              placeholder="Search for any skill"
              inputTextClassName="input__sort"
            />
            <IconSearch width={20} height={20} className="icon__search" />
          </div>

          <Card className="card__content">
            <div className="card__content--profile">
              <div className="profile__data--wrapper">
                <Image
                  srcImage={ProfileImage}
                  className="profile__image"
                  altImage="Profile Image"
                  imageClass="img-cover rounded-circle"
                />
                <div className="profile__data">
                  <h5 className="profile__data--name">Louis Tomlinson</h5>
                  <p className="profile__data--job">
                    Web Developer - Freelance
                  </p>

                  <span className="profile__data--location">
                    <IconLocation
                      width={15}
                      height={15}
                      className="icon__location"
                    />
                    Masih gatau dimana
                  </span>

                  <div className="skills__wrapper">
                    <Button className="btn btn__skills">PHP</Button>
                    <Button className="btn btn__skills">Javascript</Button>
                    <Button className="btn btn__skills">React</Button>
                    <Button className="btn btn__skills">React</Button>
                    <Button className="btn btn__skills">React</Button>
                  </div>
                </div>
              </div>
              <Button className="btn btn__profile">Lihat Profile</Button>
            </div>
            <div className="line w-100"></div>
          </Card>

          <Pagination
            previousLabel={false}
            nextLabel={false}
            breakLabel={"..."}
            pageCount={5}
            // onPageChange={handlePagination}
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
