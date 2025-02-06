
export interface PaginationLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    links: PaginationLinks;
    meta: PaginationMeta;
}

export interface GetPageParams {
    space_uid: string;         // UID of the space
    slug: string;              // Slug of the page
    lang?: string;             // Optional language code (default: en-US)
    mode?: "draft" | "live";   // Optional mode of the page
}


export type GarchiPage = {
    id: string
    title: string
    slug: string
    description: string
    sections: GarchiSection[]
}

// Property Type for Section Template
export type SectionPropType = "text" | "longtext" | "media" | "richtext" | "select";

// Property Interface for Section Template
export interface SectionTemplateProp {
  key: string;                        // Key of the property
  type: SectionPropType;              // Type of the property
  allowed_values?: string;            // Optional: Allowed values (required if type is 'select')
}

// Section Template Interface
export interface SectionTemplate {
  name: string;                       // Name of the section template
  description?: string;               // Optional: Description of the section template
  prev_name?: string;                 // Optional: Previous name (for updating existing templates)
  props?: SectionTemplateProp[];      // Optional: Array of properties for the section template
}

// API Request Body Interface
export interface CreateOrUpdateSectionTemplateParams {
  space_uid: string;                  // Unique identifier of the space
  section_templates: SectionTemplate[]; // Array of section templates to be created or updated
}


export type GarchiSection = {
    id: string;
    name: string;
    description?: string;
    props: {
        [key: string]: unknown;
    };
    children: GarchiSection[];
    order: number;
}


export type GarchiReviewCreate = {
    item_id: number;
    rating: number;
    review_body: string;
    user_email?: string;
    user_name?: string;
    parent_id?: number;
}

export type GarchiReviewUpdate = {
    review_id: number;
    review_body?: string;
    rating: number;
}


export type GarchiReactionCreate = {
    reaction: string;
    user_identifier: string;
    review_id?: number;
    item_id?: number;
    reaction_for: "review" | "item";
}

export type GarchiReaction = {
    reaction_id: string;
    reaction: string;
    user_identifier: string;
    created_at: string;
    updated_at: string;
}

export type GarchiReview = {
    review_id: number;
    review_body: string;
    rating: number;
    guest: null;
    user: {
        fname: string;
        lname: string;
    };
    item_id: number;
    reviewed_at: string;
    replies?: GarchiReview[];
    reactions?: GarchiReaction[];
}

export type GarchiCategory = {
    id: number;
    name: string;
}

export type GarchiAttributeOption = {
    id: number;
    name: string;
    price: number;
}

export type GarchiAttribute = {
    id: number;
    name: string;
    min: string;
    options: GarchiAttributeOption[];
}


export type GarchiSpace = {
    uid: string
    name: string
    logo_url?: string
    number_of_items: number
}

export type GarchiSpaceCreate = {
    name: string
    logo?: File
}

export type GarchiSpaceAPIResponse = PaginatedResponse<GarchiSpace>

export type GarchiItemMeta = {
    id?: number;
    key: string;
    value: string;
    type: string;
}

export type GarchiItem = {
    item_id: number;
    slug: string;
    sku?: string;
    name: string;
    stock?: number;
    categories: GarchiCategory[];
    price?: number;
    external_link?: string;
    scratched_price?: number | null;
    one_liner?: string;
    description?: string;
    delivery_type?: string;
    main_image?: string;
    other_images?: string[];
    attributes?: GarchiAttribute[];
    space?: GarchiSpace;
    avg_rating?: number | null;
    scheduled_for?: string | null;
    item_meta?: GarchiItemMeta[];
    reactions?: GarchiReaction[];
    created?: string;
    updated?: string;
}

export type GarchiItemAPIResponse = PaginatedResponse<GarchiItem>


export type GarchiCategoryAPIResponse = PaginatedResponse<GarchiCategory>


export type GarchiAsset = {
    id: string;
    path: string;
    size: string;
    type: string;
}


export type GarchiCMSInitOptions = {
    api_key?: string
    headers?: Record<string, string | number | boolean>;
}

export interface CreateDataItemParams {
    space_uid: string;
    name: string;
    categories: number[];
    sku?: string;
    stock?: number;
    price?: number;
    scratched_price?: number;
    detail_description?: string;
    external_url?: string;
    slug?: string;
}

export interface DeleteDataItemParams {
    item_id: number;
    space_uid: string;
}


export interface UpdateDataItemParams {
    item_id: number;
    space_uid: string;
    name?: string;
    sku?: string;
    stock?: number;
    categories?: number[];
    price?: number;
    scratched_price?: number;
    detail_description?: string;
    external_url?: string;
    make_public?: boolean;
    slug?: string;
}


export type MetaType = "string" | "array" | "url" | "object" | "numeric" | "email" | "date";

export interface MetaInfo {
    key: string;
    type: MetaType;
    value: string;
}

export interface CreateMetaInfoParams {
    item_id: number;
    meta: MetaInfo[];
}


export interface DeleteMetaInfoParams {
    meta_id: number;
    item_id: number;
    space_uid: string;
}


export interface UpdateMetaInfoParams {
    meta_id: number;
    item_id: number;
    key?: string;
    type?: MetaType;  // Already defined as allowed values: string, array, url, object, numeric, email, date
    value?: string;
}

export interface PaginateQueryParams {
    size?: number;  // Number of entries per page
    page?: number;  // Page number
}

export interface ItemsQueryParams extends PaginateQueryParams {
    order_key?: "name" | "price" | "created" | `meta.${string}`;  // Allowed ordering keys
    order_by?: "asc" | "desc";  // Sort order
    reactions?: "include" | "exclude";  // Include or exclude reactions
    description?: "include" | "exclude";  // Include or exclude markdown descriptions
}

export interface GetItemsBySpaceParams extends ItemsQueryParams {
    uid: string;  // Required URL parameter for space UID
}


export interface SemanticSearchParams {
    q: string;  // Required search query
    threshold?: number;  // Optional threshold between 0-1 (default 0.5)
    reactions?: "include" | "exclude";  // Include or exclude reactions
    description?: "include" | "exclude";  // Include or exclude markdown description
}

export interface GetFeaturedItemsParams {
    reactions?: "include" | "exclude";  // Include or exclude reactions
    description?: "include" | "exclude";  // Include or exclude markdown description
}

export interface GetItemParams {
    item: string | number;  // Required: ID or slug of the item
    reactions?: "include" | "exclude";  // Optional: Include or exclude reactions
}

export interface GetAllItemsParams extends ItemsQueryParams {
    search_keyword?: string;  // Optional: Name, slug, or category name
}


export interface FilterItemsBodyParams {
    spaces?: string[];  // Optional: Array of space UIDs
    categories?: number[];  // Optional: Array of category IDs
    priceOrder?: "low-high" | "high-low";  // Optional: Price sorting order
    size?: number;  // Optional: Size of the paginated data chunk
}

export interface FilterItemsParams {
    query?: ItemsQueryParams;  // Query parameters for ordering and reactions
    body: FilterItemsBodyParams;  // Body parameters for filtering by spaces, categories, etc.
}


export type MetaFilterOperator = "equals" | "in" | "like" | "gte" | "lte";

export interface MetaFilter {
    key: string;  // Required: Meta key to filter by
    value: string | number | (string | number)[];  // Required: Value(s) to match
    operator: MetaFilterOperator;  // Required: Operator for matching
}


export interface FilterItemsByMetaBodyParams {
    meta_filters: MetaFilter[];  // Required: Array of meta filters
}

export interface FilterItemsByMetaParams {
    query?: ItemsQueryParams;  // Optional query parameters
    body: FilterItemsByMetaBodyParams;  // Required body parameters
}

export interface GetItemsByIdsBodyParams {
    item_ids: (number | string)[];  // Required: List of item IDs to fetch
}

export interface GetItemsByIdsParams {
    query?: ItemsQueryParams;  // Optional query parameters
    body: GetItemsByIdsBodyParams;  // Required body parameters
}

export interface CreateCategoryParams {
    category: string
    space_uid: string
}

export interface DeleteCategoryParams {
    category_id: number
    space_uid: string
}

export interface UpdateCategoryParams extends CreateCategoryParams {
    category_id: number
}



// Allowed datasets
export type DatasetType = "items" | "categories" | "reviews";

// Allowed fields for each dataset
export type ItemFields = "item_id" | "name" | "slug" | "description" | "categories" | "ratings" | "price" | "created";
export type CategoryFields = "category_id" | "category_name";
export type ReviewFields = "review_id" | "item_id" | "rating" | "review" | "created";

// Allowed conditions
export type ConditionType = "eq" | "gte" | "lte" | "gt" | "lt" | "like" | "in" | "not_eq" | "not_in";

// Logic operators for conditions
export type LogicType = "and" | "or";


export interface CompoundQueryBody {
    dataset: DatasetType;       // Dataset to query (items, categories, reviews)
    fields: string[];           // Fields to filter on (must match allowed fields for the dataset)
    conditions: ConditionType[];// Conditions applied on fields (eq, gte, like, etc.)
    values: (string | number)[];// Values to match against the fields
    logic?: LogicType[];        // Logical operators to combine conditions (and/or)
  }