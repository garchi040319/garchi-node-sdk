import { GarchiCMSInitOptions } from "../types";
import Category from "./api-wrappers/Category";
import CompoundQuery from "./api-wrappers/CompoundQuery";
import DataItem from "./api-wrappers/DataItem";
import Headless from "./api-wrappers/Headless";
import Reaction from "./api-wrappers/Reaction";
import Review from "./api-wrappers/Review";
import Space from "./api-wrappers/Space";


class GarchiCMS {

    dataItem: DataItem
    category: Category
    space: Space
    review: Review
    headless: Headless
    reaction: Reaction
    compoundQuery: CompoundQuery
    
    constructor(options: GarchiCMSInitOptions) {
        this.dataItem = new DataItem(options)
        this.category = new Category(options)
        this.space = new Space(options)
        this.review = new Review(options)   
        this.headless = new Headless(options)
        this.reaction = new Reaction(options)
        this.compoundQuery = new CompoundQuery(options)
    }

    

    
}

export default GarchiCMS