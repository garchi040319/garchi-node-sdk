import { APIKEY, SPACEUID } from "../test_prepare";
import APIClient from "../services/APIClient";
import MockAdapter from "axios-mock-adapter";
import GarchiCMS from "../services/GarchiCMS";
import { 
  CreateCategoryParams, 
  DeleteCategoryParams, 
  UpdateCategoryParams, 
  GarchiCategory 
} from "../types";

const apiClientInstance = new APIClient({ api_key: APIKEY }).client;
const mock = new MockAdapter(apiClientInstance);
const client = new GarchiCMS({ api_key: APIKEY });

describe("Category API Wrapper", () => {
  afterEach(() => {
    mock.reset();
  });

  /** Test Create Category **/
  it("should create a category", async () => {
    const mockData = { data: { id: 1, name: "New Category" } };
    const params: CreateCategoryParams = {
      category: "New Category",
      space_uid: SPACEUID,
    };

    mock.onPost("/category").reply(201, mockData);

    const response = await client.category.create(params);
    expect(response).toEqual<GarchiCategory>({ id: 1, name: "New Category" });
  });

  /** Test Delete Category **/
  it("should delete a category and return success message", async () => {
    const mockData = { data: "Category deleted successfully" };
    const params: DeleteCategoryParams = { category_id: 1, space_uid: SPACEUID };

    mock.onPost(`/delete/category/${params.space_uid}/${params.category_id}`).reply(200, mockData);

    const response = await client.category.delete(params);
    expect(typeof response).toBe("string");
    expect(response).toContain("successfully");
  });

  /** Test Update Category **/
  it("should update a category and return success message", async () => {
    const mockData = { data: "Category updated successfully" };
    const params: UpdateCategoryParams = { category_id: 1, space_uid: SPACEUID, category: "Updated Category" };

    mock.onPost(`/update/category/${params.category_id}`).reply(200, mockData);

    const response = await client.category.update(params);
    expect(typeof response).toBe("string");
    expect(response).toContain("successfully");
  });

  /** Test Get All Categories **/
  it("should fetch all categories", async () => {
    const mockData = { data: [{ id: 1, name: "Category 1" }, { id: 2, name: "Category 2" }] };

    mock.onGet("/categories").reply(200, mockData);

    const response = await client.category.getAll();
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBe(2);
    expect(response[0]).toMatchObject<GarchiCategory[]>([{ id: 1, name: "Category 1" }]);
  });
});
