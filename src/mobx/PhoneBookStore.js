import { observable, action } from 'mobx'

class PhoneBookStore {

  @observable list = [
    {
        name: "s4",
        numbers: "0124453324",
        avatar_url: "https://static-cdn.jtvnw.net/emoticons/v1/798274/3.0"
    },
    {
        name: "donger",
        numbers: "0114467024",
        avatar_url: "https://pbs.twimg.com/profile_images/1000303810642837504/LQmBgJmU_400x400.jpg"
    },
    {
        name: "singsong",
        numbers: "0556252023",
        avatar_url: "https://static-cdn.jtvnw.net/emoticons/v1/70144/3.0"
    },
    {
        name: "dendi",
        numbers: "0934410574",
        avatar_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1b/1bb540e84a0ff4925668f7bb748cf705c080a059_full.jpg"
    },
    {
        name: "miracle",
        numbers: "0124835884",
        avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cq9WlnulqzvTHiRuJNtZVNN8YF0dfiecPglFGfoQkiakdxtK"
    },
]

  @action finishItem (index) {
    const copiedList = this.list.slice()
    const isFinished = copiedList[index].isFinished
    if (isFinished) return

    copiedList[index].isFinished = true
    this.list = copiedList // update store by re-assigning
  }

  @action deleteItem (index) {
    this.list = this.list.filter((item, i) => i != index)
  }
}

const phoneBookStore = new PhoneBookStore();
export default phoneBookStore;