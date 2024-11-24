import { useParams } from 'react-router-dom';
import { Fragment, useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import './category.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';


const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products, setProducts ] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);

    }, [categoriesMap, category]);

    return(
        <Fragment>
             <h2 className='category-title'>{category.toUpperCase()}</h2>
             <div className='category-container'>
                {products && products.map((product) => <ProductCard  key={products.id} product={product} />)}
            </div>
        </Fragment>
          
    );
}

export default Category;