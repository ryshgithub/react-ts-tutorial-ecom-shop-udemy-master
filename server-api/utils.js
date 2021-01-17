const hasProductInCategory = (inputCategory, productCategories) => {
    const inputCategoryArr = typeof inputCategory === 'string' ? [inputCategory] : inputCategory;
    const inputCategoryArrLowerCase = inputCategoryArr.toString().toLowerCase().split(',');
    let hasSameCategory = false;
    productCategories.forEach((productCategory) => {
        
    })

    for(productCategory of productCategories) {
        if(inputCategoryArrLowerCase.includes(productCategory.toLowerCase())) {
            hasSameCategory = true;
            break;
        }
    }

    return hasSameCategory;
}

module.exports = {
    hasProductInCategory
}
