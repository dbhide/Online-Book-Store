import {deleteData, get, post} from "./HttpService";

export default class WishListService {

    async addToWishList(bookId) {
        return (await post(bookId, `wishlist/${bookId}`));
    }

    fetchWishList() {
        return (get(`wishlist/`));
    }
}
