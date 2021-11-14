import Portofolio from "parts/Profile/Worker/Portofolio";
import WorkExperience from "parts/Profile/Worker/WorkExperience";
import SosialMedia from "components/SocialMedia";
import Header from "components/Header";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";
import { apiHost } from "config";

import { ReactComponent as IconLocation } from "assets/images/icons/icon-location.svg";
import { ReactComponent as IconPhone } from "assets/images/icons/icon-phone.svg";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";
import axios from "helpers/axios";

const WorkerProfile = (props) => {
	const { data } = useSelector((state) => state.worker);

	useScrollTop();

	const [skill, setSkill] = useState([]);
	const [portfolio, setPortfolio] = useState([]);
	const [experience, setExperience] = useState([]);

	const history = useHistory();

	useEffect(() => {
		Promise.all([
			axios.get(`/skill/${data.username}`),
			axios.get(`/portofolio/${data.username}`),
			axios.get(`/pengalaman/get-worker-exp`, data.username),
		]).then(async ([res1, res2, res3]) => {
			const a = await res1;
			const b = await res2;
			const c = await res3;

			setSkill(a.data.data);
			setPortfolio(b.data.data);
			setExperience(c.data.data);
		});
	}, [data.username]);

	return (
		<section className="profilePekerja">
			<Header className="mb-0" />
			<div className="profile__bg">
				<PurpleBackground className="purple" />

				<div className="container">
					<div className="row profile">
						<div className="profile__user">
							<div className="profile__user--image ">
								<img
									src={
										data.avatar
											? `${apiHost}/uploads/avatar/${data.avatar}`
											: `/avatar.png`
									}
									className="rounded-circle"
									alt="profile"
								/>
							</div>
							<div className="profile__user--content">
								<h2>{data.name}</h2>
								{data.jobdesk ? <h6>{data.jobdesk}</h6> : null}

								<div className="row">
									<div className="col vector">
										<IconLocation />
										{data.domisili ? <p>{data.domisili}</p> : null}
									</div>
								</div>
								<div className="row">
									<div className="col vector">
										<IconPhone />
										{data.nohp ? <p>{data.nohp}</p> : null}
									</div>
								</div>
								{data.deskripsi ? <p>{data.deskripsi}</p> : null}
							</div>

							<div className="profile__user--button">
								<button onClick={() => history.push("edit-profile-worker")}>
									Edit Profile
								</button>
							</div>
							<div className="profile__skill">
								<h2>Skill</h2>
							</div>
							<div className="profile__user--skill">
								{skill.map((item, index) => {
									return (
										<button
											type="button"
											className="btn btn-warning"
											key={index}
										>
											{item.nama_skill}
										</button>
									);
								})}
							</div>

							<SosialMedia
								profilPekerja
								email={data.email}
								instagram={data.url_ig}
								github={data.url_github}
								gitlab={data.url_gitlab}
							/>
						</div>

						<div className="profile__portofolio">
							<div className="row">
								<Tabs
									defaultActiveKey="Portofolio"
									id="uncontrolled-tab-example"
									className="mb-3"
								>
									<Tab eventKey="Portofolio" title="Portofolio">
										<Portofolio data={portfolio} />
									</Tab>
									<Tab eventKey="WorkExperience" title="WorkExperience">
										<WorkExperience data={experience} />
									</Tab>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default WorkerProfile;
