/** @format */

import React from "react";
import ContainerComponent from "./Container.component";
import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useGetApiQuery } from "../service/endpoints/DietEndPoint";
import RatingComponent from "./Rating.component";

const HomeProductsComponent = () => {
	const { data, isLoading } = useGetApiQuery();
	const stars = Array.from({ length: 5 }, (_, index) => index);

	return (
		<div className="w-full  my-40 h-auto  ">
			<ContainerComponent>
				<div className="flex  mb-28 items-center justify-between ">
					<div className="flex flex-col gap-5">
						<h1 className="  border-s-2 border-black  text-5xl font-semibold   w-8/12  ">
							Products and Services{" "}
						</h1>

						<p className="text-gray-700    w-7/12 ">
							We offers a wide range of high-quality products and services
							tailored to meet the diverse needs and preferences of our
							customers.
						</p>
					</div>

					<Button className=" bg-black  px-6 py-6 ">See More</Button>
				</div>

				<div className="">
					{data ? (
						<div className="flex items-center gap-5 flex-wrap">
							{data?.map((item) => (
								<Card
									key={item?.id}
									className="bg-black mb-20 relative w-[32%]">
									<img
										src={item?.image}
										alt=""
										className="absolute object-center left-4   w-44 h-44  -top-20 "
									/>

									{item?.status && (
										<Button className=" float-end bg-[#484848] me-6 mt-6  text-xs tracking-wide ">
											HOT ITEM
										</Button>
									)}
									<CardHeader className="flex flex-col gap-3 mt-20 ">
										<CardTitle className="text-white">{item?.name}</CardTitle>
										<RatingComponent rating={item?.rating} stars={stars} />
										<CardDescription className="text-gray-400 tracking-wide w-10/12">
											{item?.description}
										</CardDescription>
									</CardHeader>

									<CardContent className="flex items-center text-white justify-between">
										<p>${item?.price}</p>

										<p>
											+{item?.available}{" "}
											<span className="text-sm">Available</span>
										</p>
									</CardContent>
									<CardFooter>
										<Button className="bg-white active:scale-90 hover:bg-slate-100 duration-500  text-black font-semibold w-full rounded-md">
											Add to cart
										</Button>
									</CardFooter>
								</Card>
							))}
						</div>
					) : (
						<h1>Loading</h1>
					)}
				</div>
			</ContainerComponent>
		</div>
	);
};

export default HomeProductsComponent;
