import Ember from 'ember';
import LineItem from 'emberPlayground/models/line-item';
import Order from 'emberPlayground/models/order';
import Product from 'emberPlayground/models/product';

const products = [
	Product.Create({ title: 'Tent', price: 10, description: ''}),
	Product.Create({ title: 'Sleeping Bag', price: 5, description: ''}),
	Product.Create({ title: 'Flashlight', price: 2, description: ''}),
	Product.Create({ title: 'First Aid Kit', price: 3, description: ''})
];

const orders = [
	Order.Create({ id: '1234', name: 'Blaise Blobfish', items: [
			LineItem.Create({ product: products[0], quantity: 2}),
			LineItem.Create({ product: products[1], quantity: 2}),
			LineItem.Create({ product: products[2], quantity: 1}),
			LineItem.Create({ product: products[3], quantity: 1})
		]}),
	Order.Create({ id: '1235', name: 'Jimmy Longstockings', items: [
			LineItem.Create({ product: products[1], quantity: 2}),
			LineItem.Create({ product: products[3], quantity: 2})
		]})
];

export default Ember.Service.extend({
	getOrderById(id) {
		return orders.findBy('id', id);
	}
	},
	getOrders() {
		return orders;
	},
	getProducts() { return products; }
});
