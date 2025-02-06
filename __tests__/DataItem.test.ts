import { APIKEY, SPACEUID } from "../test_prepare";

import MockAdapter from "axios-mock-adapter";
import GarchiCMS from "../services/GarchiCMS";
import {
  CreateDataItemParams,
  DeleteDataItemParams,
  UpdateDataItemParams,
  CreateMetaInfoParams,
  DeleteMetaInfoParams,
  UpdateMetaInfoParams,
  GetItemsBySpaceParams,
  SemanticSearchParams,
  GetFeaturedItemsParams,
  GetItemParams,
  GetAllItemsParams,
  FilterItemsParams,
  FilterItemsByMetaParams,
  GetItemsByIdsParams,
  GarchiItem,
  GarchiItemAPIResponse,
} from "../types";
import APIClient from "../services/APIClient";

// Mocking axios
const apiClient = new APIClient ({ api_key: APIKEY }).client;
const mock = new MockAdapter(apiClient);
const client = new GarchiCMS({ api_key: APIKEY });

describe("DataItem API Wrapper", () => {
  afterEach(() => {
    mock.reset();
  });

  it("should create a data item", async () => {
    const mockData = { data: { item_id: 1, name: "Test Item", categories: [], description: "", slug: "test-item" } };
    const params: CreateDataItemParams = {
      space_uid: SPACEUID,
      name: "Test Item",
      categories: [228],
    };

    mock.onPost("/item").reply(201, mockData);

    const response = await client.dataItem.create(params);
    expect(response).toEqual(mockData.data);
  });

  it("should delete a data item", async () => {
    const mockData = { data: "Item deleted successfully" };
    const params: DeleteDataItemParams = { item_id: 1, space_uid: "space123" };

    mock.onPost("/delete/item").reply(200, mockData);

    const response = await client.dataItem.deleteItem(params);
    expect(response).toEqual("Item deleted successfully");
  });

  it("should update a data item", async () => {
    const mockData = { data: "Item updated successfully" };
    const params: UpdateDataItemParams = { item_id: 1, space_uid: "space123", name: "Updated Name" };

    mock.onPost("/update/item").reply(200, mockData);

    const response = await client.dataItem.update(params);
    expect(response).toEqual("Item updated successfully");
  });

  it("should create meta information", async () => {
    const mockData = { data: [{ key: "color", value: "blue", type: "string" }] };
    const params: CreateMetaInfoParams = { item_id: 1, meta: [{ key: "color", type: "string", value: "blue" }] };

    mock.onPost("/item_meta").reply(201, mockData);

    const response = await client.dataItem.createMetaInfo(params);
    expect(response).toEqual(mockData.data);
  });

  it("should delete meta information", async () => {
    const mockData = { data: "Meta info deleted successfully" };
    const params: DeleteMetaInfoParams = { meta_id: 1, item_id: 1, space_uid: "space123" };

    mock.onPost("/delete/item_meta").reply(200, mockData);

    const response = await client.dataItem.deleteMetaInfo(params);
    expect(response).toEqual("Meta info deleted successfully");
  });

  it("should update meta information", async () => {
    const mockData = { data: "Meta info updated successfully" };
    const params: UpdateMetaInfoParams = { meta_id: 1, item_id: 1, key: "color", value: "red" };

    mock.onPost("/update/item_meta").reply(200, mockData);

    const response = await client.dataItem.updateMetaInfo(params);
    expect(response).toEqual("Meta info updated successfully");
  });

  it("should get items by space", async () => {
    const mockData = { data: [{ item_id: 1, name: "Item 1" }] };
    const params: GetItemsBySpaceParams = { uid: "space123" };

    mock.onGet(`/space/${params.uid}/items`).reply(200, mockData);

    const response = await client.dataItem.getBySpace(params);
    expect(response).toEqual(mockData);
  });

  it("should perform semantic search", async () => {
    const mockData = { data: [{ item_id: 1, name: "Semantic Item" }] };
    const params: SemanticSearchParams = { q: "eco-friendly" };

    mock.onGet("/items/semantic-search").reply(200, mockData);

    const response = await client.dataItem.semanticSearch(params);
    expect(response).toEqual(mockData.data);
  });

  it("should get featured items", async () => {
    const mockData = { data: [{ item_id: 1, name: "Featured Item" }] };
    const params: GetFeaturedItemsParams = {};

    mock.onGet("/items/featured").reply(200, mockData);

    const response = await client.dataItem.featured(params);
    expect(response).toEqual(mockData);
  });

  it("should get a single item by ID", async () => {
    const mockData = { data: [{ item_id: 1, name: "Single Item" }] };
    const params: GetItemParams = { item: 1 };

    mock.onGet(`/item/${params.item}`).reply(200, mockData);

    const response = await client.dataItem.getItem(params);
    expect(response).toEqual(mockData.data[0]);
  });

  it("should get all items", async () => {
    const mockData = { data: [{ item_id: 1, name: "Item 1" }, { item_id: 2, name: "Item 2" }] };
    const params: GetAllItemsParams = {};

    mock.onGet("/items").reply(200, mockData);

    const response = await client.dataItem.getAll(params);
    expect(response).toEqual(mockData);
  });

  it("should filter items", async () => {
    const mockData = { data: [{ item_id: 1, name: "Filtered Item" }] };
    const params: FilterItemsParams = { body: { spaces: ["space123"] } };

    mock.onPost("/items/filter").reply(200, mockData);

    const response = await client.dataItem.filter(params);
    expect(response).toEqual(mockData.data);
  });

  it("should filter items by meta", async () => {
    const mockData = { data: [{ item_id: 1, name: "Meta Filtered Item" }] };
    const params: FilterItemsByMetaParams = { body: { meta_filters: [{ key: "color", value: "blue", operator: "equals" }] } };

    mock.onPost("/items/filter/bymeta").reply(200, mockData);

    const response = await client.dataItem.filterByMeta(params);
    expect(response).toEqual(mockData.data);
  });

  it("should get items by IDs", async () => {
    const mockData = { data: [{ item_id: 15, name: "Item 15" }, { item_id: 29, name: "Item 29" }] };
    const params: GetItemsByIdsParams = { body: { item_ids: [15, 29] } };

    mock.onPost("/items/byids").reply(200, mockData);

    const response = await client.dataItem.getByIds(params);
    expect(response).toEqual(mockData);
  });
});
