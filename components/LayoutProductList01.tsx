import { FC } from "react";
import { IProduct, Item } from "../src/interfaces";
import Link from "next/link";
import { useRouter } from 'next/router';

interface Props {
	products: IProduct[];
}

export const LayoutProductlist01: FC<Props> = ({ products }) => {
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

				<div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products.map((product, i) => (
						<div key={i} className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src={product.image[0]}
									alt={product.name}
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<Link
											href={`/detalles/${product.slug}`}
											// href={`/detail/${product.slug}`}

											passHref
											prefetch={false}
										>
											<a href="#">
												<span aria-hidden="true" className="absolute inset-0" />
												{product.name}
											</a>
										</Link>
									</h3>
									{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
								</div>
								<p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};