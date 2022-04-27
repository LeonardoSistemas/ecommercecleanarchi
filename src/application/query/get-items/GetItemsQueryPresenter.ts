import GetItemOutput from "./GetItemOutput";

export default interface GetItemsQueryPresenter {
    present(getItemsOutput: GetItemOutput[]) : void;
}