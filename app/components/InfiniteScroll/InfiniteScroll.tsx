import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getProducts } from '@/app/wf-api/ProductApi';
import { Row, Col } from 'antd';
import ProductCard from '../ProductCard/ProductCard';
import ProductLoading from '../ProductLoading/ProductLoading';

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12; // Adjust based on your needs

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts({});
        setItems(response?.data?.data);
        setDisplayedItems(response?.data?.data?.slice(0, itemsPerPage));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const fetchMoreData = () => {
    if (displayedItems.length >= items.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setDisplayedItems((prevItems) => [
        ...prevItems,
        ...items.slice(prevItems.length, prevItems.length + itemsPerPage),
      ]);
      setPage((prevPage) => prevPage + 1);
    }, 500);
  };
  return (
    <InfiniteScroll
    className='!w-full !overflow-hidden'
      dataLength={displayedItems.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<ProductLoading />}
      endMessage={<p style={{ textAlign: 'center' }}>No more product to load...</p>}
    >
      <Row gutter={[20, 20]} className="p-10">
        {
          displayedItems?.map((item: any, index) => {
            return <Col key={index} xs={24} sm={12} md={12} lg={8} xxl={8}>
              <ProductCard product={item} />
            </Col>
          })
        }
      </Row>
    </InfiniteScroll>
  );
};
export default InfiniteScrollComponent;