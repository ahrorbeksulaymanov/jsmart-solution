import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';
import { usePagination } from '../hooks/usePagination';

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a onClick={(e) => e.preventDefault()} className='flex items-center gap-2 !text-tx-primary'>
    <ArrowLeftIcon />
    Oldingi
    </a>;
  }
  if (type === 'next') {
    return <a onClick={(e) => e.preventDefault()} className='flex items-center gap-2 !text-tx-primary'>
        Keyingi
        <ArrowRightIcon />
        </a>;
  }
  return originalElement;
};

const CustomPagination: React.FC<{total: number | undefined}> = ({total = 100}) => {

    const { page, limit, setPagination } = usePagination();

    return (
        <div className='m-[10px] custom-pagination-wrapper'>
            <Pagination
                total={total}
                current={page}
                pageSize={limit}
                onChange={(p, l) => setPagination(p, l)}
                itemRender={itemRender}
                showQuickJumper={false}
                showSizeChanger={false}
            />
        </div>
    )
};

export default CustomPagination;