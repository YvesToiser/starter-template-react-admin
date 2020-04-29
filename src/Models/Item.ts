import {ItemCreated} from "./ItemCreated";

export class Item extends ItemCreated {
    _id: string;
    name: string;
    title: string;
    description: string;
    tag: string;
    misc: string;
    category: string;

    constructor() {
        super();
        this._id = "";
        this.name = "";
        this.title = "";
        this.description = "";
        this.tag = "";
        this.misc = "";
        this.category = "";
    }

    set(
        id: string,
        name: string,
        title: string,
        description: string,
        tag: string,
        misc: string,
        category: string
    ) {
        this._id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.tag = tag;
        this.misc = misc;
        this.category = category;
    }
}
