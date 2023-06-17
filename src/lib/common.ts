export const handleToggle = (stateManage: { state: boolean, setState: Function, data: {}, setData: Function }) => {
    stateManage.setState(!stateManage.state)
}