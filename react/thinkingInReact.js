class ProductCategoryRow extends React.Component {
    render() {

    }
}


class ProductRow extends React.Component {
    render() {

    }
}


class ProductTable extends React.Component {
    render() {

    }
}

class SearchBar extends React.Component {
    render() {

    }
}

class FilterableProductTable extends React.Component {
    render() {

    }
}

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

ReactDOM.render(
    <FilterableProductTable products={RPODUCTS} />,
    document.getElementById('container')
)