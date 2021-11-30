import React, { useState } from 'react';
import '../Styles/SignUp.css';
import { Link } from 'react-router-dom';
import image1 from '../Assets/3.jpeg';
import '../Styles/Sell.css';

const Sell = () => {
	const [image, setImage] = useState();
	const [name, setName] = useState();
	const [category, setCategory] = useState();
	const [price, setPrice] = useState();
	const [stock, setStock] = useState();
	const [fetching, setFetching] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();
		// change the button text from sell to Adding product
		setFetching(true);
		let formData = new FormData();
		formData.append('name', name);
		formData.append('category', category);
		formData.append('price', +price);
		formData.append('stock', +stock);
		formData.append('productImage', image);

		try {
			const response = await fetch(
				'http://localhost:5000/api/upload-product',
				{
					method: 'POST',
					body: formData,
					credentials: 'include',
				}
			);
			const data = await response.json();

			// change the button back to Add Product
			setFetching(false);

			if (!response.ok) {
				throw data;
			}

			setImage(null);
			setName('');
			setCategory(null);
			setPrice('');
			setStock('');
			alert(data.msg);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<section className="psect">
				<div className="ssmain">
					<div className="left">
						<img src={image1} alt="image" className="image" />
					</div>
					<div className="right">
						<div className="heading">
							<Link to="/" className="i">
								<h1 className="h">MARKET</h1>
							</Link>
						</div>
						<div className="intro">Welcome to Seller Portal</div>
						<div className="inp">
							<div className="linp">
								<form
									action="submit"
									className="sform"
									onSubmit={submitHandler}
								>
									<input
										type="text"
										placeholder="Product Name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
									<select
										type="text"
										placeholder="Category"
										className="uinp"
										value={category}
										onChange={(e) => setCategory(e.target.value)}
									>
										<option disabled selected>
											Category
										</option>
										<option>Sports</option>
										<option>Decoration</option>
										<option>Grocery</option>
										<option>Education</option>
									</select>
									<input
										type="text"
										placeholder="Base Price"
										value={price}
										onChange={(e) => setPrice(e.target.value)}
										required
									/>
									<input
										type="text"
										placeholder="Selling Stock"
										value={stock}
										onChange={(e) => setStock(e.target.value)}
										required
									/>
									<label for="simg" className="limg">
										Select Product Image
									</label>
									<input
										type="file"
										placeholder="Choose image"
										accept=".png, .jpg, .jpeg"
										required
										onChange={(e) => setImage(e.target.files[0])}
									/>
									<div className="button">
										<input
											type="submit"
											value={
												fetching
													? 'Adding Product...'
													: 'Add Product'
											}
											className={
												fetching ? 'signin disabled' : 'signin'
											}
											disabled={fetching}
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Sell;
