/** @format */

import React from "react";
import ContainerComponent from "../components/Container.component";
import { HomeProductsComponent } from "../components";

const HomePage = () => {
	return (
		<div className="  relative ">
			<img
				className=" w-full h-screen object-cover      bg-center mx-auto "
				src="../../image/hiro section 2.png"
				alt=""
			/>

			<ContainerComponent>
				<div className="flex flex-col absolute   top-36   gap-6">
					<div className="flex flex-col gap-4">
						<h1 className=" text-5xl font-semibold   w-6/12 ">Healthy Food</h1>
						<h1 className=" text-5xl font-semibold   w-6/12 ">and Salad</h1>
					</div>

					<p className=" text-gray-700    w-5/12 ">
						We provide essential nutrients, vitamins, and minerals that nourish
						the body and support overall well-being.
					</p>

					<div className="flex  gap-14 ">
						<div className="flex flex-col gap-1">
							<h1 className="text-xl">100%</h1>
							<h1 className="  font-bold  text-2xl">Oraganic</h1>
						</div>

						<div className="flex flex-col gap-1">
							<h1 className="text-xl">0%</h1>
							<h1 className="  font-bold  text-2xl">Fat</h1>
						</div>
						<div className="flex flex-col gap-1">
							<h1 className="text-xl">+90%</h1>
							<h1 className="  font-bold  text-2xl">Protein</h1>
						</div>
					</div>
				</div>
			</ContainerComponent>


			<HomeProductsComponent/>
			

		</div>
	);
};

export default HomePage;
