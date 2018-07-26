import { observable, action } from 'mobx'

class PhoneBookStore {

    isLoading = observable([0]);

    listApi = observable([])

    list = observable([
        {
            index: 0,
            name: "s5",
            numbers: "0124453324",
            avatar_url: "https://static-cdn.jtvnw.net/emoticons/v1/798274/3.0"
        },
        {
            index: 1,
            name: "donger",
            numbers: "0114467024",
            avatar_url: "https://pbs.twimg.com/profile_images/1000303810642837504/LQmBgJmU_400x400.jpg"
        },
        {
            index: 2,
            name: "singsong",
            numbers: "0556252023",
            avatar_url: "https://static-cdn.jtvnw.net/emoticons/v1/70144/3.0"
        },
        {
            index: 3,
            name: "dendi",
            numbers: "0934410574",
            avatar_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1b/1bb540e84a0ff4925668f7bb748cf705c080a059_full.jpg"
        },
        {
            index: 4,
            name: "miracle",
            numbers: "0124835884",
            avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cq9WlnulqzvTHiRuJNtZVNN8YF0dfiecPglFGfoQkiakdxtK"
        },
    ])

    deleteItem = action((id) => {
        this.listApi = this.listApi.filter(listItem => listItem.id != id);
    })

    async getMoviesFromApi() {
        try {
            let response = await fetch(
                'https://api.github.com/search/repositories?q=language:swift&per_page=5'
            );
            let responseJson = await response.json();
            
            this.listApi.replace(responseJson.items);
            this.isLoading[0] = 1;
            console.log("Done");
        } catch (error) {
            console.error(error);
        }
    }
}

const phoneBookStore = new PhoneBookStore();

export default phoneBookStore;