import React, {ChangeEvent, FormEvent} from "react";
import {Item} from "../Models/Item";
import {ApiUri} from "../Api/ApiUri";
import axios from "axios";

interface IProps {
    item: Item;
    clickReturnParent(): void;
}

interface IState {
    item: Item;
}

export class Update extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            item: this.props.item,
        };
    }

    clickSave = () => {
        this.saveItem();
        console.log("Item n°" + this.props.item._id + " updated successfully");
        this.props.clickReturnParent();
    };

    clickDiscard = () => {
        console.log("Item n°" + this.props.item._id + " modification cancelled");
        this.props.clickReturnParent();
    };

    saveItem() {
        const apiUrl: string = ApiUri.updateItemUri(this.props.item._id);
        axios.put(apiUrl, this.state.item).then((res) => {
            console.log(res.data);
            console.log("Update item n° " + this.props.item._id + " confirmed.");
        });
    }

    // CHANGE HANDLERS
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    changeQuestionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const item: Item = this.state.item;
        item.name = e.target.value;
        this.setState({
            item,
        });
    };

    changeCategoryHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const item: Item = this.state.item;
        item.category = e.target.value;
        this.setState({
            item,
        });
    };

    changeSolutionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const item: Item = this.state.item;
        item.title = e.target.value;
        this.setState({
            item,
        });
    };

    changeWrongAnswer1Handler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const item: Item = this.state.item;
        item.description = e.target.value;
        this.setState({
            item,
        });
    };

    changeWrongAnswer2Handler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const item: Item = this.state.item;
        item.tag = e.target.value;
        this.setState({
            item,
        });
    };

    changeWrongAnswer3Handler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const item: Item = this.state.item;
        item.misc = e.target.value;
        this.setState({
            item,
        });
    };

    // RENDER
    renderName() {
        const questionForm: string = "questionForm";
        return (
            <div id={questionForm}>
                <div className="rowTitle">Nom : </div>
                <form id={questionForm} onSubmit={this.handleSubmit}>
                    <textarea
                        id={questionForm}
                        name="name"
                        rows={2}
                        cols={60}
                        value={this.state.item.name}
                        onChange={this.changeQuestionHandler}
                    />
                </form>
            </div>
        );
    }

    renderTitle() {
        const solutionForm: string = "solutionForm";
        return (
            <div id={solutionForm}>
                <div className="rowTitle">Titre : </div>
                <form id={solutionForm} onSubmit={this.handleSubmit}>
                    <textarea
                        id={solutionForm}
                        name="title"
                        rows={2}
                        cols={20}
                        value={this.state.item.title}
                        onChange={this.changeSolutionHandler}
                    />
                </form>
            </div>
        );
    }

    renderDescription() {
        const wrongsForm: string = "wrongsForm";
        return (
            <div id={wrongsForm}>
                <div className="rowTitle">Description : </div>
                <form id={wrongsForm} onSubmit={this.handleSubmit}>
                    <textarea
                        id={wrongsForm}
                        name="description"
                        rows={2}
                        cols={20}
                        value={this.state.item.description}
                        onChange={this.changeWrongAnswer1Handler}
                    />
                    <textarea
                        id={wrongsForm}
                        name="tag"
                        rows={2}
                        cols={20}
                        value={this.state.item.tag}
                        onChange={this.changeWrongAnswer2Handler}
                    />
                    <textarea
                        id={wrongsForm}
                        name="misc"
                        rows={2}
                        cols={20}
                        value={this.state.item.misc}
                        onChange={this.changeWrongAnswer3Handler}
                    />
                </form>
            </div>
        );
    }

    renderCategory() {
        const categoryForm: string = "categoryForm";
        // TODO pick from existing categories or add new category
        return (
            <div id={categoryForm}>
                <div className="rowTitle">Catégorie : </div>
                <form id={categoryForm} onSubmit={this.handleSubmit}>
                    <input
                        id={categoryForm}
                        type="text"
                        name="category"
                        value={this.state.item.category}
                        onChange={this.changeCategoryHandler}
                    />
                </form>
            </div>
        );
    }

    renderButtons() {
        const saveButtonSrc = "./Resources/img/save.png";
        const discardButtonSrc = "./Resources/img/cancel.png";
        const buttonClassName = "createButtons";
        const saveButtonClassName = "createButtons itemButtonSave";
        const discardButtonClassName = "createButtons itemButtonDiscard";
        return (
            <div className={buttonClassName}>
                <img
                    className={saveButtonClassName}
                    src={saveButtonSrc}
                    onClick={this.clickSave}
                    alt="Save"
                />
                <img
                    className={discardButtonClassName}
                    src={discardButtonSrc}
                    onClick={this.clickDiscard}
                    alt="Discard"
                />
            </div>
        );
    }

    render() {
        const creationForm: string = "creationForm";
        return (
            <div id={creationForm}>
                {this.renderName()}
                {this.renderTitle()}
                {this.renderDescription()}
                {this.renderCategory()}
                {this.renderButtons()}
            </div>
        );
    }
}
