import React from "react";
import "M:/CP-3/soiltoseed/src/css/card.css";
import "M:/CP-3/soiltoseed/src/js/cardviewjs.js";
function Cardview() {
	return (
		<div>
			<div className="container">
				<h3 className="title"> organic products </h3>

				<div className="products-container">
					<div className="product" data-name="p-1">
						<img src="images/1.png" alt="" />
						<h3>strawberries</h3>
						<div className="price">$2.00</div>
					</div>

					<div className="product" data-name="p-2">
						<img src="images/2.png" alt="" />
						<h3>onions</h3>
						<div className="price">$2.00</div>
					</div>

					<div className="product" data-name="p-3">
						<img src="images/3.png" alt="" />
						<h3>tomatoes</h3>
						<div className="price">$2.00</div>
					</div>

					<div className="product" data-name="p-4">
						<img src="images/4.png" alt="" />
						<h3>brinjal</h3>
						<div className="price">$2.00</div>
					</div>

					<div className="product" data-name="p-5">
						<img src="images/5.png" alt="" />
						<h3>broccoli</h3>
						<div className="price">$2.00</div>
					</div>

					<div className="product" data-name="p-6">
						<img src="images/6.png" alt="" />
						<h3>potatoes</h3>
						<div className="price">$2.00</div>
					</div>
				</div>
			</div>

			<div className="products-preview">
				<div className="preview" data-target="p-1">
					<i className="fas fa-times"></i>
					<img src="images/1.png" alt="" />
					<h3>organic strawberries</h3>
					<div className="stars">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star-half-alt"></i>
						<span>( 250 )</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, dolorem.
					</p>
					<div className="price">$2.00</div>
					<div className="buttons">
						<a href="/" className="buy">
							buy now
						</a>
						<a href="/" className="cart">
							add to cart
						</a>
					</div>
				</div>

				<div className="preview" data-target="p-2">
					<i className="fas fa-times"></i>
					<img src="images/2.png" alt="" />
					<h3>organic onions</h3>
					<div className="stars">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star-half-alt"></i>
						<span>( 250 )</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, dolorem.
					</p>
					<div className="price">$2.00</div>
					<div className="buttons">
						<a href="/" className="buy">
							buy now
						</a>
						<a href="/" className="cart">
							add to cart
						</a>
					</div>
				</div>

				<div className="preview" data-target="p-3">
					<i className="fas fa-times"></i>
					<img src="images/3.png" alt="" />
					<h3>organic tomatoes</h3>
					<div className="stars">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star-half-alt"></i>
						<span>( 250 )</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, dolorem.
					</p>
					<div className="price">$2.00</div>
					<div className="buttons">
						<a href="/" className="buy">
							buy now
						</a>
						<a href="/" className="cart">
							add to cart
						</a>
					</div>
				</div>

				<div className="preview" data-target="p-4">
					<i className="fas fa-times"></i>
					<img src="images/4.png" alt="" />
					<h3>organic brinjal</h3>
					<div className="stars">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star-half-alt"></i>
						<span>( 250 )</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, dolorem.
					</p>
					<div className="price">$2.00</div>
					<div className="buttons">
						<a href="/" className="buy">
							buy now
						</a>
						<a href="/" className="cart">
							add to cart
						</a>
					</div>
				</div>

				<div className="preview" data-target="p-5">
					<i className="fas fa-times"></i>
					<img src="images/5.png" alt="" />
					<h3>organic broccoli</h3>
					<div className="stars">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star-half-alt"></i>
						<span>( 250 )</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, dolorem.
					</p>
					<div className="price">$2.00</div>
					<div className="buttons">
						<a href="/" className="buy">
							buy now
						</a>
						<a href="/" className="cart">
							add to cart
						</a>
					</div>
				</div>

				<div className="preview" data-target="p-6">
					<i className="fas fa-times"></i>
					<img src="images/6.png" alt="" />
					<h3>organic potatoes</h3>
					<div className="stars">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star-half-alt"></i>
						<span>( 250 )</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, dolorem.
					</p>
					<div className="price">$2.00</div>
					<div className="buttons">
						<a href="/" className="buy">
							buy now
						</a>
						<a href="/" className="cart">
							add to cart
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cardview;
