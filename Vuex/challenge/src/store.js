import { createStore } from 'vuex';

const authModule = {
  state: {
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
};

const productModule = {
  state: {
    products: [
      {
        id: 'p1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
        title: 'Book Collection',
        description:
          'A collection of must-read books. All-time classics included!',
        price: 99.99,
      },
      {
        id: 'p2',
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
        title: 'Mountain Tent',
        description: 'A tent for the ambitious outdoor tourist.',
        price: 129.99,
      },
      {
        id: 'p3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
        title: 'Food Box',
        description:
          'May be partially expired when it arrives but at least it is cheap!',
        price: 6.99,
      },
    ],
  },
};

const cartModule = {
  state: {
    cart: { items: [], total: 0, qty: 0 },
  },
  mutations: {
    addProductToCart(state, productData) {
      console.log('haha');

      const productInCartIndex = state.cart.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += productData.price;
    },
    removeProductFromCart(state, prodId) {
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    },
  },
};

const store = createStore({
  modules: {
    auth: authModule,
    product: productModule,
    cart: cartModule,
  },
});

export default store;
