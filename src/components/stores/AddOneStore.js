import { observable, makeObservable, action, computed } from 'mobx'

export class AddOneStore {

    constructor(title, imgUrl, description) {
        this.title = title
        this.imgUrl = imgUrl
        this.description= description

        makeObservable(this, {
            title: observable,
            imgUrl: observable,
            description: observable,
        })
    }

}