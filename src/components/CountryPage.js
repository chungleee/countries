import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import ky from "ky";

const CountryPage = ({ location, darkMode }) => {
	let code = location.state.alpha3Code;
	const [country, setCountry] = useState({});
	const [borderCountries, setBorderCountries] = useState([]);

	useEffect(() => {
		const getCountryByCode = async (code) => {
			const country = await ky
				// .get(`https://restcountries.com/v3.1/alpha/${code}`)
				.get(`https://restcountries.com/v2/alpha/${code}`)
				.json();

			setCountry(country);
			console.log("country", country);
		};

		setCountry(getCountryByCode(code));
	}, [code]);

	useEffect(() => {
		if (country?.borders) {
			const borderCountryCodes = country.borders;

			const getBorderCountries = async (codes) => {
				const promises = codes.map(async (code) => {
					return await ky
						.get(`https://restcountries.com/v2/alpha/${code}`)
						.json();
				});

				const responses = await Promise.all(promises);

				setBorderCountries(responses);
			};

			getBorderCountries(borderCountryCodes);
		}
	}, [country]);

	const {
		flag,
		name,
		nativeName,
		population,
		region,
		subregion,
		capital,
		topLevelDomain,
		currencies,
		languages,
	} = country;

	return (
		<div className='pt-8'>
			<Link
				className={`bg-white border-solid inline-flex mb-8 px-6 py-4 shadow ${
					darkMode ? "bg-darkBlue" : null
				}`}
				to='/'
			>
				<span className='mr-3'>
					<LeftArrowIcon />
				</span>
				Back
			</Link>

			{!Object.keys(country).length ? (
				<div>...Loading...</div>
			) : (
				<div className='py-8 md:flex md:items-center md:justify-between'>
					<div className='md:w-1/2'>
						<img src={flag} alt={`${name}'s flag`} />
					</div>
					<div className='md:w-1/2 md:pl-12'>
						<h1 className='font-bold my-6 text-xl'>{name}</h1>
						<div className='font-semibold leading-8 md:flex md:flex-col'>
							<div className='md:flex md:justify-between'>
								<div className='mb-6'>
									<p>
										Native Name:{" "}
										<span className='font-normal'>{nativeName}</span>
									</p>
									<p>
										Population:{" "}
										<span className='font-normal'>
											{Number(population).toLocaleString()}
										</span>
									</p>
									<p>
										Region: <span className='font-normal'>{region}</span>
									</p>
									<p>
										Sub Region: <span className='font-normal'>{subregion}</span>
									</p>
									<p>
										Capital: <span className='font-normal'>{capital}</span>
									</p>
								</div>
								<div className='mb-6'>
									<p>
										Top Level Domain:{" "}
										<span className='font-normal'>{topLevelDomain[0]}</span>
									</p>
									<p>
										Currencies:{" "}
										<span className='font-normal'>{currencies[0].code}</span>
									</p>
									<p>
										Languages:{" "}
										<span className='font-normal'>
											{languages
												.map((language) => {
													return language.name;
												})
												.join(", ")}
										</span>
									</p>
								</div>
							</div>
							<div>
								<h1 className='mb-4'>Border Countries:</h1>
								<ul className='flex flex-wrap'>
									{!borderCountries.length ? (
										<div>...Loading...</div>
									) : (
										borderCountries.map((country) => {
											return (
												<li
													className={`bg-white font-normal mr-4 mb-4 px-4 py-2 shadow ${
														darkMode ? "bg-darkBlue" : null
													}`}
												>
													<Link
														to={{
															pathname: `/country/${country.name}`,
															state: {
																alpha3Code: country.alpha3Code,
															},
														}}
													>
														{country.name}
													</Link>
												</li>
											);
										})
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountryPage;
