import React, { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <a href="/news/item-1">NextJS Is A Great Framework</a>
        </li>
        <li>
          <Link href="/news/item-2">Something Else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
