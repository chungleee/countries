import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import ky from "ky";
import { nanoid } from "nanoid";
import SearchBar from "./SearchBar";
import SelectDropdown from "./SelectDropdown";

const CountryList = ({ darkMode }) => {
	const [countries, setCountries] = useState([]);
	const [value, setValue] = useState("");
	const [region, setRegion] = useState("");

	const handleInputValue = (event) => {
		setValue(event.target.value);
	};

	const handleSelectByRegion = (event) => {
		setRegion(event.target.value);
	};

	useEffect(() => {
		const getCountries = async () => {
			const response = await ky
				// .get("https://restcountries.com/v3.1/all")
				.get("https://restcountries.com/v2/all")
				.json();
			console.log("response: ", response);
			setCountries(response);
		};

		getCountries();
	}, []);

	return (
		<div>
			<div className='pt-6 md:flex md:justify-between'>
				<SearchBar darkMode={darkMode} handleInputValue={handleInputValue} />
				<SelectDropdown
					darkMode={darkMode}
					handleSelectByRegion={handleSelectByRegion}
				/>
			</div>
			<div className='pb-4 pt-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4'>
				{!countries.length ? (
					<div>Loading...</div>
				) : (
					countries
						.filter((country) => {
							if (value.length) {
								return country.name.toLowerCase().includes(value.toLowerCase());
							} else if (region.length) {
								return country.region.includes(region);
							} else {
								return country;
							}
						})
						.map((country) => {
							let key = nanoid();
							return (
								<Link
									key={key}
									to={{
										pathname: `/country/${country.name}`,
										state: {
											alpha3Code: country.alpha3Code,
										},
									}}
								>
									<CountryCard
										darkMode={darkMode}
										capital={country.capital}
										flag={country.flag}
										name={country.name}
										population={country.population}
										region={country.region}
									/>
								</Link>
							);
						})
				)}
			</div>
		</div>
	);
};

export default CountryList;
