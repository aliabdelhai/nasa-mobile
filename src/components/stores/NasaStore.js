import { observable, action, makeObservable, computed } from 'mobx'
import axios from "axios";

export class NasaStore {
    constructor() {
        this.favs = []
        this.search = []

        makeObservable(this, {
            favs: observable,
            search: observable,
            addFavs: action,
            deleteFavs: action,
            getFavs: action,
            searchFor: action,
            addImageToFav: action,
            removeImageFromFav: action


        })
    }

    async deleteFavs(id) {
        await axios.delete(`/favourite/${id}`)
    }

    async addFavs(input) {
        await axios.post("/favourite", input)
    }

    async getFavs() {
        const favs = await axios.get('/favourites')
        this.favs = favs.data
        console.log(this.favs)
    }

    async searchFor(input) {
        let response = await axios.get(`https://images-api.nasa.gov/search?q=${input}&media_type=image`)
        response = response.data.collection.items.map(i => {
            return {
                title: i.data[0].title,
                imgUrl: i.links[0].href,
                explanation: i.data[0].description,
            }
        })
        this.search = response
    }

    async addImageToFav(fav) {
        this.favs.push(fav)
        await axios.post('/favourite', fav)
    }


    async removeImageFromFav(id) {
        const index = this.favs.findIndex(d => d._id === id)
        if (index !== -1) this.favs.splice(index, 1);
        await axios.delete(`/favourite/${id}`)
    }

}
