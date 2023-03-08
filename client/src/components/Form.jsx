import React from "react";
import Icon from "../assets/food.svg";
import {
	Box,
	Box2,
	Box3,
	I,
	Title,
	F,
	Tag,
	Data,
	Btn,
	InnerBox,
	InsideBox,
	BoxInfo,
	TitleInfo,
	TextInfo,
	Schedules,
	Separate2,
	Separate,
} from "../styles/styled.Form";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: true,
	mirror: true,
});

const Form = () => {
	return (
		<Box>
			<Box2 data-aos="fade-up">
				<I src={Icon} alt="icon" />
				<Title>Book a table</Title>
			</Box2>
			<Box3 data-aos="fade-up">
				<F action="/submit" method="POST">
					<InnerBox>
						<InsideBox>
							<Tag htmlFor="name">Name</Tag>
							<Data
								type="text"
								id="name"
								name="name"
								placeholder="Name"
								required
							/>
						</InsideBox>
						<InsideBox>
							<Tag htmlFor="last name">Last Name</Tag>
							<Data
								type="text"
								id="last name"
								name="last name"
								placeholder="Last Name"
								required
							/>
						</InsideBox>
					</InnerBox>
					<InnerBox>
						<InsideBox>
							<Tag htmlFor="phone">Phone</Tag>
							<Data
								type="text"
								id="phone"
								name="phone"
								placeholder="Phone"
								required
							/>
						</InsideBox>
						<InsideBox>
							<Tag htmlFor="email">Email</Tag>
							<Data
								type="text"
								id="email"
								name="email"
								placeholder="Email"
								required
							/>
						</InsideBox>
					</InnerBox>
					<InnerBox>
						<InsideBox>
							<Tag htmlFor="date">Date</Tag>
							<Data
								type="text"
								id="date"
								name="date"
								placeholder="MM-DD-YY"
								required
							/>
						</InsideBox>
						<InsideBox>
							<Tag htmlFor="time">Time</Tag>
							<Data
								type="text"
								id="time"
								name="time"
								placeholder="12:00 PM"
								required
							/>
						</InsideBox>
					</InnerBox>
					<InnerBox>
						<InsideBox>
							<Btn type="submit">Book a table</Btn>
						</InsideBox>
					</InnerBox>
				</F>
				<BoxInfo>
					<TitleInfo>Opening Hours</TitleInfo>
					<TextInfo>
						At our restaurant, we're always ready to welcome you with open arms.
						Our opening hours are very flexible, so we're sure you'll always
						find a time to come and visit us. Moreover, we have highly trained
						and friendly staff who are always willing to make your visit a
						unique experience.
					</TextInfo>
					<Schedules>
						<Separate>Monday - Friday</Separate>
						<Separate2>8AM - 6PM</Separate2>
					</Schedules>
					<Schedules>
						<Separate>Saturday</Separate> <Separate2>9AM - 5PM</Separate2>
					</Schedules>
					<Schedules>
						<Separate>Sunday</Separate> <Separate2>9AM - 4PM</Separate2>
					</Schedules>
				</BoxInfo>
			</Box3>
		</Box>
	);
};

export default Form;
