import React, {ChangeEvent, FormEvent} from "react";
import {ApiUri} from "../Api/ApiUri";
import axios from "axios";
import {ItemCreated} from "../Models/ItemCreated";

interface IProps {
    clickReturnParent(): void;
}

interface IState {
    item: ItemCreated;
}

export class Create extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            item: new ItemCreated(),
        };
    }

    clickSave = () => {
        this.saveItem();
        console.log("Item created successfully");
        this.props.clickReturnParent();
    };

    clickDiscard = () => {
        console.log("Item creation cancelled");
        this.props.clickReturnParent();
    };

    saveItem() {
        const apiUrl: string = ApiUri.postItemUri;
        console.log(apiUrl);
        axios.post(apiUrl, this.state.item).then((res) => {
            console.log(res.data);
        });
    }

    // CHANGE HANDLERS
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    changeNameHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const question: ItemCreated = this.state.item;
        question.name = e.target.value;
        this.setState({
            item: question,
        });
    };

    changeCategoryHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const question: ItemCreated = this.state.item;
        question.category = e.target.value;
        this.setState({
            item: question,
        });
    };

    changeTitleHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const question: ItemCreated = this.state.item;
        question.title = e.target.value;
        this.setState({
            item: question,
        });
    };

    changeDescriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const question: ItemCreated = this.state.item;
        question.description = e.target.value;
        this.setState({
            item: question,
        });
    };

    changeTagHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const question: ItemCreated = this.state.item;
        question.tag = e.target.value;
        this.setState({
            item: question,
        });
    };

    changeMiscHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const question: ItemCreated = this.state.item;
        question.misc = e.target.value;
        this.setState({
            item: question,
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
                        onChange={this.changeNameHandler}
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
                        onChange={this.changeTitleHandler}
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
                        onChange={this.changeDescriptionHandler}
                    />
                    <textarea
                        id={wrongsForm}
                        name="tag"
                        rows={2}
                        cols={20}
                        value={this.state.item.tag}
                        onChange={this.changeTagHandler}
                    />
                    <textarea
                        id={wrongsForm}
                        name="misc"
                        rows={2}
                        cols={20}
                        value={this.state.item.misc}
                        onChange={this.changeMiscHandler}
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
