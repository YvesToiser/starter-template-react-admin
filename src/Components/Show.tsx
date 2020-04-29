import React from "react";
import axios from "axios";
import {Item} from "../Models/Item";
import {ShowOneItem} from "./ShowOneItem";
import {ApiUri} from "../Api/ApiUri";

interface IProps {
    clickModifyMain(item: Item): void;
    clickDeleteMain(item: Item): void;
    clickAddMain(): void;
}

interface IState {
    listOfItems: Item[];
}

export class Show extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            listOfItems: [],
        };
    }

    componentDidMount() {
        this.fetchItems();
    }

    public fetchItems() {
        const apiUrl: string = ApiUri.getItemsUri;
        console.log(apiUrl);
        axios.get(apiUrl).then((res) => {
            console.log(res.data);
            this.setState({
                listOfItems: res.data,
            });
        });
    }

    // Click events
    clickModifyMain = (item: Item) => {
        this.props.clickModifyMain(item);
    };

    clickDeleteMain = (item: Item) => {
        this.props.clickDeleteMain(item);
    };

    clickAdd = () => {
        this.props.clickAddMain();
    };

    // render
    renderAddButton() {
        const addButtonSrc = "./Resources/img/add.png";
        const addButtonClass = "addButton";
        return (
            <div className={addButtonClass}>
                <img
                    src={addButtonSrc}
                    className={addButtonClass}
                    onClick={this.clickAdd}
                    alt={"Add"}
                />
            </div>
        );
    }

    renderAllItems() {
        const listOfItemsToRender = [];
        for (const item of this.state.listOfItems) {
            // @ts-ignore
            listOfItemsToRender.push(
                <ShowOneItem
                    clickModifyParent={this.clickModifyMain}
                    clickDeleteParent={this.clickDeleteMain}
                    item={item}
                    key={item._id}
                />
            );
        }
        return listOfItemsToRender;
    }

    render() {
        return (
            <React.Fragment>
                {this.renderAddButton()}
                {this.renderAllItems()}
            </React.Fragment>
        );
    }
}
