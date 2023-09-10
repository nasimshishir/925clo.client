

export const handleToggle = (stateManage: { state: boolean, setState: Function, data: {}, setData: Function }) => {
    stateManage.setState(!stateManage.state)
};

export const handleBack = (setStyleProfileformStep: Function, styleProfileformStep: number) => {
    if (styleProfileformStep > 0) {
        setStyleProfileformStep(styleProfileformStep - 1)
    } else {
        return;
    }
};

export const handleNext = (setStyleProfileformStep: Function, styleProfileformStep: number) => {
    setStyleProfileformStep(styleProfileformStep + 1)
};

export const wishListToggle = (setWishlistIsOpen: Function, wishlistIsOpen: boolean) => {
    setWishlistIsOpen(!wishlistIsOpen);
}