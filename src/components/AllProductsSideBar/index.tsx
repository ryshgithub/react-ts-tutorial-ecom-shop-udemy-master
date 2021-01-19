import React from 'react';
import { ProductFilters } from '../../store/reducers/shopReducer';
import Checkbox from '../../ui-components/Checkbox';
import { upperCaseFirstLetter } from '../../utils/helper';
import { ProductFiltersProps } from './interface';
import './style.css';

export const AllProductsSideBar: React.FC<ProductFiltersProps> = ({ productFilters }) => {

    const handleFilterChange = (value: boolean) => {

    }

    const renderFilters = () => {
        return Object.keys(productFilters).map(filterCategory => {
            const filterValues = productFilters[filterCategory as keyof ProductFilters];

            return (
                <div className="product-filter">
                    <p>{upperCaseFirstLetter(filterCategory)}</p>
                    {filterValues.map(filterValue => {
                        return (
                            <div className="filter-checkbox">
                                <Checkbox onChange={handleFilterChange}>{filterValue}</Checkbox>
                            </div>
                        )
                    })}
                </div>
            )
        })
    }

    return (
        <div className="all-products-side-bar">
            {renderFilters()}
        </div>
    )
}