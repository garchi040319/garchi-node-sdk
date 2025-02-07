## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [GarchiCMS SDK](#garchicms-sdk)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Importing the SDK](#importing-the-sdk)
  - [Initializing the Client](#initializing-the-client)
  - [Module mapping](#module-mapping)
- [Example usages](#example-usages)
  - [Data item API](#data-item-api)
    - [Create a Data Item](#create-a-data-item)
    - [Get All Items](#get-all-items)
  - [Category API](#category-api)
    - [Create a Category](#create-a-category)
    - [Get All Categories](#get-all-categories)
  - [Review API](#review-api)
    - [Create a Review](#create-a-review)
  - [Reaction API](#reaction-api)
    - [Add or Update Reaction](#add-or-update-reaction)
  - [Space API](#space-api)
    - [Create a Space](#create-a-space)
  - [Compound Query API](#compound-query-api)
    - [Perform a Compound Query](#perform-a-compound-query)
  - [Headless CMS API](#headless-cms-api)
    - [Get a Page](#get-a-page)
- [Error Handling](#error-handling)
- [Types and Interfaces](#types-and-interfaces)
- [Contributing](#contributing)
- [License](#license)

## GarchiCMS SDK

GarchiCMS SDK is a TypeScript library for interacting with the Garchi CMS API. It provides a simple, modular, and intuitive interface for managing categories, data items, reviews, reactions, spaces, and headless web APIs.

You can find the API documentation [here](https://garchi.co.uk/docs/v2)


## Features

- Manage **Data Items**: Create, update, delete, and fetch data items.
- Handle **Categories**: Create, update, delete, and list categories.
- Manage **Spaces**: Create, update, and fetch spaces.
- Handle **Reviews**: Create, update, delete, and fetch reviews.
- Manage **Reactions**: Add or remove reactions for items or reviews.
- Perform **Compound Queries**: Execute complex queries across items, categories, and reviews.
- Work with **Headless CMS**: Manage assets, pages, and section templates.

## Installation

```bash
npm install @garchicms/garchi-node-sdk
```

## Usage

This SDK is a wrapper around the [Garchi CMS API](https://garchi.co.uk/docs/v2). providing easy-to-use modular functions that map directly to API endpoints.





### Importing the SDK

```typescript
import GarchiCMS from '@garchicms/garchi-node-sdk';
```

### Initializing the Client

```typescript
const garchi = new GarchiCMS({ api_key: 'YOUR_API_KEY' });
```

### Module mapping

Each module corresponds to a specific API group:

- garchi.dataItem → Data Item/Items API
  - garchi.dataItem.create() corresponds to [Create data item API](https://garchi.co.uk/docs/v2#item-POSTapi-v2-item)
  - garchi.dataItem.update() corresponds to [Update data item API](https://garchi.co.uk/docs/v2#item-POSTapi-v2-update-item)
  - garchi.dataItem.delete() corresponds to [Delete data item API](https://garchi.co.uk/docs/v2#item-POSTapi-v2-delete-item)
  - garchi.dataItem.createMetaInfo() corresponds to [Create meta info for item API](https://garchi.co.uk/docs/v2#item-POSTapi-v2-item_meta)
  - garchi.dataItem.deleteMetaInfo() corresponds to [Delete meta info for item API](https://garchi.co.uk/docs/v2#item-POSTapi-v2-delete-item_meta)
  - garchi.dataItem.updateMetaInfo() corresponds to [Update meta info for item API](https://garchi.co.uk/docs/v2#item-POSTapi-v2-update-item_meta)
  - garchi.dataItem.getBySpace() corresponds to [Get items by space API](https://garchi.co.uk/docs/v2#item-GETapi-v2-space--uid--items)
  - garchi.dataItem.semanticSearch() corresponds to [Semantic item search API](https://garchi.co.uk/docs/v2#item-GETapi-v2-items-semantic-search)
  - garchi.dataItem.featured() corresponds to [Get featured items API](https://garchi.co.uk/docs/v2#item-GETapi-v2-items-featured)
  - garchi.dataItem.get() corresponds to [Get data item API](https://garchi.co.uk/docs/v2#item-GETapi-v2-item--item-)
  - garchi.dataItem.getAll() corresponds to [Get all data items API](https://garchi.co.uk/docs/v2#item-GETapi-v2-items)
  - garchi.dataItem.filter() corresponds to [Filter data items API](https://garchi.co.uk/docs/v2#item-POSTapi-v2-items-filter)
  - garchi.dataItem.filterByMeta() corresponds to [Filter data items by meta information API](https://garchi.co.uk/docs/v2#item-POSTapi-v2-items-filter-bymeta)
  - garchi.dataItem.getByIds() corresponds to [Get data items by IDs API](https://garchi.co.uk/docs/v2#item-POSTapi-v2-items-byids) 
  
  
- garchi.category → Category API
  - garchi.category.create() corresponds to [Create cateogry API](https://garchi.co.uk/docs/v2#category-POSTapi-v2-category)
  - garchi.category.update() corresponds to [Update category API](https://garchi.co.uk/docs/v2#category-POSTapi-v2-update-category--category_id-)
  - garchi.category.delete() corresponds to [Delete category API](https://garchi.co.uk/docs/v2#category-POSTapi-v2-delete-category--space_uid---category_id-)
  - garchi.category.getAll() corresponds to [Get all categories API](https://garchi.co.uk/docs/v2#category-GETapi-v2-categories)


- garchi.space → Space API
  - garchi.space.create() corresponds to [Create a space API](https://garchi.co.uk/docs/v2#spaces-POSTapi-v2-space)
  - garchi.space.update() corresponds to [Update a space API](https://garchi.co.uk/docs/v2#spaces-POSTapi-v2-update-space--uid-)
  - garchi.space.delete() corresponds to [Delete a space API](https://garchi.co.uk/docs/v2#spaces-POSTapi-v2-delete-space--uid-)
  - garchi.space.getAll() corresponds to [Get all spaces API](https://garchi.co.uk/docs/v2#spaces-GETapi-v2-spaces)
  - garchi.space.get() corresponds to [Get space details API](https://garchi.co.uk/docs/v2#spaces-GETapi-v2-space--uid-)
  - garchi.space.categories() corresponds to [Get categories for space API](https://garchi.co.uk/docs/v2#category-GETapi-v2-space--uid--categories)


- garchi.review → Review API
  - garchi.review.create() corresponds to [Create a review API](https://garchi.co.uk/docs/v2#reviews-POSTapi-v2-reviews-item)
  - garchi.review.update() corresponds to [Update review API](https://garchi.co.uk/docs/v2#reviews-POSTapi-v2-reviews-edit)
  - garchi.review.delete() corresponds to [Delete review API](https://garchi.co.uk/docs/v2#reviews-POSTapi-v2-reviews-delete) 
  - garchi.review.getByItem() corresponds to [Get reviews for an item API](https://garchi.co.uk/docs/v2#reviews-GETapi-v2-reviews-item--item-)


- garchi.headless → Headless API
  - garchi.headless.getAsset() corresponds to [Get asset file for space API](https://garchi.co.uk/docs/v2#headless-web-GETapi-v2-space-assets--name-)
  - garchi.headless.getPage() corresponds to [Get page content API](https://garchi.co.uk/docs/v2#headless-web-POSTapi-v2-page)
  - garchi.headless.createOrUpdateSectionTemplates() corresponds to [Create or update section templates API](https://garchi.co.uk/docs/v2#headless-web-POSTapi-v2-section_template)


- garchi.reaction → Reaction API
  - garchi.reaction.manage() corresponds to [Reaction API](https://garchi.co.uk/docs/v2#reaction-POSTapi-v2-manage-reaction)
  

- garchi.compoundQuery → Compound Query API
  - garchi.compoundQuery.query() corresponds to [Compound query API](https://garchi.co.uk/docs/v2#compound-query-POSTapi-v2-compound_query)


Each module return values corresponds to the return value of the respective API Endpoint. The only difference being the excluding the paginated API endpoints, each module return value can be accessed without the `.data` attribute. 

## Example usages

Here are some example usages

### Data item API

#### Create a Data Item

```typescript
const newItem = await garchi.dataItem.create({
  space_uid: 'your_space_uid',
  name: 'New Item',
  categories: [1, 2, 3],
});
```

#### Get All Items

```typescript
const items = await client.dataItem.getAll({ size: 10 });
```

### Category API

#### Create a Category

```typescript
const newCategory = await client.category.create({
  category: 'New Category',
  space_uid: 'your_space_uid'
});
```

#### Get All Categories

```typescript
const categories = await client.category.getAll();
```

### Review API

#### Create a Review

```typescript
const review = await client.review.create({
  item_id: 1,
  rating: 5,
  review_body: 'Excellent product!',
  user_email: 'user@example.com',
  user_name: 'John Doe'
});
```

### Reaction API

#### Add or Update Reaction

```typescript
const reaction = await client.reaction.manage({
  reaction: 'like',
  user_identifier: 'user@example.com',
  review_id: 1,
  item_id: 1,
  reaction_for: 'review'
});
```

### Space API

#### Create a Space

```typescript
const newSpace = await client.space.create({
  name: 'New Space',
  logo: yourLogoFile
});
```

### Compound Query API

#### Perform a Compound Query

```typescript
const queryResult = await client.compoundQuery.query({
  dataset: 'items',
  fields: ['name', 'price'],
  conditions: ['like', 'gte'],
  values: ['%item%', '10'],
  logic: ['and']
}, { order_key: 'name', order_by: 'asc' });
```

### Headless CMS API

#### Get a Page

```typescript
const page = await client.headless.getPage({
  space_uid: 'your_space_uid',
  slug: '/',
  lang: 'en-US',
  mode: 'live'
});
```

## Error Handling

All API calls return promises and throw errors if the API call fails.

```typescript
try {
  const item = await client.dataItem.getItem({ item: 1 });
  console.log(item);
} catch (error) {
  console.error('Error:', error);
}
```

## Types and Interfaces

The SDK exports types and interfaces for better TypeScript support.

```typescript
import { GarchiItem, GarchiCategory, GarchiReview } from '@garchicms/garchi-sdk-node';
```

## Contributing

Feel free to submit issues and pull requests to improve the SDK.

## License

This project is licensed under the MIT License.

