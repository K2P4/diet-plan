/** @format */

import React from "react";
import ContainerComponent from "../Container.component";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuUserCircle2 } from "react-icons/lu";
import { LuBellRing } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const NavComponent = () => {
	return (
		<div className=" border-b border-[#FBFBFB] ">
			<ContainerComponent>
				<div className="flex py-4 bg-[#FBFBFB]  items-center justify-between">
					<h1 className="  font-semibold ">DIET PLAN</h1>

					<div className="flex items-center gap-8">
						<ul className="flex items-center gap-8 ">
							<NavLink to="/" activeClassName="active">
								<li className=" active:  font-semibold ">Home</li>
							</NavLink>

							<NavLink to="/products" activeClassName="active">
								<li className=" active:font-semibold   hover:font-medium duration-500  transition-transform   ">
									Products
								</li>
							</NavLink>

							<NavLink to="/about" activeClassName="active">
								<li className=" active:  hover:font-medium duration-500  transition-transform  ">
									About Us
								</li>
							</NavLink>

							<NavLink to="/contact" activeClassName="active">
								<li className=" active:  hover:font-medium duration-500  transition-transform  ">
									Contact Us
								</li>
							</NavLink>
						</ul>

						<div className="flex items-center gap-8">
							<LuBellRing className=" w-5 h-5" />
							<LuUserCircle2 className=" w-5 h-5" />

							<AiOutlineShoppingCart className=" w-5 h-5" />
						</div>
					</div>
				</div>
			</ContainerComponent>
		</div>
	);
};

export default NavComponent;
