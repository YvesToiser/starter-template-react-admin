import React from "react";
import {ApiUri} from "../Api/ApiUri";
import axios from "axios";

interface IProps {
    selectedItemId: string;
    returnToShowAllParent(): void;
}

// tslint:disable-next-line:no-empty-interface
interface IState {}

export class Delete extends React.Component<IProps, IState> {
    returnToShowAll = () => {
        this.props.returnToShowAllParent();
    };

    confirmDelete(itemId: string) {
        const apiUrl: string = ApiUri.deleteItemUri(itemId);
        axios.delete(apiUrl).then((res) => {
            console.log(res.data);
            console.log("Delete item n° " + itemId + " confirmed.");
            this.returnToShowAll();
        });
    }
    cancelDelete(itemId: string) {
        console.log("Delete item n° " + itemId + " cancelled.");
        this.returnToShowAll();
    }

    render() {
        const deleteConfirmationClass: string = "deleteConfirmationPanel";
        const confirmClass: string = "confirmDeleteButton";
        const cancelClass: string = "cancelDeleteButton";
        const itemId: string = this.props.selectedItemId;
        console.log(itemId);
        return (
            <React.Fragment>
                <div id={deleteConfirmationClass}>
                    <div>Voulez-vous vraiment le supprimer?</div>
                    <button className={confirmClass} onClick={() => this.confirmDelete(itemId)}>
                        OUI
                    </button>
                    <button className={cancelClass} onClick={() => this.cancelDelete(itemId)}>
                        NON
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
