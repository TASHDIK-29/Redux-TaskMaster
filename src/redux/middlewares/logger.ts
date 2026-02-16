const logger = (state) => (next) => (action) =>{ // Function Curring
    console.log(state.getState());
    console.log(action);

    return next(action);
}

export default logger;