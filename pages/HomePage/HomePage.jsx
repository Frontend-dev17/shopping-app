// import "./HomePage.scss";

import { useState } from "react";
import styles from "../../styles/HomePage.module.css"

import Header from "../../components/Header/Header";
import ProductCard from "../../pages/ProductCard/ProductCard";

import SHOP_DATA from '../../components/ShopData/ShopData';
import Footer from "../../components/Footer/Footer";



const HomePage = () => {
    const [selectedOption, setSelectedOption] = useState("All")
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();

        // Filter the data based on the search query
        const filtered = SHOP_DATA.filter((section) => {
            return section.items.some((item) =>
                item.name.toLowerCase().includes(query)
            );
        });

        // Update the filtered data state
        setFilteredData(filtered);
        setSearchQuery(query);
    };


    return (
        <div className={styles.homepagecontainer}>
            <Header headerText="Discover" />
            <div className={styles.searchfiltersection}>
                <div className={styles.searchcontainer}>
                    <input type="search" placeholder="Search anything" value={searchQuery}
                        onChange={handleSearch} className={styles.searchbar} />
                    <span className={styles.searchicon}><img src="/SearchIcon.svg" alt="search-icon" /></span>
                </div>
                <span><img src="/FilterIcon.svg" alt="search-icon" /></span>
            </div>
            <div className={styles.categoryfilters}>
                <span
                    className={`${styles.filteroption} ${selectedOption === 'All' ? styles.selected : ''}`}
                    onClick={() => handleOptionClick('All')}
                >
                    All
                </span>
                <span
                    className={`${styles.filteroption} ${selectedOption === 'Men' ? styles.selected : ''}`}
                    onClick={() => handleOptionClick('Men')}
                >
                    Men
                </span>
                <span
                    className={`${styles.filteroption} ${selectedOption === 'Women' ? styles.selected : ''}`}
                    onClick={() => handleOptionClick('Women')}
                >
                    Women
                </span>
                <span
                    className={`${styles.filteroption} ${selectedOption === 'Kids' ? styles.selected : ''}`}
                    onClick={() => handleOptionClick('Kids')}
                >
                    Kids
                </span>
            </div>

            {selectedOption === 'All' &&
                <div className={styles.productlayout}>
                    {SHOP_DATA.map((section) => (
                        <div key={section.title}>
                            <div className={styles.productscontainer}>

                                {
                                    section.items.map((item) => (
                                        <ProductCard imageUrl={item.imageUrl}
                                            name={item.name}
                                            price={item.price}
                                            productId={item.id}
                                            key={item.id}
                                        />
                                    ))
                                }
                            </div>

                        </div>
                    ))}
                </div>
            }
            {selectedOption === 'Men' && (
                <div className={styles.productlayout}>
                    {SHOP_DATA.map((section) => {
                        if (section.title === 'Mens') {
                            return (
                                <div key={section.title}>
                                    <div className={styles.productscontainer}>
                                        {section.items.map((item) => (
                                            <ProductCard imageUrl={item.imageUrl}
                                                name={item.name}
                                                price={item.price}
                                                productId={item.id}
                                                key={item.id}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null; // Return null for other sections to skip them
                    })}
                </div>
            )}
            {selectedOption === 'Women' && (
                <div className={styles.productlayout}>
                    {SHOP_DATA.map((section) => {
                        if (section.title === 'Womens') {
                            return (
                                <div key={section.title}>
                                    <div className={styles.productscontainer}>
                                        {section.items.map((item) => (
                                            <ProductCard imageUrl={item.imageUrl}
                                                name={item.name}
                                                price={item.price}
                                                productId={item.id}
                                                key={item.id}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null; // Return null for other sections to skip them
                    })}
                </div>
            )}

            {selectedOption === 'Kids' && (
                <div className={styles.productlayout}>
                    {SHOP_DATA.map((section) => {
                        if (section.title === 'Kids') {
                            return (
                                <div key={section.title}>
                                    <div className={styles.productscontainer}>
                                        {section.items.map((item) => (
                                            <ProductCard imageUrl={item.imageUrl}
                                                name={item.name}
                                                price={item.price}
                                                productId={item.id}
                                                key={item.id}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null; // Return null for other sections to skip them
                    })}
                </div>
            )}


            <Footer />
        </div>
    )
}

export default HomePage