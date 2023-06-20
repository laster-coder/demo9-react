import { useState } from "react";
import "./App.css";
import pkq from "./images/pkq.png";

const State = {
	tabs: [
		{ id: 1, name: "热度", type: "hot" },
		{ id: 2, name: "时间", type: "time" },
	],
	active: "hote",
};
function formatTime(time) {
	//时间格式化
	return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDay()}`;
}

function App() {
	const [list, setList] = useState([
		{
			id: 1,
			author: "姜云升",
			comment: "该知道的都知道不知道的慢慢了解嘛",
			time: new Date("2023-06-19 21:47:00"),
			auttitude: 0,
		},
		{
			id: 2,
			author: "1姜云升",
			comment: "1该知道的都知道不知道的慢慢了解嘛",
			time: new Date("2023-06-20 21:47:00"),
			auttitude: 1,
		},
		{
			id: 3,
			author: "2姜云升",
			comment: "2该知道的都知道不知道的慢慢了解嘛",
			time: new Date("2023-06-19 21:47:00"),
			auttitude: -1,
		},
	]);
	function onClickLike(index, status) {
		const copy = Array.from(new Set([...list]));
		if (copy[index].auttitude === status) {
			copy[index].auttitude = 0;
		} else {
			copy[index].auttitude = status;
		}
		setList(copy);
	}

	return (
		<div className="App">
			{/*评论数*/}
			<div className="comment-container">
				<div className="comment-head">
					<span>5 评论</span>
				</div>
			</div>
			{/*排序*/}
			<div className="tabs-order">
				<ul className="sort-container">
					{State.tabs.map((item) => (
						<li key={item.id}>按{item.name}排序</li>
					))}
				</ul>
			</div>
			{/*添加评论*/}
			<div className="comment-send">
				<div className="user-face">
					<img
						className="user-head"
						src={pkq}
						alt=""
						width="50px"
						height="50px"
					/>
				</div>
				<div className="textarea-container">
					<textarea
						cols="80"
						rows="5"
						placeholder="发条友善的评论"
						className="ipt-txt"
					/>
					<button className="comment-submit">发表评论</button>
				</div>
				<div className="comment-emoji">
					<i className="face"></i>
				</div>
			</div>
			{/*评论列表*/}
			<div className="comment-list">
				{list.map((item, index) => (
					<div className="list-item" key={item.id}>
						<div className="user-face">
							<img
								className="user-head"
								src={pkq}
								alt=""
								width="50px"
								height="50px"
							/>
						</div>
						<div className="comment">
							<div className="user">{item.author}</div>
							<p className="text">{item.comment}</p>
							<div className="info">
								<span className="time">
									{formatTime(item.time)}
								</span>
								<span
									className={
										item.auttitude == 1
											? "like liked"
											: "like"
									}
								>
									<i
										className="icon"
										onClick={() => onClickLike(index, 1)}
									></i>
								</span>
								<span
									className={
										item.auttitude == -1
											? "hate hated"
											: "hate"
									}
								>
									<i
										className="icon"
										onClick={() => onClickLike(index, -1)}
									></i>
								</span>
								<span className="replybtn-hover">删除</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
