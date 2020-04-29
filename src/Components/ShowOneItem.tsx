import React from "react";
import {Item} from "../Models/Item";

interface IProps {
    item: Item;
    clickModifyParent(item: Item): void;
    clickDeleteParent(item: Item): void;
}

// tslint:disable-next-line:no-empty-interface
interface IState {}

export class ShowOneItem extends React.Component<IProps, IState> {
    // Click functions
    clickModify = () => {
        this.props.clickModifyParent(this.props.item);
    };

    clickDelete = () => {
        this.props.clickDeleteParent(this.props.item);
    };

    // Render functions
    renderItemQuestion() {
        const itemQuestionClassName = "itemQuestion";
        return <div className={itemQuestionClassName}>{this.props.item.name}</div>;
    }

    renderItemSolution() {
        const itemSolutionClassName = "itemSolution";
        return <div className={itemSolutionClassName}>{this.props.item.title}</div>;
    }

    renderItemWrongs() {
        const itemWrongsClassName = "itemWrongs";
        return (
            <React.Fragment>
                <div className={itemWrongsClassName}>{this.props.item.description}</div>
                <div className={itemWrongsClassName}>{this.props.item.tag}</div>
                <div className={itemWrongsClassName}>{this.props.item.misc}</div>
            </React.Fragment>
        );
    }

    renderItemCategory() {
        const itemCategoryClassName = "itemCategory";
        return <div className={itemCategoryClassName}>{this.props.item.category}</div>;
    }

    renderButtons() {
        const modifyButtonSrc = "./Resources/img/edit.png";
        const deleteButtonSrc = "./Resources/img/delete.png";
        const buttonClassName = "itemButtons";
        const modifyButtonClassName = "itemButtons itemButtonModify";
        const deleteButtonClassName = "itemButtons itemButtonDelete";
        return (
            <div className={buttonClassName}>
                <img
                    className={modifyButtonClassName}
                    src={modifyButtonSrc}
                    onClick={this.clickModify}
                    alt="modify"
                />
                <img
                    className={deleteButtonClassName}
                    src={deleteButtonSrc}
                    onClick={this.clickDelete}
                    alt="delete"
                />
            </div>
        );
    }

    // THE RENDER
    render() {
        const itemClassName = "item";
        return (
            <React.Fragment>
                <div className={itemClassName}>
                    {this.renderButtons()}
                    {this.renderItemQuestion()}
                    {this.renderItemSolution()}
                    {this.renderItemWrongs()}
                    {this.renderItemCategory()}
                </div>
            </React.Fragment>
        );
    }
}
