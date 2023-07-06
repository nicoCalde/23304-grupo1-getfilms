import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi';

const Catalog = () => {

  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'Péliculas' : 'Series'}
      </PageHeader>
    </>
  )
}

export default Catalog;