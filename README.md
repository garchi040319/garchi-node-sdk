# GarchiCMS SDK

GarchiCMS SDK is a TypeScript library for interacting with the Garchi CMS API. It provides a simple, modular, and intuitive interface for managing categories, data items, reviews, reactions, spaces, and more.

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
npm install garchi-sdk-node
```

## Usage

### Importing the SDK

```typescript
import GarchiCMS from 'garchi-sdk-node';
```

### Initializing the Client

```typescript
const client = new GarchiCMS({ api_key: 'YOUR_API_KEY' });
```

## API Wrappers

### Data Item API

#### Create a Data Item

```typescript
const newItem = await client.dataItem.create({
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
import { GarchiItem, GarchiCategory, GarchiReview } from 'garchi-sdk-node/types';
```

## Contributing

Feel free to submit issues and pull requests to improve the SDK.

## License

This project is licensed under the MIT License.

