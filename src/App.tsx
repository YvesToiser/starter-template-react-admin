import React from "react";
import {Action} from "./Models/ActionEnum";
import {Show} from "./Components/Show";
import {Delete} from "./Components/Delete";
import {Create} from "./Components/Create";
import {Update} from "./Components/Update";
import "./Style/App.css";
import {Item} from "./Models/Item";

// tslint:disable-next-line:no-empty-interface
interface IProps {}

interface IState {
    action: string;
    selectedItemId: string;
    selectedItem: Item;
}

export class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            action: Action.READ,
            selectedItemId: "",
            selectedItem: new Item(),
        };
    }

    // tslint:disable-next-line:no-empty
    componentDidMount() {}

    // Page navigation
    goToModifyItem = (item: Item) => {
        this.setState({
            action: Action.UPDATE,
            selectedItemId: item._id,
            selectedItem: item,
        });
    };

    goToDeleteItem = (item: Item) => {
        this.setState({
            action: Action.DELETE,
            selectedItemId: item._id,
            selectedItem: item,
        });
    };

    goToCreateItem = () => {
        this.setState({
            action: Action.CREATE,
            selectedItemId: "",
            selectedItem: new Item(),
        });
    };

    goToShowAllItems = () => {
        this.setState({
            action: Action.READ,
            selectedItemId: "",
            selectedItem: new Item(),
        });
    };

    // Render
    renderShowAll() {
        return (
            <Show
                clickModifyMain={this.goToModifyItem}
                clickDeleteMain={this.goToDeleteItem}
                clickAddMain={this.goToCreateItem}
            />
        );
    }

    renderDelete() {
        console.log(this.state.selectedItemId);
        return (
            <Delete
                selectedItemId={this.state.selectedItemId}
                returnToShowAllParent={this.goToShowAllItems}
            />
        );
    }

    renderUpdate() {
        return <Update item={this.state.selectedItem} clickReturnParent={this.goToShowAllItems} />;
    }

    renderCreate() {
        return <Create clickReturnParent={this.goToShowAllItems} />;
    }

    renderContent() {
        switch (this.state.action) {
            case Action.READ:
                return this.renderShowAll();
            case Action.CREATE:
                return this.renderCreate();
            case Action.UPDATE:
                return this.renderUpdate();
            case Action.DELETE:
                return this.renderDelete();
        }
    }

    render() {
        return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
}
